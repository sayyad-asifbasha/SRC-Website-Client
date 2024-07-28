import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Domaindetails from "./Domaindetails";
// import Completeddomaindetails from "./Completed_event_details";
import Carousal from "./Completed_event_carousal";
import TableData from "./TableData";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function Eventname(props) {
  let { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const location = useLocation();
  const { eventId } = location.state || {};
  const getEventApi = process.env.REACT_APP_GET_EVENT_BY_ID;
  useEffect(() => {
    getEventDetails();
  }, [location]);

  const getEventDetails = async () => {
    try {
      const res = await axios.get(getEventApi + eventId);
      setEvent(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {event && event.isUpcoming ? (
        <>
          <div className="event-img">
            <h1>{eventName}</h1>
          </div>
          <div className="single-event-desc">
            <h2>About our Event {event && event.name}</h2>
            <p>{event.description}</p>

            <h2>Events</h2>
          </div>
          <div className="each-domain">{<Domaindetails domain={event} />}</div>
        </>
      ) : (
        <>
          <Carousal />
          <div className="single-event-desc">
            <h2>Summary of our Event {eventName}</h2>
            <p>{event && event.summary}</p>
            <h2>Winners in Event</h2>
          </div>
          <div className="each-domain">
            <TableData event={event && event} />
          </div>
        </>
      )}
    </>
  );
}
