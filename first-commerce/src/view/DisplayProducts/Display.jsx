import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to read URL params
import "./display.css";
import CategoriesPage from "./CategoriesPage";
import Navbar from "../products-page/Navbar";

function Display() {
    const { category } = useParams(); // Get category from URL params

    return (
        <div className="display">
            <Navbar />
            <CategoriesPage category={category} /> {/* Pass category to CategoriesPage */}
        </div>
    );
}

export default Display;
