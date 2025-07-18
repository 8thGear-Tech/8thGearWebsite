import React from "react";
import "../About/aboutUs.css";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const HeroSection = () => {
  return (
    <div className="container heroAbout d-flex flex-column align-items-center justify-content-center text-center text-white">
      <div className="d-flex align-items-center justify-content-center w-100">
        <h2 className="animated-text fw-bold text-white">
          We are your one-stop shop to achieve your Venture Building Dream.
        </h2>
      </div>
      <div className="about-content text-white text-center"></div>
      <div className="d-flex justify-content-center">
        <JointheTeamBtn />
      </div>
    </div>
  );
};

export default HeroSection;
