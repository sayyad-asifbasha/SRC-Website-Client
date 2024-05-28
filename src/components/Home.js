import Carousal from "./Carousal";
import Domain from "./Domains";
import EventsAndNews from "./EventsAndNews";
import Contact from "./Contact";
export default function Home() {
    return (
        <>
            <div className="App">
                <Carousal />
                <Domain />
                <EventsAndNews />
                <Contact />
            </div>
        </>
    );
}
