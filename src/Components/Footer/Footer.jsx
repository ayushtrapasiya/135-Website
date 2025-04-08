import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";
import logo from "/src/assets/Images/135LOGO.png"

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">
        {/* Left Section - Logo & About (Takes More Space) */}
        <div className="footer-section about large-section ">
          <Link to={"/"}>
          <img src={logo} alt="135 Degrees Logo" className="footer-logo" />
          </Link>
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

        <div className="footer-section links small-section">
          <h5>Quick Links</h5>
          <ul>
            <Link to={"/"} style={{textDecoration:"none"}}>
            <li className="text-light" >Home</li>
            </Link>
            <li><a href="#" style={{textDecoration:"none"}}>About Us</a></li>
            <li><a href="#" style={{textDecoration:"none"}}>Our Menu</a></li>
            <li><a href="#" style={{textDecoration:"none"}}>Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Policies and Copyright */}
      <div className="footer-bottom centered">
        <div className="policy-links d-md-flex gap-1 ">
          <Link to={"/PrivacyPolicy"} className="text-light"> Privacy Policy |</Link>
          <Link to={"/CancellationPolicy"} className="text-light">
          Cancellation Policy | 
          </Link>
          <Link to={"/TermsandConditions"} className="text-light"> Terms & Conditions</Link>
        </div>
        <p style={{fontSize:"13px"}}>COPYRIGHT © 2025 <strong>135 DEGREES</strong></p>
        <p style={{fontSize:"13px"}}>DEVELOPED BY <strong>NEXORA TECH</strong></p>
      </div>
    </footer>
  );
};

export default Footer;