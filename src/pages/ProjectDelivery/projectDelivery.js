//External import
import React from "react";
import {useState} from "react";
import {OurImpact} from "../../components/Tractions";
import {RequestForProposalBtn} from "../../components/Buttons/ProjectDeliveryBtn";
import {
    NewProjectDeliveryCardTwo,
    NewProjectDeliveryCardThree,
    SinglegalleryCards,
} from "../../components/AllCards/MediaCards";
import successStoryGalleryCard from "../../data/gallerycards.json";
import {ProjectDeliveryViewMoreBtn} from "../../components/Buttons/ProjectDeliveryBtn";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
import s4plogo from "../../assets/images/projectdelivery/s4plogo.png";
import fcmblogo from "../../assets/images/projectdelivery/fcmblogo.png";
import {NewProjectDeliveryCard} from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import {ProjectNav} from "../../components/Navbar";

// IMPORTED PICTURES FOR OUR SUCESS STORY SECTION
import piggeryTraining from "../../assets/gallerycards/piggerytraining.jpg";
import employabilityGIZ from "../../assets/gallerycards/employabilityGIZ.jpg";
import innkeeperHackathon from "../../assets/gallerycards/innkeeperhackathon.JPG";
import itf from "../../assets/gallerycards/itf.JPG";
import lsetfTraining from "../../assets/gallerycards/LSETFTraining.jpg";
// import getonlineWithDigiplus from "../../assets/gallerycards/getOnlineWithDigiplus.jpg";
import getOnlineWithDigiplus from "../../assets/gallerycards/getOnlineWithDigiplus.JPG";

// Sass File
import "../../sassfiles/pages/projectdelivery/_projectDelivery.scss";
import Button from "react-bootstrap/esm/Button";
import {Link} from "react-router-dom";
import LogoScroll from "../../components/Hero/LogoScroll";
// import { ProjectDeliveryHero } from "../../components/Hero/ImageandTextHero";

// THE MAIN PROJECT
const ProjectDeliveryPage = () => {
    return (
        <>
            <ProjectNav />
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
                <div className="text-center mb-4">
                    {" "}
                    <Button className="HeroButton">
                        <h4>
                            <a
                                href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/edit"
                                target="_blank"
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
                    <h3 className="text-center text-heading purple-text pb-2">COMPETENCIES</h3>
                    <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
                        {" "}
                        {Data.ProjectDeliveryContent.map((ProjectDeliveryContent) => {
                            return <NewProjectDeliveryCard {...ProjectDeliveryContent}></NewProjectDeliveryCard>;
                        })}
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
                        {" "}
                        {Data.ProjectDeliveryContentTwo.map((ProjectDeliveryContent) => {
                            return <NewProjectDeliveryCardTwo {...ProjectDeliveryContent}></NewProjectDeliveryCardTwo>;
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
        <div className="container-fluid py-4 clients">
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
        {src: getOnlineWithDigiplus, text: "Get Online with Digiplus - 2024"},
        {src: employabilityGIZ, text: "Employability 2022 - GIZ"},
        {src: innkeeperHackathon, text: "Innkeeper Hackathon 2022"},
        {src: itf, text: "ITF Training"},
        {src: piggeryTraining, text: "Piggery Training - GIZ"},
        {src: lsetfTraining, text: "USADF/LSETF Training 2021/2022"},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleUp = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleDown = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container-fluid py-4 successStory">
            <div className="m-4">
                <h3 className="purple-text">ACHIEVEMENTS</h3>
            </div>
            <div className="mb-4">
                <div className="gallery">
                    <div className="gallery-container container-fluid rounded">
                        <div className="backdrop">
                            <img
                                src={images[currentIndex].src}
                                alt={`image ${currentIndex + 1}`}
                                className="gallery-picutre rounded"
                            />
                        </div>
                        <h5 className="imageCaption">{images[currentIndex].text}</h5>
                    </div>
                    <div className="button-controller">
                        <i className="bi bi-arrow-up-square-fill" onClick={handleUp} type="button"></i>
                        <i className="bi bi-arrow-down-square-fill" onClick={handleDown} type="button"></i>
                    </div>
                    <div className="flex mb-4 achievements-links">
                        <h5 className="left-option">
                            <a href="/">Projects Report</a>
                        </h5>
                        <h5>
                            <a href="/">Testimonials</a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDeliveryPage;
