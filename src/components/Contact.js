import React from "react";
// import contactImage from "../assets/images/contact-image-4.jpg";
export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contact-container">
                    <div className="contact-visit-info">
                        <div>
                            <div className="visit-info">
                                <h3>Visit Us</h3>
                                <div className="addr-info">
                                    <div className="addr">
                                        {" "}
                                        RGKUT, RK VALLEY
                                    </div>
                                    <div className="addr">IDUPULAPAYA AP</div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <h3>Contact Us</h3>
                                <div className="addr-info">
                                    <div className="addr">+91 0123456789</div>
                                    <div className="addr">+91 0123456789</div>
                                    <div className="addr">lorem@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-contact-container">
                        <div className="contact-head">
                            <h3>Contact us</h3>
                            <h4>We want to hear from you</h4>
                        </div>
                        <div className="contact-fields">
                            <form action="#" method="post">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                <textarea
                                    style={{ resize: "none" }}
                                    placeholder="Enter message"
                                    name="desc"
                                    id="desc"
                                    cols={30}
                                    rows={7}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="submit-message"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
