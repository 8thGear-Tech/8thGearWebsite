import "./Programs.css";

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import MIREPlusImg from "../../../assets/images/projectdelivery/MIREPlusImg.JPG";
import trainingsHero from "../../../assets/images/projectdelivery/trainingsHero.jpg";

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

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScV0KcNcjJd3mHL1cvUJLf7NqkOuu9Y6FPdLuXE3TYsxjJLLw/viewform?usp=sharing&ouid=106047966915177609898"
            target="_blank"
            rel="noopener noreferrer"
            className="btn fw-normal rounded-pill mb-3"
            style={{
              backgroundColor: "#821e6b",
              color: "#fff",
              fontSize: "1.125rem",
              padding: "0.4rem 1.5rem",
              border: "none",
            }}
          >
            Apply Now
          </a>

          {/* <h3 className="pt-5">8thGear Training Opportunities</h3>
          <p className="lead" style={{ fontSize: "1rem" }}>
            Fuel your innovation, empower your journey, and build a brighter
            future with our expert-led trainings.
          </p> */}
        </div>
      </section>

      {/* UPCOMING TRAININGS */}
      <section className="upcoming-trainings pt-5 pb-3" id="programs">
        <Container>
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
                    {/* <p className="mb-2">
                      <strong>Duration:</strong> {t.duration}
                    </p>
                    <p className="mb-2">
                      <strong>Application Fee:</strong> {t.appfee}
                    </p>
                    <p className="mb-2">
                      <strong>Training Fee:</strong> {t.tfee}
                    </p> */}
                  </Card.Body>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScV0KcNcjJd3mHL1cvUJLf7NqkOuu9Y6FPdLuXE3TYsxjJLLw/viewform?usp=sharing&ouid=106047966915177609898" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card.Header className="bg-primary text-white text-center">
                      {t.flyerLink}
                    </Card.Header>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
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
          The Coaches and Team at <strong>8thGear® Hub & Venture Studio</strong> will help switch on 
          the lights so you can clearly see if you need <strong>Funding</strong> (and what type), 
          <strong> Talent</strong> (and what type), <strong> Tech</strong> (and what type), & 
          <strong> Market access</strong> (are you in the right market or should you pivot?).
        </p>

        {/* Four Pillars */}
       <Row className=" mt-4">
  {[
    { title: "Funding", icon: "bi-cash-coin" },
    { title: "Talent", icon: "bi-people-fill" },
    { title: "Tech", icon: "bi-cpu-fill" },
    { title: "Market", icon: "bi-graph-up-arrow" }
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
          <h5 className="fw-bold mb-3">For access to Funders, we will facilitate access to:</h5>
          <ul className="list-unstyled mb-3">
            <li className="mb-2">
              ✔ Development Bank of Nigeria (DBN) - Single Digit Debt Finance and Grants of up to ₦5m
            </li>
            <li className="mb-2">
              ✔ Lagos State Employment Trust Fund (LSETF) - Single Digit Debt Finance
            </li>
            <li className="mb-2">
              ✔ Access to Equity investment from Avon Africa VC
            </li>
          </ul>

          <p className="small mb-0">
            After the program you can optionally access follow on accountability/ad-hoc advisory board services 
            through our Subscribed Hub Membership to actually prepare you for the Market and/or investors.
          </p>

          {/* Talk to Us inside card */}
          <div className="text-center mt-4">
            <a
              href="https://api.whatsapp.com/send/?phone=2348094818883"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-pill px-4"
            >
              Talk to Us
            </a>
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScV0KcNcjJd3mHL1cvUJLf7NqkOuu9Y6FPdLuXE3TYsxjJLLw/viewform?usp=sharing&ouid=106047966915177609898"
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-normal rounded-pill"
              style={{
                backgroundColor: "#821e6b",
                color: "#fff",
                fontSize: "1.125rem",
                padding: "0.4rem 1.5rem",
                border: "none",
              }}
            >
              Apply Now
            </a>
          </div>

          {/* Section 2: Chat Support */}
          {/* <div className="d-flex justify-content-center">
            <div
              className="glass-card text-center"
              style={{
                maxWidth: "360px",
                width: "100%",
                padding: "1.5rem",
                borderRadius: "1rem",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-muted small mb-3">
                Not sure if this is right for you? Let’s talk it through.
              </p>
              <a
                href="https://wa.me/message/QB4KO7TXNSKKD1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn fw-normal rounded-pill"
                style={{
                  backgroundColor: "#821e6b",
                  color: "#fff",
                  fontSize: "0.9rem",
                  padding: "0.75rem 0.75rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <i className="bi bi-chat-dots-fill me-2" />
                Chat With Us
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default MIREPlus;
