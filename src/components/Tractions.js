//OurModelTractions
//ProjectDeliveryTractions
//ManagedServicesTractions

import { OurImpactIcon } from "../components/Icons";
import { BusinessInHouseIcon } from "../components/Icons";
import { JobsCreatedIcon } from "../components/Icons";
import { JobsPlacedIcon } from "../components/Icons";
import { JobsSavedIcon } from "../components/Icons";
import { StartupSupportedIcon } from "../components/Icons";

export const OurImpact = () => {
  return (
    <div className="container-fluid text-center px-5 ourImpactBg">
      <div className="row justify-content-center ">
        <h4 className="text-center my-5">OUR IMPACT</h4>
        <div className="col-lg-3 col-md-4 col-sm-8 px-4  ">
          <div className="card mb-5 ourImpactCardBg">
            <BusinessInHouseIcon />
            <div className="card-body">
              {/* <h5 className="card-title">20,000</h5> */}
              <p className="card-text"> BUSINESS IN-HOUSE</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-4 ">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <JobsCreatedIcon />
            </div>

            <div className="card-body">
              {/* <h5 className="card-title">20,000</h5> */}
              <p className="card-text">JOB CREATED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-4 ">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <JobsSavedIcon />
            </div>

            <div className="card-body">
              {/* <h5 className="card-title">20,000</h5> */}
              <p className="card-text">JOB SAVED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {" "}
        <div className="col-lg-3 col-md-4 col-sm-8 px-4 ">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <div>
              {" "}
              <JobsPlacedIcon />
            </div>

            <div className="card-body">
              {/* <h5 className="card-title">20,000</h5> */}
              <p className="card-text">PROJECT DELIVERED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-8 px-4 ">
          {" "}
          <div className="card mb-5 ourImpactCardBg">
            <StartupSupportedIcon />
            <div className="card-body">
              {/* <h5 className="card-title">20,000</h5> */}
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

        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text">75%</h1>
              <p className="card-text text-nowrap">HAVE FEMALE CO-FOUNDERS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text"> 240</h1>
              <p className="card-text">MENTORSHIP HOURS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 my-3 ">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text">12</h1>
              <p className="card-text">PORTFOLIO BUSINESSES</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text">20</h1>
              <p className="card-text">JOBS CREATED</p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2 col-md-4 col-sm-12 ">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">PORTFOLIO BUSINESSES</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 ">
          <div className="align-items-center">
            <OurImpactIcon />
            <div className="card-body ">
              <h5 className="card-text">1000</h5>
              <p className="card-text">PORTFOLIO BUSINESSES</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export const ManagedServicesTractions = () => {
  return (
    <div className="container-fluid text-center px-5">
      <div className="row justify-content-evenly py-4">
        {/* <h4 className="text-center my-5">OUR IMPACT</h4> */}
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">EXHIBITIONS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">2</h1>
              <p className="card-text">TALK SESSIONS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">PROJECTS DELIVERED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
