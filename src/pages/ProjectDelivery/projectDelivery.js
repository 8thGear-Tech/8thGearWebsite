//External import
import React from "react";
import { OurImpact } from "../../components/Tractions";
import { Navbar3 } from "../../components/Navbar";
import { RequestForProposalBtn } from "../../components/Buttons/ProjectDeliveryBtn";
import { SinglegalleryCards } from "../../components/AllCards/MediaCards";
import successStoryGalleryCard from "../../data/gallerycards.json";
import { ProjectDeliveryViewMoreBtn } from "../../components/Buttons/ProjectDeliveryBtn";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
// import ProjectDeliveryPageHero from "../../components/Hero/ImageandTextHero";

// import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import ProjectDeliveryRequestForm from "../../components/Forms/ServicesForms";

const ProjectDeliveryPage = () => {
  return (
    <>
      <Navbar3 />
      {/* <ProjectDeliveryPageHero /> */}
      <Competencies />
      <OurImpact />
      <OurClients />
      <SuccessStoryCards />
    </>
  );
};

// const Competencies = () => {
//   return (
//     <div className="container-fluid">
//       <h4 className="py-5 text-center">COMPETENCIES</h4>
//       <div className="row ">
//         {Data2.ProjectDeliveryImages.map((ProjectDeliveryImage) => {
//           return (
//             <ProjectDeliveryManagedServicesCard {...ProjectDeliveryImage} />
//           );
//         })}
//       </div>
//       <RequestForProposalBtn/>
//     </div>
//   );
// };
const Competencies = () => {
  return (
    <div className="container-fluid">
      <h4 className="py-5 text-center">COMPETENCIES</h4>
      <div className="row">
        {Data.ManagedServicesImages.map((ManagedServicesImage) => {
          return (
            <ProjectDeliveryManagedServicesCard {...ManagedServicesImage} />
          );
        })}
      </div>
      {/* <div className="py-5 d-flex justify-content-center">
        <RequestForProposalBtn />
      </div> */}
      <div className="py-5 d-flex justify-content-center">
        <ProjectDeliveryRequestForm />
      </div>
    </div>
  );
};

const OurClients = () => {
  return (
    <div className="container-fluid">
      {" "}
      <div className="row py-3">
        <h3 className="mt-4 text-center mb-5">Our Partners</h3>
        <div className="row TextAlignCenter">
          <div className=" TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
            <img
              src={gizlogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
            <img
              src={usadflogo}
              className="logo1 col-12"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
            <img
              src={lsetflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          {/* <div className=" TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
            <img
              src={itflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div> */}
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
        <div className="row justify-content-center m-5 p-5 align-items-stretch">
          <h4 className="text-center">SUCCESS STORY</h4>
          {successStoryGalleryCard.successStory.map((items) => {
            return (
              <>
                <div className="col-md-4 my-4" key={items.id}>
                  <SinglegalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <ProjectDeliveryViewMoreBtn />
        </div>
      </div>
    </>
  );
};

export default ProjectDeliveryPage;
