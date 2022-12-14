import { Link } from "react-router-dom";
import { ManagedServicesCard } from "../../components/AllCards/MediaCards";
import { NewProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import { ManagedServicesTractions } from "../../components/Tractions";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import Data2 from "../../data/ProjectDeliveryManagedServicesCardMap.json";
import { Navbar4 } from "../../components/Navbar";
import { ManagedServicesHero } from "../../components/Hero/BGColorandTextHero";
import { HowItWorksIcon } from "../../components/Icons";
import { ManagedServicesPageTestimonialCard } from "../../components/AllCards/TestimonialCards";

const ManagedServicesPage = () => {
  return (
    <>
      <Navbar4 />
      <ManagedServicesHero />
      <Services />
      <HowItWorks />
      <ManagedServicesTractions />
      {/* <ManagedServicesPageTestimonialCard /> */}
    </>
  );
};
// const Services = () => {
//   return (
//     <div className="container-fluid text-center">
//       <div className="row mt-5  ">
//         <h3 className="mb-4">Services</h3>
//         {Data2.ManagedServicesImages.map((ManagedServicesImage) => {
//           return <ManagedServicesCard {...ManagedServicesImage} />;
//         })}
//       </div>
//     </div>
//   );
// };
const Services = () => {
  return (
    <div className="container-fluid managedServicesBg">
      <div className="container ">
        <div className="row justify-content-center pb-4">
          <h4 className="py-5 text-center">COMPETENCIES</h4>
          {Data2.ManagedServicesContent.map((ManagedServicesContent) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-10 mb-5 px-4 d-flex "
                key={ManagedServicesContent.id}
              >
                <NewProjectDeliveryManagedServicesCard
                  {...ManagedServicesContent}
                ></NewProjectDeliveryManagedServicesCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const HowItWorks = () => {
  return (
    <div className="container-fluid py-5 pe-3 ">
      <div className="row mx-2 my-5">
        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 m-auto ">
          {/* <div className="col d-lg-flex d-md-flex"> */}
          {/* <div className="col"> */}
          {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
          <h3>How It Works</h3>
          <HowItWorksIcon />
          {/* <h2 className="">We are builders funding the next generation</h2> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              <i
                className="bi bi-bookmarks iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>PROJECT DELIVERY</h3>
              <p>We build at 8thGearWe build at 8thGear We build at 8thGear</p>
            </div>
          </div> */}
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex align-items-center">
          <p className="mt-2">
            We at 8thGear are helpmates to your business and because we believe
            in the uniqueness of every individual and business, we tailor our
            solutions to suit your needs and aspirations. We are not only your
            brand ambassadors but your biggest fan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagedServicesPage;
