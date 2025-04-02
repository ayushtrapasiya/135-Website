import React from "react";
 

export default function Locations() {
  return (
    <div className="d-flex justify-content-center">
    <iframe
    width="100%"
    height="500"
    frameBorder="0"
    style={{ border: 0, marginTop: "20px" }}
    allowFullScreen
    loading="lazy"
    className="col-11"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1417.7586613903077!2d72.5217668900693!3d23.012543766268646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85002740738d%3A0x3c2334246ba63b5e!2s135%20Degrees!5e1!3m2!1sen!2sin!4v1743399167853!5m2!1sen!2sin"
  ></iframe></div>
  );
}
