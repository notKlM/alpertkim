import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>BASED IN MANILA, PHILIPPINES <br />EST. 2025</p>
      </div>
      <div className="footer-right">
        <p>SCROLL DOWN</p>
        <div className="scroll-indicator">
          <span>TO DISCOVER</span>
          <div className="arrow-box">
            <div className="arrow-down"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
