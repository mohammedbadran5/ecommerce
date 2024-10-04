// ItemDescribtion.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../DisplayProducts/Datajson';
import './ItemDescribtion.css';
import Featuressection from './Featuressection';
import Related from './Related';

const ItemDescribtion = () => {
    const { category, itemName } = useParams();
    const products = productsData[category.toLowerCase()] || [];
    const product = products.find(prod => prod.name === decodeURIComponent(itemName));

    if (!product) {
        return <p>Product not found!</p>;
    }

    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate = useNavigate();

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Check if the product with the same name already exists in the cart
        const existingCartItemIndex = cartItems.findIndex((item) => item.product.name === product.name);
    
        if (existingCartItemIndex !== -1) {
            // If the product exists, update the quantity of the existing product
            cartItems[existingCartItemIndex].quantity += quantity;
        } else {
            // If the product is new, add it to the cart
            cartItems.push({ product, quantity });
        }
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert("The item has been added to the cart!");
        setAddedToCart(true);
    };
    

    const handleCheckCart = () => {
        navigate('../DisplayProductInfo/cart'); // Navigate to the Cart page without passing state
    };

    return (
        <div className="item-detail">
            <div className="item-container">
                <div className="item-image">
                    <img src={product.url} alt={product.name} />
                </div>
                <div className="item-content">
                    <h1>{product.name}</h1>
                    <h3>
                        {product.cost} <span style={{ fontWeight: 100, fontSize: 16 }}>{"& Free Shipping"}</span>
                    </h3>
                    <p>Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.</p>
                    
                   <div className="actions-container">
    <div className="quantity-control">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
    </div>

    <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
        {addedToCart && <span style={{ marginLeft: '5px', color: 'black', marginLeft: 20,}}>✔</span>}
    </button>

    {addedToCart && (
        <div className="check-cart">
            <button className="checkbutton" onClick={handleCheckCart}>Check Your Cart</button>
        </div>
    )}
</div>

                </div>
            </div>

            <Featuressection />
            <Related />
        </div>
    );
};

export default ItemDescribtion;
