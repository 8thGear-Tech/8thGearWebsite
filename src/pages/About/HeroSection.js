import React from "react";
import '../About/aboutUs.css';

const HeroSection = () => {
  return (
    <div className="container heroAbout d-flex flex-column align-items-center justify-content-center text-center text-white">
      <div className="d-flex align-items-center justify-content-center w-100">
        <h1 className="animated-text fw-bold text-white">
          Who we are
        </h1>
      </div>
      <div className="about-content text-white text-center">
        <p className="fs-5 fw-normal lh-lg">
          We are your one-stop shop to achieve your Venture Building Dream.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
