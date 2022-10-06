import { OurImpactIcon } from "../../components/Icons";
import { WhatWeDoIcon } from "../../components/Icons";
import { StartIcon } from "../../components/Icons";
import { BuildIcon } from "../../components/Icons";
import { ScaleIcon } from "../../components/Icons";
import { AdvisoryIcon } from "../../components/Icons";
import { NetworkingIcon } from "../../components/Icons";
import { GrowthStrategyIcon } from "../../components/Icons";
import { DealManagementIcon } from "../../components/Icons";
import { Navbar9 } from "../../components/Navbar";
import { BookaFreeSessionBtn } from "../../components/Buttons/ServicesBtn";
import { GaaSHero } from "../../components/Hero/ImageandTextHero";

const GrowthAsAservice = () => {
  return (
    <>
      <Navbar9 />
      <GaaSHero />
      <WhyChooseUs />
      <HowWeWork />
    </>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="container-fluid text-center px-5 whyChooseUsBg">
      <div className="row justify-content-evenly ">
        <h4 className="text-center my-5">Why Choose Us</h4>
        <div className="col-lg-4 col-md-4 col-sm-10  px-lg-5">
          <div className="card mb-5 whyChooseUsCardBg py-4">
            <StartIcon />
            <div className="card-body">
              <h5 className="card-title">Start</h5>
              <p className="card-text">
                {" "}
                The Venture Studio model for entrepreneurship, combining
                comapany building
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10  px-lg-5">
          {" "}
          <div className="card mb-5 whyChooseUsCardBg py-4">
            <div>
              {" "}
              <BuildIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">Build</h5>
              <p className="card-text">
                {" "}
                The Venture Studio model for entrepreneurship, combining
                comapany building
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5">
          {" "}
          <div className="card mb-5 whyChooseUsCardBg py-4">
            <div>
              {" "}
              <ScaleIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">Scale</h5>
              <p className="card-text">
                {" "}
                The Venture Studio model for entrepreneurship, combining
                comapany building
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="container py-3">
      {" "}
      <h4 className="text-center my-5">How We Work</h4>
      <div className="row justify-content-center my-lg-5 my-sm-2">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="d-flex align-items-center">
            <AdvisoryIcon />
            {/* <div className="card-body ms-3"> */}
            <p className="card-text">Advisory</p>
            {/* </div> */}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="d-flex align-items-center">
            <NetworkingIcon />
            <div className="card-body">
              <p className="card-text">Networking</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="d-flex align-items-center">
            <GrowthStrategyIcon />
            <div className="card-body">
              <p className="card-text">Growth Strategy</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="d-flex align-items-center">
            <DealManagementIcon />
            <div className="card-body">
              <p className="card-text">Deal Management</p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div> */}
        <div className="py-5 d-flex justify-content-center">
          {" "}
          <BookaFreeSessionBtn />
        </div>
      </div>
      {/* <div className="row justify-content-center"> */}
      {/* <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <GrowthStrategyIcon />
            <div className="card-body">
              <p className="card-text">Growth Strategy</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <DealManagementIcon />
            <div className="card-body">
              <p className="card-text">Deal Management</p>
            </div>
          </div>
        </div> */}
      {/* <div className="py-5 d-flex justify-content-center">
          <BookaFreeSessionBtn />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default GrowthAsAservice;
