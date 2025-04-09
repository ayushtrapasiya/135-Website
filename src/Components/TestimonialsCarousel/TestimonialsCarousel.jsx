import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
    {
        text: "135 Degrees offers an amazing salad variety with fresh, flavorful options at unbeatable prices! 🥗 Generous portions, great quality, and perfect for healthy, tasty meals. Highly recommend for salad lovers! A must-visit spot! 👍 #BestSalads #GreatValue #HealthyEats",
        author: "Anup Parekh",
        position: "CEO, NEXORA TECH",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 5
    },
    {
        text: "Finally found a service that delivers fresh salads and detox juices right to our office! 135 Degrees is professional, always on time, and perfect for anyone looking to eat clean during work hours. Highly recommend for corporates in Ahmedabad.",
        author: "Vikas Soni",
        position: "Owner, Abhusan Jewels",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 4
    },
    {
        text: "We’ve been ordering from 135 Degrees for a month now, and it’s been fantastic! Their fruit salads and protein shakes are our team’s favorite. It’s healthy, tasty, and super convenient. Great job on maintaining hygiene and quality!",
        author: "Ami Gamit",
        position: "Manager, AMTech Design",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 5
    },
    {
        text: "135 Degrees is a lifesaver for our office team! Their green salads are crunchy and refreshing, and the smoothies are full of flavor without added sugar. A great way to promote wellness at the workplace. Delivery is always on time too!",
        author: "Ashwin Parmar",
        position: "Manager, LoansMitra",
        image: "https://amtechdesign.in/wp-content/uploads/2023/10/Anup-Parekh-About-Profile.jpg",
        rating: 4
    },
    {
        text: "Healthy eating made easy by 135 Degrees! Their cold-pressed juices and nutrient-rich salads are perfect for busy office days. The best part? Everything comes clean, chilled, and ready to eat. Ideal for professionals who care about what they consume.",
        author: "Chinmay Nayak",
        position: "CEO, CN Photography",
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

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? "star filled" : "star"}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="testimonial-section" style={{ marginTop: "35px" }}>
            <h2>Testimonials</h2>
            <div className="testimonial-card">
                <div className="quote-icon">
                    <RiDoubleQuotesL />
                </div>
                <p>{testimonials[current].text}</p>
                <div className="testimonial-footer">
                    {/* <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].author} 
                    /> */}
                    <div className="testimonial-author">
                        <h4>{testimonials[current].author}</h4>
                        <small>{testimonials[current].position}</small>
                        <div className="stars">
                            {renderStars(testimonials[current].rating)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? "active" : ""}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;