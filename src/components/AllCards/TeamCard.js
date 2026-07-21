import data from "../../data/8thGerains.json";

import { AdvisoryBoardOnHoverCard } from "./TriggeredCards";
import Info from "../../data/advisory.json";
import logo from "../../assets/images/logo.png";

import { LinkedInIcon } from "../Icons";

export const TeamCard = (props) => {
  const {
    image1,
    name1,
    title1,
    id,
    image,
    name,
    position,
    text,
    link,
    chatLink,
    cardClassName = "w-100 mx-auto",
  } = props;

  return (
    <div className="card-deck">
      <div className={`card ${cardClassName}`}>
        <img src={image1} className="card-img-top Teampic" alt="Teamimage" />
        <div className="card-body teamcardbody">
          <figure className="text-center">
            <figcaption className="card-text mt-1">{name1}</figcaption>
            <p className="Text mb-3 mt-3">{title1}</p>
          </figure>

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <LinkedInIcon />
              </div>
            </a>
          )}

          {chatLink && (
            <a
              href={chatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-pill"
              style={{
                color: "#821e6b",
                fontSize: "0.9rem",
                padding: "0.4rem 0.75rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <i className="bi bi-chat-dots-fill me-2" />
              Talk to Big Fay
            </a>
          )}

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
                  <img
                    src={logo}
                    width={40}
                    id="staticBackdropLabel"
                    alt="logo"
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="cards" key={id}>
                  <img src={image} className="w-25 mb-4" alt="Teamimage" />
                  <h4>{name}</h4>
                  <h6>{position}</h6>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div>
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
        </div>
      </div>
    </div>
  );
};

export const Gerians = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-3">
        <h3 className="text-center" style={{ color: "#821E6B" }}>
          OUR CORE TEAM
        </h3>
        {data.team.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
              key={card.id}
            >
              <TeamCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

//EIR

export const EIR = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <h3 className="text-center mt-5 mb-5 purple-text">
          ENTREPRENEURS IN RESIDENCE
        </h3>
        {data.EIRcard.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
              key={card.id}
            >
              <TeamCard {...card} cardClassName="w-75 mx-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AdvisoryTeamPic = () => {
  return (
    <div className="container-fluid partnersBg ">
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
  );
};
