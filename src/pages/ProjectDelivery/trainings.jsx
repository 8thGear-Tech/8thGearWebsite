// import React, { useState } from "react";
// import { HomepageNav } from "../../components/Navbar";
import "./trainings.css";

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { HomepageNav } from "../../components/Navbar";
import IRE from "../../assets/images/projectdelivery/IRE.jpg";
import trainingsHero from "../../assets/images/projectdelivery/trainingsHero.jpg";

const trainings = [
  {
    id: 1,
    title: "Market & Investment Readiness for Entrepreneurs - Cohort Q2",
    startDate: "July 7, 2025",
    duration: "4 weeks",
    appfee: "₦3,000",
    tfee: "₦200,000",
    flyerImg: IRE,
  },
];

const Trainings = () => {
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
          <h3 className="pt-5">8thGear Training Opportunities</h3>
          <p className="lead" style={{ fontSize: "1rem" }}>
            Fuel your innovation, empower your journey, and build a brighter
            future with our expert-led trainings.
          </p>
          <div className="mt-4 pb-5">
            <a
              href="#programs"
              className="training-btn training-btn-lg mr-2 text-decoration-none"
              style={{
                backgroundColor: "#821e6b",
                fontWeight: "normal",
                fontSize: "0.8rem",
              }}
            >
              Explore our Trainings
            </a>
          </div>
        </div>
      </section>

      {/* UPCOMING TRAININGS */}
      <section className="upcoming-trainings pt-5 pb-3" id="programs">
        <Container>
          <h4 className="mb-4 text-center">Upcoming Training</h4>
          <Row className="justify-content-center ">
            {trainings.map((t) => (
              <Col key={t.id} sm={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Header className="bg-primary text-white text-center">
                    {t.title}
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={t.flyerImg}
                    alt={`${t.title} Flyer`}
                  />
                  <Card.Body className="d-flex flex-column">
                    <p className="mb-2">
                      <strong>Starts:</strong> {t.startDate}
                    </p>
                    <p className="mb-2">
                      <strong>Duration:</strong> {t.duration}
                    </p>
                    <p className="mb-2">
                      <strong>Application Fee:</strong> {t.appfee}
                    </p>
                    <p className="mb-2">
                      <strong>Training Fee:</strong> {t.tfee}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
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

      <section className="cta-section text-center">
        <section
          style={{
            background: "#F2E9EE",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 500 80"
              preserveAspectRatio="none"
              style={{ height: "40px", width: "100%" }}
            >
              <path
                d="M0,30 C150,80 350,0 500,50 L500,00 L0,0 Z"
                style={{ fill: "#ffffff" }}
              ></path>
            </svg>
          </div>

          <div className="container py-5 ">
            <div className="row align-items-center justify-content-center gx-5">
              {/* LEFT SIDE */}
              <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                <h3 className="fw-bold mb-3 mt-5">
                  Ready to Accelerate Your Growth?
                </h3>
                <p className="lead text-muted mb-4">
                  Secure your spot in our next cohort and transform your
                  business or career.
                </p>
                <a
                  href="https://docs.google.com/forms/d/1j9-AwQHOVerUBa1i9ErZuQyDHyUBTsZ-3SYrW2uZ4/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-normal mb-4"
                  style={{
                    backgroundColor: "#821e6b",
                    color: "#fff",
                    fontSize: "1.125rem",
                    padding: "0.75rem 1.5rem",
                    // borderRadius: "1.rem",
                  }}
                >
                  Apply Now
                </a>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-md-6 d-flex justify-content-center py-4">
                <div
                  className="glass-card text-center"
                  style={{
                    maxWidth: "340px",
                    width: "100%",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(245,245,245,0.7))",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p className="text-muted small mb-3">
                    Not sure if this is right for you? Let's talk it through.
                  </p>
                  <a
                    href="https://wa.me/message/QB4KO7TXNSKKD1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#f8f9fa",
                      color: "#333",
                      fontSize: "0.9rem",
                      padding: "0.5rem 0.75rem",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      transition: "background 0.2s ease",
                      border: "1px solid rgba(0,0,0,0.08)",
                      //  borderRadius: "1rem",
                    }}
                  >
                    <i className="bi bi-chat-dots-fill me-2" />
                    Chat With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Trainings;
