import React from "react";
import "./ContactInfo.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPhone } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { BiSolidCoupon } from "react-icons/bi";
import { FaPersonBreastfeeding, FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="store-location">
          <FaLocationDot />
          <p>OUR STORE</p>
        </div>
        <h1>3538 Torrance Blvd, Torrance, CA 90503, USA</h1>
        <p>
          Posuere sagittis ultricies enim massa nisi neque augue in condimentum
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="social-media">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="contact-right">
        <div className="first-contact">
          <FaPhone />
          <p>Call Us</p>
          <h2>+1 123 456 7890</h2>
        </div>
        <div className="first-contact">
          <CiHeadphones />
          <p>Support</p>
          <h2>support@email.com</h2>
        </div>
        <div className="first-contact">
          <BiSolidCoupon />
          <p>Sales</p>
          <h2>support@email.com</h2>
        </div>
        <div className="first-contact">
          <FaPersonBreastfeeding />
          <p>Complaints</p>
          <h2>complaints@email.com</h2>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
