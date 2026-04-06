import { useState, useEffect } from "react";
import { HomepageNav } from "../../components/Navbar";
import LogoScroll from "../../components/Hero/LogoScroll";
import {
  C, F,
  bodyTxt, label,
  Btn, Icon,
  Chip, Div, FadeUp,
  injectFonts,
} from "../../Tokens";
import { FILTER_TABS, PROGRAMMES, COMPETENCIES, TESTIMONIALS } from "./data";
import ProgrammeCard from "./ProgrammeCard";
import CompetencyCard from "./CompetencyCard";
import { TestiCard, TestimonialLink } from "./TestimonialComponents";


// MAIN PAGE
export default function InitiativesPage() {
  const [filter, setFilter] = useState("all");
  const [hA, setHA] = useState(null);
  const [hC, setHC] = useState(null);

  const filtered =
    filter === "all" ? PROGRAMMES : PROGRAMMES.filter((p) => p.cat === filter);

  // Fonts are declared in index.css — injectFonts() is a no-op if already loaded.
  useEffect(() => { injectFonts(); }, []);

  return (
    <>
      <HomepageNav />

      <style>{`
        /* Marquee */
        .ig8-mq { animation: ig8mq 38s linear infinite; }
        .ig8-mq:hover { animation-play-state: paused; }
        @keyframes ig8mq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* Filter btns */
        .ig8fb:hover { background:#ffffff !important; color:#00a495 !important; }
        .ig8fb:focus-visible { outline:2px solid #00a495; outline-offset:2px; }

        /* Responsive */
        @media(max-width:767px) {
          .ig8-rrow { flex-direction:column !important; align-items:flex-start !important; }
          .ig8-fbar { flex-direction:column; width:100%; }
          .ig8fb    { width:100%; text-align:center; }
        }
      `}</style>

      { // HERO
    }
      <section
        style={{
          background: `linear-gradient(140deg,${C.tealDark} 0%,${C.teal} 55%,#009688 100%)`,
          padding: "108px 0 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "60px solid rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            left: -90,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "50px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">

              <h1
                style={{
                  fontFamily: F.rubik,
                  fontSize: "clamp(2rem,5vw,3.1rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: C.white,
                  marginBottom: 18,
                }}
              >
                Building Resilient
                <br />
                <span style={{ color: "#b2f5ea" }}>
                  MSMEs &amp; Entrepreneurs
                </span>
                <br />
                Across Nigeria
              </h1>

              <p style={{ ...bodyTxt(true), maxWidth: 520, marginBottom: 36 }}>
                From enterprise support to talent development initiatives, 8thGear Hub is driving measurable impact across Southwest Nigeria and beyond
              </p>

              <div className="d-flex gap-2 flex-wrap align-items-center">
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={Btn.purple(hA === "rfp")}
                  onMouseEnter={() => setHA("rfp")}
                  onMouseLeave={() => setHA(null)}
                >
                  Request for Proposal {Icon.ext(C.white)}
                </a>
                <a
                  href="#Impact Report"
                  style={Btn.whiteOutline(hA === "prog")}
                  onMouseEnter={() => setHA("prog")}
                  onMouseLeave={() => setHA(null)}
                >
                  Impact Report {Icon.arrowR(C.white)}
                </a>
              </div>
            </div>

            {/* Glance card */}
            <div className="col-lg-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: C.radius,
                padding: "30px 26px",
              }}
            >
              <p
                style={{
                  fontFamily: F.open,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 22,
                }}
              >
                Impact at a Glance
              </p>
              {[
                { label: "StartUps Supported", val: "2000+" },
                { label: "Projects Delivered", val: "10+" },
                { label: "Tech Talents Empowered", val: "1000+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="d-flex align-items-center justify-content-between py-3 border-bottom border-white border-opacity-25"
                >
                  <span
                    style={{
                      fontFamily: F.open,
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: F.rubik,
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: C.white,
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
              <div className="pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span
                    style={{
                      fontFamily: F.open,
                      fontSize: 12,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Satisfaction Rate
                  </span>
                  <span
                    style={{
                      fontFamily: F.rubik,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.white,
                    }}
                  >
                    95%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: 100,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "95%",
                      height: "100%",
                      background: "#b2f5ea",
                      borderRadius: 100,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      { // PARTNERS
    }
      <section style={{ background: C.white, padding: "52px 0 32px" }}>
        <div className="container mb-4">
          <div className="text-center">
            <Chip label="Our Partners" />
            <Div center />
            <h2
              style={{
                fontFamily: F.rubik,
                color: C.dark,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Trusted by Leading{" "}
              <span style={{ color: C.teal }}>Institutions</span>
            </h2>
            <p style={{ ...bodyTxt(), maxWidth: 460, margin: "0 auto 40px" }}>
              We collaborate with development agencies, Corporate CSR units and Philanthropies to design and deliver on Social Impact driven initiatves.
            </p>
          </div>
        </div>
        <LogoScroll />
      </section>

      { // COMPETENCIES
   }
      <section style={{ background: C.greyBg, padding: "88px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <Chip label="Our Competencies" />
            <Div center />
            <h2
              style={{
                fontFamily: F.rubik,
                color: C.dark,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Our Core <span style={{ color: C.teal }}>Competencies</span>
            </h2>
            <p style={{ ...bodyTxt(), maxWidth: 620, margin: "0 auto" }}>
              We are keeping this section focused on two core areas where
              8thGear delivers the most direct value to founders, MSMEs, and
              growing teams.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {COMPETENCIES.map((item, i) => (
              <div key={item.title} className="col-12 col-md-6 col-xl-5">
                <FadeUp delay={i * 55}>
                  <CompetencyCard item={item} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      { // IMPACT REPORTS
     }
      <section
        style={{ background: C.white, padding: "92px 0" }}
        id="programmes"
      >
        <div className="container">
          {/* Section header + filter */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
            <div>
              <Div />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.dark,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                Initiatives &amp;{" "}
                <span style={{ color: C.teal }}>Impact Evidence</span>
              </h2>
              <p style={{ ...bodyTxt(), maxWidth: 500 }}>
                Fueling Innovation, Empowering Entrepreneurs and Transforming
                futures.
              </p>
            </div>

            {/* Filter bar */}
            <div
              className="ig8-fbar d-flex flex-wrap gap-1 p-1"
              style={{
                background: C.greyBg,
                border: `1px solid ${C.greyBorder}`,
                borderRadius: C.radiusSm,
                flexShrink: 0,
              }}
            >
              {FILTER_TABS.map((t) => (
                <button
                  key={t.key}
                  className="ig8fb"
                  onClick={() => setFilter(t.key)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 7,
                    border: "none",
                    background: filter === t.key ? C.teal : "transparent",
                    color: filter === t.key ? C.white : C.textSec,
                    fontFamily: F.open,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.18s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid — 3 cols on xl, 2 on md, 1 on sm */}
          <div className="row g-4">
            {filtered.map((prog, i) => (
              <div key={prog.id} className="col-12 col-md-6 col-xl-4">
                <FadeUp delay={i * 55}>
                  <ProgrammeCard data={prog} />
                </FadeUp>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-12 text-center py-5">
                <p style={bodyTxt()}>No programmes found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      { // TESTIMONIALS
    }
      <section
        style={{ background: C.greyBg, padding: "88px 0" }}
        id="testimonials"
      >
        <div className="container">
          <div className="row align-items-start g-4 mb-5">
            <div className="col-lg-5">
              <Chip label="Testimonials & Reviews" />
              <Div />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.dark,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                What Participants{" "}
                <span style={{ color: C.teal }}>Are Saying</span>
              </h2>
              <p style={{ ...bodyTxt(), marginBottom: 20 }}>
                Our programmes earn consistently high ratings across delivery
                quality, facilitator expertise, and practical impact.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                {[
                  {
                    label: "Read Google Reviews",
                    href: "https://maps.app.goo.gl/ojJPqECbZ3joFcF29",
                  },
                  { label: "View Programmes & Reports", href: "#programmes" },
                ].map((lnk) => (
                  <TestimonialLink key={lnk.label} lnk={lnk} />
                ))}
              </div>
            </div>

            {/* Ratings banner */}
            <div className="col-lg-7">
              <div
                style={{
                  background: C.teal,
                  borderRadius: C.radius,
                  padding: "26px 28px",
                }}
              >
                <p
                  style={{
                    ...label("rgba(255,255,255,0.55)"),
                    marginBottom: 18,
                  }}
                >
                  Programme Ratings Summary
                </p>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  {[
                    { val: "4.4/5", label: "DBN Ibadan" },
                    { val: "4.46/5", label: "DBN Lagos" },
                    { val: "95%", label: "DSE Excellent" },
                    { val: "96.3%", label: "Networking" },
                  ].map((r, i, arr) => (
                    <div
                      key={r.label}
                      className="d-flex align-items-center gap-3"
                    >
                      <div className="text-center">
                        <span
                          style={{
                            fontFamily: F.rubik,
                            fontSize: "1.7rem",
                            fontWeight: 700,
                            color: C.white,
                            display: "block",
                            lineHeight: 1,
                          }}
                        >
                          {r.val}
                        </span>
                        <span
                          style={{
                            ...label("rgba(255,255,255,0.6)"),
                            display: "block",
                            marginTop: 4,
                          }}
                        >
                          {r.label}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: 1,
                            height: 36,
                            background: "rgba(255,255,255,0.22)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="col-12 col-sm-6 col-lg-3">
                <FadeUp delay={i * 65}>
                  <TestiCard data={t} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      { // CTA
     }
      <section
        style={{
          background: `linear-gradient(140deg,${C.dark} 0%,${C.slate} 100%)`,
          padding: "88px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <Chip label="Get Involved" />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.white,
                  letterSpacing: "-0.02em",
                  marginBottom: 14,
                }}
              >
                Ready to Partner with{" "}
                <span style={{ color: "#b2f5ea" }}>8thGear Hub?</span>
              </h2>
              <p style={{ ...bodyTxt(true), maxWidth: 480 }}>
                We collaborate with development agencies, Corporate CSR units and Philanthropies to design and deliver on Social Impact driven initiatves.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
                {[
                  "Programme co-design and delivery",
                  "Promoters of inclusive and sustainable economic growth",
                  "Specialise in delivering projects that lead to a mix of employment and job creation.",
                  "Impact assessment and reporting",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: F.open,
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: "1.75rem",
                      marginBottom: 4,
                    }}
                  >
                    {Icon.check("#b2f5ea")}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: C.radius,
                padding: 34,
              }}
            >
              <p
                style={{
                  fontFamily: F.rubik,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: 6,
                }}
              >
                Let's Work Together
              </p>
              <p
                style={{
                  fontFamily: F.open,
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 22,
                }}
              >
                Reach out to explore partnership opportunities, RFPs, or
                programme collaboration with 8thGear Hub.
              </p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...Btn.purple(hC === "c"),
                    justifyContent: "center",
                  }}
                  onMouseEnter={() => setHC("r")}
                  onMouseLeave={() => setHC(null)}
                >
                  Request for Proposal {Icon.ext(C.white)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

