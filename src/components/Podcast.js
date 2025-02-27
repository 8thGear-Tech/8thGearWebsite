import React from "react";
import "./css/CoWorking.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Podcast = () => {
  return (
    <div className="hero-section position-relative text-white">
      <div className="hero-overlay"></div>
      <Container className="hero-content position-relative text-center z-1">
        <Row className="justify-content-center row-content w-100 d-flex align-items-center">
          <Col md={8} className="hero-column text-center w-100">
            <h5 className="display-5 hero-title fs-1 fw-bold">
              WANT TO CREATE A PODCAST?
            </h5>
            <a
              href="https://forms.gle/pjR1os5hN6WnbzFa9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn btn-primary mt-5 rounded px-4 py-2 fw-normal fs-6">
                Book a Session
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podcast;
