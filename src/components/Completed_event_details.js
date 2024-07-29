import React from "react";
import "../styles/Events.css";
import TableData from "./TableData";

export default function Completeddomaindetails(props) {
  return (
    <>
      <div className="Completed-domain-container">
        <div className="Comp-evt-container">
          <div className="Comp-evt-details">
            <h1>{props.domain.domainName}</h1>

            <TableData winner={props.domain} />
          </div>
        </div>
      </div>
    </>
  );
}
