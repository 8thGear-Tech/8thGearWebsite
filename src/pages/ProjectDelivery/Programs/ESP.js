import { Container, Row, Col, Button } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import eightgearlogo from "../../../assets/images/projectdelivery/ESP/logo.png";
import lsetf from "../../../assets/images/projectdelivery/ESP/lsetf.png";
import swissagency from "../../../assets/images/projectdelivery/ESP/swiss-agency.jpg";
import germancooperation from "../../../assets/images/projectdelivery/ESP/german-cooperation.png";
import giz from "../../../assets/images/projectdelivery/ESP/giz.png";

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

      {/* Hero Section — Border Removed */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#f8f2f8" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h4 className="fw-bold mb-3" style={{ color: "#000000" }}>
                Looking for Skilled Tech Talent to Power Your Business?
              </h4>
              <p className="fs-6 mb-4 text-muted">
                Through the LSETF Employability Project, executed by 8thGear, we
                are bridging the gap between entrepreneurs who need talent and
                young people eager to build careers in tech. This initiative
                ensures your business can access job-ready digital talent
                trained in the exact skills needed to thrive in today’s market.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  className="px-4 py-2 fw-bold"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/formResponse?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#8B005D",
                    borderColor: "#8B005D",
                    color: "white",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    boxShadow: "0 4px 12px rgba(139, 0, 93, 0.15)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#7a004d";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(139, 0, 93, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#8B005D";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(139, 0, 93, 0.15)";
                  }}
                >
                  Request Talent
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

      {/* Why Entrepreneurs Should Care - Two Equal Height Cards */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <h3
            className="fw-bold mb-3 d-flex align-items-center justify-content-center"
            style={{ color: "#000000", fontSize: "1.3rem" }}
          >
            Why Entrepreneurs Should Care
          </h3>

          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <div
                className="h-100 p-4 rounded shadow-sm border-start"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#8B005D",
                  borderWidth: "4px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(139, 0, 93, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <h5
                  className="fw-bold d-flex align-items-center mb-3"
                  style={{ color: "#8B005D" }}
                >
                  Key Benefits for Your Business
                </h5>
                <ul className="list-unstyled mb-0">
                  {[
                    "Access a pipeline of pre-vetted, trained tech talent",
                    "Save time & resources on recruitment and onboarding",
                    "Get support from 8thGear’s talent placement services",
                    "Contribute to youth empowerment while growing your business",
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      <span
                        className="me-2 mt-1"
                        style={{
                          color: "#28a745",
                          fontSize: "1.1rem",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: "0.95rem",
                          color: "#555",
                          lineHeight: "1.5",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <div
                className="h-100 p-4 rounded shadow-sm border-start"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#6f42c1",
                  borderWidth: "4px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(111, 66, 193, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <h5
                  className="fw-bold d-flex align-items-center mb-3"
                  style={{ color: "#8B005D" }}
                >
                  Talent Pool You Can Access
                </h5>
                <p className="text-muted small mb-3">
                  Our program is developing young professionals skilled in:
                </p>
                <ul className="list-unstyled mb-3">
                  {[
                    "Digital Marketing",
                    "Data Analytics",
                    "Web Design",
                    "Content Creation",
                  ].map((skill, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <span
                        className="me-2 mt-1"
                        style={{
                          color: "#888",
                          fontSize: "1.1rem",
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: "0.95rem", color: "#555" }}>
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted small fst-italic mb-0">
                  These talents are equipped not just with technical know-how,
                  but also with mentorship and career readiness to deliver value
                  from Day One.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Banner — Border Removed */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
          <p
            className="mb-3"
            style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}
          >
            Looking to hire or collaborate with tech talent for your business?
            <br />
            Tap into our pipeline of skilled professionals and let 8thGear help
            you find the right fit.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="px-4 py-2 fw-bold"
            style={{
              backgroundColor: "#8B005D",
              borderColor: "#8B005D",
              color: "white",
              borderRadius: "12px",
              fontSize: "1.1rem",
              padding: "14px 32px",
              boxShadow: "0 6px 20px rgba(139, 0, 93, 0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#7a004d";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(139, 0, 93, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#8B005D";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(139, 0, 93, 0.2)";
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/formResponse?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Talent Now
          </Button>
        </Container>
      </section>

      {/* For Young People Section */}
      <section
        id="applicant-section"
        className="py-5 text-center"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Container>
          <div
            className="text-center"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <h3
              className="fw-bold mb-3 d-flex align-items-center justify-content-center"
              style={{ fontSize: "1.3rem" }}
            >
              For Young People
            </h3>

            <p
              className="mb-3"
              style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}
            >
              Are you between 18–35, a Lagos resident with LASSRA ID, and ready
              to build a career in tech? Apply for the fully funded training
              program today and start your journey into tech.
            </p>
            {/* <p className="small text-muted mb-4"></p> */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                variant="outline-dark"
                size="sm"
                className="px-3 py-2 fw-bold"
                href="https://forms.gle/fugPZxhZixdWmHcA9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#8B005D",
                  color: "#8B005D",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  boxShadow: "0 2px 6px rgba(139, 0, 93, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(139, 0, 93, 0.05)";
                  e.currentTarget.style.borderColor = "#7a004d";
                  e.currentTarget.style.color = "#7a004d";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#8B005D";
                  e.currentTarget.style.color = "#8B005D";
                }}
              >
                Apply as Trainee →
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-3 py-2 fw-bold"
                href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl?mode=ems_wa_t"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#6c757d",
                  color: "#6c757d",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  boxShadow: "0 2px 6px rgba(108, 117, 125, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(108, 117, 125, 0.05)";
                  e.currentTarget.style.borderColor = "#5a6268";
                  e.currentTarget.style.color = "#5a6268";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#6c757d";
                  e.currentTarget.style.color = "#6c757d";
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

      {/* Footer — Border Removed */}
      {/* Footer */}
    </div>
  );
};

export default ESP;
