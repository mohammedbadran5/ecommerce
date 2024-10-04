import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [loading, setLoading] = useState(true); // Initially true to show spinner
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a 2-second delay before showing the modal
        const timer = setTimeout(() => {
            setLoading(false); // Hide spinner and show modal after 2 seconds
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer when component unmounts
    }, []);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, { product, quantity }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        alert("The item has been added to cart!");
        setAddedToCart(true);
    };

    if (loading) {
        // Show the loading spinner when loading is true
        return (
            <div className="spinner-container">
                <img src="https://i.imgur.com/llF5iyg.gif" alt="Loading..." />
            </div>
        );
    }

    // Show modal content after loading spinner disappears
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button style={{color:'black'}} className="close-modal" onClick={onClose}>X</button>

                <div className="modal-content1">
                    <div className="item-detail1">
                        <div className="item-container1">
                            <div className="item-image1">
                                <img src={product.url} alt={product.name} />
                            </div>
                            <div className="item-content1">
                                <h1>{product.name}</h1>
                                <h3>
                                    {product.cost} <span style={{ fontWeight: 100, fontSize: 16 }}>{"& Free Shipping"}</span>
                                </h3>
                                <p>Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.</p>

                                <div className="quantity-control">
                                    <button onClick={handleDecrease}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={handleIncrease}>+</button>
                                </div>

                                <button className="add-to-cart" onClick={handleAddToCart}>
                                    Add to Cart 
                                    {addedToCart && <span style={{ marginLeft: '5px', color: 'black', marginLeft: 20 }}>✔</span>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
