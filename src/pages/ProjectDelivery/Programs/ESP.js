import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import eightgearlogo from "../../../assets/images/projectdelivery/ESP/logo.png";

const ESP = () => {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomepageNav />

      <section
        className="py-5 text-center"
        style={{
          backgroundColor: "#f8f2f8",
          borderBottom: "1px solid #e0d5dc",
          position: "relative",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className=" fw-bold mb-3" style={{ color: "#8B005D" }}>
                Employability Support Project - Access Job-Ready Tech Talent
              </h3>
              <p className="fs-6 mb-4 text-muted">
                Free Internship Placement: Courtesy of our Partners, LSETF &
                GIZ. Connect with skilled tech talent who have completed
                intensive training and are ready to contribute to your business
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  className="px-4 py-2 fw-bold"
                  style={{
                    backgroundColor: "#8B005D",
                    borderColor: "#8B005D",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/formResponse?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Talent →
                </Button>
              </div>
              <p className="mt-3 text-muted small">
                <em>
                  <a
                    href="#applicant-section"
                    style={{
                      color: "#6c757d",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    Individuals: Apply for free training below ↴
                  </a>
                </em>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Proposition for Employers */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <h3 className="text-center mb-5" style={{ color: "#333" }}>
            Why Hire From This Program?
          </h3>
          <Row className="g-4 justify-content-center">
            <Col md={4} className="mb-4">
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i
                      className="bi bi-cash fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">Zero Placement Fee</h5>
                  <p className="text-muted small">
                    No cost to employers for placement; courtesy of LSETF & GIZ.
                    Connect with talent ready to join your team.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i
                      className="bi bi-mortarboard fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">4-Week Intensive Training</h5>
                  <p className="text-muted small">
                    Graduates trained in Digital Marketing, Data Analytics, Web
                    Dev & Content Creation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i
                      className="bi bi-shield-check fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">Trained & Job-Ready Talent</h5>
                  <p className="text-muted small">
                    All candidates complete intensive hands-on training and meet
                    program standards before placement, so you get talent that’s
                    prepared to contribute from day one.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
          <h3 className=" mb-3">
            Build Your Tech Team — At Zero Placement Cost
          </h3>
          <p className="mb-4 text-muted">
            Tap into Lagos’ next generation of tech talent. No placement fees.
            Just skilled talent ready to add value to your business.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              variant="primary"
              size="md"
              className="px-4 py-2 fw-bold"
              style={{
                backgroundColor: "#8B005D",
                borderColor: "#8B005D",
                color: "white",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/formResponse?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Talent Now →
            </Button>
          </div>
          <p className="mt-3 text-muted small">
            Limited slots for businesses — Express interest today.
          </p>
        </Container>
      </section>

      <section
        id="applicant-section"
        className="py-5 text-center"
        style={{ backgroundColor: "#fafafa" }}
      >
        {" "}
        <Container>
          {" "}
          <div
            className="text-center"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {" "}
            <h5
              className="fw-bold mb-3"
              style={{ color: "#8B005D", fontSize: "1.1rem" }}
            >
              {" "}
              For Individuals: Apply for Free Training{" "}
            </h5>{" "}
            {/* REPLACED: Bullet list → Single sentence */}{" "}
            <p className="small text-muted mb-4">
              {" "}
              Open to Lagos residents aged 18–35 who have a LASSRA ID, are ready
              for in-person training, and live near the training center.{" "}
            </p>{" "}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {" "}
              <Button
                variant="outline-dark"
                size="sm"
                className="px-3 py-1 fw-bold"
                href="https://forms.gle/fugPZxhZixdWmHcA9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#8B005D",
                  color: "#8B005D",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}
              >
                {" "}
                Apply as Trainee →{" "}
              </Button>{" "}
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-3 py-1 fw-bold"
                href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl?mode=ems_wa_t"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#6c757d",
                  color: "#6c757d",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}
              >
                Join WhatsApp Group
              </Button>
            </div>
            <p
              className="mt-3 small fst-italic text-muted"
              style={{ fontSize: "0.75rem" }}
            >
              Training Location: 8thGear Hub, 41, CMD Road, Magodo, Lagos
            </p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          marginTop: "auto",
          borderTop: "1px solid #e0d5dc",
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <Container className="text-center">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">Executed by: 8thGear Hub</span>
              {/* <img
                src={eightgearlogo}
                alt="8thGear Hub"
                style={{
                  height: "100px",
                  objectFit: "contain",
                }}
              /> */}
            </div>

            <span className="text-muted d-none d-md-inline">|</span>

            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">
                Supported by: LSETF & GIZ
              </span>
              {/* <img
                src={eightgearlogo}
                alt="LSETF & GIZ"
                style={{
                  height: "100px",
                  objectFit: "contain",
                }}
              /> */}
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ESP;
