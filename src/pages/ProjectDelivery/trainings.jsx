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
    title: "Market & Investment Readiness for Entrepreneurs - Cohort 2",
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
          <h2 className="pt-5">8thGear Training Opportunities</h2>
          <p className="lead">
            Fuel your innovation, empower your journey, and build a brighter
            future with our expert-led trainings.
          </p>
          <div className="mt-4 pb-5">
            <a
              href="#programs"
              className="training-btn training-btn-lg mr-2 text-decoration-none"
              style={{ backgroundColor: "#821e6b", fontWeight: "normal" }}
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
  <Container>
    <h4>Ready to Accelerate Your Growth?</h4>
    <p style={{ fontSize: "1rem" }}>
      Secure your spot in our next cohort and transform your business or
      career.
    </p>
    <Button
      as="a"
      href="https://docs.google.com/forms/d/1j9-AwQHOVerUBAPa1i9ErZuQyDHyUBTsZ-3SYrW2uZ4/viewform?edit_requested=true"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "1rem",
        fontWeight: "normal",
        backgroundColor: "#821e6b",
        padding: "0.75rem 1.5rem",
        borderRadius: "8px",
        textDecoration: "none", // Important to make sure the link still looks like a button
        color: "white",         // Make sure text remains visible
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#940a7a")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#821e6b")}
    >
      Apply Now
    </Button>
  </Container>
</section>

    </>
  );
};

export default Trainings;
