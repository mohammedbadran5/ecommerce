import React from "react";
import "./SalesUp.css";
import Promo from "../assets/images/promo-banner-img.jpg";

function Salesup() {
    return (
        <div className="salesup-container">
            <div className="content">
                <h1>Sales up to 50% OFF</h1>
                <p>
                    Molestie amet tempor, diam id magna ridiculus tincidunt cursus curabitur
                    non ipsum mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at.
                </p>
                <button>SHOP NOW</button>
            </div>
            <div className="image">
                <img src={Promo} alt="Promo" />
            </div>
        </div>
    );
}

export default Salesup;
