import React, { useState, useEffect } from "react";
import "./Navy.css";
import myIcon from './dark-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; // Shopping basket icon
import { RiShoppingBasketLine } from "react-icons/ri";


function Navy() {
    const [isWindowOpen, setWindowOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const blacka={
        color:'black'
    }

    const toggleWindow = () => {
        setWindowOpen(!isWindowOpen);
    };

    // Function to handle quantity changes
    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity <= 0) return;
        
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist to local storage
    };

    // Function to remove an item from the cart
    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1); // Remove the item at the specified index
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist to local storage
    };

    // Load cart items from local storage (if any) when the component mounts
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Effect to handle body overflow when the window is open
    useEffect(() => {
        if (isWindowOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on component unmount
        };
    }, [isWindowOpen]);

    return (
        <div  className="elementor-element elementor-element-fd679e4 e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <nav style={{ backgroundColor:'white' }} className="nav-container">
                <div className="left-side">
                    <img style={{ width: 150, marginLeft: 100, marginTop: 10 }} className="logo" src={myIcon} alt="Logo" />
                </div>
                <div className="mid-side">
                    <a style={blacka} href="/Home">Home</a>
                    <a style={blacka} href="/Products">Products</a>
                    <a style={blacka} href="/Rooms">Rooms</a>
                    <a style={blacka} href="/AboutUs">About Us</a>
                    <a style={blacka} href="/ContactUs">Contact Us</a>
                    
                    <span className="basket-icon" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleWindow}>
                        <RiShoppingBasketLine icon={faShoppingBasket} style={{ fontSize: 24, color: '#edb932' }} />
                        <span className="badge">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> {/* Total item count */}
                    </span>
                </div>
            </nav>
           <div className="title">
                <h1>About Us</h1>
                <p>Tempus amet, sit erat malesuada lorem purus dictum pretium, posuere sagittis ultricies 
                    enim massa nisi neque augue in condimentum diam commodo ornare.</p>
           </div>
            {/* Conditionally render the shopping cart window */}
            {isWindowOpen && (
                <Window 
                    cartItems={cartItems} 
                    onClose={toggleWindow} 
                    handleQuantityChange={handleQuantityChange} 
                    handleRemoveItem={handleRemoveItem}
                    setCartItems={setCartItems} // Pass setCartItems to update cart items from the modal
                />
            )}
        </div>
    );
}

export default Navy;
