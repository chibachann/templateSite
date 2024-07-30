import React from "react";
import * as styles from "./Concept.module.css";

const Concept = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.ImageBackBox}/>
                <div className={styles.Image}>
                    <img src="/images/Hero01.jpg" alt="plant" />
                </div>
                
               <div className={styles.Title}>
                    <h1>はじめに</h1>
                    <h2>CONCEPT</h2>
                </div>
                <div className={styles.Text}>
                    <h2>光合成がをたくさん使った空間を<br/>葉緑素によって実現</h2>
                    <p>
                        光合成は、太陽光をエネルギー源として、二酸化炭素と水から酸素とブドウ糖を合成する生物学的なプロセスです。
                        このプロセスは、植物、藻類、細菌などの生物によって行われます。
                    </p>
                    <p>
                        光合成は、生物の生存にとって重要なプロセスであり、地球上の生物の生存にとって重要な役割を果たしています。
                        葉緑素と共に明るい未来を創造するために、私たちは光合成をテーマにした空間を提供しています。
                    </p>
                </div>
                <div className={styles.Button}>
                    <a href="/">CONCEPT</a>
                </div>
                <div className={styles.BottomBackBox}/>
            </div>
        </section>
    );
}

export default Concept;
