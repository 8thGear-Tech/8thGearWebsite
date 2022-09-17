//External import
import React from "react";
import { OurImpact } from "../../components/Tractions";
import { Navbar3 } from "../../components/Navbar";
import { RequestForProposalBtn } from "../../components/Buttons/ProjectDeliveryBtn";
// import ProjectDeliveryPageHero from "../../components/Hero/ImageandTextHero";

// import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
// import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";

const ProjectDeliveryPage = () => {
  return (
    <>
      <Navbar3 />
      {/* <ProjectDeliveryPageHero /> */}
      {/* <Competencies /> */}
      <OurImpact />
    </>
  );
};

// const Competencies = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {Data2.ProjectDeliveryImages.map((ProjectDeliveryImage) => {
//           return (
//             <ProjectDeliveryManagedServicesCard {...ProjectDeliveryImage} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const Competencies = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {Data.ManagedServicesImages.map((ManagedServicesImage) => {
//           return (
//             <ProjectDeliveryManagedServicesCard {...ManagedServicesImage} />
//           );
//         })}
//       </div>
//       <div className="py-5 d-flex justify-content-center">
//         <RequestForProposalBtn />
//       </div>
//     </div>
//   );
// };
export default ProjectDeliveryPage;
