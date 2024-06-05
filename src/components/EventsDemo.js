import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/images/contact-image-3.jpg";
import "../styles/EventsDemo.css";
import "react-vertical-timeline-component/style.min.css";
export default function EventsDemo() {
  const eventsList = [
    {
      id: 1,
      isUpcoming: true,
      name: "Aadhya",
      domain: 1, // for events that is related all domains
      location: "CSE department",
      date: "11-july-2024",
      time: "8-00 AM - 6-00 PM",

      description:
        "Its a new programm conducted by CSE dept.import { Link } from react-router-domimport icon from ../assets/images/contact-image-3.jpg import ../styles/EventsDemo.css import react-vertical-timeline-component/style.min.css Its a new programm conducted by CSE dept.import { Link } from react-router-domimport icon from ../assets/images/contact-image-3.jpg import ../styles/EventsDemo.css import react-vertical-timeline-component/style.min.css",
      Coordinators: [
        {
          id: 11,
          name: "Nag",
        },
        {
          id: 12,
          name: "Arjun",
        },
      ],
      registraionLink: "link",
      winners: [],
      leaderBoard: "",
      links: [],
    },
    {
      id: 2,
      isUpcoming: false,
      name: "Aadhya",
      domain: 1, // Web development related domain id
      location: "CSE department",
      date: "11-Aug-2024",
      description: "Its a new programm conducted by CSE dept.",
      Coordinators: [
        {
          id: 11,
          name: "Nag",
        },
        {
          id: 12,
          name: "Arjun",
        },
      ],
      registraionLink: "link",
      winners: [1, 2],
      leaderBoard: "link",
      links: ["linkedin", "instagram"],
    },

    {
      id: 3,
      isUpcoming: true,
      name: "Aadhya",
      domain: 3, // App Development Domain id
      location: "CSE department",
      date: "11-Sept-2024",
      time: "8-00 AM - 6-00 PM",

      description:
        "Its a new programm conducted by CSE dept.Its a new programm conducted by CSE dept.Its a new programm conducted by CSE dept",
      Coordinators: [
        {
          id: 11,
          name: "Nag",
        },
        {
          id: 12,
          name: "Arjun",
        },
      ],
      registraionLink: "link",
      winners: [1, 2],
      leaderBoard: "link",
      links: ["linkedin", "instagram"],
    },

    {
      id: 4,
      isUpcoming: true,
      name: "CSE",
      domain: 1, // for events that is related all domains
      location: "CSE department",
      date: "11-OCT-2024",
      time: "8-00 AM - 6-00 PM",
      description:
        "Its a new programm conducted by CSE dept.Its a new programm conducted by CSE dept.Its a new programm conducted by CSE dept.",
      Coordinators: [
        {
          id: 11,
          name: "Nag",
        },
        {
          id: 12,
          name: "Arjun",
        },
      ],
      registraionLink: "link",
      winners: [],
      leaderBoard: "",
      links: [],
    },
    {},
  ];
  return (
    <>
      <section>
        <div className="events-demo">
          <div className="events">
            <div className="event-head">Upcoming Events</div>
            {/* One Event element */}
            {/* eslint-disable-next-line */}
            {eventsList.map((element) => {
              if (element.isUpcoming) {
                return (
                  <div className="event-element" key={element.id}>
                    {/* Event Image */}
                    <div className="event-image">
                      <img src={icon} alt="icon" />
                    </div>
                    <div className="event-info">
                      <div className="date-month-year">
                        <div className="date">
                          {element["date"].split("-")[0]}
                        </div>
                        <div className="month">
                          {element["date"].split("-")[1]}-
                          {element["date"].split("-")[2]}
                        </div>
                      </div>
                      <div className="total-event-info">
                        <div className="event-name">
                          <Link to={`Events/${element.name}`}>
                            {element.name}
                          </Link>
                        </div>
                        <div className="time-venue">
                          {element.time} | {element.location}
                        </div>
                        {/* <div className="venue"></div> */}

                        <div className="event-desc">{element.description}</div>
                        <div>
                          {/* <button className="know-more"> */}
                          <Link
                            to={`Events/${element.name}`}
                            className="know-more"
                          >
                            Know more
                          </Link>
                          {/* </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
