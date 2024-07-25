import React from "react";
import * as styles from "./Point.module.css";

const Point = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
               <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>POINT</h1>
                        <h2>01</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/Hero01.jpg" alt="point"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>光合成を思いやる気持ち</h2>
                        <p>
                            光合成をおこなったら、植物は元気になります。
                            植物が元気になると、私たちも元気になります。光合成を思いやる気持ちを持ちましょう。
                            皆様と一緒に、光合成を思いやる気持ちを持ちましょう。
                        </p>
                    </div>
                </div>
                <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>POINT</h1>
                        <h2>02</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/Hero01.jpg" alt="point"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>光合成を思いやる気持ち</h2>
                        <p>
                            光合成をおこなったら、植物は元気になります。
                            植物が元気になると、私たちも元気になります。光合成を思いやる気持ちを持ちましょう。
                            皆様と一緒に、光合成を思いやる気持ちを持ちましょう。
                        </p>
                    </div>
                </div>
                <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>POINT</h1>
                        <h2>03</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/Hero01.jpg" alt="point"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>光合成を思いやる気持ち</h2>
                        <p>
                            光合成をおこなったら、植物は元気になります。
                            植物が元気になると、私たちも元気になります。光合成を思いやる気持ちを持ちましょう。
                            皆様と一緒に、光合成を思いやる気持ちを持ちましょう。
                        </p>
                    </div>
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

export default Point;
