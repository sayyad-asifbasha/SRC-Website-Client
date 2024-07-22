import React from "react";
import "../styles/Events.css";
import { Link } from "react-router-dom";
import eventImg from "../assets/images/contact-image-3.jpg";
const events = [
  {
    id: 1,
    name: "Aadhya",
    location: "CSE Dept,RK Valley",
    date: "20 APR,2024 10:00AM-05:00PM",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    isUpcoming: true,
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? ",
  },
  {
    id: 2,
    name: "Aadhya1",
    location: "CSE Dept,RK Valley",
    date: "20 APR,2024 10:00AM-05:00PM",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    isUpcoming: true,
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? ",
  },
  {
    id: 3,
    name: "Aadhya3",
    location: "CSE Dept,RK Valley",
    date: "20 APR,2024 10:00AM-05:00PM",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    isUpcoming: true,
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? ",
  },
];
export default function Events() {
  return (
    <>
      <div className="events-landing-img">
        <h1>Our Events</h1>
      </div>
      <div className="Event-list">
        {events.map((event) => {
          return (
            <div className="event-container">
              <div className="event-container-img">
                <img src={eventImg} alt="" srcSet="" />
              </div>
              <div className="event-details">
                <div className="event-date">
                  <h1>{event.date.slice(0, 2)}</h1>
                  <span>{event.date.slice(3, 11)}</span>
                </div>
                <div className="event-venue-desc">
                  <div className="event-venue">
                    <h2>{event.name}</h2>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      {event.date.slice(11)}
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <div className="event-description">
                    <div className="intro">
                      <p>{event.description}</p>
                    </div>
                    <Link to={`/Events/${event.name}`}>
                      <button>Get More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
