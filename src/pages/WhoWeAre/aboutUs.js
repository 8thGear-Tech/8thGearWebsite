// import React from "react";

// import { HomepageNav } from "../../components/Navbar";


// //team
// import { Gerians } from "../../components/AllCards/TeamCard";
// import { EIR } from "../../components/AllCards/TeamCard";
// import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";
// import "../About/aboutUs.css";
// import CoreValue from "../About/CoreValue";
// import HeroSection from "../About/HeroSection";

// //Our Partners
// import german from "../About/image/german.png";
// import funded from "../About/image/co-funded.png";
// import giz from "../About/image/giz.png";
// import usadf from "../About/image/usadf.png";
// import lsetf from "../About/image/lsetf.png";
// import leap from "../About/image/LEAP-Africa.png";
// import lagos from "../About/image/lagosI-logo.png";
// import mtn from "../About/image/mtn.png";
// import vmware from "../About/image/vmware.png";
// import isn from "../About/image/isn_logo.png";
// import zoho from "../About/image/zoho.png";
// import fcmb from "../About/image/fcmb.png";
// import cisco from "../About/image/cisco.png";
// import afrilabs from "../About/image/Afrilabs.png";
// import skills from "../About/image/skills.png";
// import digital from "../About/image/digital.png";
// import SliderComponent from "../About/SliderComponent";

// const AboutUs = () => {
//   return (
//     <>
//       <HomepageNav />
//       <div className="about-hero-background">
//         <div className="about-layout w-100 start-0 d-flex justify-content-center align-items-center">
//           {/* <Navbar10 /> */}
//           <HeroSection />
//         </div>
//       </div>
//       <CoreValue />
//       <Partners />
//       <Gerians />
//       <EIR />
//       <div className="SliderBg">
//         <SliderComponent />
//       </div>
//       <JointheTeam />
//     </>
//   );
// };

// // const CoreValues = () => {
// //   return (
// //     <div className="container py-5">
// //       <div className="row justify-content-center">
// //         <img src={corevaluesnew} className="col-12" alt="corevaluesnew"></img>
// //       </div>
// //     </div>
// //   );
// // };

// export const Partners = () => (
//   <>
//     <div>
//       <h3 className="purple-text text-center pt-5 pb-3">OUR PARTNERS</h3>
//       <div className="slider2" style={{ position: "relative", zIndex: 1 }}>
//         <div className="slide-track2">
//           {[
//             german,
//             funded,
//             giz,
//             usadf,
//             digital,
//             lsetf,
//             leap,
//             lagos,
//             mtn,
//             vmware,
//             isn,
//             zoho,
//             fcmb,
//             cisco,
//             afrilabs,
//             skills,
//           ].map((src, index) => (
//             <div
//               className="slide2"
//               key={index}
//               style={index === 0 ? { marginLeft: "0px" } : undefined}
//             >
//               <img
//                 src={src}
//                 alt={`Logo ${index + 1}`}
//                 className="carousel-logo"
//                 style={{ width: "130px", height: "130px", margin: "0 30px" }}
//               />
//             </div>
//           ))}
//           {[
//             german,
//             funded,
//             giz,
//             usadf,
//             digital,
//             lsetf,
//             leap,
//             lagos,
//             mtn,
//             vmware,
//             isn,
//             zoho,
//             fcmb,
//             cisco,
//             afrilabs,
//             skills,
//           ].map((src, index) => (
//             <div
//               className="slide2"
//               key={index}
//               style={index === 0 ? { marginLeft: "0px" } : undefined}
//             >
//               <img
//                 src={src}
//                 alt={`Logo ${index + 1}`}
//                 className="carousel-logo"
//                 style={{ width: "130px", height: "130px", margin: "0 30px" }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>
// );

