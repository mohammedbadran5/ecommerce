import React from "react";
import "./Rooms.css";
import BathRoom from "../assets/images/bath-room-bg.jpg";
import BedRoom from "../assets/images/bedroom-bg.jpg";
import Kitchen from "../assets/images/kitchen-bg.jpg";
import LivingRoom from "../assets/images/living-room-bg.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

function Rooms() {
    return (
        <div>
            <div className="rooms-container">
                <div>
                    <img src={LivingRoom} alt="Living Room" />
                    <h2>Living Room <IoIosArrowRoundForward className="arrow-icon" />
                    </h2>
                </div>
                <div>
                    <img src={BedRoom} alt="Bedroom" />
                    <h2>Bedroom <IoIosArrowRoundForward className="arrow-icon" />
                    </h2>
                </div>
                <div>
                    <img src={Kitchen} alt="Kitchen" />
                    <h2>Kitchen <IoIosArrowRoundForward className="arrow-icon" />
                    </h2>
                </div>
                <div>
                    <img src={BathRoom} alt="Bathroom" />
                    <h2>Bathroom <IoIosArrowRoundForward className="arrow-icon" />
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
