import React, { useEffect, useState } from "react";
import carousalImg1 from "../assets/images/carousal-1.jpg";
import carousalImg2 from "../assets/images/carousal-2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { changeIntroText } from "../features/carousel/carousel";
import { useLocation, useParams } from "react-router-dom";
const images = [carousalImg1, carousalImg2, carousalImg1];
export default function Carousal() {
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

  const dispatch = useDispatch();
  const introText =
    "Main Page Component, sit amet consectetur adipisicing elit. Quasi reiciendis veritatis iure, aperiam vitae obcaecati consequatur at.Praesentium, asperiores facere ad repellendus voluptatibusconsequatur nisi commodi a? Incidunt odio magnam veritatis! Temporaconsectetur excepturi ipsam in! Nisi exercitationem, vel autemratione iusto fugiat esse labore! Enim earum vel accusamus hic ipsumdebitis aperiam praesentium eos necessitatibus facilis laudantiumquasi odit, deserunt cumque quas quae exercitationem soluta, cumdoloremque id! Dignissimos animi, id maxime autem provident quo consequatur rerum fugiat qui repellendus quam aliquid sequi doloressed placeat ea distinctio quasi?......";

  const location = useLocation();
  const { domainName } = useParams();
  console.log(location);
  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(changeIntroText(introText));
    } else {
      domains.map((text) => {
        if (text.domainName === domainName) {
          dispatch(changeIntroText(text.domainIntro));
        }
      });
    }
  }, [location]);
  return (
    <div>
      <center>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showArrows={true}
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          transitionTime={1000}
          width="95%"
        >
          {images.map((item) => {
            return (
              <div
                className="slide-holder"
                style={{
                  background: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              >
                <div className="text-container">
                  <h2>Bugatti Chiron Super Sport 300</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua se. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.kjahflahfhf oiwwiro asfh
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="carousal-content">
          <h2>Welcome to SRC</h2>
          <h4>{useSelector((state) => state.introText)}</h4>
        </div>
      </center>
    </div>
  );
}
