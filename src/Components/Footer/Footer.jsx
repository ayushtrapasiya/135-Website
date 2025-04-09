import React, { useRef } from "react";
import "./Footer.css";
import { FaClock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectRef = useRef({ shouldScroll: false, target: "" });

  // Check if we're on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "";

  // Simple scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle navigation to home page sections from other pages
  const handleNavigateToSection = (sectionId) => {
    if (!isHomePage) {
      redirectRef.current = { shouldScroll: true, target: sectionId };
      navigate("/"); // Navigate to home page
    }
  };

  // Adds useEffect for handling redirections similar to your Header component
  React.useEffect(() => {
    // Handle redirections with scrolling when coming from other pages
    if (isHomePage && redirectRef.current.shouldScroll) {
      setTimeout(() => {
        const element = document.getElementById(redirectRef.current.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        redirectRef.current = { shouldScroll: false, target: "" };
      }, 100);
    }
  }, [isHomePage, location]);

  return (
    <footer className="footer" style={{ marginTop: "35px" }}>
      <div className="footer-container">
        {/* Left Section - Logo & About (Takes More Space) */}
        <div className="footer-section about large-section">
          <Link to="/" onClick={scrollToTop}>
            <img src="/src/assets/Images/135LOGO.png" alt="135 Degrees Logo" className="footer-logo" />
          </Link>
          <p className="footer-detail">
            At 135 Degrees, we believe that eating healthy should be easy, delicious, and hassle-free. Our journey began with a simple vision to provide fresh, hygienic, and professionally crafted food that fits seamlessly into your busy lifestyle.
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section contact small-section flex-fill">
          <h5>Contact Us</h5>
          <p>D/45, Titanium City Center, 100 Feet Road, Satellite, Ahmedabad - 380 015.</p>
          <p>+91 78638 70341</p>
          <p>care@135degrees.in</p>
          <p><a href="https://www.135degrees.in" className="footer-link">www.135degrees.in</a></p>
        </div>
        {/* Right Section - Working Hours & Quick Links */}
        <div className="footer-section hours small-section flex-fill">
          <h5 className="footer-icon">Working Hours</h5>
          <p>Monday - Saturday: 09:00 AM - 06:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section links small-section">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop} className="text-light">Home</Link>
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavigateToSection("home")}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </span>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="our-menu"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  Our Menu
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavigateToSection("our-menu")}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  Our Menu
                </span>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavigateToSection("contact")}
                  className="text-light"
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Policies and Copyright */}
      <div className="footer-bottom centered">
        <div className="policy-links d-md-flex gap-1 ">
          <Link to="/PrivacyPolicy" className="text-light"> Privacy Policy |</Link>
          <Link to="/CancellationPolicy" className="text-light">
            Cancellation Policy |
          </Link>
          <Link to="/TermsandConditions" className="text-light"> Terms & Conditions</Link>
        </div>
        <p style={{ fontSize: "13px" }}>COPYRIGHT © 2025 <strong>135 DEGREES</strong></p>
        <p style={{ fontSize: "13px" }}>DEVELOPED BY <strong>NEXORA TECH</strong></p>
      </div>
    </footer>
  );
};

export default Footer;