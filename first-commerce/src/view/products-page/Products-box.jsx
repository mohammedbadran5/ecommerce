import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Products-box.css";
import productsData from "../DisplayProducts/Datajson";
import Leftwindow from './Left-window'; // Import Leftwindow component
import { VscSettings } from "react-icons/vsc";

function ProductsBox() {
    const [isLeftWindowOpen, setLeftWindowOpen] = useState(false); // State to control Leftwindow visibility

    const toggleLeftWindow = () => {
        setLeftWindowOpen(!isLeftWindowOpen); // Toggle Leftwindow visibility
    };

    // Function to get 2 products from each category
    const getProductsFromEachCategory = () => {
        const selectedProducts = [];
        for (const category in productsData) {
            const products = productsData[category].slice(0, 2);
            selectedProducts.push(...products);
        }
        return selectedProducts;
    };

    const productsToDisplay = getProductsFromEachCategory(); // Get products to display

    return (
        <div className="products-box">
            <div className="upper-part">
                <button onClick={toggleLeftWindow}>
                    <VscSettings style={{ marginRight: '5px' }} /> {/* Optional: Add margin for spacing */}
                    Options
                </button>
                <p>Showing {productsToDisplay.length} results</p>
            </div>


            <div className="cards">
                {productsToDisplay.map((product, index) => (
                    <Link to={`/Display/${product.categorie}/${encodeURIComponent(product.name)}`} key={index} className="item">
                        <img src={product.url} alt={product.name} />
                        <p>{product.categorie}</p>
                        <h1>{product.name}</h1>
                        <p>{product.cost}</p>
                    </Link>
                ))}
            </div>

            {isLeftWindowOpen && <Leftwindow onClose={toggleLeftWindow} />}
        </div>
    );
}

export default ProductsBox;
