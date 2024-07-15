import React from "react";
import "./About.css";

const HeroSection = () => {
  return (
    <div className="flex flex-row">
      <div className="about-hero">
        <h1 className="animated-text">
          We are <span></span>
        </h1>
      </div>
      <div className="about-content">
        <p>
          Join us for an unforgettable experience!
          <p>
            Don't miss out on the chance to network, gain valuable insights, and
            be a part of something special!
          </p>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
