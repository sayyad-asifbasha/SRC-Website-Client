import React from "react";
import { useParams } from "react-router-dom";

export default function Events() {
    let { EventName } = useParams();
    console.log(EventName);
    return (
        <>
            <h1>Getting Event details of {EventName}</h1>
        </>
    );
}
