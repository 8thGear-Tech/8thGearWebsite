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
import hiringprocess from "../../assets/images/talentplacement/hiringprocess.png";
import line from "../../assets/images/talentplacement/line.png";
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
      {/* <TrustedCompanies /> */}
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
          <h4 className="my-5 text-center">Request</h4>
          <h4 className="my-5 text-center">Source</h4>
          <h4 className="my-5 text-center">Shortlist</h4>
          <h4 className="my-5 text-center">Interview</h4>
          <h4 className="my-5 text-center">Selection</h4>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <img
            src={hiringprocess}
            className="d-block mx-auto img-fluid"
            // style={{ width: "2000px", height: "2000px" }}
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

// const TrustedCompanies = () => {
//   return (
//     <div
//       id="carouselExample"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <div className="d-flex justify-content-center">
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 1"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 2"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 3"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 4"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 5"
//             />
//           </div>
//         </div>
//         {/* Add more carousel items as needed */}
//       </div>
//     </div>
//   );
// };

// const TrustedCompanies = () => {
//   const carouselRef = useRef(null);

//   const handleCarouselInit = () => {
//     const carousel = carouselRef.current;
//     const bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
//       interval: 2000,
//       pause: false,
//     });
//   };

//   return (
//     <div
//       id="carouselExample"
//       className="carousel slide"
//       data-bs-ride="carousel"
//       ref={carouselRef}
//       onLoad={handleCarouselInit}
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <div className="d-flex justify-content-center">
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 1"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 2"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 3"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 4"
//             />
//             <img
//               className="d-block w-25 mx-1"
//               src={ecobarter}
//               alt="Company Logo 5"
//             />
//           </div>
//         </div>
//         {/* Add more carousel items as needed */}
//       </div>
//     </div>
//   );
// };

// const TrustedCompanies = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlide = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   const logos = [
//     { src: ecobarter, alt: "Company Logo 1" },
//     { src: propslogo, alt: "Company Logo 2" },
//     { src: ecobarter, alt: "Company Logo 3" },
//     { src: ecobarter, alt: "Company Logo 4" },
//     { src: ecobarter, alt: "Company Logo 5" },
//   ];

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       onSelect={handleSlide}
//       interval={2000}
//       pause={false}
//     >
//       {logos.map((logo, index) => (
//         <Carousel.Item key={index}>
//           <div className="d-flex justify-content-center">
//             <img className="d-block w-25 mx-1" src={logo.src} alt={logo.alt} />
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// const TrustedCompanies = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlide = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   const logos = [
//     { src: ecobarter, alt: "Company Logo 1" },
//     { src: propslogo, alt: "Company Logo 2" },
//     { src: ecobarter, alt: "Company Logo 3" },
//     { src: ecobarter, alt: "Company Logo 4" },
//     { src: ecobarter, alt: "Company Logo 5" },
//   ];

//   const visibleLogos = logos.slice(activeIndex, activeIndex + 5);

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       onSelect={handleSlide}
//       interval={2000}
//       pause={false}
//     >
//       {visibleLogos.map((logo, index) => (
//         <Carousel.Item key={index}>
//           <div className="d-flex justify-content-center">
//             {logos.map((logo, index) => (
//               <img
//                 className="d-block w-25 mx-1"
//                 src={logo.src}
//                 alt={logo.alt}
//                 key={index}
//               />
//             ))}
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// const TrustedCompanies = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlide = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   const logos = [
//     { src: ecobarter, alt: "Company Logo 1" },
//     { src: propslogo, alt: "Company Logo 2" },
//     { src: ecobarter, alt: "Company Logo 3" },
//     { src: ecobarter, alt: "Company Logo 4" },
//     { src: ecobarter, alt: "Company Logo 5" },
//   ];

//   const visibleLogos = logos.slice(activeIndex, activeIndex + 5);

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       onSelect={handleSlide}
//       interval={2000}
//       pause={false}
//     >
//       {visibleLogos.map((logo, index) => (
//         <Carousel.Item key={index}>
//           <div className="d-flex justify-content-center">
//             {logos.map((logo, index) => (
//               <img
//                 className="d-block w-25 mx-1"
//                 src={logo.src}
//                 alt={logo.alt}
//                 key={index}
//               />
//             ))}
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// const TrustedCompanies = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlide = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   const logos = [
//     { src: ecobarter, alt: "Company Logo 1" },
//     { src: propslogo, alt: "Company Logo 2" },
//     { src: ecobarter, alt: "Company Logo 3" },
//     { src: ecobarter, alt: "Company Logo 4" },
//     { src: ecobarter, alt: "Company Logo 5" },
//   ];

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       onSelect={handleSlide}
//       interval={2000}
//       pause={false}
//     >
//       {logos.map((logo, index) => (
//         <Carousel.Item key={index}>
//           <div className="d-flex justify-content-center">
//             <img className="d-block w-25 mx-1" src={logo.src} alt={logo.alt} />
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// const TrustedCompanies = () => {
//   const [logos, setLogos] = useState([]);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     // Simulated data for logos
//     const initialLogos = [
//       "logo1.png",
//       "logo2.png",
//       "logo3.png",
//       "logo4.png",
//       "logo5.png",
//     ];

//     setLogos(initialLogos);

//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         // Simulated new set of logos
//         const newLogos = [
//           "logo6.png",
//           "logo7.png",
//           "logo8.png",
//           "logo9.png",
//           "logo10.png",
//         ];
//         setLogos(newLogos);
//         setFade(false);
//       }, 1000); // Change the logos every 1 second
//     }, 3000); // Repeat the transition every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {logos.map((logo, index) => (
//           <div
//             className={`col-md-2${fade ? " fade-out" : " fade-in"}`}
//             key={index}
//           >
//             <img src={logo} alt={`Logo ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const TrustedCompanies = () => {
//   const [logos, setLogos] = useState([]);
//   const [fade, setFade] = useState(false);
//   const [currentSetIndex, setCurrentSetIndex] = useState(0);

//   useEffect(() => {
//     // Simulated data for logos
//     const logoSets = [
//       ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
//       ["logo6.png", "logo7.png", "logo8.png", "logo9.png", "logo10.png"],
//       // Add more logo sets as needed
//     ];

//     setLogos(logoSets[currentSetIndex]);

//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setCurrentSetIndex((prevIndex) => (prevIndex + 1) % logoSets.length);
//         setLogos(logoSets[currentSetIndex]);
//         setFade(false);
//       }, 1000); // Change the logos every 1 second
//     }, 3000); // Repeat the transition every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentSetIndex]);

//   return (
//     <div className="container">
//       <div className="row">
//         {logos.map((logo, index) => (
//           <div
//             className={`col-md-2${fade ? " fade-out" : " fade-in"}`}
//             key={index}
//           >
//             <img src={logo} alt={`Logo ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
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
                // style={{ width: "80px", height: "80px" }}
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
