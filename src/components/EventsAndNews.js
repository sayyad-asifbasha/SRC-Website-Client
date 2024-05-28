import React from "react";
import icon from "../assets/svg/chevron-right-solid.svg";

import "react-vertical-timeline-component/style.min.css";
export default function EventsAndNews() {
    return (
        <>
            <section>
                <div className="events-notice">
                    <div className="events">
                        <div className="event-head head">Events</div>
                        <div className="event-element">
                            <div className="date-month">
                                <div className="date">27</div>
                                <div className="month">OCT</div>
                            </div>
                            <div className="total-event-info">
                                <div>
                                    <div className="event-name">Aadhya</div>
                                    <div className="event-time-venue">
                                        12:00, CSE DEPT
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <img src={icon} alt="icon" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="event-element">
                            <div className="date-month">
                                <div className="date">27</div>
                                <div className="month">OCT</div>
                            </div>
                            <div className="total-event-info">
                                <div>
                                    <div className="event-name">Aadhya</div>
                                    <div className="event-time-venue">
                                        12:00, CSE DEPT
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <img src={icon} alt="icon" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notice">
                        <div className="notice-head head">News and Updates</div>
                        <div className=" notice-element">
                            <div className="total-news-info">
                                <div>
                                    <div className="news-update">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eos officia voluptatem
                                        obcaecati architecto expedita
                                        repellendus corrupti quis provident
                                        numquam rem nobis, dolor, libero error
                                        molestias? Deserunt a animi tempora
                                        enim!
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <img src={icon} alt="icon" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
