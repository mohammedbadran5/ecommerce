// Related.js
import React from "react";
import "./Related.css"; // Ensure this path is correct
import live1 from "../DisplayProducts/images/live1.png";
import live2 from "../DisplayProducts/images/live2.png";
import live3 from "../DisplayProducts/images/live3.png";

function Related() {
    return (
        <div>
            <h1>Related Products</h1>
            <div className="related-products">
            <div className="card">
                    <img src={live1} alt="Brown Sofa" />
                    <p>Living Room</p>
                    <h1>Brown Living Room Sofa</h1>
                    <p>$1,200.00</p>
                </div>
                <div className="card">
                    <img src={live2} alt="Vaza" />
                    <p>Living Room</p>
                    <h1>Brown Living Room Sofa</h1>
                    <p>$1,200.00</p>
                </div>
                <div className="card">
                    <img src={live3} alt="Blue Sofa" />
                    <p>HomeOffice</p>
                    <h1>Brown Living Room Sofa</h1>
                    <p>$1,200.00</p>
                </div>
                
            </div>
        </div>
    );
}

export default Related;
