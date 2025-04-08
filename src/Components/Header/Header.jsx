import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import "./Header.css";
import logo from "/src/assets/Images/135LOGO.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const location = useLocation();

  // Function to open WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "+919687231928"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Check if the current page is a specific page
  const isTermsPage =
    location.pathname === "/TermsandConditions" ||
    location.pathname === "/CancellationPolicy" ||
    location.pathname === "/PrivacyPolicy";
    
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveLink(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);  
    }
  };


  return (
    <div>
      <nav className={`header-navbar ${isTermsPage || menuOpen ? " black text-light" : ""}`}>
        <div className="header-nav-container">
          {/* Logo */}
          <div className="header-logo">
            <Link to={"/"}>
            <img
            style={{cursor:"pointer"}}
              src={logo}
              alt="logo"
              className="header-logo"
            />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className={`header-nav-links ${menuOpen ? "header-active" : "mt-2"}`}>
            <li>
              <Link   onClick={handleLinkClick} to={"/"}>  Home
              </Link>
            </li>
            <li>
              <ScrollLink   onClick={handleLinkClick}
                to="home"
                smooth={true}
                duration={500}
                className={`${activeLink} === "about-us" ? "active" : ""`}
                style={{cursor:"pointer"}}
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink   onClick={handleLinkClick}
                to="our-menu"
                smooth={true}
                duration={500}
                className={activeLink === "our-menu" ? "active" : ""}
                style={{cursor:"pointer"}}
              >
                Our Menu
              </ScrollLink>
            </li>
            <li>
              <ScrollLink   onClick={handleLinkClick}
                to="contact"
                smooth={true}
                duration={500}
                className={activeLink === "contact" ? "active" : ""}
                style={{cursor:"pointer"}}
              >
                Contact
              </ScrollLink>
            </li>

            <div className="header-mobile-icons">
              <FaWhatsapp    
                className="fs-3"
                onClick={openWhatsApp}
                style={{ cursor: "pointer" }}
                
              />
              <FaInstagram className="fs-3" />
            </div>
          </ul>
          {/* Icons (User & Cart) - Desktop */}
          <div className="header-icons">
            <FaWhatsapp  
              className="fs-3"
              onClick={openWhatsApp}
              style={{ cursor: "pointer" }}
            />
            <FaInstagram className="fs-3" /> 
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`header-menu-btn ${menuOpen ? "header-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
}
