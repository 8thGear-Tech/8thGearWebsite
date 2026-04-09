import { Link } from "react-router-dom";
import { C, F, bodyTxt, Icon } from "../../../Tokens.js";

const SolutionCard = ({ img, title, desc, link, btnText, accent = C.teal, internal = false }) => (
  <div style={{
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
    overflow: "hidden",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }}>
    <div style={{
      width: "100%",
      height: "150%",
      background: "#111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "top center",
          display: "block",
        }}
      />
    </div>
    <div style={{
      padding: "18px 18px 20px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      background: `linear-gradient(180deg, ${accent}22 0%, rgba(0,0,0,0.12) 100%)`,
    }}>
      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
        <h5 style={{fontFamily:F.rubik, fontSize:"1.15rem", fontWeight:700, color:C.white, margin:0, lineHeight:1.2}}>{title}</h5>
        <span style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: accent,
          boxShadow: `0 0 0 4px ${accent}22`,
          flexShrink: 0,
          marginTop: 3,
        }} />
      </div>
      <p style={{...bodyTxt(true), marginBottom:18, flexGrow:1, fontSize:"0.92rem", lineHeight:"1.65rem"}}>{desc}</p>

      {internal ? (
        <Link to={link} style={{ textDecoration: "none" }}>
          <button style={{
            display:"inline-flex",
            alignItems:"center",
            justifyContent:"center",
            gap:8,
            background: accent,
            color: C.white,
            border:"none",
            borderRadius:"999px",
            padding:"11px 22px",
            fontFamily:F.open,
            fontSize:13,
            fontWeight:700,
            cursor:"pointer",
            transition:"transform 0.2s ease, filter 0.2s ease",
            alignSelf:"flex-start",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "brightness(1)"; }}
          >
            {btnText} {Icon.arrowR(C.white)}
          </button>
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
          <button style={{
            display:"inline-flex",
            alignItems:"center",
            justifyContent:"center",
            gap:8,
            background: accent,
            color: C.white,
            border:"none",
            borderRadius:"999px",
            padding:"11px 22px",
            fontFamily:F.open,
            fontSize:13,
            fontWeight:700,
            cursor:"pointer",
            transition:"transform 0.2s ease, filter 0.2s ease",
            alignSelf:"flex-start",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "brightness(1)"; }}
          >
            {btnText} {Icon.arrowR(C.white)}
          </button>
        </a>
      )}
    </div>
  </div>
);

export default SolutionCard;