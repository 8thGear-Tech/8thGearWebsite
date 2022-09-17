//External import
import React from "react";
import { OurImpact } from "../../components/Tractions";
import { Navbar3 } from "../../components/Navbar";
import { RequestForProposalBtn } from "../../components/Buttons/ProjectDeliveryBtn";
import { SinglegalleryCards } from "../../components/AllCards/MediaCards";
import successStoryGalleryCard from "../../data/gallerycards.json";
import { ProjectDeliveryViewMoreBtn } from "../../components/Buttons/ProjectDeliveryBtn";
// import ProjectDeliveryPageHero from "../../components/Hero/ImageandTextHero";

// import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";

const ProjectDeliveryPage = () => {
  return (
    <>
      <Navbar3 />
      {/* <ProjectDeliveryPageHero /> */}
      <Competencies />
      <OurImpact />
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
      <div className="py-5 d-flex justify-content-center">
        <RequestForProposalBtn />
      </div>
    </div>
  );
};
const SuccessStoryCards = () => {
  return (
    <>
      <div className="container-fluid successStoryBg">
        {" "}
        <div className="row justify-content-center m-5 p-5 ">
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
