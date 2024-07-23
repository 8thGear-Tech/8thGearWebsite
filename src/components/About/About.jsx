import React from "react";
// import HeroSection from "./HeroSection";
import { Navbar30 } from "../Navbar";
import "./About.css";
import Image from "./Image";
import CoreTeam from "./CoreTeam";
import EIR from "./EIR";
import { TeamCard } from "../AllCards/TeamCard";

const About = () => {
  return (
    <div className="position-relative">
      <div className="hero-background w-100 h-100">
        <div className="hero-layout w-100 start-0 d-flex justify-content-center align-items-center">
        <Navbar30 />
        {/* <HeroSection /> */}
        </div>
      </div>
        <main>
          <Image />
          {/* <CoreTeam />
          <EIR /> */}
          <TeamCard />
        </main>
    </div>
  );
};

export default About;
