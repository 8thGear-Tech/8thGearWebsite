// import * as React from "react";
// import { TeamCard } from "../../components/AllCards/TeamCard";
// import TeamsCard from "../components/AllCards/TeamCard";
import data from "../../data/8thGerains.json";
import { AdvisoryTeamPic } from "../../components/AllCards/TeamCard";
import { Navbar11 } from "../../components/Navbar";
import { Gerians } from "../../components/AllCards/TeamCard";
import { EIR } from "../../components/AllCards/TeamCard";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";
import { OurTeamHero } from "../../components/Hero/BGColorandTextHero";
import { JoinTheTeamForm } from "../../components/Forms/EnquiresandSuggestionForm";
// <EightgeariansPopUpCard1 />;

const TeamPage = () => {
  return (
    <>
      <Navbar11 />
      {/* <OurTeamHero /> */}
      <Gerians />
      {/* <EIR /> */}
      <AdvisoryTeamPic />
      <div className="d-flex justify-content-center mb-5">
        {/* <JointheTeamBtn /> */}
        <JoinTheTeamForm />
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

// import * as React from "react";
// import {TeamCard} from "../../components/AllCards/TeamCard";
// import Data from "../../data/TriggeredCard.json";
// import Intel from "../../data/EirPopUp.json";
// import {EightgeariansPopUpCard1} from "../../components/AllCards/TriggeredCards";
// import {EightgeariansPopUpCard2} from "../../components/AllCards/TriggeredCards";
// import {EightgeariansPopUpCard3} from "../../components/AllCards/TriggeredCards";
// import {EightgeariansPopUpCard4} from "../../components/AllCards/TriggeredCards";
// import {EightgeariansPopUpCard5} from "../../components/AllCards/TriggeredCards";
// import {EightgeariansPopUpCard6} from "../../components/AllCards/TriggeredCards";

// import {EIRDataPopUpCard1} from "../../components/AllCards/TriggeredCards";
// import {EIRDataPopUpCard2} from "../../components/AllCards/TriggeredCards";
// import {EIRDataPopUpCard3} from "../../components/AllCards/TriggeredCards";
// import {EIRDataPopUpCard4} from "../../components/AllCards/TriggeredCards";
// import {EIRDataPopUpCard5} from "../../components/AllCards/TriggeredCards";
// import {EIRDataPopUpCard6} from "../../components/AllCards/TriggeredCards";

// const TeamsPage = () => {
//   return (
//     <>
//       <TeamCard></TeamCard>

//       {Data.FirstTriggeredCardFile.map((firstTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard1 {...firstTriggeredCardFile} />
//         )
//       })}

// {Data.SecondTriggeredCardFile.map((secondTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard2 {...secondTriggeredCardFile} />
//         )
//       })}

// {Data.ThirdTriggeredCardFile.map((thirdTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard3 {...thirdTriggeredCardFile} />
//         )
//       })}

// {Data.FourthTriggeredCardFile.map((fourthTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard4 {...fourthTriggeredCardFile} />
//         )
//       })}

// {Data.FifthTriggeredCardFile.map((fifthTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard5 {...fifthTriggeredCardFile} />
//         )
//       })}

// {Data.SixthTriggeredCardFile.map((sixthTriggeredCardFile) => {
//         return (
//           <EightgeariansPopUpCard6 {...sixthTriggeredCardFile} />
//         )
//       })}

// {Intel.FirstEirPopUpFile.map((firstEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard1 {...firstEirPopUpFile} />
//         )
//       })}

// {Intel.SecondEirPopUpFile.map((secondEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard2 {...secondEirPopUpFile} />
//         )
//       })}

// {Intel.ThirdEirPopUpFile.map((ThirdEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard3 {...ThirdEirPopUpFile} />
//         )
//       })}

// {Intel.FourthEirPopUpFile.map((fourthEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard4 {...fourthEirPopUpFile} />
//         )
//       })}

// {Intel.FifthEirPopUpFile.map((fifthEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard5 {...fifthEirPopUpFile} />
//         )
//       })}

// {Intel.SixthEirPopUpFile.map((sixthEirPopUpFile) => {
//         return (
//           <EIRDataPopUpCard6 {...sixthEirPopUpFile} />
//         )
//       })}
//     </>
//   );
// };
// export default TeamsPage;
