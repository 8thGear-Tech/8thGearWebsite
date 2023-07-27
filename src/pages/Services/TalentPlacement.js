//external
// import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect, useRef } from "react";
// import { Carousel } from "react-bootstrap";

import { Carousel, Item, Slide, div, img } from "bootstrap";
// import ReactBootstrap, { Carousel, Item, Slide } from "react-bootstrap";

//internal
import { Navbar24 } from "../../components/Navbar";
import { TalentPlacementHero } from "../../components/Hero/BGColorandTextHero";
import recruitment from "../../assets/images/talentplacement/recruitment.jpg";
import outsourcing from "../../assets/images/talentplacement/outsourcing.png";
import cvscreening from "../../assets/images/talentplacement/cvscreening.jpg";
import { ManagedServicesRequestBtn } from "../../components/Buttons/ServicesBtn";
import hiringsm from "../../assets/images/talentplacement/hiringsm.png";
import hiringlg from "../../assets/images/talentplacement/hiringlg.png";
import line from "../../assets/images/talentplacement/line.png";
import downarrow from "../../assets/images/talentplacement/downarrow.png";
import expertism from "../../assets/images/talentplacement/expertism.png";
import professionalism from "../../assets/images/talentplacement/professionalism.png";
import swiftprocess from "../../assets/images/talentplacement/swiftprocess.png";
import ecobarter from "../../assets/images/talentplacement/companylogo/ecobarter.png";
import propslogo from "../../assets/images/talentplacement/companylogo/propslogo.png";
import aiki from "../../assets/images/talentplacement/companylogo/aiki.png";
import chekkit from "../../assets/images/talentplacement/companylogo/chekkit.png";
import cloudflex from "../../assets/images/talentplacement/companylogo/cloudflex.png";
import firstbank from "../../assets/images/talentplacement/companylogo/firstbank.png";
import esentry from "../../assets/images/talentplacement/companylogo/esentry.png";
import npc from "../../assets/images/talentplacement/companylogo/npc.png";
import uba from "../../assets/images/talentplacement/companylogo/uba.png";
import elitecv from "../../assets/images/talentplacement/companylogo/elitecv.png";
import lagosstategovernment from "../../assets/images/talentplacement/companylogo/lagosstategovernment.png";
import unionbank from "../../assets/images/talentplacement/companylogo/unionbank.png";
import wouessi from "../../assets/images/talentplacement/companylogo/wouessi.png";
import dangote from "../../assets/images/talentplacement/companylogo/dangote.png";
import tingomobile from "../../assets/images/talentplacement/companylogo/tingomobile.png";
import fuelmetrics from "../../assets/images/talentplacement/companylogo/fuelmetrics.png";
import ictflier from "../../assets/images/talentplacement/companylogo/ictflier.png";

//talent
import designers from "../../assets/images/talentplacement/talents/designers.png";
import frontend from "../../assets/images/talentplacement/talents/frontend.png";
import sales from "../../assets/images/talentplacement/talents/sales.png";
import fullstack from "../../assets/images/talentplacement/talents/fullstack.png";
import customerexperience from "../../assets/images/talentplacement/talents/customerexperience.png";
import backend from "../../assets/images/talentplacement/talents/backend.png";
import digitalmarketers from "../../assets/images/talentplacement/talents/digitalmarketers.png";
import data from "../../assets/images/talentplacement/talents/data.png";

const TalentPlacement = () => {
  return (
    <>
      <Navbar24 />
      <TalentPlacementHero />
      <Services />
      <TransformingTheHiringProcess />
      <WhyRecruitFromUs />
      <OurAvailableTalents />
      <TrustedCompanies />
      {/* <LogoCarousel /> */}
    </>
  );
};

const Services = () => {
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <h4 className="pt-5 text-center">OUR SERVICES</h4>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg projectdeliveryCard">
            <img src={recruitment} className="card-img-top" alt="" />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">Full Cycle Recruitment</h4>
              <p className="">
                Our full recruitment solution is designed to help you handle and
                execute the entire hiring process of tech talents from finding
                the talent to hiring.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg projectdeliveryCard">
            <img src={outsourcing} className="card-img-top" alt="" />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">Outsourcing</h4>
              <p className="">
                Because we are good at what we do, we help your company focus on
                core business activities and save costs by outsourcing highly
                qualified Tech expertise that supports your company's growth and
                also brings about productivity.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div className="cardBgg projectdeliveryCard">
            <img src={cvscreening} className="card-img-top" alt="" />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">CV Screening</h4>
              <p className="">
                This service is provided to help you go through the professional
                process needed for CV screening. We carefully screen tech
                talents' CVs and help determine the most qualified candidate for
                the role.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 text-center">
          {" "}
          <a href="https://bit.ly/8thgeartalentrequestform" target="_blank">
            {" "}
            <ManagedServicesRequestBtn />
          </a>
        </div>
      </div>
    </div>
  );
};

