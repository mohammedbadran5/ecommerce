import React from "react";
import "./footer.css";
import myIcon from '../assets/images/logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="about-us">
          <img src={myIcon} alt="Logo" />
          <p>3538 Torrance Blvd, Torrance, CA 90503, USA<br />
            +1 123 456 7890<br />
            info@example.com<br />
            Visit Our Store
          </p>
        </div>

        <div className="useful-links">
          <h1>Useful Links</h1>
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Rooms</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
        </div>

        <div className="rooms">
          <h1>Rooms</h1>
          <a href="">Living Room</a>
          <a href="">Bedroom</a>
          <a href="">Kitchen</a>
          <a href="">Bath Room</a>
          <a href="">Home Office</a>
        </div>

        <div className="stay-in-touch">
          <h1>Stay In Touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="copy-right">
        Copyright © 2024 Online Furniture Store
      </div>
    </footer>
  );
}

export default Footer;
