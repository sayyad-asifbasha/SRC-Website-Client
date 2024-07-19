import React from "react";
import { useParams } from "react-router-dom";
import Domaindetails from "./Domaindetails";
// import Completeddomaindetails from "./Completed_event_details";
import Carousal from "./Completed_event_carousal";
import TableData from "./TableData";
export default function Eventname() {
  let { eventName } = useParams();
  // const event = [
  //   {
  //     id: 1,
  //     domainName: "WEB",
  //     description:
  //       "Register on respective events to get detail information to your mail",
  //     prize1: "1st prize details",
  //     prize2: "2nd prize details",
  //     prize3: "3rd prize details",
  //     name: "Hackathon",
  //     isUpcoming: true,
  //     location: "CSE Dept,RK Valley",
  //     date: "20 APR,2024 10:00AM-05:00PM",
  //     winners: [
  //       {
  //         rank: [
  //           {
  //             teamName: "teamDev",
  //             name: "Hackathon 1(Team lead)",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 1",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 1",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 1",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //         ],
  //       },
  //       {
  //         rank: [
  //           {
  //             teamName: "teamDev",
  //             name: "Hackathon 2(Team lead)",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 2",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 2",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 2",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //         ],
  //       },
  //       {
  //         rank: [
  //           {
  //             teamName: "teamDev",
  //             name: "Hackathon 3(Team lead)",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 3",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 3",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //           {
  //             name: "Hackathon 3",
  //             LinedIn: "Link",
  //             github: "Link",
  //           },
  //         ],
  //       },
  //     ],

  //     registrationLink: "",
  //   },
  //   {
  //     id: 2,
  //     domainName: "DSA",
  //     description:
  //       "Register on respective events to get detail information to your mail",
  //     prize1: "1st prize details",
  //     prize2: "2nd prize details",
  //     prize3: "3rd prize details",
  //     name: "Coding Competition",
  //     location: "CSE Dept,RK Valley",
  //     date: "20 APR,2024 10:00AM-05:00PM",
  //     winners: [
  //       {
  //         name: "Coding Competition",
  //         linkedIn: "Link",
  //         github: "Link",
  //       },
  //       {
  //         name: "Coding Competition",
  //         linkedIn: "Link",
  //         github: "Link",
  //       },
  //       {
  //         name: "Coding Competition",
  //         linkedIn: "Link",
  //         github: "Link",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Quiz",
  //     location: "CSE Dept,RK Valley",
  //     date: "20 APR,2024 10:00AM-05:00PM",
  //     winners: [
  // {
  //   name: "Quiz",
  //   linkedIn: "Link",
  //   github: "Link",
  // },
  // {
  //   name: "Quiz",
  //   linkedIn: "Link",
  //   github: "Link",
  // },
  // {
  //   name: "Quiz",
  //   linkedIn: "Link",
  //   github: "Link",
  // },
  //     ],

  //     registrationLink: "",
  //     location: "SAC",
  //     date: "14-july-2024",
  //     description: "",
  //   },
  // ];

  // const event = {
  //   id: 1,
  //   domainName: "WEB",
  //   description:
  //     "Register on respective events to get detail information to your mail",
  //   prize1: "1st prize details",
  //   prize2: "2nd prize details",
  //   prize3: "3rd prize details",
  //   name: "Hackathon",
  //   isUpcoming: false,
  //   location: "CSE Dept,RK Valley",
  //   date: "20 APR,2024 10:00AM-05:00PM",
  //   winners: [
  //     {
  //       rank: [
  //         {
  //           teamName: "teamDev",
  //           name: "Hackathon 1(Team lead)",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 1",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 1",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 1",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //       ],
  //     },
  //     {
  //       rank: [
  //         {
  //           teamName: "teamDev",
  //           name: "Hackathon 2(Team lead)",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 2",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 2",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 2",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //       ],
  //     },
  //     {
  //       rank: [
  //         {
  //           teamName: "teamDev",
  //           name: "Hackathon 3(Team lead)",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 3",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 3",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //         {
  //           name: "Hackathon 3",
  //           LinedIn: "Link",
  //           github: "Link",
  //         },
  //       ],
  //     },
  //   ],

  //   registrationLink: "",
  // };

  const event = {
    id: 2,
    domainName: "DSA",
    description:
      "Register on respective events to get detail information to your mail",
    prize1: "1st prize details",
    prize2: "2nd prize details",
    prize3: "3rd prize details",
    name: "Coding Competition",
    isUpcoming: true,
    location: "CSE Dept,RK Valley",
    date: "20 APR,2024 10:00AM-05:00PM",
    winners: [
      {
        name: "Quiz",
        linkedIn: "Link",
        github: "Link",
      },
      {
        name: "Quiz",
        linkedIn: "Link",
        github: "Link",
      },
      {
        name: "Quiz",
        linkedIn: "Link",
        github: "Link",
      },
    ],
  };
  return (
    <>
      {event.isUpcoming ? (
        <>
          <div className="event-img">
            <h1>{eventName}</h1>
          </div>
          <div className="single-event-desc">
            <h2>About our Event {eventName}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsum doloremque dolorum suscipit. Unde maiores voluptatum
              architecto veniam reprehenderit quos saepe expedita, veritatis
              aspernatur asperiores sint placeat distinctio repellat cum.
              Perspiciatis voluptas maxime assumenda quidem eveniet laboriosam
              pariatur maiores nulla illo ratione necessitatibus voluptate, amet
              quisquam! Excepturi sint quasi beatae, nam aliquam reprehenderit
              mollitia voluptatem temporibus velit iure minima. Veniam? Iure
              nihil dicta doloribus ullam veritatis commodi? Recusandae velit
              assumenda molestiae cupiditate quis culpa ex consequuntur quia,
              et, saepe quasi labore nihil, corrupti nisi laborum obcaecati!
              Expedita mollitia aliquid possimus? Optio officiis impedit
              cupiditate sunt, fugit quibusdam fuga modi repudiandae dignissimos
              veritatis adipisci, expedita quam iste autem consequuntur illo
              unde animi, nesciunt esse! Id, facilis dolores nulla ut nisi
              neque.
            </p>

            <h2>Events</h2>
          </div>
          <div className="each-domain">{<Domaindetails domain={event} />}</div>
        </>
      ) : (
        <>
          <Carousal />
          <div className="single-event-desc">
            <h2>Summary of our Event {eventName}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsum doloremque dolorum suscipit. Unde maiores voluptatum
              architecto veniam reprehenderit quos saepe expedita, veritatis
              aspernatur asperiores sint placeat distinctio repellat cum.
              Perspiciatis voluptas maxime assumenda quidem eveniet laboriosam
              pariatur maiores nulla illo ratione necessitatibus voluptate, amet
              quisquam! Excepturi sint quasi beatae, nam aliquam reprehenderit
              mollitia voluptatem temporibus velit iure minima. Veniam? Iure
              nihil dicta doloribus ullam veritatis commodi? Recusandae velit
              assumenda molestiae cupiditate quis culpa ex consequuntur quia,
              et, saepe quasi labore nihil, corrupti nisi laborum obcaecati!
              Expedita mollitia aliquid possimus? Optio officiis impedit
              cupiditate sunt, fugit quibusdam fuga modi repudiandae dignissimos
              veritatis adipisci, expedita quam iste autem consequuntur illo
              unde animi, nesciunt esse! Id, facilis dolores nulla ut nisi
              neque.
            </p>
            <h2>Our event in different domains</h2>
          </div>
          <div className="each-domain">
            <TableData event={event} />
          </div>
        </>
      )}
    </>
  );
}