const TransformingTheHiringProcess = () => {
  return (
    <div className="container-fluid talentHeroBg">
      <h4 className="pt-5 text-center">TRANSFORMING THE HIRING PROCESS</h4>
      <div className="row d-flex justify-content-center align-items-center  px-4 pb-4">
        <div className="col-lg-1 col-md-1 d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <img
            src={line}
            className="d-block mx-auto img-fluid p-0"
            alt=""
            loading=""
            // width="2000"
            height="100"
          />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <h4 className="my-5">Request</h4>
          <h4 className="my-5">Source</h4>
          <h4 className="my-5">Shortlist</h4>
          <h4 className="my-5">Interview</h4>
          <h4 className="my-5">Selection</h4>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 d-xs-block d-sm-block d-md-none d-lg-none">
          <h4 className="mb-3 mt-5 text-center">Request</h4>
          <div className="text-center">
            <img src={downarrow} className="img-fluid text-center" />
          </div>

          <h4 className="my-3 text-center">Source</h4>
          <div className="text-center">
            <img src={downarrow} className="img-fluid text-center" />
          </div>
          <h4 className="my-3 text-center">Shortlist</h4>
          <div className="text-center">
            <img src={downarrow} className="img-fluid text-center" />
          </div>
          <h4 className="my-3 text-center">Interview</h4>
          <div className="text-center">
            <img src={downarrow} className="img-fluid text-center" />
          </div>
          <h4 className="mb-5 mt-3 text-center">Selection</h4>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12 d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <img
            src={hiringlg}
            // src={hiringprocess}
            className="d-block mx-auto img-fluid"
            alt=""
            loading=""
            width="2000"
            height="2000"
          />
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12 d-xs-block d-sm-block d-md-none d-lg-none">
          <img
            src={hiringsm}
            // src={hiringprocess}
            className="d-block mx-auto img-fluid"
            alt=""
            loading=""
            width="2000"
            height="2000"
          />
        </div>
        <div className="mt-5 text-center">
          <a href="https://bit.ly/8thgeartalentrequestform" target="_blank">
            {" "}
            <ManagedServicesRequestBtn />
          </a>
        </div>
      </div>
    </div>
  );
};
const WhyRecruitFromUs = () => {
  return (
    <div className="container">
      <h4 className="pt-5 text-center">WHY RECRUIT FROM US</h4>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10">
          {" "}
          <div className="card mb-5 py-4 talentCard">
            <div className="text-center">
              <img
                src={expertism}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Expertism</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10">
          {" "}
          <div className="card mb-5 py-4 talentCard">
            <div className="text-center">
              <img
                src={professionalism}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Professionalism</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10">
          {" "}
          <div className="card mb-5 py-4 talentCard">
            <div className="text-center">
              <img
                src={swiftprocess}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Swift Process</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const OurAvailableTalents = () => {
  return (
    <div className="container-fluid talentHeroBg">
      <h4 className="pt-5 text-center">OUR AVAILABLE TALENTS</h4>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={designers}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Creative Designers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={frontend}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Frontend Developers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img src={sales} className="img-fluid" width="100" height="100" />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Sales</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={fullstack}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Fullstack Developers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={customerexperience}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Customer Experience</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly mt-5 pb-3">
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={backend}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Backend Developers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img
                src={digitalmarketers}
                className="img-fluid"
                width="100"
                height="100"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Digital Marketers</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-10">
          {" "}
          <div className="mb-3 talentCard">
            <div className="text-center">
              <img src={data} className="img-fluid" width="100" height="100" />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">Data</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustedCompanies = () => (
  <>
    <div>
      <h4 className="text-center pt-5 pb-3">COMPANIES WHO HAVE TRUSTED US</h4>
      <div className="slider2" style={{ position: "relative", zIndex: 1 }}>
        <div className="slide-track2">
          {[
            ecobarter,
            firstbank,
            aiki,
            chekkit,
            cloudflex,
            propslogo,
            esentry,
            uba,
            npc,
            unionbank,
            lagosstategovernment,
            wouessi,
            dangote,
            ictflier,
            elitecv,
            tingomobile,
            fuelmetrics,
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
            ecobarter,
            firstbank,
            aiki,
            chekkit,
            cloudflex,
            propslogo,
            esentry,
            uba,
            npc,
            unionbank,
            lagosstategovernment,
            wouessi,
            dangote,
            ictflier,
            elitecv,
            tingomobile,
            fuelmetrics,
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

export default TalentPlacement;
