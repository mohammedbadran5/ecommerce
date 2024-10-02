import React from "react";
import "./displayproduct.css"; // Create a CSS file for styling
import productsData from "./Datajson";

const CategoriesPage = ({ category }) => {
  const products = productsData[category.toLowerCase()];

  return (
    <div className="categories-page">
      <h1>{category} Products</h1>
      <div className="products-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.cost}</p>
            {/* You can add an <img> tag for the product image here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
