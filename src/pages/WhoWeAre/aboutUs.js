import React from "react";

import corevaluesnew from "../../assets/images/whoweare/corevaluesnew.png";
import { HomepageNav, Navbar10 } from "../../components/Navbar";
import { AboutPageHero } from "../../components/Hero/VideoHero";
import coworking from "../../assets/images/coworking/coworking.png";

//team
import { Gerians } from "../../components/AllCards/TeamCard";
import { EIR } from "../../components/AllCards/TeamCard";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";
import "../About/aboutUs.css";
import CoreValue from "../About/CoreValue";
import HeroSection from "../About/HeroSection";

//Our Partners
import german from "../About/image/german.png";
import funded from "../About/image/co-funded.png";
import giz from "../About/image/giz.png";
import usadf from "../About/image/usadf.png";
import lsetf from "../About/image/lsetf.png";
import leap from "../About/image/LEAP-Africa.png";
import lagos from "../About/image/lagosI-logo.png";
import mtn from "../About/image/mtn.png";
import vmware from "../About/image/vmware.png";
import isn from "../About/image/isn_logo.png";
import zoho from "../About/image/zoho.png";
import fcmb from "../About/image/fcmb.png";
import cisco from "../About/image/cisco.png";
import afrilabs from "../About/image/Afrilabs.png";
import skills from "../About/image/skills.png";
import digital from "../About/image/digital.png";
import SliderComponent from "../About/SliderComponent";

const AboutUs = () => {
  return (
    <>
      <HomepageNav />
      <div className="about-hero-background">
        <div className="about-layout w-100 start-0 d-flex justify-content-center align-items-center">
          {/* <Navbar10 /> */}
          <HeroSection />
        </div>
      </div>
      <CoreValue />
      <Partners />
      <Gerians />
      <EIR />
      <div className="SliderBg">
        <SliderComponent />
      </div>
      <JointheTeam />
    </>
  );
};

const CoreValues = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <img src={corevaluesnew} className="col-12"></img>
      </div>
    </div>
  );
};

export const Partners = () => (
  <>
    <div>
      <h3 className="purple-text text-center pt-5 pb-3">OUR PARTNERS</h3>
      <div className="slider2" style={{ position: "relative", zIndex: 1 }}>
        <div className="slide-track2">
          {[
            german,
            funded,
            giz,
            usadf,
            digital,
            lsetf,
            leap,
            lagos,
            mtn,
            vmware,
            isn,
            zoho,
            fcmb,
            cisco,
            afrilabs,
            skills,
          ].map((src, index) => (
            <div
              className="slide2"
              key={index}
              style={index === 0 ? { marginLeft: "0px" } : undefined}
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="carousel-logo"
                style={{ width: "130px", height: "130px", margin: "0 30px" }}
              />
            </div>
          ))}
          {[
            german,
            funded,
            giz,
            usadf,
            digital,
            lsetf,
            leap,
            lagos,
            mtn,
            vmware,
            isn,
            zoho,
            fcmb,
            cisco,
            afrilabs,
            skills,
          ].map((src, index) => (
            <div
              className="slide2"
              key={index}
              style={index === 0 ? { marginLeft: "0px" } : undefined}
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="carousel-logo"
                style={{ width: "130px", height: "130px", margin: "0 30px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const JointheTeam = () => {
  return (
    <>
      <div className="container-fluid py-3 px-lg-5 px-md-5 ">
        <div className="row mt-lg-5 mb-lg-3 mx-lg-3 px-5 justify-content-center ">
          <div className="col-lg-8">
            <h3 className="text-center pb-2">Join the 8thGear Team</h3>
            <p className="text-center joinTeamFontSize">
              Dream teams are not right for everyone. Some people prefer job
              security, and choose to work at companies that are more focused on
              stability and seniority, and less rigorous about performance
              management. Our model works best for people who value excellence
              and the opportunities it provides.
            </p>
            <p className="text-center joinTeamFontSize">
              Do our positioning and mission resonate with you?
            </p>
            <p className="text-center joinTeamFontSize">
              If yes, we have been waiting to have you!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <JointheTeamBtn />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
