import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './AboutUS.css'
import AOS from "aos";
import about from '/src/assets/Images/About-img.jpg'
import "aos/dist/aos.css"; 
const AboutUs = () => {

  useEffect(() => {
          AOS.init({
            duration: 1000, // Animation duration
          });
        }, []);
  return (
    <div className="container my-5">
      <div className="row align-items-stretch about-contaier"  data-aos="fade-up">
        {/* Left Side - Image */}
        <div className="col-lg-5 d-flex align-items-stretch p-0 col-11 " >
        <img
           src={about}
           alt="Healthy Food"
           className="about-left-image animate__animated animate__fadeInLeft"
          
        />
        </div>
        {/* Right Side - Text */}
        <div className="col-lg-5 d-flex align-items-stretch p-0 col-11 "  >
          <div className="p-5 text-white  shadow-sm w-100 d-flex flex-column justify-content-center About-right-part">
            <h2 className="fw-bold text-light">About 135 Degrees</h2>
            <p>
            At 135 Degrees, We Believe That Eating Healthy Should Be Easy, Delicious, And Hassle-Free. Our Journey Began With A Simple Vision—To Provide Fresh, Hygienic, And Professionally Crafted Food That Fits Seamlessly Into Your Busy Lifestyle. We Specialize In Nutritious Salads, Refreshing Juices, And Wholesome Shakes, All Made With High-Quality Ingredients And Strict Hygiene Standards.
            <br /><br />
             What Sets Us Apart Is Our Commitment To Health, Convenience, And Professionalism. Unlike Traditional Options, We Ensure That Every Meal Is Prepared In A Sanitized Environment, Maintaining The Perfect Balance Of Taste And Nutrition. Whether You’re At Work, Home, Or On The Go, Our Goal Is To Offer A Refreshing, Guilt-Free Experience That Keeps You Energized Throughout The Day.
             <br /><br />
              At 135 Degrees, We Don’t Just Serve Food—We Promote A Lifestyle. Join Us On Our Mission To Make Healthy Eating Effortless And Enjoyable!

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
