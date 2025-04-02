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
    <div className="container contact-container mt-5">
      <h2 className="text-center fw-bold Contact-Us">Contact Us</h2>
      <div className="row d-flex contect-main justify-content-md-around">
        <div className="col-md-5">
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
          <div className="info-box p-3">
            <p>
              <IoLocation className="fs-2" /> &nbsp;&nbsp;D/45, Titanium City Center, 100 Feet Road, Satellite, Ahmedabad - 380 015.
            </p>
            <br />
            <br />
            <p>
              <IoCall className="fs-2" /> &nbsp;&nbsp;
              <a href="tel:+917863870341" style={{ textDecoration: "none", color: "white" }}>
                ‪+91 78638 70341‬
              </a>
            </p>
            <br />
            <br />
            <p>
              <TbWorld className="fs-2" />&nbsp;&nbsp;
              <a href="https://www.135degrees.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white"}}>
                www.135degrees.in
              </a>
            </p>
            <br />
            <br />
            <p>
              <MdEmail className="fs-2" />&nbsp;&nbsp;
              <a href="mailto:care@135degrees.in" style={{ textDecoration: "none", color: "white" }}>
                care@135degrees.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
