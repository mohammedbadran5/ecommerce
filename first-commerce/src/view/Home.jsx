import React from "react";
import "./login.css"; // Ensure the CSS file exists in the same folder
import Header from "./Header";
import Collection from "./Collection";
import "./Home.css";
import Cards from "./Cards";
import Rooms from "./Rooms";
import Bestselling from "./BestSelling";
import Salesup from "./SalesUp";
import Comments from "./Comments";
import Whyus from "./Whyus";
import Subscribing from "./Subscribe";
import Footer from "./Footer";
import Window from "./Window";

function Home() {
    return (
        <div>
            <Header />
            <Collection />
            <Cards />
            <Rooms />
            <Bestselling />
            <Salesup />
            <Comments />
            <Whyus />
            <Subscribing />
            <Footer />
        </div>
    );
}

export default Home;
