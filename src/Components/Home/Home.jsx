import React, { useState, useEffect } from "react";
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
    text: "At 135 Degrees, We Bring You A Perfect Blend Of Health, Hygiene, And Taste With Our Carefully Crafted Salads, Juices, And Shakes.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias quaerat? Unde earum accusantium fuga sequi aut laborum officiis, officia doloremque vel vero optio nostrum architecto voluptatibus? Vitae, eum dicta.",
  },
  {
    video: video2,
    heading: "Experience the Best Quality",
    subheading: "Healthy & Delicious Choices",
    text: "We take pride in offering a variety of nutritious and tasty meals made with fresh ingredients to keep you energized all day.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias quaerat? Unde earum accusantium fuga sequi aut laborum officiis, officia doloremque vel vero optio nostrum architecto voluptatibus? Vitae, eum dicta.",
  },
  {
    video: video3,
    heading: "Experience the Best Quality",
    subheading: "Healthy & Delicious Choices",
    text: "We take pride in offering a variety of nutritious and tasty meals made with fresh ingredients to keep you energized all day.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias quaerat? Unde earum accusantium fuga sequi aut laborum officiis, officia doloremque vel vero optio nostrum architecto voluptatibus? Vitae, eum dicta.",
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
      <div className="carousel-container animate__animated animate__fadeInDown p-5 ">
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
