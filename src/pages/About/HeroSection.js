import React from "react";
import "../About/aboutUs.css";

const HeroSection = () => {
  return (
    <div className="container heroAbout d-flex flex-column align-items-center justify-content-center text-center text-white">
      <div className="d-flex align-items-center justify-content-center w-100">
        {/* <h2 className="text-lg-center d-inline fs-1">
          Fueling Innovation, Empowering Entrepreneurs and Transforming futures
        </h2> */}
        <h2 className="animated-text fw-bold text-white">
          {" "}
          We are your one-stop shop to achieve your Venture Building Dream.
        </h2>
      </div>
      <div className="about-content text-white text-center">
        {/* <p className="fs-5 fw-normal lh-lg">
          We are your one-stop shop to achieve your Venture Building Dream.
        </p> */}
      </div>
    </div>
  );
};

export default HeroSection;
