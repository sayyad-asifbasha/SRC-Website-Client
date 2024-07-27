import Carousal from "./Carousal";
import DomainsList from "./DomainsList";
import Contact from "./Contact";
import EventsDemo from "./EventsDemo";
import News from "./News";
import Testimonals from "./Testimonals";
import { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// const Domains = lazy(() => import("./DomainsList"));

export default function Home() {
  return (
    <>
      <div className="App">
        <Carousal />
        <News />

        <DomainsList />

        <EventsDemo />
        <Testimonals />
        <Contact />
      </div>
    </>
  );
}
