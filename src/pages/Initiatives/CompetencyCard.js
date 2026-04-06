import { useState } from "react";
import { C, F, Icon } from "../../Tokens";

function CompetencyCard({ item }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? `linear-gradient(145deg,${C.tealLight},${C.white})`
          : C.white,
        border: `1px solid ${hov ? C.tealBorder2 : C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: hov ? C.shadowMd : C.shadow,
        transition: "all 0.26s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: 250,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: hov ? 4 : 0,
          background: `linear-gradient(to bottom,${C.teal},${C.tealDark})`,
          transition: "width 0.28s ease",
          borderRadius: "0 2px 2px 0",
        }}
      />

      <div
        style={{
          padding: "24px 24px 20px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          paddingLeft: hov ? 28 : 24,
          transition: "padding-left 0.28s ease",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              background: hov ? C.teal : C.greyBg,
              border: `1.5px solid ${hov ? C.teal : C.greyBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.26s ease",
            }}
          >
            {item.icon(hov ? C.white : C.textLight)}
          </div>
        </div>

        <h3
          style={{
            fontFamily: F.rubik,
            fontSize: "1rem",
            fontWeight: 700,
            color: hov ? C.dark : C.textPri,
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontFamily: F.open,
            fontSize: "0.84rem",
            fontWeight: 300,
            lineHeight: "1.65rem",
            color: C.textSec,
            flexGrow: 1,
            marginBottom: 16,
          }}
        >
          {item.desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginTop: "auto",
          }}
        >
          {item.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: F.open,
                fontSize: 10,
                fontWeight: 600,
                color: hov ? C.teal : C.textSec,
                background: hov ? C.tealLight : C.greyBg,
                border: `1px solid ${hov ? C.tealBorder2 : C.greyBorder}`,
                borderRadius: "100px",
                padding: "3px 9px",
                transition: "all 0.22s ease",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompetencyCard;