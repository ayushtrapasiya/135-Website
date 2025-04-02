import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoverArea.css';  
import { IoLocationSharp } from "react-icons/io5";
import location from '/src/assets/Images/Map.png'
import AOS from "aos";
import "aos/dist/aos.css"; 
const CoverArea = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
    return (
        <div className="areas-section py-5 px-3">
            <div className="container ">
                <h2 className="fw-bold text-center text-light m-0"  data-aos="fade-up">Areas We Cover</h2>
                <p className="m-0 fw-semibold text-center">Serving Your Area with Care and Precision</p>
                <div className="row align-items-center mt-3">
                    {/* Left - Image & Text in Same Line */}
                    <div className="col-lg-6 d-flex align-items-center  justify-content-md-end justify-content-center my-3">
                        <img 
                            src={location} 
                            alt="Service Map" 
                            className="img-fluid rounded-3 shadow map-img me-3"
                            style={{ maxWidth: "70%" }} 
                            data-aos="fade-right"
                        />
                    </div>
                    {/* Right - Content */}
                    <div className="col-lg-5 text-white"  >
                        <h5>
                            At 135 Degrees, we deliver fresh, hygienic, and professionally crafted salads, juices, and shakes across multiple locations. Our fast and reliable delivery service ensures you get healthy, high-quality meals right at your doorstep. We are constantly expanding to bring nutritious and convenient food options to more areas. Whether at home or work, enjoy fresh, wholesome meals hassle-free.
                        </h5>
                        <div className="row mt-3">
                            <div className="col-6">
                                <ul className="list-unstyled2">
                                    <li><IoLocationSharp /> Satellite</li>
                                    <li><IoLocationSharp /> Paldi</li>
                                    <li><IoLocationSharp /> Jivraj Park</li>
                                    <li><IoLocationSharp /> Makarba</li>
                                    <li><IoLocationSharp /> Ashram Road</li>
                                    <li><IoLocationSharp /> Highcourt</li>
                                    <li><IoLocationSharp /> Vejalpur</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled2">
                                    <li><IoLocationSharp /> SindhuBhavan</li>
                                    <li><IoLocationSharp /> Thaltej</li>
                                    <li><IoLocationSharp /> Shela</li>
                                    <li><IoLocationSharp /> Navrangpura</li>
                                    <li><IoLocationSharp /> C.G Road</li>
                                    <li><IoLocationSharp /> Vasna</li>
                                    <li><IoLocationSharp /> Vastrapur</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverArea;
