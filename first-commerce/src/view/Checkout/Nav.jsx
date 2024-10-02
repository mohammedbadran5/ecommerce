import React from "react";
import "./Nav.css"
import myIcon from './dark logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; // Shopping basket icon
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // Close icon


function Nav(){
    return (
        <div>
             <nav className="nav-container2">
                <div className="left-side2">
                    <img style={{ width: 150, marginLeft: 100, marginTop: 10 }} className="logo2" src={myIcon} alt="Logo" />
                </div>
            </nav>
        </div>
    )
}


export default Nav