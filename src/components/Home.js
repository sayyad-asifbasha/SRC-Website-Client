import Carousal from "./Carousal";
import DomainsList from "./DomainsList";
import Contact from "./Contact";
import EventsDemo from "./EventsDemo";
import News from "./News";
import Testimonals from "./Testimonals";
export default function Home() {
  return (
    <>
      <div className="App">
        <Carousal />
        <DomainsList />
        <EventsDemo />
        <News />
        <Testimonals />
        <Contact />
      </div>
    </>
  );
}
