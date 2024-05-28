import React from "react";
import carousalImg1 from "../assets/images/carousal-1.jpg";
import carousalImg2 from "../assets/images/carousal-2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Carousal() {
    return (
        <>
            <section id="carousal">
                <div className="carousal-container">
                    {/* <div className="carousal-img">
                        <img src={carousalImg} alt="" />
                    </div> */}
                    <div className="carousal-img">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            swipeable={true}
                            stopOnHover={true}
                            showStatus={false}
                        >
                            <div>
                                <img
                                    className="images"
                                    src={carousalImg1}
                                    alt="Carousal"
                                />
                            </div>
                            <div>
                                <img
                                    className="images"
                                    src={carousalImg2}
                                    alt="Carousal"
                                />
                            </div>
                            <div>
                                <img
                                    className="images"
                                    src={carousalImg1}
                                    alt="Carousal"
                                />
                            </div>
                        </Carousel>
                    </div>
                    <div className="carousal-content">
                        <h2>Welcome to SRC</h2>
                        <h4>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quasi reiciendis veritatis iure, aperiam vitae
                            obcaecati consequatur at. Praesentium, asperiores
                            facere ad repellendus voluptatibus consequatur nisi
                            commodi a? Incidunt odio magnam veritatis! Tempora
                            consectetur excepturi ipsam in! Nisi exercitationem,
                            vel autem ratione iusto fugiat esse labore! Enim
                            earum vel accusamus hic ipsum debitis aperiam
                            praesentium eos necessitatibus facilis laudantium
                            quasi odit, deserunt cumque quas quae exercitationem
                            soluta, cum doloremque id! Dignissimos animi, id
                            maxime autem provident quos consequatur rerum fugiat
                            qui repellendus quam aliquid sequi dolores sed
                            placeat ea distinctio quasi?......
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}
