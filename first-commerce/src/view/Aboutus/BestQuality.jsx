import React from "react";
import "./BestQuality.css";
import BestQualityImg from "./Bestqulaityimg.jpg"; // Rename for clarity
import { GiSofa } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";

function BestQuality() {
    return (
        <div>
            <div className="bestQualityContainer">
                <div className="bestQualityContent">
                    <h1>The Best Quality Furniture Store in Town</h1>
                    <p>
                        Sagittis enim, auctor ultrices dui etiam viverra nulla
                        scelerisque in semper porttitor pharetra, tortor amet
                        lorem cursus velit posuere tristique tempus, tincidunt non
                        velit quis congue lectus a ullamcorper iaculis.
                    </p>
                    <div className="qualityFeatures">
                        <div className="featureItem">
                            <div className="icon">
                                <GiSofa />
                            </div>
                           
                            <div className="featureText">
                                <h4>Huge Selection</h4>
                                <p>Sagittis enim, auctor ultrices dui etiam viverra nulla.</p>
                            </div>
                        </div>
                        <div className="featureItem">
                            <div className="icon">
                                <FaWallet />
                            </div>
                  
                            <div className="featureText">
                                <h4>Low Price Everyday</h4>
                                <p>Tincidunt sed eget nunc tellus viverra sapien massa cursus.</p>
                            </div>
                        </div>
                        <div className="featureItem">
                            <div className="icon">
                                <FaShuttleVan />
                            </div>
                           
                            <div className="featureText">
                                <h4>Same Day Delivery</h4>
                                <p>Pretium, tempus ultricies lacus eleifend scelerisque sem.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bestQualityImage">
                    <img src={BestQualityImg} alt="Best Quality Furniture" />
                </div>
            </div>
        </div>
    );
}

export default BestQuality;
