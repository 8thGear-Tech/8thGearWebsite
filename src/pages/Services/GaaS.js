import { OurImpactIcon } from "../../components/Icons";
import { WhatWeDoIcon } from "../../components/Icons";

const GrowthAsAservice = () => {
  return (
    <>
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
            <OurImpactIcon />
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
              <OurImpactIcon />
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
              <OurImpactIcon />
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
    <div className="container-fluid px-5 py-3">
      {" "}
      <h4 className="text-center my-5">How we Work</h4>
      <div className="row justify-content-center my-lg-5 my-sm-2">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">
                The Venture Studio model for entrepreneurship, combining comapny
                building
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">
                The Venture Studio model for entrepreneurship, combining comapny
                building
              </p>
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
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">
                The Venture Studio model for entrepreneurship, combining comapny
                building
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">
                The Venture Studio model for entrepreneurship, combining comapny
                building
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthAsAservice;
