// import * as React from "react";
// import TeamsCard from "../components/AllCards/TeamCard";
import data from "../../data/8thGerains.json";
import { TeamCard } from "../../components/AllCards/TeamCard";
import { AdvisoryTeamPic } from "../../components/AllCards/TeamCard";
import { Navbar11 } from "../../components/Navbar";
import { Gerians } from "../../components/AllCards/TeamCard";
import { EIR } from "../../components/AllCards/TeamCard";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const TeamPage = () => {
  return (
    <>
      <Navbar11 />
      <Gerians />
      <EIR />
      <AdvisoryTeamPic />
      <div className="d-flex justify-content-center">
        <JointheTeamBtn />
      </div>
    </>
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
