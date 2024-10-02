import React from "react";
import Navy from "./Navy";
import Room from "./Roome";
import Cards from "../Cards"
import BedroomComponent from "./Bedroom";
import KitchenComponent from "./KitchenComponent";
import Homeoffice from "./Homeoffice";
import BathroomCom from "./Bathroom";
import Subscribing from "../Subscribe"
import Footer from "../Footer"


function RoomPage(){
    return (
        <div style={{overflow:"hidden"}}>
            <Navy />
            <Room />
            <div style={{ marginTop:100 }} className="cards">
            <Cards />
            </div>
            <BedroomComponent />
            <div style={{ marginTop:100 }} className="cards">
            <Cards />
            </div>
            <KitchenComponent />
            <div style={{ marginTop:100 }} className="cards">
            <Cards />
            </div>
            <Homeoffice />
            <div style={{ marginTop:100 }} className="cards">
            <Cards />
            </div>
            <BathroomCom />
            <div style={{ marginTop:100 }} className="cards">
            <Cards />
            </div>
            <Subscribing />
            <Footer />
        </div>
    )
}

export default RoomPage