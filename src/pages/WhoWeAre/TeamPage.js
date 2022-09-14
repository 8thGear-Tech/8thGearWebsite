// import * as React from "react";
// import TeamsCard from "../components/AllCards/TeamCard";
import data from "../../data/8thGerains.json";
import { TeamCard } from "../../components/AllCards/TeamCard";

const TeamPage = () => {
  return (
    <>
      <Gerians />
    </>
  );
};

const Gerians = () => {
  return (
    <div className="container ">
      <div className="row ">
        {data.teamcard.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={card.id}>
              <TeamCard {...card}></TeamCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TeamPage;

// // ,
// //     {
// //       "id": 4,
// //       "image": "./images/Teamone.png",
// //       "name": "Temitope Kassim",
// //       "title": "People and perfomance analyst",
// //       "text": " View More"
// //     },
// //     {
// //       "id": 5,
// //       "image": "./images/Teamone.png",
// //       "name": "Opeyemi Bioku",
// //       "title": "Tech Lead",
// //       "text": " View More"
// //     },
// //     {
// //       "id": 6,
// //       "image": "./images/Teamone.png",
// //       "name": "Titilayo Ekundayo",
// //       "title": "Head,Venture Studio",
// //       "text": " View More"
// //     }
