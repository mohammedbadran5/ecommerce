import React from "react";
import "./MainDescribtion.css";
import ItemDescribtion from "./ItemDescribtion";
import Navbar from "../products-page/Navbar";
import Featuressection from "./Featuressection";
import Related from "./Related";
import Footer from "../Footer";

function MainDescribtion(){
    return (
        <div>
            <Navbar />
            <ItemDescribtion />
            <Footer />
        </div>
    )
}


export default MainDescribtion