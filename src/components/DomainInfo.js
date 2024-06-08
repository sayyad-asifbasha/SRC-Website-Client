import React from "react";
import { useParams } from "react-router-dom";
import Members from "./Members";
export default function DomainInfo() {
  const { domainName } = useParams();
  const details = [
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 5",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
    {
      imgL: "https://media.licdn.com/dms/image/D560BAQGeX5IypKPgKA/company-logo_200_200/0/1714503367832/src_rgukt_rkvalley_logo?e=2147483647&v=beta&t=VaD731Pnd5Lt2gtyglJxyOJwUvjsOATqQCeXi6k-qS0",
      name: "Tony Starc 6",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a est, nam deleniti accusantium maxime ducimus facilis tempore optio ea! Necessitatibus quis minus nostrum architecto ut perspiciatis quas suscipit hic Totam rerum ratione dolores facere iste, nulla est reprehenderit eius eaque sequi ullam ",
    },
  ];
  const extendedDetails = [...details, ...details];
  const scrollMembers = (e) => {
    const container = document.getElementById("teamCarousel");
    if (container) {
      container.scrollLeft += e.deltaX;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
    }
  };
  const touchMembers = (e) => {
    const container = document.getElementById("teamCarousel");
    container.scrollLeft += e.touches[0].clientX * 0.05;
  };
  return (
    <>
      <h3
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "1rem",
        }}
      >
        Welcome to {domainName} Cell &lt;/&gt;
      </h3>
      <h3 className="team-heading">Our Team Members</h3>
      <div
        className="teamCarousel"
        id="teamCarousel"
        onWheel={scrollMembers}
        onTouchMove={touchMembers}
      >
        <div className="teamMembers">
          {extendedDetails.map((item, index) => (
            <Members key={index} user={item} />
          ))}
        </div>
      </div>
    </>
  );
}
