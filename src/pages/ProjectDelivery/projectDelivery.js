//External import
import React from "react";
import { OurImpact } from "../../components/Tractions";
import { Navbar3 } from "../../components/Navbar";
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
import Info from "../../data/advisory.json";
import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { ProjectDeliveryCard } from "../../components/AllCards/MediaCards";
import { NewProjectDeliveryCard } from "../../components/AllCards/MediaCards";
import { NewProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { ProjectDeliveryCards } from "../../components/AllCards/TriggeredCards";
// import ProjectDeliveryRequestForm from "../../components/Forms/ServicesForms";
import { ProjectDeliveryHero } from "../../components/Hero/ImageandTextHero";
import logo from "../../assets/images/logo.png";

const ProjectDeliveryPage = () => {
  return (
    <>
      <Navbar3 />
      <ProjectDeliveryHero />
      {/* <ProjectDeliveryCards /> */}
      <Competencies />
      <OurImpact />
      <OurClients />
      <SuccessStoryCards />
    </>
  );
};

const Competencies = () => {
  return (
    <div className="container-fluid">
      <div className="container ">
        <div className="row justify-content-evenly ">
          <h4 className="py-5 text-center">COMPETENCIES</h4>
          <div className="col-lg-4 col-md-6 mt-5 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContent.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCard
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCard>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContentTwo.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCardTwo
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCardTwo>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContentThree.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCardThree
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCardThree>
              );
            })}
          </div>
          {/* <div className="col-lg-4 col-md-6 mt-5">
          {" "}
          {data.teamcardtwo.map((card) => {
            return <TeamCardTwo {...card}></TeamCardTwo>;
          })}
        </div> */}
          {/* {Data.ProjectDeliveryContent.map((ProjectDeliveryContent) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-10 mb-5 px-4 d-flex "
                key={ProjectDeliveryContent.id}
              >
                <NewProjectDeliveryCard
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCard>
              </div>
            );
          })} */}
        </div>
        <div className="text-center mb-4">
          {" "}
          <RequestForProposalBtn />
        </div>
      </div>
    </div>
  );
};

const OurClients = () => {
  return (
    <div className="container-fluid pt-4">
      {" "}
      <div className="row g-0">
        <h3 className="mt-4 text-center mb-4">Our Clients</h3>
        <div className="row d-flex align-items-center TextAlignCenter justify-content-center justify-content-evenly">
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={gizlogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={usadflogo}
              className="logo1 col-12 px-3"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3 mb-4">
            <img
              src={lsetflogo}
              className="logo1 col-12 px-3"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img
              src={s4plogo}
              className="logo1 col-12 px-5"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          {/* <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <img
              src={itflogo}
              className="logo1 col-12 px-5"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={fcmblogo}
              className="logo1 col-12 px-5"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div> */}
        </div>
        <div className="row d-flex align-items-center TextAlignCenter justify-content-center mt-4">
          {/* <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={gizlogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={usadflogo}
              className="logo1 col-12 px-3"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3 mb-4">
            <img
              src={lsetflogo}
              className="logo1 col-12 px-3"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div> */}
          {/* <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img
              src={s4plogo}
              className="logo1 col-12 px-5"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div> */}
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <img
              src={itflogo}
              className="logo1 col-12 px-5"
              style={{ maxWidth: "90%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={fcmblogo}
              className="logo1 col-12 px-5"
              style={{ maxWidth: "90%", maxHeight: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStoryCards = () => {
  return (
    <>
      <div className="container-fluid successStoryBg">
        {" "}
        <div className="row justify-content-center mt-5 mb-2 pt-5 mx-lg-5 px-3">
          <h4 className="text-center">SUCCESS STORY</h4>
          {successStoryGalleryCard.successStory.map((items) => {
            return (
              // <>
              <div
                className="col-lg-4 col-md-6 col-sm-10 my-4 d-flex align-items-stretch"
                key={items.id}
              >
                <SinglegalleryCards {...items}></SinglegalleryCards>
              </div>
              // </>
            );
          })}
        </div>
        {/* <div className="d-flex justify-content-center pb-4">
          <ProjectDeliveryViewMoreBtn />
        </div> */}
      </div>
    </>
  );
};

export default ProjectDeliveryPage;
