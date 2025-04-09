import React, { useState, useEffect } from 'react';
import './OurMenu.css';

// Salad data with different names, ingredients and images
const saladData = [
    {
        id: 1,
        name: "QUINOA POMEGRANATE SALAD",
        ingredients: "Quinoa - Boiled (100gm), Cucumber - Chopped, Tomato - Chopped, Pomegranate, Chickpeas-Boiled (70gm), Bell Pepper - Chopped, Lettuce - Fine Chopped, Coriander Leaves",
        image: "./src/assets/Images/salad/QUINOA_POMEGRANATE_SALAD.JPG"
    },
    {
        id: 2,
        name: "TANGY PEANUT TWIST",
        ingredients: "Fry Peanuts, Tomato, Cucumber, Onion, Green Chilly, Coriander Leaves",
        image: "./src/assets/Images/salad/TANGY_PEANUT_TWIST.JPG"
    },
    {
        id: 3,
        name: "CARROT RAISIN SALAD",
        ingredients: "Carrot - Julienne, Raisin - Black, Raisin - Brown",
        image: "./src/assets/Images/salad/CARROT_RASIN_SALAD.JPG"
    },
    {
        id: 4,
        name: "QUINOA PANEER / TOFU SALAD",
        ingredients: "Quinoa - Boiled (100gm), Paneer or Tofu - Saute (40gm), Chickpea (50gm), Broccoli, Carrot-Cube, Cucumber, Tomato, Lettuce - Leaves, French Beans, Coriander Leaves",
        image: "./src/assets/Images/salad/QUINOA_PANEER.JPG"
    },
    {
        id: 5,
        name: "SOYA TOFU SALAD - CURD BASE",
        ingredients: "Soya Chunks - Boiled Saute (40gm), Tofu - Saute (50gm), Corn (30gm), Carrot, Cucumber,Tomato - Cherry, Onion, Spring Onion",
        image: "./src/assets/Images/salad/SOYA_TOFU_SALAD.JPG"
    },
    {
        id: 6,
        name: "PROTEIN BOMB SALAD",
        ingredients: "Fresh Moong, Sesame Seeds - White, Grilled Beetroot, Onion, Tomato, Cucumber, Peanuts-Roasted, Edamame Seeds",
        image: "./src/assets/Images/salad/PROTEIN_BOMB_SALAD.JPG"
    },
    {
        id: 7,
        name: "GREEK SALAD",
        ingredients: "Butter Lettuce, Lettuce Iceberg, Bell Pepper, Cucumber, Cherry Tomato, Black Olives, BabyCorn",
        image: "./src/assets/Images/salad/GREEK_SALAD.JPG"
    },
    {
        id: 8,
        name: "WALDORF SALAD",
        ingredients: "Apple, Black Grapes, Walnut, Celery",
        image: "./src/assets/Images/salad/WALDORF_SALAD.JPG"
    },
    {
        id: 9,
        name: "QUINOA AVOCADO SALAD",
        ingredients: "Quinoa - Boiled (100gm), Avocado - Cube Cutting (70gm), Carrot - Cube, Cucumber - Cube,Tomato - Cube, Lettuce - Fine Chopped, Spring Onion - Chopped, Broccoli (30gm), CorianderLeaves",
        image: "./src/assets/Images/salad/QUINOA_AVOCADO_SALAD.JPG"
    },
    {
        id: 10,
        name: "TANGY ROASTED CHICKPEA POMEGRANATE",
        ingredients: "Roasted Chickpea, Soya, Beetroot, Pomegranate, Carrot, Onion",
        image: "./src/assets/Images/salad/TANGY_ROASTED_CHICKPEA.JPG"
    },
    {
        id: 11,
        name: "QUINOA SOYA SALAD",
        ingredients: "Quinoa - Boiled (100gm), Soya Chunks (50gm), Carrot - Cube, Cucumber, Tomato, Lettuce-Leaves, French Beans, Coriander Leaves, Spring Onion",
        image: "./src/assets/Images/salad/QUINOA_SOYA_SALAD.JPG"
    },
    {
        id: 12,
        name: "SAUTÉ VEG BOMB",
        ingredients: "Carrot, Onion, Bell Pepper, Capsicum, Broccoli, Baby Corn, French Beans, Zucchini",
        image: "./src/assets/Images/salad/SAUTE_VEG_BOMB.JPG"
    },
    {
        id: 13,
        name: "SOM TOM SALAD",
        ingredients: "Raw Papaya - Julienne, Carrot - Julienne, Purple Cabbage - Julienne, Roasted Peanuts,Cucumber",
        image: "./src/assets/Images/salad/SOM_TOM_SALAD.JPG"
    },
    {
        id: 14,
        name: "ASIAN SPAGHETTI BOWL",
        ingredients: "Spaghetti, Purple Cabbage, Carrot - Finger Cut - Boiled, Tofu - Roasted, Cucumber, EdamameSeeds, Onion - White, Red Bell Pepper, French Beans, Roasted Peanuts",
        image: "./src/assets/Images/salad/ASIAN_SPAGHETTI_BOWL.JPG"
    },
    {
        id: 15,
        name: "WATERMELON FETA BLISS",
        ingredients: "Watermelon",
        image: "./src/assets/Images/salad/WATERMELON_FETA_BLISS.JPG"
    },
    {
        id: 16,
        name: "CAESAR SALAD",
        ingredients: "Butter Lettuce, Romaine Lettuce, Parmesan Cheese, Bread Croutons, Cucumber, Bell Pepper",
        image: "./src/assets/Images/salad/CAESAR_SALAD.JPG"
    },
];

