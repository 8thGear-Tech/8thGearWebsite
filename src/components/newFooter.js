//images
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { FiPhone, FiMail } from "react-icons/fi"; // Feather icons
import "../sassfiles/components/_footer.scss";
import { FaXTwitter } from "react-icons/fa6";

import "./newFooter.css";

export const NewFooter = () => {
  return (
    <footer style={{ backgroundColor: "#F2E9EE" }}>
      <Container className="py-5 mt-5">
        <div className="d-none d-lg-block">
          <Row className="mb-4">
            <Col lg={2} className="mb-3">
              <img src={logo} alt="Brand Logo" style={{ width: "150px" }} />
            </Col>
            <Col lg={4} className="mb-3">
              <p className="text-dark" style={{ fontSize: "0.9rem" }}>
                8thGear is your trusted partner in venture building, guiding
                startups and businesses towards sustainable growth and success,
                developing a thriving ecosystem for enterpreneurs
              </p>
              <p className="text-dark mb-1" style={{ fontSize: "0.85rem" }}>
                <FiPhone className="me-2" style={{ color: "#008261" }} />
                <span>
                  <a
                    href="tel:2349132462410"
                    className="me-2 text-dark text-decoration-none"
                    style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                  >
                    +234 913 246 2410
                  </a>
                </span>
              </p>

              <p className="text-dark mb-3" style={{ fontSize: "0.85rem" }}>
                <FiMail className="me-2" style={{ color: "#008261" }} />
                <span className="text-dark">
                  <a
                    href="mailto:info@8thgearpartners.com"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                  >
                    info@8thgearpartners.com
                  </a>
                </span>
              </p>
              <div className="d-flex">
                <a
                  href="https://www.facebook.com/8thgearhub"
                  className="text-dark me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook" style={{ color: "#008261" }} />
                </a>
                <a
                  href="https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg"
                  className="text-dark me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ color: "#008261" }} />
                </a>

                <a
                  href="https://www.linkedin.com/company/8thgearhub/"
                  className="text-dark me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin" style={{ color: "#008261" }} />
                </a>
                <a
                  href="https://www.instagram.com/8thgearhub/"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram" style={{ color: "#008261" }} />
                </a>
              </div>
            </Col>
            <Col lg={2} className="mb-3">
              {/* <h5 className="text-dark mb-3">Company</h5> */}
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/about"
                    className="text-dark text-decoration-none fw-light"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/initiatives"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Resources &amp; Materials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/insights"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Insights &amp; Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Events
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/FAQ"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    FAQ
                  </Link>
                </li> */}
              </ul>
            </Col>
            <Col lg={2} className="mb-3">
              <h5 className="text-dark mb-3">Hub Services</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/growth-advisory"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Growth Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/coworking"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Co-working
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent-placement"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Talent Placement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/msme-marketplace"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                  MSME Marketplace
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="mb-3">
              <h5 className="text-dark mb-3">Venture Studio</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/portfolio"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hub-membership"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Hub Membership
                  </Link>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/FaFa7y2RJRV0PU6ycOaGNq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                  >
                    Community
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="d-block d-lg-none">
          <Row className="mb-4">
            <Col xs={12}>
              <div className="d-flex flex-column flex-md-row align-items-start gap-3">
                <img src={logo} alt="Brand Logo" style={{ width: "150px" }} />
                <div>
                  <p className="text-dark" style={{ fontSize: "0.9rem" }}>
                    8thGear is your trusted partner in venture building, guiding
                    startups and businesses towards sustainable growth and
                    success, developing a thriving ecosystem for enterpreneurs
                  </p>
                  {/* <p className="text-dark mb-1" style={{ fontSize: "0.85rem" }}>
                    <FiPhone className="me-2" style={{ color: "#008261" }} />
                    <span
                      style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                    >
                      <a
                        href="tel:2349132462410"
                        className="me-2 text-decoration-none"
                      >
                      +234 913 246 2410
                      </a>
                      <a
                        href="tel:2348094818882"
                        className="text-dark text-decoration-none"
                      >
                        +2348094818882
                      </a>
                    </span>
                  </p> */}

                  <p className="text-dark mb-1" style={{ fontSize: "0.85rem" }}>
                    <FiPhone className="me-2" style={{ color: "#008261" }} />
                    <span>
                      <a
                        href="tel:+2349132462410"
                        className="me-2 text-dark text-decoration-none"
                        style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                      >
                        +234 913 246 2410
                      </a>
                    </span>
                  </p>

                  <p className="text-dark mb-3" style={{ fontSize: "0.85rem" }}>
                    <FiMail className="me-2" />
                    <span className="text-dark">
                      <a
                        href="mailto:info@8thgearpartners.com"
                        className="text-dark text-decoration-none"
                        style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                      >
                        info@8thgearpartners.com
                      </a>
                    </span>
                  </p>
                  <div className="d-flex">
                    <a
                      href="https://www.facebook.com/8thgearhub"
                      className="text-dark me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="bi bi-facebook"
                        style={{ color: "#008261" }}
                      />
                    </a>
                    <a
                      href="https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg"
                      className="text-dark me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter style={{ color: "#008261" }} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/8thgearhub/"
                      className="text-dark me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="bi bi-linkedin"
                        style={{ color: "#008261" }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/8thgearhub/"
                      className="text-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="bi bi-instagram"
                        style={{ color: "#008261" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header>Company</Accordion.Header> */}
              <Accordion.Body style={{ backgroundColor: "transparent" }}>
                <ul className="list-unstyled">
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/about"
                      className="text-dark text-decoration-none fw-light"
                      style={{ fontSize: "0.9rem", fontFamily: "open-sans" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/initiatives"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Initiatives
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/resources"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Resources &amp; Materials
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/insights"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Insights &amp; Publications
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/events"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/FAQ"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hub Services</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "transparent" }}>
                <ul className="list-unstyled">
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/growth-advisory"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Growth Advisory
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/coworking"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Co-working
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/talent-placement"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Talent Placement
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/msme-marketplace"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      MSME Marketplace
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Venture Studio</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "transparent" }}>
                <ul className="list-unstyled">
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/portfolio"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Link
                      to="/hub-membership"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Hub Membership
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/FaFa7y2RJRV0PU6ycOaGNq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark text-decoration-none"
                      style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <Row>
          <Col>
            <div className="d-flex flex-column flex-lg-row justify-content-lg-start align-items-start align-items-lg-center mt-4 flex-wrap">
              <Link
                to="/privacy-policy"
                className="text-dark text-decoration-none mb-2 mb-lg-0 me-lg-3"
                style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-dark text-decoration-none mb-2 mb-lg-0 me-lg-3"
                style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="text-dark text-decoration-none mb-2 mb-lg-0 me-lg-3"
                style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
              >
                Refund Policy
              </Link>
              <Link
                to="/genderpolicy"
                className="text-dark text-decoration-none mb-2 mb-lg-0 me-lg-3"
                style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
              >
                Gender Policy
              </Link>
              <p
                className="mb-0 text-dark text-start ms-lg-5 ps-lg-5"
                style={{ fontSize: "0.85rem", fontFamily: "open-sans" }}
              >
                © 2025 8thGear Partners Ltd. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
