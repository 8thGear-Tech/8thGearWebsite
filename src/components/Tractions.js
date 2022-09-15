//OurModelTractions
//ProjectDeliveryTractions
//ManagedServicesTractions

import { OurImpactIcon } from "../components/Icons";

export const OurImpact = () => {
  return (
    <div className="container-fluid text-center px-5 ourImpactBg">
      <div className="row justify-content-evenly ">
        <h4 className="text-center my-5">OUR IMPACT</h4>
        <div className="col-lg-3 col-md-4 col-sm-8 px-5 ">
          <div className="card mb-5 ourImpactCardBg">
            <OurImpactIcon />
            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text"> BUSINESS IN-HOUSE</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-5">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <OurImpactIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text">JOB CREATED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-5">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <OurImpactIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text">JOB SAVED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly">
        {" "}
        <div className="col-lg-3 col-md-4 col-sm-8 px-5">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <OurImpactIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text">PROJECT DELIVERED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-5">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <OurImpactIcon />
            </div>

            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text">JOB PLACED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-5">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <OurImpactIcon />
            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text">START-UP SUPPORTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const OurModelTractions = () => {
  return (
    <div className="container-fluid text-center px-5 ourImpactBg">
      <div className="row justify-content-evenly py-5">
        {/* <h4 className="text-center my-5">OUR IMPACT</h4> */}

        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">HAPPY CLIENTS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">COMPANIES SUPPORTED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">MENTORS ENGAGED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">JOBS CREATED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">TRAINING AND MENTOR HOURS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">CAPITALS RAISED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
