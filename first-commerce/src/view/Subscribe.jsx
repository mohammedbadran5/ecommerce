import React from "react";
import "./Subscribe.css";
import Subscribe from "../assets/images/Subscribe.jpg";

function Subscribing() {
    return (
        <div className="subscribe-section">
            <div className="subs-image">
                <img src={Subscribe} alt="" />
            </div>
            <div className="subs-box">
                <p>Subscribe To Our Newsletter</p>
                <h3>See The Latest Collection & Get Special Offer</h3>
                <div className="input-button">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <h4>Cras interdum lectus velit nibh senectus fringilla ut.</h4>
            </div>
        </div>
    );
}

export default Subscribing;
