// CartPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css'; // Import your CSS file for styling
import Navbar from '../products-page/Navbar';

const CartPage = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Retrieve product from the location state

    // Load the cart from localStorage or initialize it as an empty array
    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        return storedCart;
    });

    // Update cart when a product is added
    useEffect(() => {
        if (product) {
            const updatedCart = [...cart];
            const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);

            if (existingProductIndex >= 0) {
                // If the product already exists in the cart, increment the quantity by 1
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                // Add the new product to the cart with quantity 1
                updatedCart.push({ ...product, quantity: 1 });
            }

            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the cart to localStorage
        }
    }, [product]); // Run this effect when a new product is added

    // Display message if cart is empty
    if (cart.length === 0) {
        return (
            <>
                <Navbar />
                <p>No items in the cart!</p>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1>Cart</h1>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Thumbnail Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const totalCost = (item.cost * item.quantity).toFixed(2);
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.url} alt={item.name} className="thumbnail" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${product.cost}</td>
                                    <td>{item.quantity}</td>
                                    <td>${totalCost}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CartPage;
