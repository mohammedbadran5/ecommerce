import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import "./Cards.css";
import productsData from "./DisplayProducts/Datajson";
import Modal from './Modal';

function Cards() {
    const randomProducts = getRandomProducts(4); // Display 4 cards
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const handleAddToCartClick = (product) => {
        // Redirect to the item description page when clicking the basket icon
        navigate(`/Display/${product.category}/${encodeURIComponent(product.name)}`);
    };

    const handleEyeClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <section className="cards">
                {randomProducts.map((product, index) => (
                    <div key={index} className="card">
                        <Link to={`/Display/${product.category}/${encodeURIComponent(product.name)}`} className="card-content">
                            <img src={product.url} alt={product.name} />
                            <p>{product.category}</p>
                            <h1>{product.name}</h1>
                            <p>{product.cost}</p>
                        </Link>
                        <div className="icon-container">
                            <RiShoppingBasketLine
                                className="add-to-cart-icon"
                                onClick={() => handleAddToCartClick(product)}
                            />
                            <FaEye
                                className="view-details-icon"
                                onClick={() => handleEyeClick(product)}
                            />
                        </div>
                    </div>
                ))}
            </section>
            
            {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}

            {/* Success message popup */}
            {successMessage && (
                <div className="success-popup-container">
                    <div className="success-overlay" />
                    <div className="success-popup">
                        {successMessage}
                    </div>
                </div>
            )}
        </div>
    );
}

// Helper function to get a specified number of random products
const getRandomProducts = (count) => {
    const categories = Object.keys(productsData);
    let allProducts = [];

    // Combine products from all categories
    categories.forEach(category => {
        const products = productsData[category].map(product => ({ ...product, category }));
        allProducts = [...allProducts, ...products];
    });

    // Shuffle the products array
    const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

    // Return the first 'count' products from the shuffled array
    return shuffledProducts.slice(0, count);
};

export default Cards;
