import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { RiShoppingBasketLine } from "react-icons/ri"; // Import the shopping basket icon
import { FaEye } from "react-icons/fa"; // Import the eye icon
import "./BestSelling.css"; // CSS file for styling
import productsData from "./DisplayProducts/Datajson"; // Your product data
import Modal from './Modal'; // Import your modal component

function Bestselling() {
    const steadyProducts = getSteadyProducts(8); // Get 8 steady products
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const handleBasketIconClick = (product) => {
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
            <div className="bestselling-container">
                <div className="header">
                    <div className="left-part2">
                        <p>BEST SELLER</p>
                        <h1 style={{ fontSize: 45 }}>Discover Our Most Selling Products</h1>
                    </div>
                    <div className="right-part2">
                        <button>VIEW ALL BEST SELLER</button>
                    </div>
                </div>
                <section className="cards">
                    {steadyProducts.map((product, index) => (
                        <div key={index} className="card">
                            <Link to={`/Display/${product.category}/${encodeURIComponent(product.name)}`} className="card-content">
                                <img src={product.url} alt={product.name} />
                                <p>{product.category}</p>
                                <h1>{product.name}</h1>
                                <p>{product.cost}</p>
                            </Link>
                            <div className="icon-container"> {/* Container for icons */}
                                <RiShoppingBasketLine
                                    className="add-to-cart-icon"
                                    onClick={() => handleBasketIconClick(product)}
                                />
                                <FaEye
                                    className="view-details-icon"
                                    onClick={() => handleEyeClick(product)}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                {/* Modal for viewing product details */}
                {selectedProduct && (
                    <Modal product={selectedProduct} onClose={handleCloseModal} />
                )}
            </div>

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

// Helper function to get a specified number of steady products
const getSteadyProducts = (count) => {
    const categories = Object.keys(productsData);
    const selectedProducts = [];

    // Loop through categories to collect a fixed number of products
    for (const category of categories) {
        const products = productsData[category];
        for (const product of products) {
            if (selectedProducts.length < count) {
                selectedProducts.push({ ...product, category }); // Include category in each product
            } else {
                break; // Stop once we reach the desired count
            }
        }
        if (selectedProducts.length >= count) break; // Stop iterating if we've collected enough products
    }

    return selectedProducts; // Return the array of selected products
};

export default Bestselling;
