import React from "react";
import "./css/CoWorking.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Podcast = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-content">
        <Row className="justify-content-center row-content">
          <Col md={8} className="hero-column text-center">
            <h5 className="display-5 hero-title">Want to create a podcast?</h5>
            <p className="lead">We can help.</p>
            <Button className="btn btn-primary">Book a Session</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podcast;
