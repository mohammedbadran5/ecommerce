import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link
import productsData from './Datajson';
import Window from "../products-page/Left-window";
import './CategoriesPage.css';
import { VscSettings } from "react-icons/vsc";


const CategoriesPage = ({ category }) => {
  const products = productsData[category.toLowerCase()] || [];
  const [isWindowOpen, setIsWindowOpen] = useState(false); // State to manage the Window visibility

  const toggleWindow = () => {
    setIsWindowOpen(!isWindowOpen); // Toggle the visibility of the Window
  };

  const closeWindow = () => {
    setIsWindowOpen(false); // Close the Window
  };

  return (
    <div className="products-box">
      <div className="upper-part">
        <h1 style={{ color:'black',fontWeight:100 }}>{category}</h1>
        <button onClick={toggleWindow}>
                    <VscSettings style={{ marginRight: '5px' }} /> {/* Optional: Add margin for spacing */}
                    Options
                </button>
      </div>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="product-card" key={index}>
              <Link to={`/Display/${category}/${encodeURIComponent(product.name)}`}>
                <img src={product.url} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.cost}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>

      {/* Conditional rendering for the Window */}
      {isWindowOpen && (
        <Window onClose={closeWindow} /> // Pass close function to Window
      )}
    </div>
  );
};

export default CategoriesPage;
