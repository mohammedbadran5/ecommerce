import React from "react";
import "./window.css";
import { IoCloseSharp } from "react-icons/io5";

function Window({ cartItems, onClose, handleQuantityChange, handleRemoveItem }) {
    // Function to calculate the total price for each item based on quantity
    const calculateTotalPrice = (cost, quantity) => {
        const costNumber = parseFloat(cost.replace(/[$]/, '')) || 0;
        return (costNumber * quantity).toFixed(2);
    };

    const handleContinueShopping = () => {
        window.location.href = "http://localhost:5173/Products"; // Navigate to Products page
    };

    return (
        <div className="window">
            <div className="window-top">
                <h4>Shopping Cart</h4>
                <IoCloseSharp onClick={onClose} style={{ cursor: 'pointer', color: 'black', fontSize: '24px' }} />
            </div>
            <div className="window-middle">
                {cartItems.length > 0 ? (
                    <ul className="cart-items-list">
                        {cartItems.map((item, index) => {
                            const { product, quantity } = item;
                            const totalPrice = calculateTotalPrice(product.cost, quantity);

                            const handleDecrease = () => handleQuantityChange(index, quantity - 1);
                            const handleIncrease = () => handleQuantityChange(index, quantity + 1);

                            return (
                                <li key={index} className="cart-item">
                                    <img src={product.url} alt={product.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h4>{product.name}</h4>
                                        <p>${totalPrice} Total</p>
                                        <div className="quantity-control">
                                            <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={handleIncrease}>+</button>
                                        </div>
                                    </div>
                                    {/* Close icon to remove product */}
                                    <IoCloseSharp onClick={() => handleRemoveItem(index)} style={{ cursor: 'pointer', color: 'black', fontSize: '24px' }} />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <h3>No products in the cart.</h3>
                )}
            </div>
            <div className="window-bottom">
                <button onClick={handleContinueShopping}>Continue Shopping</button>
            </div>
        </div>
    );
}

export default Window;
