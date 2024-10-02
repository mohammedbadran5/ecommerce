import React, { useState, useEffect } from "react";
import Window from "../Window"; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; // Shopping basket icon
import myIcon from "./dark-logo.svg";
import "./Navbar.css";

function Navbar() {
    const [isWindowOpen, setWindowOpen] = useState(false);

    const toggleWindow = () => {
        setWindowOpen(!isWindowOpen);
    };

    // Effect to handle body overflow
    useEffect(() => {
        if (isWindowOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Cleanup function to reset the overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isWindowOpen]);

    return (
        <div className="body">
            <nav className="nav-container1">
                <div className="left-side1">
                    <img style={{ width: 150, marginLeft: 100, marginTop: 10 }} className="logo1" src={myIcon} alt="Logo" />
                </div>
                <div className="mid-side1">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Rooms</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <span className="basket-icon1" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleWindow}>
                        <FontAwesomeIcon icon={faShoppingBasket} style={{ fontSize: 20, color: '#edb932' }} />
                        <span className="badge1">0</span>
                    </span>
                </div>
            </nav>

            {/* Conditionally render the Window component */}
            {isWindowOpen && <Window onClose={toggleWindow} />}
        </div>
    );
}

export default Navbar;
