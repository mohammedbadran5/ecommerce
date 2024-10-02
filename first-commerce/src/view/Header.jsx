import React, { useState, useEffect } from "react";
import "./Header.css";
import myIcon from '../assets/images/logo.svg';
import Window from '../view/Window'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; // Shopping basket icon
import { RiShoppingBasketLine } from "react-icons/ri";


function Header() {
    const [isWindowOpen, setWindowOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

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
        <div className="elementor-element elementor-element-fd679e4 e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <nav className="nav-container">
                <div className="left-side">
                    <img style={{ width: 150, marginLeft: 100, marginTop: 10 }} className="logo" src={myIcon} alt="Logo" />
                </div>
                <div className="mid-side">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Rooms</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    
                    <span className="basket-icon" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleWindow}>
                        <RiShoppingBasketLine icon={faShoppingBasket} style={{ fontSize: 24, color: '#edb932' }} />
                        <span className="badge">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> {/* Total item count */}
                    </span>
                </div>
            </nav>
            <header className="header-container">
                <p className="store-name">Kayuu Furniture Store</p>
                <h1>Make Yourself At Home</h1>
                <p>
                    Vestibulum, diam vulputate amet cras in diam quis turpis curabitur 
                    tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend 
                    egestas turpis sit etiam commodo viverra lacinia ipsum convallis sed augue
                     purus scelerisque non vestibulum elementum mi, pellentesque leo tincidunt integer.
                </p>
                <button className="shop-button">Shop Now</button>
            </header>
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

export default Header;
