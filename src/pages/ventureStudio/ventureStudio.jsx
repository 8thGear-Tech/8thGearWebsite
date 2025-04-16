import React from "react";
import Hero from "./Hero";
import CoreServices from "./coreServices";
import HowWeDoIt from "./howWeDoIt";
import ImpactMetrics from "./impactMetrics";
import PortfolioCompanies from "./PortfolioCompanies";
import { ApplyNowBtn } from "./Button";

const VentureStudio = () => {
  return (
    <div className="venture-studio">
      <div>
        <Hero />
      </div>
      <div className="container my-5">
        {/* <iframe
          src="/pdfs/IRE _Curriculum&Content.pdf"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Embedded PDF"
        /> */}
        <iframe
          src="/pdfs/IRE_Curriculum&Content.pdf#toolbar=0&navpanes=0&scrollbar=0"
          width="100%"
          height="800"
          style={{ border: "none" }}
          title="Inline PDF"
        />
      </div>
      <div className="text-center">
        <ApplyNowBtn buttonText={"Apply Now"} />
      </div>

      <div className="d-flex justify-content-center my-5 pt-1 px-3">
        <div className="text-center col-lg-9">
          {/* <div className="text-center my-5 pt-2 px-3 col-lg-6"> */}
          <h3 className="purple-text">WHAT WE DO</h3>
          <p>
            At our venture studio, we create enterprises with sustainable
            business strategies. We prioritize engaging with potential clients
            from start and throughout the business lifecycle. Years of iterative
            learning have honed ability to identify the conditions that increase
            the chances of an idea’s success. Our in-house team of experts are
            ready to turn ideas into viable businesses.
          </p>
        </div>
      </div>
      <div className="mx-5">
        <CoreServices />
      </div>
      <div>
        <HowWeDoIt />
      </div>
      <div>
        <ImpactMetrics />
      </div>
      <div>
        <PortfolioCompanies />
      </div>
    </div>
  );
};

export default VentureStudio;
