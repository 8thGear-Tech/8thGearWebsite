import React from "react";
import HeroSection from "./HeroSection";
import { Navbar28 } from "../Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="position-relative">
      <div className="hero-background">
        <div className="hero-layout">
        <Navbar28 />
        <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default About;
