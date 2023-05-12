//TeamsCard
//AdvisoryBoardCard

import React from "react";
import ReactDOM from "react-dom";
import { ArrowRightIcon } from "../Icons";
import Data from "../../data/TriggeredCard.json";
import data from "../../data/8thGerains.json";
import datatwo from "../../data/8thGerains.json";
import datathree from "../../data/8thGerains.json";
import datafour from "../../data/8thGerains.json";
import datafive from "../../data/8thGerains.json";
import datasix from "../../data/8thGerains.json";
import dataseven from "../../data/8thGerains.json";
import EIRdata from "../../data/8thGerains.json";
import TeamImage from "../../assets/images/Teamone.png";
import field from "../../data/advisory.json";
import { EightgeariansPopUpCard1 } from "./TriggeredCards";
import { MemberOneViewBioBtn } from "../Buttons/ContactBtn";
import { MemberTwoViewBioBtn } from "../Buttons/ContactBtn";
import { MemberThreeViewBioBtn } from "../Buttons/ContactBtn";
import { MemberFourViewBioBtn } from "../Buttons/ContactBtn";
import { MemberFiveViewBioBtn } from "../Buttons/ContactBtn";
import { MemberSixViewBioBtn } from "../Buttons/ContactBtn";
import { MemberSevenViewBioBtn } from "../Buttons/ContactBtn";
import { MemberEightViewBioBtn } from "../Buttons/ContactBtn";
import { AdvisoryBoardOnHoverCard } from "./TriggeredCards";
import Info from "../../data/advisory.json";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/LinkedIn_icon.png";
import { LinkedInIcon } from "../Icons";

// persononestarts
export const TeamCardTwo = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div classNameName="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/damilolaobidairo/">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}
            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberOneViewBioBtn />
            </div>

            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>{" "}
                    <a href={link}>
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text ">{text}</p>
                    </div>
                    {/* <img src={linkedin} className="mb-4" width={25} /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

// export const GeriansOne = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {data.teamcardone.map((card) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={card.id}
//             >
//               <TeamCard {...card}></TeamCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const TeamCard = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/omowunmiobidairo/">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}

            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberTwoViewBioBtn />
            </div>
            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text ">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
// export const GeriansTwo = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {datatwo.teamcardtwo.map((cardtwo) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardtwo.id}
//             >
//               <TeamCardTwo {...cardtwo}></TeamCardTwo>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const TeamCardThree = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/titilayo-ekundayo-833336a1/">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}
            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberThreeViewBioBtn />
            </div>
            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
// export const GeriansThree = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {datathree.teamcardthree.map((cardthree) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardthree.id}
//             >
//               <TeamCardThree {...cardthree}></TeamCardThree>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const TeamCardFour = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/temitopekazeem/">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}
            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberFourViewBioBtn />
            </div>
            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>{" "}
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text ">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
// export const GeriansFour = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {datafour.teamcardfour.map((cardfour) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardfour.id}
//             >
//               <TeamCardFour {...cardfour}></TeamCardFour>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const TeamCardFive = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/opeyemi-bioku">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}
            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberFiveViewBioBtn />
            </div>
            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>{" "}
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
// export const GeriansFive = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {datafive.teamcardfive.map((cardfive) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardfive.id}
//             >
//               <TeamCardFive {...cardfive}></TeamCardFive>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const TeamCardSix = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            {/* <a href="https://www.linkedin.com/in/adam-yakub-aca-2848a2170/">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a> */}
            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberSixViewBioBtn />
            </div>
            {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}

            {/* <a href="">
              {popup} */}
            {/* <MemberOneViewBioBtn /> */}
            {/* </a> */}

            {/* <a href="#" className="nav-link active link">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
// export const GeriansSix = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {datasix.teamcardsix.map((cardsix) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardsix.id}
//             >
//               <TeamCardSix {...cardsix}></TeamCardSix>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const TeamCardSeven = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>

            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberSevenViewBioBtn />
            </div>

            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>{" "}
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text ">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export const TeamCardEight = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-75 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>

            {/* <JointheTeamBtn /> */}
            <div className="text-center">
              {" "}
              <MemberEightViewBioBtn />
            </div>

            <div
              className="modal fade"
              id={id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="d-flex justify-content-between mx-4 my-2">
                    <img src={logo} width={40} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="cards" key={id}>
                    <img src={image} className="w-25 mb-4" alt="..." />
                    <h4>{name}</h4>
                    <h6 className="">{position}</h6>{" "}
                    <a href={link} target="_blank">
                      <div className="">
                        {" "}
                        <LinkedInIcon />
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="card-text ">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <EightgeariansPopUpCard1 /> */}
          </div>
        </div>
      </div>
    </>
  );
};

