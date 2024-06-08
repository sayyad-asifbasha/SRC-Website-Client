import Carousal from "./Carousal";
import DomainsList from "./DomainsList";
import Contact from "./Contact";
import EventsDemo from "./EventsDemo";
import News from "./News";
export default function Home() {
  return (
    <>
      <div className="App">
        <Carousal />
        <DomainsList />
        <EventsDemo />
        <News />
        <Contact />
      </div>
    </>
  );
}
