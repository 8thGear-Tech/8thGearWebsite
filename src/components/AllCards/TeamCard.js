//AdvisoryBoardCard

import React from "react";
import ReactDOM from "react-dom";
// import TeamImage from "../../assets/images/Teamone.png";
import data from "../../data/8thGerains.json";
import field from "../../data/advisory.json";

const TeamCard = (props) => {
  const { image, name, title, text } = props;
  return (
    <div className="card-deck Team">
      <div class="card w-75 mx-auto">
        <img src={image} class="card-img-top Teampic " alt="Teamimage" />
        <div class="card-body teamcardbody">
          <figure class="text-center">
            <p className="Text mb-3">{name}</p>

            <figcaption class="card-text mt-1">{title}</figcaption>
          </figure>
          <a href="#" class="nav-link active link">
            {text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Gerians = () => {
  return (
    <div className="container">
      <div className="row">
        {data.teamcard.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center d-flex align-items-center"
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

<br></br>;
const AdvisoryBoardCard = (props) => {
  const { image } = props;
  return (
    // <div className="card-deck">
    <div class="card col-sm-mb-1 col-md-mb-1 w-75 mx-auto">
      <img src={image} class=" img-fluid Boardimage" alt="Teamimage" />
    </div>
    // </div>
  );
};
export const AdvisoryTeamPic = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row ">
        {field.advisoryimage.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-3 mb-5 "
              key={card.id}
            >
              <AdvisoryBoardCard {...card}></AdvisoryBoardCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
