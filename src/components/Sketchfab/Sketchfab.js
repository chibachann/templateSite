import React from "react";
import * as styles from "./Sketchfab.module.css";

export const Sketchfab = () => {
    return (
        <section className={styles.Section}>
           <div class="sketchfab-embed-wrapper"> 
                <iframe 
                    allowfullscreen mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    width={920}
                    height={700}
                    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d561e5cb65b941c98566ae18bb1bc1f0/embed"> 
                </iframe> 
               
            </div>
        </section>
    );
}

export default Sketchfab;
