//External import
import React from "react";
import { useState } from "react";
import { OurImpact } from "../../components/Tractions";
import { RequestForProposalBtn } from "../../components/Buttons/ProjectDeliveryBtn";
import {
  NewProjectDeliveryCardTwo,
  NewProjectDeliveryCardThree,
  SinglegalleryCards,
} from "../../components/AllCards/MediaCards";
import successStoryGalleryCard from "../../data/gallerycards.json";
import { ProjectDeliveryViewMoreBtn } from "../../components/Buttons/ProjectDeliveryBtn";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
import s4plogo from "../../assets/images/projectdelivery/s4plogo.png";
import fcmblogo from "../../assets/images/projectdelivery/fcmblogo.png";
import { NewProjectDeliveryCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { HomepageNav, ProjectNav } from "../../components/Navbar";

// IMPORTED PICTURES FOR OUR SUCESS STORY SECTION
import piggeryTraining from "../../assets/gallerycards/piggerytraining.png";
import employabilityGIZ from "../../assets/gallerycards/employabilityGIZ.png";
import innkeeperHackathon from "../../assets/gallerycards/innkeeperhackathon.png";
import itf from "../../assets/gallerycards/itf.png";
import lsetfTraining21 from "../../assets/gallerycards/LSETFTraining21.png";
import lsetfTraining23 from "../../assets/gallerycards/LSETFTraining23.png";
// import getonlineWithDigiplus from "../../assets/gallerycards/getOnlineWithDigiplus.jpg";
import getOnlineWithDigiplus from "../../assets/gallerycards/getOnlineWithDigiplus.png";

// Sass File
import "../../sassfiles/pages/projectdelivery/_projectDelivery.scss";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import LogoScroll from "../../components/Hero/LogoScroll";
// import { ProjectDeliveryHero } from "../../components/Hero/ImageandTextHero";

// THE MAIN PROJECT
const ProjectDeliveryPage = () => {
  return (
    <>
      <HomepageNav />
      <ProjectDeliveryHero />
      {/* <ProjectDeliveryCards /> */}
      <OurImpact />
      <Competencies />
      <OurClients />
      <SuccessStoryCards />
    </>
  );
};

//The Hero Section
const ProjectDeliveryHero = () => {
  return (
    <div className="d-flex justify-content-center align-content-center projectHero mb-2 container-fluid">
      {/* <div className="d-flex justify-content-center align-content-center projectHero mb-2 p-1 container-fluid"> */}
      <div className="hero-text mt-5 pt-5 col-lg-8 col-md-8 col-sm-12">
        <h2 className="text-lg-center d-inline fs-1">
          Fueling Innovation, Empowering Entrepreneurs and Transforming futures
        </h2>
        <div className="text-center mb-4 mt-4">
          {" "}
          <Button className="HeroButton">
            <h4>
              <a
                href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request for a proposal
              </a>
            </h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Competencies = () => {
  return (
    <div className="container-fluid">
      <div className="container ">
        <div className="row justify-content-center">
          <h3 className="text-center text-heading purple-text pb-2">
            COMPETENCIES
          </h3>
          <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContent.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCard
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCard>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContentTwo.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCardTwo
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCardTwo>
              );
            })}
          </div>
          {/* <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContentThree.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCardThree
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCardThree>
              );
            })}
          </div> */}
        </div>
        {/* <div className="text-center mb-4">
                    {" "}
                    <RequestForProposalBtn />
                </div> */}
      </div>
    </div>
  );
};

const OurClients = () => {
  return (
    <div className="container-fluid pt-4 clients">
      {" "}
      <div className="row g-0">
        <h3 className="mt-7 text-center mb-5 purple-text">OUR PARTNERS</h3>
        <div className="mb-7">
          <LogoScroll />
        </div>
      </div>
    </div>
  );
};

const SuccessStoryCards = () => {
  const images = [
    { src: getOnlineWithDigiplus, text: "Get Online with Digiplus - 2024" },
    { src: lsetfTraining23, text: "USADF/LSETF Training 2023/2024" },
    { src: employabilityGIZ, text: "Employability 2022 - GIZ" },
    { src: innkeeperHackathon, text: "Innkeeper Hackathon 2022" },
    { src: itf, text: "ITF Training" },
    { src: piggeryTraining, text: "Piggery Training - GIZ" },
    { src: lsetfTraining21, text: "USADF/LSETF Training 2021/2022" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container-fluid pb-4 successStory">
      <div className="mx-4">
        <h3 className="purple-text mb-4">ACHIEVEMENTS</h3>
      </div>
      {/* <div className="d-flex justify-content-center">
        <a
          href="https://drive.google.com/drive/u/0/folders/1h0OUWJXY-ccfANNR9FSkqj7IJ65t7bem"
          className="mx-1"
          style={{ color: "#000" }}
        >
          <p>Impact Report</p>
        </a>
        <a href="#" className="mx-1" style={{ color: "#000" }}>
          <p>Testimonials</p>
        </a>
      </div> */}
      <div className="mb-4 ">
        <div className="gallery">
          <div className="gallery-container container-fluid rounded">
            <img
              src={images[currentIndex].src}
              alt={`image ${currentIndex + 1}`}
              className="img-fluid rounded"
            />

            {/* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                      position: absolute;
                      top: 50%; 
                      left: 50%;
                      transform: translate(-50%, -50%);
                    padding: 5px 10px; */}
            {/* <p
              className=""
              //   style={{
              //     position: "relative",
              //     color: "#fff",
              //     top: "-35px",
              //     fontSize: "1.4rem",
              //     backdropFilter: "blur(1px)",
              //     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              //   }}
            >
              <b> {images[currentIndex].text}</b>
            </p> */}
            <p className="imageCaption">
              <b>{images[currentIndex].text}</b>
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="https://drive.google.com/drive/u/0/folders/1h0OUWJXY-ccfANNR9FSkqj7IJ65t7bem"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                <p style={{ fontSize: "0.8rem" }}>Impact Reports</p>
              </a>
              <a
                href="https://www.usadf.gov/story/1090"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                <p style={{ fontSize: "0.8rem" }}>Testimonials</p>
              </a>
              <a
                href="https://www.google.com/search?q=8thgearpartners&sca_esv=0816324f79341d82&sxsrf=ADLYWIKKXbmfdYf3gsCCQjpPklcQMenajg%3A1721982091549&ei=i1yjZr-gIdGwhbIPh-CNqQg&ved=0ahUKEwj_kYGXo8SHAxVRWEEAHQdwI4UQ4dUDCBA&uact=5&oq=8thgearpartners&gs_lp=Egxnd3Mtd2l6LXNlcnAiDzh0aGdlYXJwYXJ0bmVyczIHECMYsAMYJzIQEC4YgAQYsAMYxwEYDRivATILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBEg1UABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAhGYAwCIBgGQBgWSBwExoAcA&sclient=gws-wiz-serp#lrd=0x103b93b1a35e5485:0xadb42002710ea3b0,1,,,,"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                <p style={{ fontSize: "0.8rem" }}>Reviews</p>
              </a>
            </div>
            <div className="button-controller">
              {/* <div className=""> */}{" "}
              <i
                className="bi bi-arrow-left-square-fill mx-1"
                onClick={handleUp}
                type="button"
              ></i>
              <i
                className="bi bi-arrow-right-square-fill mx-1"
                onClick={handleDown}
                type="button"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeliveryPage;
