import React, { useEffect } from "react";
import "./ChefSection.css"; // you will add custom css here if needed
import chefImage from "/src/assets/Images/shafe-photo.jpg";
import Aos from "aos";
import "aos/dist/aos.css"; 
const ChefSection = () => {
   useEffect(() => {
              Aos.init({
                duration: 1000, // Animation duration
              });
            }, []);
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-senter align-items-center">
        {/* Left side */}
        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0" data-aos="fade-up">
          <img src={chefImage} alt="Chef" className="img-fluid chef-img " />
        </div>

        {/* Right side */}
        <div className="col-lg-5" style={{ color: "#134074" }} data-aos="fade-down">
          <h4 className="fw-bold d-flex align-items-center">
            Join the <h1 className="text-primary fw-bold">135 Degrees</h1>{" "}
          </h4>
          <h4 className="fw-bold">Lifestyle!</h4>
          <p className="fw-300 mt-3" style={{color:"#134074"}}>
            Start your journey to a healthier lifestyle with 135 Degrees!
            Whether you’re at work, home, or on the go, our fresh and hygienic
            salads, juices, and shakes make healthy eating both simple and
            convenient. We are committed to delivering nutritious,
            professionally crafted meals that fit seamlessly into your busy day.
            Choose 135 Degrees for quick delivery, premium quality, and a
            healthier way to live.
          </p>
          <ul className="list-unstyled mt-4">
            <li>
              <strong>● Fresh Deliveries –</strong> Salads, juices, and shakes.
            </li>
            <br />
            <li>
              <strong>● Flexible Plans –</strong> Daily, weekly, monthly.
            </li>
            <br />
            <li>
              <strong>● Hassle-Free –</strong> Healthy, hygienic, easy.
            </li>
          </ul>
          <button className=" Join-btn mt-3 fw-bold">
            JOIN US TODAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
