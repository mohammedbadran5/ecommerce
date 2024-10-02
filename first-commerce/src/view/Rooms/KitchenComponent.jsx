import React from "react";
import "./KitchenComponent.css"
import Kitchensection from "./kitchen-img.jpg"


function KitchenComponent(){
    return (
        <div>
            <div className="room">
                <img src={Kitchensection} alt="Bedroom" /> {/* Use the renamed import */}
                <div className="room-box">
                    <h1>Kitchen</h1> {/* Adjust title if needed */}
                    <p>Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra.</p>
                    <div className="points">
                        <p>Nulla placerat viverra</p>
                        <p>Cursus viverra</p>
                        <p>Vitae interdum eget</p>
                        <p>Risus tempus elementum</p>
                        <p>Aliquet dignissim</p>
                    </div>
                    <button className="gold-button">Learn More</button> {/* Gold button */}
                </div>
            </div>
        </div>
    );
}


export default KitchenComponent