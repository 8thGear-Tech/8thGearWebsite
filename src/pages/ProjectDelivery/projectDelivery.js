//External import
import React from "react";
import { OurImpactIcon } from "../../components/Icons";
const ProjectDeliveryPage = () => {
  return (
    <>
      <OurImpact />
    </>
  );
};

const OurImpact = () => {
  return (
    <div className="container-fluid text-center px-5 ourImpactBg">
      <div className="row justify-content-evenly ">
        <h4 className="text-center my-5">OUR IMPACT</h4>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5 ">
          <div className="card mb-5 ourImpactCardBg">
            <OurImpactIcon />
            <div className="card-body">
              <h5 className="card-title">20,000</h5>
              <p className="card-text"> BUSINESS IN-HOUSE</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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

        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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

export default ProjectDeliveryPage;
