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
import { Navbar3, ProjectNav } from "../../components/Navbar";

// IMPORTED PICTURES FOR OUR SUCESS STORY SECTION
import piggeryTraining from "../../assets/gallerycards/piggerytraining.jpg";
import employabilityGIZ from "../../assets/gallerycards/employabilityGIZ.jpg";
import innkeeperHackathon from "../../assets/gallerycards/innkeeperhackathon.JPG";
import itf from "../../assets/gallerycards/itf.JPG";
import lsetfTraining from "../../assets/gallerycards/LSETFTraining.jpg";

// Sass File
import "../../sassfiles/pages/projectdelivery/_projectDelivery.scss";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import LogoScroll from "../../components/Hero/LogoScroll";
import { ProjectDeliveryHero } from "../../components/Hero/ImageandTextHero";

//OLD
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
          <h4 className="pt-5 text-center">COMPETENCIES</h4>
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
          <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
            {" "}
            {Data.ProjectDeliveryContentThree.map((ProjectDeliveryContent) => {
              return (
                <NewProjectDeliveryCardThree
                  {...ProjectDeliveryContent}
                ></NewProjectDeliveryCardThree>
              );
            })}
          </div>
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
          <h4 className="text-center">SUCCESS STORIES</h4>
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

//NEW

// // THE MAIN PROJECT
// const ProjectDeliveryPage = () => {
//   return (
//     <>
//       <ProjectNav />
//       <ProjectDeliveryHero />
//       {/* <ProjectDeliveryCards /> */}
//       <Competencies />
//       <OurImpact />
//       <OurClients />
//       <SuccessStoryCards />
//     </>
//   );
// };

// // The Hero Section
// const ProjectDeliveryHero = () => {
//   return (
//     <div className="d-flex justify-content-center align-content-center projectHero mb-2 p-1 container-fluid ">
//       <div className="hero-text ">
//         <h2 className="text-lg-center d-inline fs-1">
//           Collaborating with you to make your dream come true
//         </h2>
//         <div className="text-center mb-4">
//           {" "}
//           <Button className="HeroButton">
//             <h4>
//               <a
//                 href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/edit"
//                 target="_blank"
//               >
//                 Request for a proposal
//               </a>
//             </h4>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Competencies = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container ">
//         <div className="row justify-content-evenly ">
//           <h3 className="pt-5 text-center text-heading purple-text pb-2">
//             WE PROMISE YOU...
//           </h3>
//           <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
//             {" "}
//             {Data.ProjectDeliveryContent.map((ProjectDeliveryContent) => {
//               return (
//                 <NewProjectDeliveryCard
//                   {...ProjectDeliveryContent}
//                 ></NewProjectDeliveryCard>
//               );
//             })}
//           </div>
//           <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
//             {" "}
//             {Data.ProjectDeliveryContentTwo.map((ProjectDeliveryContent) => {
//               return (
//                 <NewProjectDeliveryCardTwo
//                   {...ProjectDeliveryContent}
//                 ></NewProjectDeliveryCardTwo>
//               );
//             })}
//           </div>
//           <div className="col-lg-4 col-md-6 mt-4 mb-5 px-4 d-flex">
//             {" "}
//             {Data.ProjectDeliveryContentThree.map((ProjectDeliveryContent) => {
//               return (
//                 <NewProjectDeliveryCardThree
//                   {...ProjectDeliveryContent}
//                 ></NewProjectDeliveryCardThree>
//               );
//             })}
//           </div>
//         </div>
//         {/* <div className="text-center mb-4">
//                     {" "}
//                     <RequestForProposalBtn />
//                 </div> */}
//       </div>
//     </div>
//   );
// };

// const OurClients = () => {
//   return (
//     <div className="container-fluid py-4 clients">
//       {" "}
//       <div className="row g-0">
//         <h3 className="mt-7 text-center mb-5 purple-text">OUR PARTNERS</h3>
//         <div className="mb-7">
//           <LogoScroll />
//         </div>
//       </div>
//     </div>
//   );
// };

// const SuccessStoryCards = () => {
//   const images = [
//     { src: piggeryTraining, text: "Piggery Training" },
//     { src: employabilityGIZ, text: "GIZ employability" },
//     { src: innkeeperHackathon, text: "InnKeeper Hackathon" },
//     { src: itf, text: "ITF training" },
//     { src: lsetfTraining, text: "LSETF training" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleUp = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDown = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="container-fluid py-4 successStory">
//       <div className="m-4">
//         <h3 className="purple-text">OUR SUCCESS STORY</h3>
//       </div>
//       <div className="mb-4 ">
//         <div className="gallery">
//           <div className="gallery-container container-fluid rounded">
//             <img
//               src={images[currentIndex].src}
//               alt={`image ${currentIndex + 1}`}
//               className="img-fluid rounded"
//             />
//             <h3 className="imageCaption">{images[currentIndex].text}</h3>
//           </div>
//           <div className="button-controller">
//             <i
//               className="bi bi-arrow-up-square-fill"
//               onClick={handleUp}
//               type="button"
//             ></i>
//             <i
//               className="bi bi-arrow-down-square-fill"
//               onClick={handleDown}
//               type="button"
//             ></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDeliveryPage;
