// Products.jsx
import React from "react";
import Navbar from "./Navbar";
import "./product.css";
import ProductsBox from "./Products-box";

function Products() {
    return (
        <div className="products-page">
            <Navbar />
            <ProductsBox />
        </div>
    );
}

export default Products;
