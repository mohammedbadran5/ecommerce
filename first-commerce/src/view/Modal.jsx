import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

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

    // Function to handle navigation to the cart
  

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
                                    {addedToCart && <span style={{ marginLeft: '5px', color: 'black',marginLeft:20 }}>✔</span>}
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