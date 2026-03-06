// import React from "react";
// import "../About/aboutUs.css";
// import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

// const HeroSection = () => {
//   return (
//     <div className="container heroAbout d-flex flex-column align-items-center justify-content-center text-center text-white">
//       <div className="d-flex align-items-center justify-content-center w-100">
//         <h2 className="animated-text fw-bold text-white">
//           We are your one-stop shop to achieve your Venture Building Dream.
//         </h2>
//       </div>
//       <div className="about-content text-white text-center"></div>
//       <div className="d-flex justify-content-center">
//         <JointheTeamBtn />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import "../About/aboutUs.css";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const HeroSection = () => {
  return (
    <div className="heroAbout-wrapper">
      <div className="hero-glow hero-glow--teal" />
      <div className="hero-glow hero-glow--magenta" />

      <div className="heroAbout d-flex flex-column align-items-center justify-content-center text-center">
        <span className="hero-eyebrow">About Us</span>
        <h2 className="animated-text fw-bold">
          We are your one-stop shop to achieve your{" "}
          <span className="hero-highlight">Venture Building Dream.</span>
        </h2>
        <div className="d-flex justify-content-center mt-4">
          <JointheTeamBtn />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;