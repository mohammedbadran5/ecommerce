import React from "react";
import "./Featuressection.css";

function Featuressection() {
    return (
        <div className="features-section-wrapper">
            {/* Horizontal line above the features section */}
            <hr style={{ margin: "1px 0", border: "0.01px solid #ccc" }} />
            <h2 style={{ marginRight: "10px", color: "black",fontSize:16 , fontWeight:700,color:'#515151'}}>Description</h2>

            <div className="features-section">
                <div className="left-box">
                    <h1>Features</h1>
                    <p>
                        Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis,
                        nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam
                        at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget
                        suscipit. Etiam ultricies justo ac feugiat dignissim.
                    </p>
                    <div className="done-work">
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                    </div>
                </div>

                <div className="right-box">
                    <h1>Care Instructions</h1>
                    <p>
                        Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.
                    </p>
                    <div className="done-work">
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                        <h3>Etiam eu tortor tempor, malesuada</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featuressection;
