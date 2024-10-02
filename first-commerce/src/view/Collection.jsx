import React from "react";
import NewCollection from "../assets/images/new-collection.jpg"; // Correct import for the image
import "./Collection.css";

function Collection() {
    return (
        <div>
            <section className="collection-section">
                <div className="collection">
                    <div className="collection-img">
                        <img src={NewCollection} alt="New Collection" />
                    </div>
                    <div className="content">
                        <p className="new-collection-text">NEW COLLECTION</p>
                        <h1>A Perfect Set For Your Living Room</h1>
                        <p style={{ color:'#1a1a1a' }}>
                            Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur 
                            faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas 
                            faucibus vulputate pharetra nunc sed maecenas diam quisque habitasse.
                        </p>
                        <button style={{ fontSize:16 }} className="right-part3">Shop This Collection</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Collection;
