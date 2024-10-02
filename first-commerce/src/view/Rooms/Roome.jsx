import React from "react";
import "./Room.css";
import Roomimg1 from "./living-room-img.jpg";

function Room() {
    return (
        <div>
            <div className="room">
                <img src={Roomimg1} alt="" />
                <div className="room-box">
                    <h1>Living Room</h1>
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

export default Room;
