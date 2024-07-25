import React from "react";
import { Link } from "gatsby";
import * as styles from "./Rooter.module.css";

const Rooter = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Title}>
                <h1>templateSite</h1>
            </div>
            <div className={styles.GridContainer}>
                
                <div className={styles.Button}>
                    <Link to="/template01">template01</Link>
                </div>
                <div className={styles.Button}>
                    <Link to="/template02">template02</Link>
                </div>
                <div className={styles.Button}>
                    <Link to="/template0102">template0102</Link>
                </div>
                <div className={styles.Button}>
                    <Link to="/template02">template02</Link>
                </div>
            </div>
        </section>
    );
};

export default Rooter;
