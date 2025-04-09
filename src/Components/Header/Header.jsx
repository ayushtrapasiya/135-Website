import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import logo from "/src/assets/Images/135LOGO.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirectRef = useRef({ shouldScroll: false, target: "" });

  // Function to open WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "+919687231928";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Check if the current page is a specific policy page
  const isTermsPage =
    location.pathname === "/TermsandConditions" ||
    location.pathname === "/CancellationPolicy" ||
    location.pathname === "/PrivacyPolicy";

  // Check if we're on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
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

  useEffect(() => {
    // Only add scroll event listener on the home page
    if (isHomePage) {
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
    }
  }, [isHomePage]);

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  // Handle navigation to home page sections from other pages
  const handleNavigateToSection = (sectionId) => {
    if (!isHomePage) {
      redirectRef.current = { shouldScroll: true, target: sectionId };
      navigate("/"); // Navigate to home page
    }
    handleLinkClick();
  };

  return (
    <div>
      <nav className={`header-navbar ${isTermsPage || menuOpen ? " black text-light" : ""}`}>
        <div className="header-nav-container">
          {/* Logo */}
          <div className="header-logo">
            <a href="/">
              <img
                src="/src/assets/Images/135LOGO.png"
                alt="logo"
                className="header-logo"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className={`header-nav-links ${menuOpen ? "header-active" : "mt-2"}`}>
            <li>
              <Link onClick={handleLinkClick} to="/">
                Home
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  onClick={handleLinkClick}
                  to="home"
                  smooth={true}
                  duration={500}
                  className={activeLink === "home" ? "active" : ""}
                >
                  About Us
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavigateToSection("home")}
                  className="nav-button"
                >
                  About Us
                </button>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  onClick={handleLinkClick}
                  to="our-menu"
                  smooth={true}
                  duration={500}
                  className={activeLink === "our-menu" ? "active" : ""}
                >
                  Our Menu
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavigateToSection("our-menu")}
                  className="nav-button"
                >
                  Our Menu
                </button>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  onClick={handleLinkClick}
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={activeLink === "contact" ? "active" : ""}
                >
                  Contact
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavigateToSection("contact")}
                  className="nav-button"
                >
                  Contact
                </button>
              )}
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
            <Link to="https://www.instagram.com/135degrees.in/" target="_blank">
              <FaInstagram className="fs-3 text-white" />
            </Link>
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