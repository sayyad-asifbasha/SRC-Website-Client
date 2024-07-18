import React from "react";
import DomainMembers from "./DomainMembers";
import Carousal from "./Carousal";
import LeaderBoard from "./LeaderBoard";
import Resources from "./Resources";
export default function Domains() {
  return (
    <>
      {<Carousal />}
      {<Resources />}
      {/* {<LeaderBoard />} */}
      {<DomainMembers />}
    </>
  );
}
