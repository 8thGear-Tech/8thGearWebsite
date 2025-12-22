import "./Programs.css";

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import MIREPlusImg from "../../../assets/images/projectdelivery/MIREPlusImg.JPG";
import trainingsHero from "../../../assets/images/projectdelivery/trainingsHero.jpg";
import digiplusalliance from "../../../assets/images/projectdelivery/MIREPlus/digiplusalliance.png";
import avonafrica from "../../../assets/images/projectdelivery/MIREPlus/avonafrica.png";
import avon from "../../../assets/images/projectdelivery/MIREPlus/black-businessman-happy-expression.jpg";

const trainings = [
  {
    id: 1,
    title: "Market & Investment Readiness for Entrepreneurs - Cohort Q3",
    startDate: "September 8, 2025",
    // duration: "4 weeks",
    // appfee: "₦5,000",
    // tfee: "₦200,000",
    flyerImg: MIREPlusImg,
    flyerLink: "Apply Now",
  },
];

const MIREPlus = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <HomepageNav />

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

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(130, 30, 107, 0.8), rgba(0, 164, 149, 0.8))", // Lower opacity
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
          <h2 className="pt-5">
            Secure your spot in our next MIRE cohort and transform your
            business.
          </h2>
          <p className="lead" style={{ fontSize: "1rem" }}>
            Grant-Ready | Loan-Ready | Investor-Ready
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
              href="https://forms.gle/WJEYcDTdFkgZ6rwUA"
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

      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {/* Main Heading */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h3
                style={{
                  // fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                  fontWeight: "bold",
                  // marginBottom: '1rem',
                  background: "linear-gradient(135deg, #821E6B, #00A495)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GET UP TO ₦5,000,000
              </h3>
              <p className="m-0 p-0">
                Funding Support for High-Potential Entrepreneurs
              </p>
              <p
                className="m-0 p-0"
                style={{
                  fontWeight: "bold",
                  color: "#821E6B",
                }}
              >
                +More from MIRE Plus!
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
                }}
              >
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    "CAC-certified business owners (1 year+ in operation)",
                    "Based in Lagos, Ibadan, or Southwest Nigeria",
                    "Entrepreneurs seeking funding and digital business growth",
                    "Founders ready to invest ₦200,000 in scaling their business",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{ display: "flex", alignItems: "flex-start" }}
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
                      <p style={{ margin: 0, lineHeight: "1.5" }}>{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button
                    className="aboutbtn m-0 px-5 py-2"
                    style={{
                      // POPPING STYLES

                      color: "#000000", // Black text


                      // AUTOMATIC PULSE/POP ANIMATION
                      animation: "pulsePop 2s infinite alternate ease-in-out",

                      // Static styles for initial look
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                    }}
                  >
                    <a
                      href="https://forms.gle/WJEYcDTdFkgZ6rwUA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                      style={{
                        fontWeight: 700,
                        color: "#000000", // Ensure link text is black
                      }}
                    >
                      Apply Now
                    </a>
                  </Button>{" "}
                  <p
                    style={{
                      // textAlign: "center",
                      fontSize: "0.875rem",
                      fontStyle: "italic",
                      marginTop: "0.75rem",
                      fontStyle: "italic",
                      margin: "1rem 0 0 0",
                    }}
                  >
                    Limited slots for high-potential entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Right Column - Program Details */}
              <div
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  // flexDirection: 'column',
                  // justifyContent: 'space-between',
                  // minHeight: '400px',
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginTop: "1rem",
                  }}
                > */}

                {/* What You'll Gain */}
                <div>
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      fontSize: "1.15rem",
                    }}
                  >
                    What You'll Gain:
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "2px solid #f0f0f0",
                      // marginBottom: "1rem",
                    }}
                  >
                    {[
                      "Hands-on workshop on cash flow projection,business & revenue models",
                      "Access to Debt & Equity Funding (T & C applies)",
                      "Post-program mentorship (1 Month)",
                      "Demo Day - Opportunity to Pitch to Investors",
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
                {/* TEXT CONTENT BLOCK */}
                <div style={{ marginBottom: "1.5rem" }}>
                  {/* NEW FLEX CONTAINER for Application Fee and Training Fee */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5em",
                      // justifyContent: "space-between", // Space items out nicely
                      paddingBottom: "1rem",
                      borderBottom: "2px solid #f0f0f0",
                      marginBottom: "1rem",
                    }}
                  >
                    {/* Application Fee */}
                    <div>
                      <h5> Application Fee</h5>
                      <p className="m-0 p-0">₦5,000</p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#666",
                          margin: 0, // Ensure no extra margin is applied
                        }}
                      >
                        (Non-refundable)
                      </p>
                    </div>{" "}
                    {/* Training Fee */}
                    <div>
                      <h5>Training Fee</h5>

                      <p className="m-0 p-0">₦200,000</p>
                    </div>
                  </div>

                  <div style={{}}>
                    <h5>Program Duration</h5>
                    <p className="m-0 p-0">4 Weeks</p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        margin: 0,
                      }}
                    >
                      Start Date to be Announced
                    </p>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
          {/* Supported By */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: "1.5rem",
              // borderTop: '2px solid #f0f0f0'
            }}
          >
            <h5
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "#333",
              }}
            >
              SUPPORTED BY
            </h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",

                  // minWidth: "140px",
                  height: "50px",
                }}
                className="py-2"
              >
                <img
                  src={digiplusalliance}
                  alt="DigiPlus Alliance"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  // minWidth: "140px",
                  height: "42px",
                }}
                className="py-2"
              >
                <img
                  src={avonafrica}
                  alt="Avon Africa"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-center py-5"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-4">
            <div
              style={{ width: "320px", height: "568px", position: "relative" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/i_IYFaBItGE"
                title="MIRE Testimonial 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              style={{ width: "320px", height: "568px", position: "relative" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0eRPbnmkksc"
                title="MIRE Testimonial 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
          <img src={modalImg} alt="Flyer" className="img-fluid w-100" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalImg(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <section
        className="clarity-section py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #821E6B 0%, #00A495 100%)",
        }}
      >
        <Container>
          <Row className="align-items-start">
            {/* Left Side - Story */}
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-bold mb-3">
                If clarity is worth anything to you and your business, read on.
              </h3>
              <p className="opacity-90">
                The Coaches and Team at{" "}
                <strong>8thGear® Hub & Venture Studio</strong> will help switch
                on the lights so you can clearly see if you need{" "}
                <strong>Funding</strong> (and what type),
                <strong> Talent</strong> (and what type), <strong> Tech</strong>{" "}
                (and what type), &<strong> Market access</strong> (are you in
                the right market or should you pivot?).
              </p>

              {/* Four Pillars */}
              <Row className=" mt-4">
                {[
                  { title: "Funding", icon: "bi-cash-coin" },
                  { title: "Talent", icon: "bi-people-fill" },
                  { title: "Tech", icon: "bi-cpu-fill" },
                  { title: "Market", icon: "bi-graph-up-arrow" },
                ].map((item, idx) => (
                  <Col key={idx} xs={3} className="mb-3">
                    <i className={`bi ${item.icon} fs-3 text-white`} />
                    <p className="small fw-bold mb-0">{item.title}</p>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right Side - Funders */}
            <Col md={6}>
              <div className="p-4 rounded shadow-lg bg-white text-dark">
                <h5 className="fw-bold mb-3">
                  For access to Funders, we will facilitate access to:
                </h5>
                <ul className="list-unstyled mb-3">
                  <li className="mb-2">
                    ✔ Development Bank of Nigeria (DBN) - Single Digit Debt
                    Finance and Grants of up to ₦5m
                  </li>
                  <li className="mb-2">
                    ✔ Lagos State Employment Trust Fund (LSETF) - Single Digit
                    Debt Finance
                  </li>
                  <li className="mb-2">
                    ✔ Access to Equity investment from Avon Africa VC
                  </li>
                </ul>

                <p className="small mb-0">
                  After the program you can optionally access follow on
                  accountability/ad-hoc advisory board services through our
                  Subscribed Hub Membership to actually prepare you for the
                  Market and/or investors.
                </p>

                {/* Talk to Us inside card */}
                <div className="text-center mt-4">
                  <Button
                    className="aboutbtn m-0"
                    style={{
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <a
                      href="https://api.whatsapp.com/send/?phone=2348094818883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none purple-text"
                      style={{ fontWeight: 600 }}
                    >
                      Talk to Us
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section text-center pt-5 pb-3">
        <div className="container">
          {/* Section 1: Call to Action */}
          <div className="">
            <h3 className="fw-bold mb-3">Ready to Accelerate Your Growth?</h3>
            <p className="lead text-muted mb-4">
              Secure your spot in our next MIRE cohort and transform your
              business.
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
                href="https://forms.gle/WJEYcDTdFkgZ6rwUA"
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

export default MIREPlus;
