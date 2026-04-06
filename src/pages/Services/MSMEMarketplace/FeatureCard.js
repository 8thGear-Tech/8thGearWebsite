import { C, F, bodyTxt } from "../../../Tokens.js";

const FeatureCard = ({ feature, index }) => (
  <div style={{
    background: C.white,
    border: `2px solid ${C.greyBorder}`,
    borderRadius: C.radius,
    boxShadow: C.shadow,
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: 245,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer"
  }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = C.shadowLg;
      e.currentTarget.style.borderColor = feature.color;
      e.currentTarget.style.transform = "translateY(-8px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = C.shadow;
      e.currentTarget.style.borderColor = C.greyBorder;
      e.currentTarget.style.transform = "none";
    }}
  >
    {/* Icon */}
    <div style={{
      background: `${feature.color}15`,
      borderRadius: 16,
      width: 64,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 24,
      color: feature.color
    }}>
      {feature.icon}
    </div>

    {/* Content */}
    <h3 style={{
      fontFamily: F.rubik,
      fontWeight: 700,
      fontSize: "1.25rem",
      color: C.dark,
      marginBottom: 12,
      lineHeight: 1.3
    }}>
      {feature.title}
    </h3>
    <p style={{
      ...bodyTxt(),
      color: C.textSec,
      fontSize: "1rem",
      lineHeight: 1.6,
      margin: 0,
      flexGrow: 1
    }}>
      {feature.desc}
    </p>

    {/* Hover indicator */}
    <div style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 4,
      background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
      transform: "scaleX(0)",
      transition: "transform 0.3s ease",
      transformOrigin: "left"
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scaleX(1)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scaleX(0)"}
    />
  </div>
);

export default FeatureCard;