import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";
import { IoLocation, IoCall } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import axios from "axios";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("http://localhost:3000/send-mail", formObject, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitStatus({ success: true, message: "Your message has been sent successfully!" });
        e.target.reset();
      } else {
        setSubmitStatus({ success: false, message: "Failed to send message. Please try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({ success: false, message: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container contact-container" style={{ marginTop: "35px" }}>
      <h2 className="text-center fw-bold Contact-Us">Contact Us</h2>
      <div className="row d-flex contect-main justify-content-md-around ">
        <div className="col-md-5 mt-1">
          {submitStatus && (
            <div className={`alert ${submitStatus.success ? "alert-success" : "alert-danger"} mb-3`}>
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control contect-us-input" placeholder="Name" name="name" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control contect-us-input" placeholder="Mobile No." name="mobile" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control contect-us-input" placeholder="Email Id" name="email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control contect-us-input" rows="4" placeholder="Write Your Message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-5 py-2" style={{ backgroundColor: "#003366", border: "none" }} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="col-md-5 contact-info col-11">
          <div className="info-box p-4 rounded ">


            <div className="contact-item d-flex align-items-center mb-4  pt-4">
              <div className="icon-wrapper me-3 border ">
                <IoLocation className="fs-3 " />
              </div>
              <div className="contact-texts fs-5 ">
                D/45, Titanium City Center, 100 Feet Road,<br />
                Satellite, Ahmedabad - 380 015.
              </div>
            </div>
            <div className="contact-item d-flex align-items-center mb-4 mx-auto mt-3">
              <div className="icon-wrapper me-3">
                <IoCall className="fs-3 " />
              </div>
              <div >
                <a href="tel:+917863870341" className=" contact-texts text-decoration-none text-white fs-5">
                  +91 78638 70341
                </a>
              </div>
            </div>

            <div className="contact-item d-flex align-items-center mb-4 mx-auto mt-3">
              <div className="icon-wrapper me-3">
                <TbWorld className="fs-3 " />
              </div>
              <div>
                <a href="https://www.135degrees.in" target="_blank" rel="noopener noreferrer" className="contact-texts text-decoration-none text-white fs-5">
                  www.135degrees.in
                </a>
              </div>
            </div>

            <div className="contact-item d-flex align-items-center mx-auto mt-3">
              <div className="icon-wrapper me-3">
                <MdEmail className="fs-3 " />
              </div>
              <div className="contact-texts">
                <a href="mailto:care@135degrees.in" className="contact-texts text-decoration-none text-white fs-5">
                  care@135degrees.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