// // const JointheTeam = () => {
// //   return (
// //     <>
// //       <div className="container-fluid pt-3 pb-5 px-lg-5 px-md-3">
// //         <div className="row mt-lg-5 mb-lg-3 mx-lg-3 px-3 justify-content-center ">
// //           <div className="col-lg-8">
// //             <h3 className="text-center pb-2">Join the 8thGear Team</h3>
// //             <p className="text-center" style={{ fontSize: "1rem" }}>
// //               Dream teams are not right for everyone. Some people prefer job
// //               security, and choose to work at companies that are more focused on
// //               stability and seniority, and less rigorous about performance
// //               management. Our model works best for people who value excellence
// //               and the opportunities it provides. Does our positioning and
// //               mission resonate with you? If yes, we have been waiting to have
// //               you!
// //             </p>
// //             {/* <p className="text-center" style={{ fontSize: "1rem" }}>
// //               Does our positioning and mission resonate with you? If yes, we
// //               have been waiting to have you!
// //             </p> */}
// //           </div>
// //         </div>
// //         <div className="d-flex justify-content-center">
// //           <JointheTeamBtn />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// const JointheTeam = () => {
//   return (
//     <section className="join-team-section">
//       <div className="join-team-inner">

//         {/* Left: text + button */}
//         <div className="join-team-text">
//           {/* <span className="join-eyebrow">WORK WITH US</span> */}
//           <h2 className="join-heading">
//             Join the <span className="join-highlight">8thGear</span> Team
//           </h2>
//           <p className="join-body">
//            Dream teams are not right for everyone. Some people prefer job security, and choose to work at companies that are more focused on stability and seniority, and less rigorous about performance management. Our model works best for people who value excellence and the opportunities it provides. Does our positioning and mission resonate with you? If yes, we have been waiting to have you!
//           </p>
//           <div className="join-cta">
//             <JointheTeamBtn />
//           </div>
//         </div>

//         {/* Right: resource links */}
//         <div className="join-resources">
//           <a
//             href="https://docsend.com/view/f96g3immhc2sddfd"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="join-resource-link"
//           >
//             <div className="join-resource-icon">
//               <i className="bi bi-people-fill"></i>
//             </div>
//             <div className="join-resource-info">
//               <span className="join-resource-title">Culture Deck</span>
//               <span className="join-resource-sub">How we work & what we value</span>
//             </div>
//             <i className="bi bi-arrow-up-right join-resource-arrow"></i>
//           </a>

//           <a
//             href="https://docsend.com/view/j5w5ew8eqd8ah6at"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="join-resource-link"
//           >
//             <div className="join-resource-icon join-resource-icon--cyan">
//               <i className="bi bi-journal-text"></i>
//             </div>
//             <div className="join-resource-info">
//               <span className="join-resource-title">Employee Handbook</span>
//               <span className="join-resource-sub">Policies, perks & expectations</span>
//             </div>
//             <i className="bi bi-arrow-up-right join-resource-arrow"></i>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React from "react";

import { HomepageNav } from "../../components/Navbar";


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
    <section className="join-team-section">
      <div className="join-team-inner">

        {/* Left: text + button */}
        <div className="join-team-text">
          <h2 className="join-heading">
            Join the <span className="join-highlight">8thGear</span> Team
          </h2>
          <div className="join-body">
            <p>
              Dream teams are not right for everyone. Some people prefer job security, and choose to work at companies that are more focused on stability and seniority, and less rigorous about performance management. Our model works best for people who value excellence and the opportunities it provides.
            </p>
            <p>
              Does our positioning and mission resonate with you? If yes, we have been waiting to have you!
            </p>
          </div>
          <div className="join-cta">
            <JointheTeamBtn />
          </div>
        </div>

        {/* Right: resource links */}
        <div className="join-resources">
          <a
            href="https://docsend.com/view/f96g3immhc2sddfd"
            target="_blank"
            rel="noopener noreferrer"
            className="join-resource-link"
          >
            <div className="join-resource-icon">
              <i className="bi bi-people-fill"></i>
            </div>
            <div className="join-resource-info">
              <span className="join-resource-title">Culture Deck</span>
              <span className="join-resource-sub">How we work & what we value</span>
            </div>
            <i className="bi bi-arrow-up-right join-resource-arrow"></i>
          </a>

          <a
            href="https://docsend.com/view/j5w5ew8eqd8ah6at"
            target="_blank"
            rel="noopener noreferrer"
            className="join-resource-link"
          >
            <div className="join-resource-icon join-resource-icon--cyan">
              <i className="bi bi-journal-text"></i>
            </div>
            <div className="join-resource-info">
              <span className="join-resource-title">Employee Handbook</span>
              <span className="join-resource-sub">Policies, perks & expectations</span>
            </div>
            <i className="bi bi-arrow-up-right join-resource-arrow"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;