const OurMenu = () => {
    const [fade, setFade] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Dynamically divide the salad data into two balanced columns
    const getColumnData = () => {
        const halfLength = Math.ceil(saladData.length / 2);
        const leftColumn = saladData.slice(0, halfLength);
        const rightColumn = saladData.slice(halfLength);
        return { leftColumn, rightColumn };
    };

    const { leftColumn, rightColumn } = getColumnData();

    // Disable scrolling when modal is open
    useEffect(() => {
        if (modalOpen) {
            // Save the current scroll position
            const scrollY = window.scrollY;
            // Add styles to prevent scrolling and keep the page in place
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Get the scroll position from the body's top property
            const scrollY = document.body.style.top;
            // Remove the fixed position
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            // Restore the scroll position
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [modalOpen]);

    // Open modal with selected image
    const openModal = (image, name) => {
        setSelectedImage({ src: image, alt: name });
        setModalOpen(true);
    };

    // Close modal only when close button is clicked
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="menu-section" style={{ marginTop: '35px' }}>
            <h2 className="menu-title">Our Menu</h2>
            <p className="menu-subtitle">Wholesome Choices, Crafted for You</p>
            <div className="menu-category-tabs">
                <h5 className="active-tab">Salads</h5>
            </div>

            {/* Content */}
            <div className={`menu-grid ${fade ? 'fade-in' : 'fade-out'}`}>
                <div className="menu-column" data-aos="fade-up">
                    {leftColumn.map((salad) => (
                        <div className="menu-item" key={salad.id}>
                            <img 
                                src={salad.image} 
                                alt={salad.name} 
                                className="item-image" 
                                onClick={() => openModal(salad.image, salad.name)}
                            />
                            <div className="Item-heading">
                                <h4>{salad.name}</h4>
                                <p>{salad.ingredients}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="menu-column" data-aos="fade-down">
                    {rightColumn.map((salad) => (
                        <div className="menu-item" key={salad.id}>
                            <img 
                                src={salad.image} 
                                alt={salad.name} 
                                className="item-image" 
                                onClick={() => openModal(salad.image, salad.name)}
                            />
                            <div className="Item-heading">
                                <h4>{salad.name}</h4>
                                <p>{salad.ingredients}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal - Now only closes with close button */}
            {modalOpen && selectedImage && (
                <div className="image-modal-overlay">
                    <div className="image-modal-content">
                        <button className="modal-close-button" onClick={closeModal}>×</button>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt} 
                            className="modal-image" 
                        />
                        <h3 className="modal-title">{selectedImage.alt}</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurMenu;