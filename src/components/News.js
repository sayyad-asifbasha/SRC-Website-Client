import React, { useState } from "react";
import icon from "../assets/images/contact-image-3.jpg";

import "react-vertical-timeline-component/style.min.css";
import Modal from "react-modal";
import "../styles/News.css";
export default function EventsDemo() {
  const customStyles = {
    content: {
      textAlign: "left",
      height: "75%",
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      paddingTop: "0",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    enableScroll();
    setIsOpen(true);
    const news = e.target.previousElementSibling;
    const headline = news.previousElementSibling;
    const short = headline.previousElementSibling;

    setTimeout(() => {
      document.getElementById("short").innerText = short.innerText;

      document.getElementById("headline-dom").innerText = headline.innerText;
      document.getElementById("news-info-dom").innerText = news.innerText;
    }, 10);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement("#root  ");
  const newsList = [
    {
      id: 1,
      date: "24-07-july",
      short: "Calling for cordinators",
      headline:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia voluptatem obcaecati architecto expedita",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora enim!",
    },
    {
      id: 2,
      date: "24-07-july",
      short: "Hackathon do's and dont's",
      headline:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia voluptatem obcaecati architecto expedita",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi tempora",
    },
    {
      id: 3,
      date: "24-07-july",
      short: "Aadhya winners announced",
      headline:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia voluptatem obcaecati architecto expedita",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt a animi",
    },
    {
      id: 4,
      date: "24-07-july",
      short: "Event Announced",
      headline:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia voluptatem obcaecati architecto expedita",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt",
    },
    {
      id: 5,
      date: "24-07-july",
      short: "Registration for Event",
      headline:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia voluptatem obcaecati architecto expedita",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosofficia voluptatem obcaecati architecto expedita repellendus corrupti quis provident numquam rem nobis, dolor, libero error molestias? Deserunt",
    },
  ];
  const jump = (e) => {
    const container = document.getElementById("jump");
    container.scrollLeft += e.deltaY;
  };
  const enableScroll = () => {
    document.removeEventListener("wheel", preventDefault, false);
  };
  const disableScroll = () => {
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
  };
  const preventDefault = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  return (
    <>
      <section>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          id="modal"
        >
          <div className="modal-head">
            {/* eslint-disable-next-line */}
            <h2 ref={(_subtitle) => (subtitle = _subtitle)} id="short"></h2>
            <button onClick={closeModal} className="close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <div>
            <div id="headline-dom"></div>
            <div id="news-info-dom"></div>
          </div>
        </Modal>
        <div className="news-container" id="news-container">
          <div className="new-header">Latest News</div>
          <div
            className="sub-news-container"
            id="jump"
            onWheel={jump}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
          >
            {newsList.map((item) => {
              return (
                <div className="news-element" key={item.id}>
                  {/* <div> */}
                  <div className="news-img">
                    <img src={icon} alt="icon" />
                  </div>
                  <div className="news-details">
                    <div className="admin-date">
                      <div className="admin">Admin</div>
                      <div className="date">{item.date}</div>
                    </div>
                    <div className="news-update" id="news-update">
                      <div className="news-short">{item.short}</div>
                      <div className="news-headline">
                        <h5>{item.headline}</h5>
                      </div>
                      <div className="news-info-brief">{item.news}</div>
                      <button className="show-more" onClick={openModal}>
                        Read More
                      </button>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// 656985158;
