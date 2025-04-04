import React, { useState, useRef } from 'react';
import './OurMenu.css';

const categories = ["Salads", "Juices", "Shakes"];

const OurMenu = () => {
    const [menuHead, setMenuHead] = useState("Salads");
    const [fade, setFade] = useState(true);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleMenu = (name) => {
        if (name === menuHead) return;
        triggerTransition(name);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const distance = touchStartX.current - touchEndX.current;

        if (Math.abs(distance) > 50) { 
            const currentIndex = categories.indexOf(menuHead);
            if (distance > 0) {
                // Swipe Left
                const nextIndex = (currentIndex + 1) % categories.length;
                triggerTransition(categories[nextIndex]);
            } else {
                // Swipe Right
                const nextIndex = (currentIndex - 1 + categories.length) % categories.length;
                triggerTransition(categories[nextIndex]);
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const triggerTransition = (newMenu) => {
        setFade(false); // hide
        setTimeout(() => {
            setMenuHead(newMenu); // change
            setFade(true); // show with animation
        }, 100); // small delay for smoothness
    };

    return (
        <section 
            className="menu-section mt-5" 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
        >
            <h2 className="menu-title text-light">Our Menu</h2>
            <p className="menu-subtitle">Wholesome Choices, Crafted for You</p>
            <div className='d-flex justify-content-around'>
                {categories.map((cat) => (
                    <h5
                        key={cat}
                        className={`fw-bold Menu-catagary-name ${menuHead === cat ? 'active-tab' : ''}`}
                        onClick={() => handleMenu(cat)}
                    >
                        {cat}
                    </h5>
                ))}
            </div>

            {/* Content */}
            <div className={`menu-grid mt-5 ${fade ? 'fade-in' : 'fade-out'}`}>
                {menuHead === "Salads" &&     <>
        <div className="menu-column " data-aos="fade-up">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/salad.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Salads</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="menu-column" data-aos="fade-down">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/salad.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Salads</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
    </>}
                {menuHead === "Juices" &&     <>
        <div className="menu-column">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/juice.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Juices</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="menu-column">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/juice.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Juices</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
    </>}
        {menuHead === "Shakes" &&<>
        <div className="menu-column">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/salad.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Shakes</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="menu-column">
            {[...Array(4)].map((_, i) => (
                <div className="menu-item" key={i}>
                   <img src="/src/assets/Images/salad.avif" alt="" srcset="" className='item-image' />
                    <div className='Item-heading'>
                        <h4>Shakes</h4>
                        <p>Cucumber, Tomato, Onion, Cilantro, Carrot, Cabbage,<br /> Mint Leaves crafted with the Indian Spices</p>
                    </div>
                </div>
            ))}
        </div>
    </> }
            </div>
        </section>
    );
};



export default OurMenu;
