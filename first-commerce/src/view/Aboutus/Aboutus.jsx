import React from "react";
import "./About.css";
import about1 from "./about1.jpg";
import about2 from "./about2.jpg";

function Aboutus() {
    return (
        <div className="about-container">
            <div className="leftimg">
                <img src={about1} alt="About 1" />
            </div>
            <div className="rightimg">
                <img src={about2} alt="About 2" />
                <p>
                    Eu egestas felis et viverra amet dictum ornare turpis gravida orci bibendum odio sit volutpat proin at enim ultrices dolor nullam tortor ornare cursus nibh sit adipiscing adipiscing enim erat nunc donec tellus, egestas commodo netus adipiscing ultrices at phasellus ut vitae nunc malesuada id nec suspen disse sit turpis mauris biben dum amet dignissim in sit duis pharetra vehicula eget suspen disse at vitae integer gravida sagittis.
                </p>
                <h3>Harvey D. George</h3>
            </div>
        </div>
    );
}

export default Aboutus;
