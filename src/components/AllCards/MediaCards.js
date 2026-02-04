import galleryData from "../../data/gallerypiggerytraining.json";
import galleryusadfData from "../../data/galleryusadf.json";
import galleryprojectData from "../../data/projectdelivery.json";

import gallerycardsData from "../../data/gallerycards.json";

import { Link } from "react-router-dom";

import "../../sassfiles/components/allCards/_MediaCards.scss";

export const AllPortfoliosLogoCard = (props) => {
  const { logo, link } = props;
  return (
    <div className="align-items-center">
      <Link to={link}>
        <img
          className="my-5 logoEffect"
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Link>
    </div>
  );
};

export const ProjectDeliveryCard = (props) => {
  const { image, text, id } = props;
  return (
    <div
      key={id}
      className="col-lg-3 col-md-6 col-sm-12"
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: "url(" + image + ")",
      }}
    >
      {" "}
      <p className="ProjectDeliveryManagedServicesCardText TextAlignCenter ">
        {text}
      </p>
    </div>
  );
};
export const NewProjectDeliveryCard = (props) => {
  const { title, description, } = props;
  return (
    <>
      <div className="projectdeliveryCard">
        {/* <img src={image} className="card-img-top" alt="" /> */}
        <div className="purpleCard pb-3 px-3">
          <figure className="text-center">
            <h4 className="card-text mt-4">{title}</h4>
            <p className="">{description}</p>
          </figure>
          {/* <div className="text-center">
                        <Link to="/Enterprise-Support">
                            <OnHoverReadMoreBtn />
                        </Link>
                    </div> */}
          {/* <div
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
                                <div className="d-flex justify-content-end mx-4 my-2">
                                    <button
                                        type="button"
                                        className="btn-close mt-3"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="py-4" key={id}>
                                    <div className="card-body">
                                        <h4 className="ms-4">{readmoretitle}</h4>
                                        <p className="card-text mx-4 mb-4">{readmoretext}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};
export const NewProjectDeliveryCardTwo = (props) => {
  const { title, description} = props;
  return (
    <>
      <div className="projectdeliveryCard">
        {/* <img src={image} className="card-img-top" alt="" /> */}
        <div className="pb-3 px-3 m-0">
          <figure className="text-center">
            <h4 className="card-text mt-4">{title}</h4>
            <p className="">{description}</p>
          </figure>
          {/* <div className="text-center">
                        <Link to="/Ecosystem-Events">
                            <OnHoverReadMoreBtnTwo />
                        </Link>
                    </div> */}
          {/* <div
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
                                <div className="d-flex justify-content-end mx-4 my-2">
                                    <button
                                        type="button"
                                        className="btn-close mt-3"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="py-4" key={id}>
                                    <div className="card-body">
                                        <h4 className="ms-4">{readmoretitle}</h4>
                                        <p className="card-text mx-4 mb-4">{readmoretext}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};
export const NewProjectDeliveryCardThree = (props) => {
  const {  title, description } = props;
  return (
    <>
      <div className="projectdeliveryCard">
        {/* <img src={image} className="card-img-top" alt="" /> */}
        <div className="pb-3 px-3">
          <figure className="text-center">
            <h4 className="card-text mt-4">{title}</h4>
            <p className="">{description}</p>
          </figure>
          {/* <div className="text-center">
                        <Link to="/Talent-Development">
                            <OnHoverReadMoreBtnThree />
                        </Link>
                    </div> */}
          {/* <div
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
                                <div className="d-flex justify-content-end mx-4 my-2">
                                    <button
                                        type="button"
                                        className="btn-close mt-3"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="py-4" key={id}>
                                    <div className="card-body">
                                        <h4 className="ms-4">{readmoretitle}</h4>
                                        <p className="card-text mx-4 mb-4">{readmoretext}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};
export const NewProjectDeliveryManagedServicesCard = (props) => {
  const { image, title, link } = props;
  return (
    <>
      <div className="cardBgg projectdeliveryCard">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body pb-3 px-3">
          <figure className="text-center">
            <h4 className="card-text mt-4">{title}</h4>
          </figure>
          <div className="text-center pt-4">
            <Link to={link} className="text-decoration-none text-black">
              {" "}
              <p
                className="card-text text-decoration-underline"
                style={{ color: "#821E6B" }}
              >
                {" "}
                <b>Read More </b>
              </p>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export const ManagedServicesCard = (props) => {
  const { image, link, text, id } = props;
  return (
    <div
      key={id}
      className="col-lg-3 col-md-6 col-sm-12"
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: "url(" + image + ")",
      }}
    >
      <Link to={link} className="text-decoration-none">
        {" "}
        <p className="ProjectDeliveryManagedServicesCardText TextAlignCenter ">
          {text}
        </p>
      </Link>
    </div>
  );
};

export const SingleMediaCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const MediaCards = () => {
  return (
    <>
      <div className="row justify-content-center p-5 m-3">
        {galleryData.gallerypictures.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleMediaCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

//Project Delivery

export const SingleGalleryGizCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};
export const SingleProjectCards = (props) => {
  const { image, id, text } = props;
  return (
    <>
      <div className="card" style={{ width: 250 }}>
        <img src={image} className="card-img-top projectCardsimg" alt="..." />
        <div className="card-body ">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export const ProjectCards = () => {
  return (
    <>
      <div className="row justify-content-center m-3 p-5">
        {galleryprojectData.projectdelivery.map((items) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 my-3" key={items.id}>
                <SingleProjectCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleInnkeeperHackathonGalleryCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SingleITFGalleryCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SinglePiggeryTrainingCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid w-100" src={image} alt={id} />
    </>
  );
};

export const SingleLsetfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

//Events

export const SingleUsadfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const UsadfCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5 p-4">
        {galleryusadfData.galleryusadf.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleUsadfCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleLsetfvisitCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const SingleGalleryFounderCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const SingleDemodayCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SinglegalleryCards = (props) => {
  const { image, link, text } = props;
  return (
    <>
      <div className="card successStoryCardBg">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={link} className="text-decoration-none text-black">
            {" "}
            <p className="card-text">{text}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export const GalleryCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5 p-5">
        {gallerycardsData.gallerycards.map((items) => {
          return (
            <>
              <div className="col-md-4 my-4" key={items.id}>
                <SinglegalleryCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SinglegalleryVideoCards = (props) => {
  const { video} = props;
  return (
    <>
      <div className="responsive-iframe">
        <iframe
          src={video}
          width="400"
          height="600"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Video full view"
        ></iframe>
      </div>
    </>
  );
};

export const GalleryVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-3 p-4 ">
        {gallerycardsData.galleryvideocards.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SinglegalleryVideoCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SinglegalleryVideo = (props) => {
  const { video, id } = props;
  return (
    <>
      <div className="card">
        <iframe
          src={video}
          height="280"
          allowFullScreen
          className=""
          alt="..."
          title="Video full view"
        />
      </div>
    </>
  );
};

export const DigiPlusResponsibilityMatrixCards = (props) => {
  const {
    role,
    company,
    offerings,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    imageUrl,
  } = props;

  return (
    <>
      <div
        className="eightGearImg my-3 d-flex align-items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="card imgCardBg mt-auto d-flex h-75">
          <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
            <h6 className="mb-2 text-md-start">{role}</h6>
            <h5
              className="card-title spaceTitle text-md-start"
              style={{ fontSize: "1rem", marginBottom: "10px" }}
            >
              {company}
            </h5>
            <p className="text-md-start">{offerings}</p>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphOne}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphTwo}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphThree}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFour}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFive}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
