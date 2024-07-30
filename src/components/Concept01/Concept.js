import React from "react";
import * as styles from "./Concept.module.css";

const Concept = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
               <div className={styles.Title}>
                    <h1>光合成の行いかた</h1>
                    <h2>CONCEPT</h2>
                </div>
                <div className={styles.Image}>
                    <img src="/images/Hero01.jpg" alt="plant" />
                </div>
                <div className={styles.Text}>
                    <h2>光合成のこだわり</h2>
                    <p>
                        光合成は、太陽光をエネルギー源として、二酸化炭素と水から酸素とブドウ糖を合成する生物学的なプロセスです。
                        このプロセスは、植物、藻類、細菌などの生物によって行われます。
                        光合成は、生物の生存にとって重要なプロセスであり、地球上の生物の生存にとって重要な役割を果たしています。
                        光合成は、生物の生存にとって重要なプロセスであり、地球上の生物の生存にとって重要な役割を果たしています。
                        光合成は、生物の生存にとって重要なプロセスであり、地球上の生物の生存にとって重要な役割を果たしています。
                    </p>
                </div>
                <div className={styles.Button}>
                    <a href="">詳しく見る</a>
                </div>
                <div className={styles.SubImage}>
                <picture>
                    <source srcSet="/images/Hero01.jpg" media="(min-width: 561px)" />
                    <img src="" alt="aa"/>
                </picture>
                    
                </div>
            </div>
        </section>
    );
}

export default Concept;
