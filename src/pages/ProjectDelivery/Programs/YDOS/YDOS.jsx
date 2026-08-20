import "../Programs.css";

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HomepageNav } from "../../../../components/Navbar";

// Asset imports (adjust paths as necessary for your project layout)
import trainingsHero from "../../../../assets/images/projectdelivery/trainingsHero.jpg";
import ydosFlyer from "./YDOS.jpeg";

const YDOS = () => {
  const [modalImg, setModalImg] = useState(null);

  const applicationUrl = "https://forms.gle/ndraz5Ckje8oP1fY9";

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
            YDOS 2026 IS OFFICIALLY HERE!
          </h2>
          <p className="lead text-white mt-3" style={{ fontSize: "1.1rem" }}>
            Got an idea that could change the game? <br />
            We’re talking real problems. Real solutions. Real impact.
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
                YDOS 2026 OPEN INNOVATION CHALLENGE
              </h3>
              <p className="m-0 p-0 fw-semibold">
                8thGear Hub & Venture Studio x LEAP Africa
              </p>
              <p
                className="m-0 p-0 mt-1"
                style={{
                  fontWeight: "bold",
                  color: "#821E6B",
                }}
              >
                Calling Lagos’ Boldest Young Minds!
              </p>
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
              {/* Left Column - Who is this for */}
              <div
                style={{
                  background: "linear-gradient(135deg, #821E6B, #5c1551)",
                  color: "#fff",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justify: "space-between"
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
                    Who is this for?
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
                      "You! Aged 18–35 and living in Lagos",
                      "Founders with a half-baked, early-stage, or fully-formed idea",
                      "Women entrepreneurs and innovators",
                      "Persons with disabilities (PWDs)"
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
                    Applications Window: 18 – 31 August 2026
                  </p>
                </div>
              </div>

              {/* Right Column - Program Details & Benefits */}
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
                      marginBottom: "1rem",
                      fontSize: "1.15rem",
                    }}
                  >
                    What You'll Walk Away With:
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "2px solid #f0f0f0",
                    }}
                  >
                    {[
                      "Understand the 17 SDGs",
                      "Become a Design Thinking pro",
                      "Level up your Digital & Entrepreneurial skills",
                      "Own your Pitching & Presentation game",
                      "Get Mentorship from top industry players",
                      "Win business support worth up to ₦500,000 + other juicy prizes!",
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

                {/* Important Video Pitch Requirement */}
                <div
                  style={{
                    backgroundColor: "#fff8e6",
                    borderLeft: "4px solid #ffc107",
                    padding: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  <h6 style={{ fontWeight: "bold", color: "#856404", marginBottom: "0.5rem" }}>
                    ⚠️ Mandatory Video Requirement
                  </h6>
                  <p style={{ fontSize: "0.875rem", margin: 0, color: "#856404" }}>
                    Your application must include a <strong>2-minute video pitch</strong> of your idea. 
                    No video = no entry. Grab your phone, hit record, and show us what you’ve got!
                  </p>
                </div>
              </div>
            </div>

            {/* FLYER SHOWCASE SECTION */}
            <div className="text-center my-5">
              <h5 className="fw-bold mb-3">Program Flyer</h5>
              <div 
                style={{ 
                  cursor: "pointer", 
                  maxWidth: "400px", 
                  margin: "0 auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)" 
                }}
                onClick={() => setModalImg(ydosFlyer)}
              >
                <img 
                  src={ydosFlyer} 
                  alt="YDOS 2026 Flyer" 
                  className="img-fluid" 
                />
              </div>
              <p className="small text-muted mt-2">Click image to expand</p>
            </div>

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
            <h3 className="fw-bold mb-3">Don’t Just Dream It. Build It. Pitch It. Win It.</h3>
            <p className="lead text-muted mb-4">
              Take the first step toward transforming your idea into a real-world solution.
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

export default YDOS;