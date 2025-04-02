// WhyChoose.jsx
import React, { useEffect } from "react";
import "./WhyChoose.css";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css"; 
import whyimage from '/src/assets/Images/fourth-seaction.jpg'
const WhyChoose = () => {
    useEffect(() => {
            Aos.init({
              duration: 1000, // Animation duration
            });
          }, []);
  return (
    <div className="main-why-ontainer">
    <div className="why-container container my-5 d-flex justify-content-center">
      <div className="row   rounded-4 overflow-hidden why-container-detail">
        <div className="col-lg-5 col-12 p-4 why-text-side"  data-aos="fade-right">
          <h2 className="fw-bold">Why Choose 135 Degrees?</h2>
          <p className="sub-text">
            At 135 Degrees, we go beyond just serving food – we deliver a fresh,
            hygienic, and professional experience designed to fit your
            lifestyle. Here’s why we stand out:
          </p>
          <ul className="list-unstyled mt-4">
            <li>
              <span>
                <IoShieldCheckmarkSharp className="why-icon" />
              </span>{" "}
              <strong className="fs-5">Uncompromising Hygiene</strong> <br />{" "}
              Every order is prepared in a sanitized environment and cleanliness
              at every step.
            </li>
            <li>
              <span>
                <IoShieldCheckmarkSharp className="why-icon" />
              </span>{" "}
              <strong className="fs-5">Fresh & Quality Ingredients</strong>{" "}
              <br /> We use premium, farm-fresh ingredients, offering you the
              best in every bite and sip.
            </li>
            <li>
              <span>
                <IoShieldCheckmarkSharp className="why-icon" />
              </span>{" "}
              <strong className="fs-5">Professionally Crafted</strong> <br />{" "}
              Our team follows high standards to deliver consistent taste and
              quality.
            </li>
            <li>
              <span>
                <IoShieldCheckmarkSharp className="why-icon" />
              </span>{" "}
              <strong className="fs-5">Quick & Reliable Delivery</strong> <br />{" "}
              Enjoy fast, fresh deliveries without the wait.
            </li>
            <li>
              <span>
                <IoShieldCheckmarkSharp className="why-icon" />
              </span>{" "}
              <strong className="fs-5">Customer-Centric Approach</strong> <br />{" "}
              Your satisfaction is our priority. We ensure seamless service with
              every order.
            </li>
          </ul>
        </div>
        {/* Right Side */}
        <div className="col-lg-5 d-flex justify-content-center col-12 p-0" data-aos="fade-left">
          <img
            src={whyimage}
            alt="Fruits & Juices"
            className="img-fluid why-image "
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChoose;