// export const GeriansSeven = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {dataseven.teamcardseven.map((cardseven) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={cardseven.id}
//             >
//               <TeamCardSeven {...cardseven}></TeamCardSeven>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
export const Gerians = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <h3 className="text-center ">Our Core Team</h3>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardone.map((card) => {
            return <TeamCard {...card}></TeamCard>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardtwo.map((card) => {
            return <TeamCardTwo {...card}></TeamCardTwo>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardthree.map((card) => {
            return <TeamCardThree {...card}></TeamCardThree>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardfour.map((card) => {
            return <TeamCardFour {...card}></TeamCardFour>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardfive.map((card) => {
            return <TeamCardFive {...card}></TeamCardFive>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardsix.map((card) => {
            return <TeamCardSix {...card}></TeamCardSix>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardseven.map((card) => {
            return <TeamCardSeven {...card}></TeamCardSeven>;
          })}
        </div>
        {/* <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardeight.map((card) => {
            return <TeamCardEight {...card}></TeamCardEight>;
          })}
        </div> */}
      </div>
    </div>
  );
};

//  {
//    Data.FirstTriggeredCardFile.map((firstTriggeredCardFile) => {
//      return <EightgeariansPopUpCard1 {...firstTriggeredCardFile} />;
//    });
//  }
//  {
//    Data.FirstTriggeredCardFile.map((firstTriggeredCardFile) => {
//      return <EightgeariansPopUpCard1 {...firstTriggeredCardFile} />;
//    });
//  }

//  {
//    Data.SecondTriggeredCardFile.map((secondTriggeredCardFile) => {
//      return <EightgeariansPopUpCard2 {...secondTriggeredCardFile} />;
//    });
//  }

// export const TeamCard = (props) => {
//   const { image1, name1, title1, id, image, name, position, text, link } =
//     props;
//   return (
//     <>
//       <div className="card-deck">
//         <div className="card w-75 mx-auto ">
//           <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
//           <div className="card-body teamcardbody">
//             <figure className="text-center">
//               <p className="Text mb-3">{name1}</p>

//               <figcaption className="card-text mt-1">{title1}</figcaption>
//             </figure>
//             {/* <JointheTeamBtn /> */}
//             <MemberOneViewBioBtn />
//             {/* <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop1"
//       >
//         8thgerian1
//       </button> */}
//             <div
//               className="modal fade"
//               id=""
//               data-bs-backdrop="static"
//               data-bs-keyboard="false"
//               tabIndex="-1"
//               aria-labelledby="staticBackdropLabel"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="d-flex justify-content-between mx-4 my-2">
//                     <img src={logo} width={40} id="staticBackdropLabel" />
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     ></button>
//                   </div>

//                   <div className="cards" key={id}>
//                     <img src={image} className="w-25 mb-4" alt="..." />
//                     <h4>{name}</h4>
//                     <h6 className="">{position}</h6>
//                     <div className="card-body">
//                       <p className="card-text mb-4">{text}</p>
//                     </div>
//                     <img src={link} className="mb-4" width={25} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <EightgeariansPopUpCard1 /> */}

//             {/* <a href="">
//               {popup} */}
//             {/* <MemberOneViewBioBtn /> */}
//             {/* </a> */}

//             {/* <a href="#" className="nav-link active link">
//               View More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-arrow-right"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
//                 />
//               </svg>
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export const Gerianss = () => {
//   return (
//     <div className="container ">
//       <div className="row justify-content-center">
//         <h4 className="text-center py-5">8THGEARIANS</h4>
//         {data.teamcard.map((card) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
//               key={card.id}
//             >
//               <TeamCard {...card}></TeamCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

//persononeends
export const EIR = () => {
  return (
    <div className="container ">
      <div className="row ">
        <h4 className="text-center py-5">ENTERPRENEURS IN RESIDENCE</h4>
        {EIRdata.EIRcard.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
              key={card.id}
            >
              <TeamCard {...card}></TeamCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* <br></br>; */
const AdvisoryBoardCard = (props) => {
  const { image } = props;
  return (
    // <div className="card-deck">
    <div className="card col-sm-mb-1 col-md-mb-1 w-75 mx-auto">
      <img src={image} className=" img-fluid Boardimage" alt="Teamimage" />
    </div>
    // </div>
  );
};
export const AdvisoryTeamPic = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-5">
        <h3 className="text-center pt-5 pb-3">Advisory Board</h3>
        {Info.FirstHoverCard.map((firstHoverCard) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center"
              key={firstHoverCard.id}
            >
              <AdvisoryBoardOnHoverCard
                {...firstHoverCard}
              ></AdvisoryBoardOnHoverCard>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="container d-flex justify-content-center">
    //   <div className="row text-center py-5">
    //     <h4>ADVISORY BOARD</h4>
    //     {Info.FirstHoverCard.map((firstHoverCard) => {
    //       return (
    //         <div
    //           className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-5 "
    //           key={firstHoverCard.id}
    //         >
    //           <AdvisoryBoardOnHoverCard {...firstHoverCard} />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

// export const AdvisoryTeamPic = () => {
//   return (
//     <div className="container d-flex justify-content-center">
//       <div className="row text-center py-5">
//         <h4>ADVISORY BOARD</h4>
//         {field.advisoryimage.map((card) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-3 mb-5 "
//               key={card.id}
//             >
//               <AdvisoryBoardCard {...card}></AdvisoryBoardCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
