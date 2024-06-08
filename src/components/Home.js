import Carousal from "./Carousal";
import Domain from "./Domains";
import Contact from "./Contact";
import EventsDemo from "./EventsDemo";
import News from "./News";
export default function Home() {
  return (
    <>
      <div className="App">
        <Carousal />
        <Domain />
        <EventsDemo />
        <News />
        <Contact />
      </div>
    </>
  );
}
