import React from "react";
import "./css/CoWorking.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Podcast = () => {
  return (
    <div className="hero-section position-relative vh-80 text-white mt-5 pt-5">
      <div className="hero-overlay position-absolute top-0 start-0 end-0 bottom-0"></div>
      <Container className="hero-content position-relative z-index-1 text-center">
        <Row className="d-flex justify-content-center align-items-center w-100 mt-5 pt-5">
          <Col md={8} className="hero-column text-center w-100">
            <h5 className="display-5 fs-2 fw-bold text-uppercase">Want to create a podcast?</h5>
            <p className="lead text-uppercase fw-medium">We can help.</p>
            <Button className="btn btn-primary fw-light mt-4 p-3 rounded-5">Book a Session</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podcast;
