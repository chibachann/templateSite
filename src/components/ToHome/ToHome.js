import React from "react";
import { Link } from "gatsby";
import * as styles from "./ToHome.module.css";

const ToHome = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Button}>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </section>
    );
};

export default ToHome;
