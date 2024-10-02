import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to read URL params
import Navbar from "../products-page/Navbar";
import CartPage from "./Cart";
import Footer from "../Footer";

function DisplayProductInfo() {
    const { category } = useParams(); // Get category from URL params

    return (
        <div className="display">
            <Navbar />
            <CartPage />
            <Footer />
        </div>
    );
}

export default DisplayProductInfo;
