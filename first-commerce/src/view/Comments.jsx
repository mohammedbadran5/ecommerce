import React from "react";
import "./Comments.css";
import Boycomment from "../assets/images/boy-comment.jpg";
import Girlcomment from "../assets/images/girl-comment.jpg";
import Myimage from "./Myimage.jpg";

function Comments() {
    return (
        <div className="comments-section">
            <div className="header">
                <div className="left-part3">
                    <p>TESTIMONIALS</p>
                    <h1 style={{ fontSize: 45 }}>What People Say</h1>
                </div>
                <div className="right-part2">
                    <button>VIEW ALL TESTIMONIALS</button>
                </div>
            </div>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <img src={Girlcomment} alt="Anna Cynthia" />
                    <div className="testimonial-content">
                        <p>
                            Enim, interdum vulputate netus quis sapien malesuada neque, nec enim at urna
                            gravida accumsan nunc, mi eu id ullamcorper amet commodo pulvinar tortor,
                            augue donec placerat.
                        </p>
                        <h3>Anna Cynthia</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src={Boycomment} alt="Jim Taylor" />
                    <div className="testimonial-content">
                        <p>
                            Porttitor diam porta eu, id et vestibulum quam vestibulum facilisis nulla 
                            ornare eu pretium dictum quam pharetra, nisl maecenas pretium sed eget 
                            interdum auctor et, aliquam sem lectus.
                        </p>
                        <h3>Jim Taylor</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src={Myimage} alt="Jim Taylor" />
                    <div className="testimonial-content">
                        <p>
                            Porttitor diam porta eu, id et vestibulum quam vestibulum facilisis nulla 
                            ornare eu pretium dictum quam pharetra, nisl maecenas pretium sed eget 
                            interdum auctor et, aliquam sem lectus.
                        </p>
                        <h3>Jim Taylor</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
