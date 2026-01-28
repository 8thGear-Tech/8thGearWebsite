
import data from "../../data/8thGerains.json";

import EIRdata from "../../data/8thGerains.json";

import { AdvisoryBoardOnHoverCard } from "./TriggeredCards";
import Info from "../../data/advisory.json";
import logo from "../../assets/images/logo.png";

import { LinkedInIcon } from "../Icons";

// persononestarts
export const TeamCard = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo" />
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
                    <a href={link} rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </>
  );
};

export const TeamCardTwo = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo"/>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TeamCardThree = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo"/>
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
                    <a href={link} rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </>
  );
};

export const TeamCardFour = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            <a href={link} target="_blank">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo" />
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
                    <a href={link} target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </>
  );
};

export const TeamCardFive = (props) => {
  const { image1, name1, title1, id, image, name, position, text, link } =
    props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <p className="Text mb-3 mt-3">{title1}</p>
            </figure>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                {" "}
                <LinkedInIcon />
              </div>
            </a>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo"/>
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
                    <a href={link} rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </>
  );
};

// export const TeamCardSix = (props) => {
//   const { image1, name1, title1, id, image, name, position, text, link } =
//     props;
//   return (
//     <>
//       <div className="card-deck">
//         <div className="card w-100 mx-auto ">
//           <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
//           <div className="card-body teamcardbody">
//             <figure className="text-center">
//               <figcaption className="card-text mt-1">{name1}</figcaption>
//               <p className="Text mb-3 mt-3">{title1}</p>
//             </figure>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               <div className="text-center">
//                 {" "}
//                 <LinkedInIcon />
//               </div>
//             </a>
           
//             <div
//               className="modal fade"
//               id={id}
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
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       <div className=" " style={{ color: "#000" }}>
//                         {" "}
//                         <LinkedInIcon />
//                       </div>
//                     </a>
//                     <div className="card-body">
//                       <p className="card-text">{text}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
        
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
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
  const { image1, name1, id, image, name, position, text } = props;
  return (
    <>
      <div className="card-deck">
        <div className="card w-100 mx-auto ">
          <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
          <div className="card-body teamcardbody">
            <figure className="text-center">
              <figcaption className="card-text mt-1">{name1}</figcaption>
              <a
                href="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/25/10/20250725100304-T7H5G9CU.json"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill mt-3"
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
            </figure>

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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo" />
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
// export const TeamCardEight = (props) => {
//   const { image1, name1, title1, id, image, name, position, text, link } =
//     props;
//   return (
//     <>
//       <div className="card-deck">
//         <div className="card w-75 mx-auto">
//           <img src={image1} className="card-img-top Teampic " alt="Teamimage" />
//           <div className="card-body teamcardbody">
//             <figure className="text-center">
//               <figcaption className="card-text mt-1">{name1}</figcaption>
//               <p className="Text mb-3 mt-3">{title1}</p>
//             </figure>

//             {/* <JointheTeamBtn /> */}
//             <div className="text-center">
//               {" "}
//               <MemberEightViewBioBtn />
//             </div>

//             <div
//               className="modal fade"
//               id={id}
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
//                     <h6 className="">{position}</h6>{" "}
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       <div className="">
//                         {" "}
//                         <LinkedInIcon />
//                       </div>
//                     </a>
//                     <div className="card-body">
//                       <p className="card-text ">{text}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <EightgeariansPopUpCard1 /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
    <div className="container">
      <div className="row justify-content-center mt-5 mb-3">
        <h3 className="text-center">OUR CORE TEAM</h3>
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
      </div>
      <div className="row justify-content-center mt-3 mb-5">
        {" "}
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
        {/* <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardsix.map((card) => {
            return <TeamCardSix {...card}></TeamCardSix>;
          })}
        </div> */}
        <div className="col-lg-4 col-md-6 mt-5">
          
          {data.teamcardseven.map((card) => {
            return <TeamCardSeven {...card}></TeamCardSeven>;
          })}
        </div>
      </div>
    </div>
  );
};

//EIR

export const EIRCard = (props) => {
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

            <div className="text-center">
              {" "}
              {/* <MemberTwoViewBioBtn /> */}
              <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="">
                  {" "}
                  <LinkedInIcon />
                </div>
              </a>
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
                    <img src={logo} width={40} id="staticBackdropLabel" alt="logo"/>
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
                    <a href={link} target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </>
  );
};
export const EIR = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <h3 className="text-center mt-5 mb-5 purple-text">
          ENTREPRENEURS IN RESIDENCE
        </h3>
        {EIRdata.EIRcard.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center align-items-stretch"
              key={card.id}
            >
              <EIRCard {...card}></EIRCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* <br></br>; */
// const AdvisoryBoardCard = (props) => {
//   const { image } = props;
//   return (
//     // <div className="card-deck">
//     <div className="card col-sm-mb-1 col-md-mb-1 w-75 mx-auto">
//       <img src={image} className=" img-fluid Boardimage" alt="Teamimage" />
//     </div>
//     // </div>
//   );
// };
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
