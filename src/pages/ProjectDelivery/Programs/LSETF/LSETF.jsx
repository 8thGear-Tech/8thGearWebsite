import "../Programs.css";

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HomepageNav } from "../../../../components/Navbar";

// Asset imports (adjust paths as necessary for your project layout)
import trainingsHero from "../../../../assets/images/projectdelivery/trainingsHero.jpg";
import espFlyer from "./8thGear_ESP.jpeg";

const highlights = [
  {
    icon: "🎓",
    title: "Hands-On Training",
    text: "4 weeks of intensive, practical instruction across Content Creation, Growth Hacking, and Digital Marketing",
  },
  {
    icon: "💼",
    title: "On-Site Learning",
    text: "In-person training at 8thGear Hub, Magodo, Lagos, led by experienced facilitators",
  },
  {
    icon: "📜",
    title: "3-Month Internship",
    text: "Apply your skills in a real work setting from November 2026 to January 2027",
  },
  {
    icon: "🤝",
    title: "Career Pathway",
    text: "Structured route from training to internship to employability",
  },
];

const LSETF = () => {
  const [modalImg, setModalImg] = useState(null);

  const applicationUrl = "https://forms.gle/1Fa9czjgyEuqvq7q8";

  return (
    <>
      <HomepageNav />

      {/* HERO SECTION */}
      <section
        className="training-hero text-center py-5"
        style={{
          position: "relative",
          color: "#ffffff",
          padding: "5rem 2rem",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            background: `url(${trainingsHero}) center/cover no-repeat`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(130, 30, 107, 0.85), rgba(0, 164, 149, 0.85))",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2 className="pt-5 fw-bold">
            CALLING ALL TECH TALENTS IN LAGOS!
          </h2>
          <p className="lead text-white mt-3" style={{ fontSize: "1.1rem" }}>
            Join the LSETF/GIZ Employability Support Programme and build in-demand <br />
            digital skills with real career pathways attached.
          </p>

          <Button
            className="aboutbtn mt-3"
            style={{
              transition: "all 0.3s ease",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none purple-text"
              style={{ fontWeight: 600 }}
            >
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* MAIN PROGRAM CONTENT */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

            {/* Main Heading */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h3
                style={{
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #821E6B, #00A495)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                LSETF/GIZ EMPLOYABILITY SUPPORT PROGRAM
              </h3>
              <p className="m-0 p-0 fw-semibold">
                8thGear Hub × LSETF × GIZ
              </p>
              <p
                className="m-0 p-0 mt-1"
                style={{
                  fontWeight: "bold",
                  color: "#821E6B",
                }}
              >
                Building digital talent for Lagos growing tech economy
              </p>
            </div>

            {/* About the Programme */}
            <div
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                marginBottom: "2rem",
              }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  fontSize: "1.15rem",
                }}
              >
                About the Programme
              </h5>
              <p style={{ lineHeight: "1.6", color: "#333" }}>
                The LSETF/GIZ Employability Support Program is a 4-week, hands-on
                intensive covering Content Creation, Growth Hacking, and Digital
                Marketing, followed by a 3-month internship placement. Participants
                gain practical, job-ready skills and direct work experience with
                host organisations.
              </p>
              <p style={{ lineHeight: "1.6", color: "#333", margin: 0 }}>
                The programme is delivered by 8thGear Hub in partnership with the
                Lagos State Employment Trust Fund (LSETF) and GIZ, supporting Lagos
                residents in building sustainable careers in the digital economy.
              </p>
            </div>

            {/* Programme Highlights */}
            <h5
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "1.15rem",
                textAlign: "center",
              }}
            >
              Programme Highlights
            </h5>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    borderTop: "4px solid #00A495",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    {item.icon}
                  </div>
                  <h6 style={{ fontWeight: "bold", color: "#821E6B" }}>
                    {item.title}
                  </h6>
                  <p style={{ margin: 0, lineHeight: "1.5", fontSize: "0.95rem", color: "#333" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              {/* Left Column - Who should join */}
              <div
                style={{
                  background: "linear-gradient(135deg, #821E6B, #5c1551)",
                  color: "#fff",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    Who Should Join?
                  </h5>
                  <div
                    className="text-white"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "Lagos residents aged 18–40",
                      "Holders of a LASSRA ID",
                      "Ready to attend training and internship physically",
                      "Individuals eager to build a career in digital skills",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{ display: "flex", alignItems: "flex-start" }}
                        className="text-white"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          style={{
                            marginRight: "1rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          <rect width="20" height="20" rx="3" fill="white" />
                          <path
                            d="M5 10l3 3 7-7"
                            stroke="#821E6B"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ margin: 0, lineHeight: "1.5", color: "#fff" }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <Button
                    className="aboutbtn m-0 px-5 py-2"
                    style={{
                      color: "#000000",
                      animation: "pulsePop 2s infinite alternate ease-in-out",
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                    }}
                  >
                    <a
                      href={applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                      style={{
                        fontWeight: 700,
                        color: "#000000",
                      }}
                    >
                      Apply Now
                    </a>
                  </Button>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#fff",
                      marginTop: "0.75rem",
                      fontStyle: "italic",
                    }}
                    className="text-white"
                  >
                    Training: 5 – 30 October 2026
                  </p>
                </div>
              </div>

              {/* Right Column - What You'll Gain */}
              <div
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.25rem",
                      fontSize: "1.15rem",
                    }}
                  >
                    What You'll Gain
                  </h5>
                  <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "1rem" }}>
                    Build real digital skills with real-world application
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "Practical training in Content Creation, Growth Hacking, and Digital Marketing",
                      "Hands-on experience through a structured 3-month internship",
                      "Direct exposure to on-the-job expectations in a professional environment",
                      "Networking with fellow trainees and industry facilitators",
                      "A pathway toward sustainable employment in the digital economy",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          style={{
                            marginRight: "1rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          <rect width="20" height="20" rx="3" fill="#821E6B" />
                          <path
                            d="M5 10l3 3 7-7"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p
                          style={{
                            margin: 0,
                            lineHeight: "1.6",
                            fontSize: "1rem",
                            color: "#333",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Dates */}
            <div
              style={{
                backgroundColor: "#e6f6f4",
                borderLeft: "4px solid #00A495",
                padding: "1rem 1.25rem",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                color: "#00564e",
              }}
            >
              <p style={{ margin: 0 }}>
                📍 <strong>Location:</strong> 8thGear Hub, 41 CMD Road, Magodo/Secretariat, Lagos
              </p>
              <p style={{ margin: 0 }}>
                🗓️ <strong>Training:</strong> October 5th – October 30th, 2026
              </p>
              <p style={{ margin: 0 }}>
                💼 <strong>Internship:</strong> November 2026 – January 2027
              </p>
            </div>

            {/* FLYER SHOWCASE SECTION */}
            {espFlyer && (
              <div className="text-center my-5">
                <div
                  style={{
                    cursor: "pointer",
                    maxWidth: "400px",
                    margin: "0 auto",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
                  }}
                  onClick={() => setModalImg(espFlyer)}
                >
                  <img
                    src={espFlyer}
                    alt="LSETF/GIZ Employability Support Program Flyer"
                    className="img-fluid"
                  />
                </div>
                <p className="small text-muted mt-2">Click image to expand</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* FLYER MODAL */}
      <Modal
        show={modalImg !== null}
        onHide={() => setModalImg(null)}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <img src={modalImg} alt="Program Flyer" className="img-fluid w-100" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalImg(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* FOOTER CTA SECTION */}
      <section className="cta-section text-center pt-5 pb-5">
        <div className="container">
          <div>
            <h3 className="fw-bold mb-3">Train. Intern. Get Hired.</h3>
            <p className="lead text-muted mb-4">
              Take the first step toward a sustainable career in Lagos’s digital economy.
            </p>
            <Button
              className="aboutbtn m-0"
              style={{
                transition: "all 0.3s ease",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none purple-text"
                style={{ fontWeight: 600 }}
              >
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LSETF;
