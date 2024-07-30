import React from "react";
import { useState, useEffect } from "react";
import * as styles from "./Slideshow.module.css";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "/images/Hero01.jpg",
        "/images/Hero02.jpg",
        "/images/Hero03.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.ImageArea}>
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`}/>
                </div>
                
            </div>
        </section>
    );
}

export default Slideshow;
