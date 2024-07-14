import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/images/contact-image-3.jpg";

import "react-vertical-timeline-component/style.min.css";
import Modal from "react-modal";
import "../styles/News.css";
import axios from "axios";
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
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;

    const disableScroll = () => {
      document.addEventListener("wheel", preventDefault, { passive: false });
    };

    const enableScroll = () => {
      document.removeEventListener("wheel", preventDefault, false);
    };

    if (container) {
      container.addEventListener("mouseenter", disableScroll);
      container.addEventListener("mouseleave", enableScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", disableScroll);
        container.removeEventListener("mouseleave", enableScroll);
      }
      enableScroll();
    };
  }, []);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    enableScroll();
    setIsOpen(true);
    const news = e.target.previousElementSibling;
    const headline = news.previousElementSibling;

    setTimeout(() => {
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

  const getNewsApi = process.env.REACT_APP_GET_NEWS;
  const [news, setNews] = useState(null);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await axios.get(getNewsApi);
      setNews(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
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
            ref={containerRef}
          >
            {news &&
              news.map((item) => {
                return (
                  <div className="news-element" key={item._id}>
                    <div className="news-img">
                      <img src={icon} alt="icon" />
                    </div>
                    <div className="news-details">
                      <div className="admin-date">
                        <div className="admin">Admin</div>
                        <div className="date">
                          {new Date(item.date).toLocaleDateString(
                            "en-IN",
                            options
                          )}
                        </div>
                      </div>
                      <div className="news-update" id="news-update">
                        {/* <div className="news-short">{item.title}</div> */}
                        <div className="news-headline">
                          <h5>{item.title}</h5>
                        </div>
                        <div className="news-info-brief">{item.content}</div>
                        <button className="show-more" onClick={openModal}>
                          Read More
                        </button>
                      </div>
                    </div>
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
