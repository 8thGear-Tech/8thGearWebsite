import React from "react";
import HeroSection from "./HeroSection";
import { Navbar30 } from "../Navbar";
import "./About.css";
import Image from "./Image";

const About = () => {
  return (
    <div className="position-relative">
      <div className="hero-background">
        <div className="hero-layout">
        <Navbar30 />
        <HeroSection />
        </div>
      </div>
        <main>
          <Image />
        </main>
    </div>
  );
};

export default About;
