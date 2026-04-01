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
      {/* Background orbs */}
      <div className="orb orb--lilac" />
      <div className="orb orb--amber" />
      <div className="orb orb--purple" />

      {/* Diagonal accent */}
      <div className="hero-diagonal" />

      <div className="heroAbout-inner">
        {/* Left: Text */}
        <div className="heroAbout-text">
          <span className="hero-eyebrow">
            <span className="eyebrow-dot" />
            About Us
          </span>
       <h1 className="hero-heading">
  Your one-stop shop for your{" "}
  <span className="hero-highlight">Venture Building </span>
  <span className="hero-highlight-3">Dream.</span>
</h1>
          <p className="hero-subtext">
            Empowering entrepreneurs across Africa with the tools, network, and
            expertise to build what matters.
          </p>
          <div className="hero-cta">
            <JointheTeamBtn />
           
          </div>

          {/* Mobile stats row */}
          <div className="hero-stats-mobile">
            <div className="hero-stat-item">
              <span className="stat-number">2000+</span>
              <span className="stat-label">MSMEs Supported</span>
            </div>
            {/* <div className="hero-stat-divider" /> */}
            {/* <div className="hero-stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Startups Supported</span>
            </div> */}
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years of Impact</span>
            </div>
          </div>
        </div>

        {/* Right: Decorative card stack */}
        <div className="heroAbout-visual">
          <div className="visual-card visual-card--back" />
          <div className="visual-card visual-card--mid" />
          <div className="visual-card visual-card--front">
            <div className="visual-stat">
              <span className="stat-number">2000+</span>
             <span className="stat-label">MSMEs Supported</span>
            </div>
            {/* <div className="visual-divider" /> */}
            {/* <div className="visual-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Startups Supported</span>
            </div> */}
            <div className="visual-divider" />
            <div className="visual-stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years of Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="hero-bottom-line" />
    </div>
  );
};

export default HeroSection;