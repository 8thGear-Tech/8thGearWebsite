import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/CoWorking.css";
import adidas from "./image/adidas-logo.png";
import puma from "./image/puma-logo.png";
import nike from "./image/nike-logo.png";
import balance from "./image/new-logo.png";
import converse from "./image/converse-logo.png";

const logos = [
  { src: adidas, alt: "Adidas" },
  { src: puma, alt: "Puma" },
  { src: nike, alt: "Nike" },
  { src: balance, alt: "New Balance" },
  { src: converse, alt: "Converse" },
];

const Clients = () => {
  return (
    <div className="client-section">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col>
            <h2 className="section-title">Our Client</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {logos.map((logo, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={2}
              className="d-flex justify-content-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid client-logo"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
