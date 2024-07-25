import React from "react";
import * as styles from "./Hero.module.css";

const Hero = () => {

    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.heroImage1}>
                    <img src="/images/Hero01.jpg" alt="hero"/>
                </div>
                <div className={styles.heroImage2}>
                    <img src="/images/about.jpg" alt="hero"/>
                </div>
                
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle}>ここにはたいとるが<br/>はいるとか</h1>
                    <a href="/" className={styles.heroButton}>サイト内リンク</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
