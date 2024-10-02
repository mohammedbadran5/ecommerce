import React from "react";
import "./Homeoffice.css"
import HomeOffice from "./home-office-img.jpg";


function Homeoffice(){
    return (
        <div>
            <div className="room">
                <img src={HomeOffice} alt="Bedroom" /> {/* Use the renamed import */}
                <div className="room-box">
                    <h1>Bedroom</h1> {/* Adjust title if needed */}
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


export default Homeoffice