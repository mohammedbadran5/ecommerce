// CartPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import productsData from '../DisplayProducts/Datajson';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate(); // Initialize navigate
    

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    const handleQuantityChange = (product, newQuantity) => {
        const updatedCartItems = [...cartItems];
        const existingItemIndex = updatedCartItems.findIndex((item) => item.product.id === product.id);
    
        if (existingItemIndex !== -1) {
            updatedCartItems[existingItemIndex].quantity = Math.max(1, newQuantity);
        } else {
            updatedCartItems.push({ product, quantity: newQuantity });
        }
    
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleDeleteItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleCheckout = () => {
        navigate('/CheckOut', { state: { cartItems } }); // Pass cartItems to the Checkout route
    };

    if (cartItems.length === 0) {
        return <p>No items in the cart!</p>;
    }

    const calculateTotalCost = (cost, quantity) => {
        const costNumber = parseFloat(cost.replace(/[$]/, '')) || 0;
        return (costNumber * quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <div className="carttable">
                <h1>Cart</h1>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Thumbnail Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((cartItem, index) => {
                            const { product, quantity } = cartItem;
                            const totalCost = calculateTotalCost(product.cost, quantity);

                            const handleDecrease = () => handleQuantityChange(index, quantity - 1);
                            const handleIncrease = () => handleQuantityChange(index, quantity + 1);

                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={product.url} alt={product.name} className="thumbnail" />
                                    </td>
                                    <td style={{ fontWeight: 'bold' }}>{product.name}</td>
                                    <td style={{ color: '#6c6c6c', fontWeight: 400 }}>${parseFloat(product.cost.replace(/[$]/, '')).toFixed(2)}</td>
                                    <td>
                                        <div className="quantity-control">
                                            <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={handleIncrease}>+</button>
                                        </div>
                                    </td>
                                    <td style={{ color: '#6c6c6c', fontWeight: 400 }}>${totalCost}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => handleDeleteItem(index)} style={{ cursor: 'pointer', color: 'black', fontSize: 18, fontWeight: 400, color: '#6c6c6c' }} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button className='checkoutbutton' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartPage;
