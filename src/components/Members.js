import React from "react";
import "../styles/Members.css";
import Swiper from "swiper";
import "swiper/css";
export default function Members() {
    return (
        <>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/macau.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Macau</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/rome.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Rome</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/jaipur.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Jaipur</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/dubai.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Dubai</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/barcelona.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Barcelona</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src="./assets/amsterdam.jpg" alt="member" />
                        </div>
                        <div class="slide-content">
                            <h2>Amsterdam</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt numquam ea aperiam esse
                                quia deserunt beatae ratione minus iusto
                                eligendi.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination"></div>
            </div>
        </>
    );
}
