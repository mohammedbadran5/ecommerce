import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // Close icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Left-window.css';

function Window({ onClose }) {
    const [isOpen, setIsOpen] = useState(false); // State to manage visibility of the options box
    const navigate = useNavigate(); // Initialize navigate

    const toggleBox = () => {
        setIsOpen(!isOpen); // Toggle the state
    };

    // Function to handle navigation
    const handleNavigate = (category) => {
        // Navigate to the category page using the specified path
        navigate(`/Display/${category}`);
    };

    return (
        <div className="window2">
            {/* Header with close button */}
            <div className="window-top2">
                <h4>Product Categories</h4>
                <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} style={{ cursor: 'pointer', color: 'black' }} />
            </div>

            {/* Content: Search and categories */}
            <div className="search">
                <input type="text" placeholder="Search By Name" />
                <button>Search</button>
            </div>
            <div className="categories">
                <h1>Product Categories</h1>
                <ul>
                    <li onClick={() => handleNavigate('Bathroom')}>Bathroom (4)</li>
                    <li onClick={() => handleNavigate('Bedroom')}>Bedroom (4)</li>
                    <li onClick={() => handleNavigate('Cabinet')}>Cabinet (5)</li>
                    <li onClick={() => handleNavigate('Chair')}>Chair (2)</li>
                    <li onClick={() => handleNavigate('HomeOffice')}>Home Office (4)</li>
                    <li onClick={() => handleNavigate('LivingRoom')}>Living Room (5)</li>
                    <li onClick={() => handleNavigate('sofa')}>Sofa (2)</li>
                    <li onClick={() => handleNavigate('Stool')}>Stool (1)</li>
                    <li onClick={() => handleNavigate('Uncategorized')}>Uncategorized (0)</li>
                </ul>

                {/* Button to toggle options box */}
                <button onClick={toggleBox}>Option</button>
            </div>

            {/* Conditional rendering for options box */}
            {isOpen && (
                <div className="white-box">
                    <h2>Options</h2>
                    <p>Here you can select your options.</p>
                    <button onClick={toggleBox}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Window;
