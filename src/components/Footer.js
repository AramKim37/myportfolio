import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contents">
        <p className="footer-info">
          copyright © {new Date().getFullYear()} - Developed by Aram Kim
        </p>
      </div>
      {/* Made &nbsp; by &nbsp;&nbsp;&nbsp;Aram Kim</p> */}
    </div>
  );
}

export default Footer;
