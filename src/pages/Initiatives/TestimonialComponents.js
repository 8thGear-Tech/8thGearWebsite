import { useState } from "react";
import { C, F, Icon, Btn } from "../../Tokens";
import Stars from "./Stars";

function TestiCard({ data }) {
  const hasArrowIcon = data.id === 3 || data.id === 4; // 3rd and 4th testimonials get arrow icon

  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: C.shadow,
        padding: "22px",
        height: 270, // Fixed height for consistent card heights
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        {Icon.quote(C.teal)}
        {hasArrowIcon }
      </div>
      <p
        style={{
          fontFamily: F.open,
          fontSize: "0.85rem",
          fontWeight: 300,
          lineHeight: "1.75rem",
          color: C.textSec,
          fontStyle: "italic",
          flexGrow: 1,
          margin: "0 0 16px",
        }}
      >
        "{data.text}"
      </p>
      <div
        style={{
          borderTop: `1px solid ${C.greyBorder}`,
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          {data.name && (
            <div
              style={{
                fontFamily: F.rubik,
                fontSize: "0.9rem",
                fontWeight: 600,
                color: C.dark,
              }}
            >
              {data.name}
            </div>
          )}
          <div
            style={{
              fontFamily: F.open,
              fontSize: 11,
              fontWeight: 300,
              color: C.textSec,
            }}
          >
            {data.role}
          </div>
        </div>
        <Stars n={data.rating} />
      </div>
    </div>
  );
}

function TestimonialLink({ lnk }) {
  const [h, setH] = useState(false);

  return (
    <a
      href={lnk.href}
      target={lnk.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      style={Btn.tealOutline(h)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {lnk.label} {Icon.ext(h ? C.white : C.teal)}
    </a>
  );
}

export { TestiCard, TestimonialLink };