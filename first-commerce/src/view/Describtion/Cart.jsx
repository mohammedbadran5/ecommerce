// CartPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../DisplayProducts/Datajson';
import './Cart.css'; // Import your CSS file for styling
import Navbar from '../products-page/Navbar';

const CartPage = () => {
    const location = useLocation();
    const { product, quantity } = location.state || {}; // Retrieve product and quantity from the location state

    if (!product) {
        return <p>No items in the cart!</p>;
    }

    // Calculate total cost for display in the cart
    const totalCost = (product.cost * quantity).toFixed(2); // Assuming product.cost is a number

    return (
        <Navbar />,
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
                    <tr>
                        <td>
                            <img src={product.url} alt={product.name} className="thumbnail" />
                        </td>
                        <td>{product.name}</td>
                        <td>${product.cost}</td>
                        <td>{quantity}</td>
                        <td>${totalCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CartPage;
