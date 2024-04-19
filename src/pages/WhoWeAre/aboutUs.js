import React from "react";

import ciscologo from "../../assets/images/whoweare/ciscologo.png";
import afrilabslogo from "../../assets/images/whoweare/afrilabslogo.png";
import gizlogo from "../../assets/images/whoweare/gizlogo.png";
import lsetflogo from "../../assets/images/whoweare/lsetflogo.png";
import usadflogo from "../../assets/images/whoweare/usadflogo.png";
import corevalues from "../../assets/images/whoweare/corevalues.png";
import corevaluesnew from "../../assets/images/whoweare/corevaluesnew.png";
import { Navbar10 } from "../../components/Navbar";
import { AboutPageHero } from "../../components/Hero/VideoHero";
import coworking from "../../assets/images/coworking/coworking.png";

//team
import { AdvisoryTeamPic } from "../../components/AllCards/TeamCard";
import { Gerians } from "../../components/AllCards/TeamCard";
import { EIR } from "../../components/AllCards/TeamCard";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";
// import { JoinTheTeamForm } from "../../components/Forms/EnquiresandSuggestionForm";

const AboutUs = () => {
  return (
    <>
      <Navbar10 />
      <AboutPageHero />
      <CoreValues />
      <Gerians />
      <EIR />
      <AdvisoryTeamPic />
      <Partners />
      <JointheTeam />
    </>
  );
};

const CoreValues = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <img
          src={corevaluesnew}
          className="col-12"
          // style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></img>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="container-fluid py-4">
      {" "}
      <div className="row g-0">
        <h3 className="mt-4 text-center mb-4">Our Partners</h3>
        <div className="row justify-content-center justify-content-evenly">
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={ciscologo}
              className="col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={afrilabslogo}
              className="logo1 col-12"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={gizlogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={lsetflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={usadflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const JointheTeam = () => {
  return (
    <>
      <div className="container-fluid py-3 px-lg-5 px-md-5 WhatWeDoBg">
        <div className="row mt-lg-5 mb-lg-3 mx-lg-3 px-5 justify-content-center ">
          <div className="col-lg-8">
            <h3 className="text-center pb-2">Become an 8thGearian</h3>
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
          {/* <JoinTheTeamForm /> */}
          <JointheTeamBtn />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
