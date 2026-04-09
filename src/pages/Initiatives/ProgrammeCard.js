import { useState } from "react";
import { C, F, bodyTxt, label, accentColors, Icon } from "../../Tokens";

function ProgrammeCard({ data }) {
  const [hov, setHov] = useState(false);
  const [cur, setCur] = useState(0);
  const { main: ac, light: al, border: ab } = accentColors(data.col);
  const hasPdf = data.report.pdf && data.report.pdf !== "#";
  const [reportLinkHov, setReportLinkHov] = useState(false);
  const visibleHighlights = data.highlights.slice(0, 3);
  const visiblePills = data.pills.slice(0, 3);
  const isExternalReport = hasPdf && /^https?:\/\//i.test(data.report.pdf);

  const nextSlide = () => setCur((prev) => (prev + 1) % data.images.length);
  const prevSlide = () =>
    setCur((prev) => (prev - 1 + data.images.length) % data.images.length);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.white,
        border: `1px solid ${hov ? ac : C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: hov ? C.shadowLg : C.shadow,
        transition: "all 0.26s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: 700, // Fixed height for consistent card heights
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg,${ac},${ac}88)`,
          flexShrink: 0,
        }}
      />

      <div style={{ padding: "14px 14px 0" }}>
        <div
          style={{
            position: "relative",
            borderRadius: C.radiusSm,
            overflow: "hidden",
            background: C.greyBg,
          }}
        >
          <img
            src={data.images[cur]}
            alt={`${data.title} slide ${cur + 1}`}
            style={{
              width: "100%",
              height: 250,
              objectFit: "cover",
              display: "block",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              fontFamily: F.open,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.white,
              background: ac,
              borderRadius: "100px",
              padding: "4px 10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {data.badge}
          </span>

          {data.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={`Previous image for ${data.title}`}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: 0,
                  backdropFilter: "blur(2px)",
                }}
              >
                {Icon.arrowL(C.white, 12)}
              </button>
              <button
                onClick={nextSlide}
                aria-label={`Next image for ${data.title}`}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: 0,
                  backdropFilter: "blur(2px)",
                }}
              >
                {Icon.arrowR(C.white, 12)}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "16px 18px 18px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontFamily: F.rubik,
              fontSize: "1rem",
              fontWeight: 700,
              color: C.dark,
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {data.title}
          </h3>
          <a
            href={hasPdf ? data.report.pdf : undefined}
            target={isExternalReport ? "_blank" : undefined}
            rel={isExternalReport ? "noopener noreferrer" : undefined}
            download={hasPdf && !isExternalReport ? true : undefined}
            onClick={!hasPdf ? (e) => e.preventDefault() : undefined}
            onMouseEnter={() => setReportLinkHov(hasPdf)}
            onMouseLeave={() => setReportLinkHov(false)}
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: F.open,
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: hasPdf ? (reportLinkHov ? C.white : ac) : C.textLight,
              background: hasPdf ? (reportLinkHov ? ac : al) : C.greyBg,
              border: `1px solid ${hasPdf ? ab : C.greyBorder}`,
              borderRadius: "100px",
              padding: "4px 8px",
              textDecoration: "none",
              cursor: hasPdf ? "pointer" : "default",
              transition: "all 0.2s ease",
            }}
          >
            {hasPdf
              ? data.report.isRFP
                ? Icon.ext(reportLinkHov ? C.white : ac, 10)
                : Icon.download(reportLinkHov ? C.white : ac, 10)
              : Icon.pdf(C.textLight, 12)}
            {data.report.type}
          </a>
        </div>

        <p
          style={{
            ...bodyTxt(),
            fontSize: "0.82rem",
            lineHeight: "1.55rem",
            marginBottom: 14,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.body}
        </p>

        {data.metrics && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 8,
              marginBottom: 14,
            }}
          >
            {data.metrics.map((m) => (
              <div
                key={m.key}
                style={{
                  textAlign: "center",
                  padding: "10px 8px",
                  background: al,
                  border: `1px solid ${ab}`,
                  borderRadius: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: F.rubik,
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: ac,
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {m.val}
                </span>
                <span
                  style={{
                    ...label(C.textSec),
                    display: "block",
                    marginTop: 4,
                    fontSize: 9,
                  }}
                >
                  {m.key}
                </span>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(244,246,248,0.9) 0%, rgba(255,255,255,1) 100%)",
            border: `1px solid ${C.greyBorder}`,
            borderRadius: C.radiusSm,
            padding: "12px 14px",
            marginBottom: 12,
          }}
        >
          <p style={{ ...label(), marginBottom: 7 }}>Key Outcomes</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {visibleHighlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 7,
                  fontFamily: F.open,
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  color: C.textSec,
                  lineHeight: 1.5,
                  marginBottom: 4,
                }}
              >
                <span style={{ flexShrink: 0, marginTop: 1 }}>
                  {Icon.check(ac, 13)}
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 14,
          }}
        >
          {visiblePills.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: F.open,
                fontSize: 10,
                fontWeight: 600,
                color: C.textSec,
                background: C.greyBg,
                border: `1px solid ${C.greyBorder}`,
                borderRadius: "100px",
                padding: "4px 9px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgrammeCard;