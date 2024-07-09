import React, { useEffect, useState } from "react";
import carousalImg1 from "../assets/images/carousal-1.jpg";
import carousalImg2 from "../assets/images/carousal-2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { changeIntroText, changeDomainId } from "../features/carousel/carousel";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import DomainInfo from "./DomainMembers";
const images = [carousalImg1, carousalImg2, carousalImg1];
export default function Carousal() {
  // init of variables
  // init React hooks

  const dispatch = useDispatch();
  const [domain, setDomain] = useState(null);
  const location = useLocation();
  const { domainName } = useParams();

  // useEffect for getting domains

  useEffect(() => {
    getDomains();
  }, [location]);

  // Init of variables

  const getDomainsApi = process.env.REACT_APP_GET_DOMAINS;

  // Function for getting domains

  const getDomains = async () => {
    try {
      const res = await axios.get(getDomainsApi);
      setDomain(res.data);
      if (location.pathname === "/") {
        dispatch(changeIntroText(introText));
        dispatch(changeDomainId(""));
      } else {
        console.log(domainName);
        res.data.map((item) => {
          if (item.name === domainName) {
            dispatch(changeDomainId(item._id));
            dispatch(changeIntroText(item.description));
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const introText =
    "Main Page Component, sit amet consectetur adipisicing elit. Quasi reiciendis veritatis iure, aperiam vitae obcaecati consequatur at.Praesentium, asperiores facere ad repellendus voluptatibusconsequatur nisi commodi a? Incidunt odio magnam veritatis! Temporaconsectetur excepturi ipsam in! Nisi exercitationem, vel autemratione iusto fugiat esse labore! Enim earum vel accusamus hic ipsumdebitis aperiam praesentium eos necessitatibus facilis laudantiumquasi odit, deserunt cumque quas quae exercitationem soluta, cumdoloremque id! Dignissimos animi, id maxime autem provident quo consequatur rerum fugiat qui repellendus quam aliquid sequi doloressed placeat ea distinctio quasi?......";

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
          <h4>{useSelector((state) => state.introText.introText)}</h4>
        </div>
      </center>
    </div>
  );
}
