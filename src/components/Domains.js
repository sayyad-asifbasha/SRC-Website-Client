import React, { useEffect } from "react";
import DomainMembers from "./DomainMembers";
// import Navbar from "./Navbar";
import Carousal from "./Carousal";
import LeaderBoard from "./LeaderBoard";

export default function Domains() {
  return (
    <>
      {<Carousal />}
      {<LeaderBoard />}
      {<DomainMembers />}
    </>
  );
}
