import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">
        {/* Left Section - Logo & About (Takes More Space) */}
        <div className="footer-section about large-section ">
          <img src="/src/assets/Images/135LOGO.png" alt="135 Degrees Logo" className="footer-logo" />
          <p className="footer-detail">
            At 135 Degrees, we believe that eating healthy should be easy, delicious, and hassle-free. Our journey began with a simple vision to provide fresh, hygienic, and professionally crafted food that fits seamlessly into your busy lifestyle.
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section contact small-section flex-fill">
          <h5>Contact Us</h5>
          <p>  D/45, Titanium City Center, 100 Feet Road, Satellite, Ahmedabad - 380 015.</p>
          <p>  +91 78638 70341</p>
          <p>  care@135degrees.in</p>
          <p><a href="https://www.135degrees.in" className="footer-link">www.135degrees.in</a></p>
        </div>

        {/* Right Section - Working Hours & Quick Links */}
        <div className="footer-section hours small-section flex-fill">
          <h5><FaClock className="footer-icon" /> Working Hours</h5>
          <p>Monday - Saturday: 09:00 AM - 06:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section links small-section  flex-fill">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Policies and Copyright */}
      <div className="footer-bottom centered">
        <div className="policy-links d-md-flex gap-1">
          <Link to={"/PrivacyPolicy"}> <a href="#">Privacy Policy</a> |</Link>
          
          <Link to={"/CancellationPolicy"}>
          <a href="#">Cancellation Policy</a> | 
          </Link>
          <Link to={"/TermsandConditions"}> <a href="#">Terms & Conditions</a></Link>
        </div>
        <p>COPYRIGHT © 2025 <strong>135 DEGREES</strong></p>
        <p>DEVELOPED BY <strong>NEXORA TECH</strong></p>
      </div>
    </footer>
  );
};

export default Footer;