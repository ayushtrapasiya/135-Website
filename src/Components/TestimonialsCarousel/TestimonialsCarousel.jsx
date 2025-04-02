import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';
import { RiDoubleQuotesL } from "react-icons/ri";
const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Anup Parekh",
        position: "CEO, NEXORA TECH",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 5
    },
    {
        text: "Second testimonial comes here. This is also fully customizable and smooth.",
        author: "John Doe",
        position: "Founder, Example Inc.",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 4
    },{
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
        author: "Anup Parekh",
        position: "CEO, NEXORA TECH",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 5
    },
];

const TestimonialsCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonial-section mt-5">
            <h2>Testimonials</h2>
            <div className="testimonial-card">
                <h1><RiDoubleQuotesL color='#0B2545'/></h1>
                <p>{testimonials[current].text}</p>
                <div className="testimonial-footer">
                    <img src={testimonials[current].image} alt="author" />
                    <div>
                        <h4>{testimonials[current].author}</h4>
                        <small>{testimonials[current].position}</small>
                        <div className="stars">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i}>{i < testimonials[current].rating ? '★' : '☆'}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="TestimonialsCarousel-dots">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={current === index ? "active" : ""}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
