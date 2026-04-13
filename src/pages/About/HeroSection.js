import "../About/aboutUs.css";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const scrollToEIR = () => {
  const el = document.getElementById("eir-apply");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSection = () => {
  return (
    <div className="heroAbout-wrapper">
      <div className="orb orb--pink" />
      <div className="orb orb--amber" />
      <div className="orb orb--purple" />
      <div className="hero-diagonal" />

      <div className="heroAbout-inner">
        {/* Left: Text */}
        <div className="heroAbout-text">
          {/* <span className="hero-eyebrow">
            <span className="eyebrow-dot" />
            About Us
          </span> */}

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
            <button onClick={scrollToEIR} className="eir-hero-btn">
              {/* <i className="bi bi-star-fill eir-hero-btn-icon" /> */}
              Apply as an EIR
            </button>
          </div>

          {/* Mobile stats */}
          <div className="hero-stats-mobile">
            <div className="hero-stat-item">
              <span className="stat-number">2000+</span>
              <span className="stat-label">MSMEs Supported</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="stat-number">7+</span>
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
            <div className="visual-divider" />
            <div className="visual-stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years of Impact</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line" />
    </div>
  );
};

export default HeroSection;