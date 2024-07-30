import React from "react";
//IMPORTED SASS
import "../../sassfiles/pages/projectdelivery/_projectDelivery.scss";
import { ProjectNav } from "../../components/Navbar";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";

const EnterpriseSupport = () => {
  return (
    <div>
      {/* <div className="d-flex justify-content-center align-content-center mb-2 p-1 "> */}
      <div className="d-flex justify-content-center align-content-center EnterpriceHero mb-2 p-1 ">
        <ProjectNav />
        <div className="hero-text ">
          <h1 className="text-lg-center">
            Great people building enduring ventures
          </h1>
          <p>"Get ready to experience the future!"</p>
          <p>
            Join Us at #DemoDay to witness the latest innovation and
            groundbreaking technologis that are changing the world.
          </p>
        </div>
      </div>
      <div>
        {Data.ProjectDeliveryContent.map((content) => (
          <div className="container mt-3 mb-14 p-3 text-center">
            <h2>{content.readmoretitle}</h2>
            <p>{content.readmoretext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseSupport;
