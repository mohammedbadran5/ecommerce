import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri"; // Import shopping basket icon
import { FaEye } from "react-icons/fa"; // Import eye icon
import Modal from "../Modal"
import "./Related.css"; // Ensure this path is correct
import productsData from "../DisplayProducts/Datajson";
import live1 from "../DisplayProducts/images/live1.png";
import live2 from "../DisplayProducts/images/live2.png";
import live3 from "../DisplayProducts/images/live3.png";

const relatedProducts = [
    {
        name: "Brown Living Room Sofa",
        category: "Living Room",
        cost: "$1,200.00",
        url: live1,
    },
    {
        name: "Brown Living Room Sofa",
        category: "Living Room",
        cost: "$1,200.00",
        url: live2,
    },
    {
        name: "Brown Living Room Sofa",
        category: "Home Office",
        cost: "$1,200.00",
        url: live3,
    },
];

function Related() {
    const randomProducts = getRandomProducts(4); // Display 4 cards
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);

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
            <h1>Related Products</h1>
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

            {/* Show the Modal for viewing details of the selected product */}
            {selectedProduct && (
                <Modal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
}

const getRandomProducts = (count) => {
    const categories = Object.keys(productsData);
    const selectedProducts = new Set();

    while (selectedProducts.size < count) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const products = productsData[category];

        if (products.length > 0) {
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            selectedProducts.add({ ...randomProduct, category });
        }
    }

    return Array.from(selectedProducts);
};

export default Related;
