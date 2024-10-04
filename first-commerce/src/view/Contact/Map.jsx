import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map-container">
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27076.45967560187!2d35.93003948460765!3d31.97290039210784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca00c772c1dd9%3A0x84f783a7c2818f6a!2z2KfZhNi52KjYr9mE2YrYjCDYudmF2ZHYp9mG!5e0!3m2!1sar!2sjo!4v1727890174580!5m2!1sar!2sjo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="location-box">
        <h1>Send Us A Message</h1>
        <label>
          Name * 
          <input type="text" />
        </label>
        <label>
          Email * 
          <input type="text" />
        </label>
        <label>
          Message * 
          <textarea name="" id=""></textarea>
        </label>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Map;
