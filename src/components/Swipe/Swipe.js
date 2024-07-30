import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as styles from "./Swipe.module.css";


const Swipe = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>光合成のための<br/>コラムです</h1>
                    <h2>BLOG</h2>
                </div>
                <div className={styles.SwiperContainer}>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    pagination={{
                        clickable: true,
                      }}
                    modules={[Navigation, Pagination]}
                    className={styles.mySwiper}
                    breakpoints={
                            {
                                561: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                            }
                        }
                    >
                       <SwiperSlide>
                        <div className={styles.SwiperArea}>
                            <div className={styles.SwiperCard}>
                                <div className={styles.SwiperImage}>
                                    <img src="/images/Hero01.jpg" alt="point"/>
                                </div>
                                <div className={styles.SwiperTag}>
                                    <p>イベント</p>
                                </div>
                                <div className={styles.SwiperText}>
                                    <p>2024.03.04</p>
                                    <h2>光合成の勉強会を開催しました</h2>
                                </div>
                            </div>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>
                        <div className={styles.SwiperArea}>
                            <div className={styles.SwiperCard}>
                                <div className={styles.SwiperImage}>
                                    <img src="/images/Hero01.jpg" alt="point"/>
                                </div>
                                <div className={styles.SwiperTag}>
                                    <p>イベント</p>
                                </div>
                                <div className={styles.SwiperText}>
                                    <p>2024.03.04</p>
                                    <h2>光合成の勉強会を開催しました</h2>
                                </div>
                            </div>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>
                        <div className={styles.SwiperArea}>
                            <div className={styles.SwiperCard}>
                                <div className={styles.SwiperImage}>
                                    <img src="/images/Hero01.jpg" alt="point"/>
                                </div>
                                <div className={styles.SwiperTag}>
                                    <p>イベント</p>
                                </div>
                                <div className={styles.SwiperText}>
                                    <p>2024.03.04</p>
                                    <h2>光合成の勉強会を開催しました</h2>
                                </div>
                            </div>
                        </div>
                       </SwiperSlide>
                    </Swiper>
                </div>
               <div className={styles.Button}>
                      <a href="/">ブログの一覧はこちら</a>
                </div>
            </div>
        </section>
    );
}

export default Swipe;
