import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./Works.module.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Works = () => {

    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.TopImage}>
                        <img src="/images/Hero01.jpg" alt="hero" />
                </div>

                <div className={styles.Title}>
                    <h1>光合成の成功例</h1>
                    <h2>WORKS</h2>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className={styles.mySwiper}
                    breakpoints={{
                        561: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className={styles.SwiperCard}>
                            <div className={styles.SwiperImage}>
                                <img src="/images/Hero01.jpg" alt="point" />
                            </div>
                            <div className={styles.SwiperText}>
                                <h2>光合成の力を使って酸素を生み出すことができる</h2>
                                <h1>緑推進緑化委員会　解決</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.SwiperCard}>
                            <div className={styles.SwiperImage}>
                                <img src="/images/Hero01.jpg" alt="point" />
                            </div>
                            <div className={styles.SwiperText}>
                                <h2>光合成の力を使って酸素を生み出すことができる</h2>
                                <h1>緑推進緑化委員会　解決</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.SwiperCard}>
                            <div className={styles.SwiperImage}>
                                <img src="/images/Hero01.jpg" alt="point" />
                            </div>
                            <div className={styles.SwiperText}>
                                <h2>光合成の力を使って酸素を生み出すことができる</h2>
                                <h1>緑推進緑化委員会　解決</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className={styles.SwiperCard}>
                            <div className={styles.SwiperImage}>
                                <img src="/images/Hero01.jpg" alt="point" />
                            </div>
                            <div className={styles.SwiperText}>
                                <h2>光合成の力を使って酸素を生み出すことができる</h2>
                                <h1>緑推進緑化委員会　解決</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className={styles.SwiperCard}>
                            <div className={styles.SwiperImage}>
                                <img src="/images/Hero01.jpg" alt="point" />
                            </div>
                            <div className={styles.SwiperText}>
                                <h2>光合成の力を使って酸素を生み出すことができる</h2>
                                <h1>緑推進緑化委員会　解決</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    

                </Swiper>
                <div className={styles.Button}>
                    <a href="">光合成の一覧はこちら</a>
                </div>
            </div>

        </section>
    );
};

export default Works;
