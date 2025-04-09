import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Home.css";
import video1 from "/src/assets/Video/second-slide-video.mp4";
import video2 from "/src/assets/Video/firstvideo.mp4";
import video3 from "/src/assets/Video/third-slide-video2.mp4";
import AboutUs from "../AboutUS/AboutUs";
import ThirdSeaction from "../ThirdSeaction/ThirdSeaction";
import OurMenu from "../OurMenu/OurMenu";
import WhyChoose from "../WhyChoose/WhyChoose";
import ChefSection from "../ChefSection/ChefSection ";
import CoverArea from "../CoverArea/CoverArea";
import TestimonialsCarousel from "../TestimonialsCarousel/TestimonialsCarousel";
import ContactForm from "../ContactForm/ContactForm";
import Locations from "../Location/Location";

const slides = [
  {
    video: video1,
    heading: "Welcome To 135 Degrees",
    subheading: "Where Freshness Meets Professionalism!",
    text: "At 135 Degrees, we specialize in delivering fresh Salads, Juices, and Shakes to offices – crafted for health, delivered with speed, and served with hygiene.Boost your team's energy and wellness with our professional, on-time delivery of nutritious choices.From boardrooms to breakrooms, we bring healthy indulgence right to your workplace.",
  },
  {
    video: video2,
    heading: "Experience the Best Quality",
    subheading: "Healthy & Delicious Choices",
    text: "Refresh your day with 135 Degrees – delivering fresh Salads, Juices, and Shakes straight to your office with a promise of hygiene and health.Choose from a variety of nutritious options crafted to fuel your workday – tasty, energizing, and always on time.Experience instant delivery of wholesome meals designed for corporate wellness and convenience.",
  },
  {
    video: video3,
    heading: "Experience the Best Quality",
    subheading: "Your Daily Dose of Freshness Starts Here",
    text: "From crisp salads to refreshing juices and creamy shakes, 135 Degrees brings you wholesome, hygienic options prepared with care. We make healthy living simple, delicious, and just a click away.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel-container animate__animated animate__fadeInDown p-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <video autoPlay muted loop className="background-video">
              <source src={slide.video} type="video/mp4" />
            </video>

            {/* Black Overlay for the Video */}
            <div className="video-overlay"></div>

            <div className="content">
              <h4 className="text-light">{slide.heading}</h4>
              <h2 className="fw-bold text-light">{slide.subheading}</h2>
              <p>{slide.text}</p>
              <ScrollLink
                to="our-menu"
                smooth={true}
                duration={800}
                offset={-80}
                className="explore-menu-btn"
              >
                EXPLORE MENU
              </ScrollLink>
            </div>
          </div>
        ))}

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <section id="home"> </section>
      <AboutUs id="home" />
      <ThirdSeaction id="third-section" />
      <section id="our-menu">
        <OurMenu />
      </section>
      <WhyChoose />
      <ChefSection />
      <CoverArea />
      <TestimonialsCarousel />
      <section id="contact">
        <ContactForm />
      </section>
      <Locations />
    </>
  );
}