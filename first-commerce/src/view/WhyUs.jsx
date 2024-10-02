import React from "react";
import "./Whyus.css";
import { CiDiscount1 } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSpatialTracking } from "react-icons/md";

function Whyus() {
    return (
        <div className="features">
            <div className="header">
                <div className="left-part2">
                    <p style={{ fontSize:13 }} className="whyus">If you wonder</p>
                    <h1 style={{ fontSize: 45 }}>Why Choose Us</h1>
                </div>
                <div className="right-part2">
                        <button style={{ fontSize:17,fontWeight:100 }}>About us</button>
                    </div>
            </div>
            <div className="feat">
                <div className="props">
                    <div className="prop">
                        <CiDiscount1 className="icon" />
                        <h1>Big Discounts</h1>
                        <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className="prop">
                        <MdLocalShipping className="icon" />
                        <h1>Free Shipping</h1>
                        <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className="prop">
                        <MdOutlinePayment className="icon" />
                        <h1>Secure Payments</h1>
                        <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className="prop">
                        <MdOutlineSpatialTracking className="icon" />
                        <h1>Order Tracking</h1>
                        <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Whyus;
