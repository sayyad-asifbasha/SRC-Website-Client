import React from "react";
import app from "../assets/images/ui-ux.avif";
import { Link } from "react-router-dom";
export default function Domains() {
  const move = (e) => {
    const container = document.getElementById("scroll");
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

  const domains = [
    { domainId: 1, domainName: "Webdev", domainIntro: "Webdev intro text" },
    { domainId: 2, domainName: "Appdev", domainIntro: "Appdev intro text" },
    {
      domainId: 2,
      domainName: "Cyber-Security",
      domainIntro: "Cyber-Security intro text",
    },
    { domainId: 4, domainName: "AI", domainIntro: "AI intro text" },
    {
      domainId: 5,
      domainName: "Competitive",
      domainIntro: "Competitive intro text",
    },
    { domainId: 6, domainName: "DSA", domainIntro: "DSA intro text" },
    { domainId: 7, domainName: "UI-UX", domainIntro: "UI-UX intro text" },
  ];
  return (
    <>
      <div className="domain-container">
        <div
          className="domain-head"
          style={{
            fontSize: "1.9rem",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Domains
        </div>
        <div
          id="scroll"
          onWheel={move}
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
        >
          {domains.map((ele) => {
            return (
              <Link
                to={`Domain/${ele.domainName}`}
                onClick={enableScroll}
                key={ele.domainId}
              >
                <div className="domain-element">
                  <div className="domain-image">
                    <img src={app} alt="Domain" />
                  </div>
                  <div className="domain-name">
                    <h3>{ele.domainName}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
