import React from "react";
import "./Footer.css";
// import { assets } from "../../assets/frontend_assets/assets";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id="logo" src={assets.logo} alt="" />
          <p>
            Yahaan sirf khaana nahi, yaadein banti hain.
          </p>
          <div className="footer-social-icons">
  <a 
    href="https://www.instagram.com/madhavskitchen.me" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
      alt="Instagram" 
      style={{ width: "30px", height: "30px" }}
    />
  </a>
</div>


        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            {/* <li><a href="/thankyou">Thank You</a></li> */}
            {/* <li><a href="/delivery">Delivery</a></li> */}
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 8527159685</li>
            <li>madhavskitchen.me@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Madhavskitchen.me
      </p>
      <p>  
        All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
