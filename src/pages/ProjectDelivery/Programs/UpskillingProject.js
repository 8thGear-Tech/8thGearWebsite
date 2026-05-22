import { Container, Row, Col, Button } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import eightgearlogo from "../../../assets/images/projectdelivery/ESP/logo.png";
import intellex from "../../../assets/images/projectdelivery/ESP/intellex.png";
import germancooperation from "../../../assets/images/projectdelivery/ESP/german-cooperation.png";
import giz from "../../../assets/images/projectdelivery/ESP/giz.png";
import ngc from "../../../assets/images/projectdelivery/ESP/ngc.png";
import mrc from "../../../assets/images/projectdelivery/ESP/mrc.png";

const EmployabilityProject = () => {
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

      {/* Hero Section */}
<section className="py-5 text-center" style={{ backgroundColor: "#f8f2f8" }}>
  <Container>
    <Row className="justify-content-center">
      <Col lg={8}>
        <h4 className="fw-bold mb-3" style={{ color: "#000000" }}>
          Build Your Workforce with Skilled Tech Talent
        </h4>
        <p className="fs-6 mb-4 text-muted">
          Through the GIZ/ZME Upskilling Programme, implemented by 8thGear,
          we are equipping young people in Lagos with in-demand digital skills
          and preparing them for real-world work environments. This programme
          creates a pipeline of job-ready tech talents that businesses can
          engage, train further, and integrate into their teams.
        </p>

       
        <div className="d-flex justify-content-center gap-3 flex-wrap">
  <Button
    variant="primary"
    size="md"
    className="px-4 py-2 fw-bold"
    href="https://talenmo.biz/"
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
      e.currentTarget.style.boxShadow = "0 6px 16px rgba(139, 0, 93, 0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#8B005D";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(139, 0, 93, 0.15)";
    }}
  >
    Request Talent
  </Button>
</div>
{/*  */}

{/* Split CTA Cards */}
{/* Split CTA Cards */}
<div
  className="mx-auto mt-4"
  style={{
    display: "flex",
    gap: "16px",
    maxWidth: "640px",
    width: "100%",
    flexWrap: "wrap",
  }}
>
  {/* Business owners card */}
  <div
    style={{
      flex: 1,
      minWidth: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "12px",
      padding: "20px",
      backgroundColor: "#ffffff",
      border: "1px solid #e0cce0",
      borderRadius: "14px",
      textAlign: "left",
    }}
  >
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span style={{ fontSize: "18px" }}>💼</span>
        <p style={{ margin: 0, fontSize: "12px", color: "#888", fontWeight: "500" }}>
          For Business Owners
        </p>
      </div>
      <p style={{ margin: 0, fontSize: "14px", fontWeight: "400", color: "#222", lineHeight: "1.5" }}>
        Enrol your employees in fully funded tech training at no cost to your business.
      </p>
    </div>
    <a
      href="#applicant-section"
      style={{
        display: "inline-block",
        backgroundColor: "transparent",
        color: "#8B005D",
        border: "1.5px solid #8B005D",
        padding: "10px 18px",
        borderRadius: "10px",
        fontSize: "13px",
        fontWeight: "700",
        textDecoration: "none",
        width: "fit-content",
        transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#8B005D";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(139, 0, 93, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#8B005D";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Upskill your staff →
    </a>
  </div>

  {/* Individuals card */}
  <div
    style={{
      flex: 1,
      minWidth: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "12px",
      padding: "20px",
      backgroundColor: "#ffffff",
      border: "1px solid #e0cce0",
      borderRadius: "14px",
      textAlign: "left",
    }}
  >
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span style={{ fontSize: "18px" }}>🎓</span>
        <p style={{ margin: 0, fontSize: "12px", color: "#888", fontWeight: "500" }}>
          For Individuals
        </p>
      </div>
      <p style={{ margin: 0, fontSize: "14px", fontWeight: "400", color: "#222", lineHeight: "1.5" }}>
        Get job-ready digital skills through a fully funded programme.
      </p>
    </div>
    <a
      href="#applicant-section"
      style={{
        display: "inline-block",
        backgroundColor: "transparent",
        color: "#8B005D",
        border: "1.5px solid #8B005D",
        padding: "10px 18px",
        borderRadius: "10px",
        fontSize: "13px",
        fontWeight: "700",
        textDecoration: "none",
        width: "fit-content",
        transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#8B005D";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(139, 0, 93, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#8B005D";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Apply for free training →
    </a>
  </div>
</div>

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
            Why This Programme Matters
          </h3>
          <p className="text-center">The GIZ/ZME Upskilling Programme goes beyond training, it is a structured talent development pipeline designed to help businesses access pre-trained, work-ready individuals equipped with practical digital skills.</p>

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
                  What Your Business Gains
                </h5>
                <ul className="list-unstyled mb-0">
                  {[
                    "Access to trained and pre-vetted tech talent",
                    "Opportunity to host interns and assess potential hires",
                    "Reduced cost and time spent on recruitment and training",
                    "Talent equipped with hands-on, practical experience",
                    "Exposure to candidates aligned with global workforce standards",
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
                <div className="row g-2 mb-3">
  {[
    "Data Analytics",
    "Software Development",
    "Cybersecurity",
    "Product Management",
    "Digital Marketing",
    "Graphics Design",
    "Vibe Coding",
  ].map((skill, idx) => (
    <div key={idx} className="col-6">
      <div className="d-flex align-items-start">
        <span className="me-2 mt-1" style={{ color: "#888", fontSize: "1.1rem" }}>
          ✓
        </span>
        <span style={{ fontSize: "0.95rem", color: "#555" }}>
          {skill}
        </span>
      </div>
    </div>
  ))}
</div>
               
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
           Looking to hire or collaborate with tech talent for your business? Tap into our pipeline of skilled professionals and let's help you find the right fit.
            <br />
           You can also enrol your existing staff in the programme to upskill them, scroll down to see how.
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
            href="https://talenmo.biz/"
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
              For Individuals: Start Your Tech Journey here
            </h3>

            <p
              className="mb-3"
              style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}
            >
              Are you between 18-40, and ready
              to build a career in tech? Apply for the fully funded training
              program today and start your journey into tech.
            </p>
            {/* <p className="small text-muted mb-4"></p> */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                variant="outline-dark"
                size="sm"
                className="px-3 py-2 fw-bold"
                href="https://chat.whatsapp.com/HDLz4wKecgt19Cl3oSAW1O"
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
                Join Whatsapp Group →
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                className="px-3 py-2 fw-bold"
               href="https://docs.google.com/forms/d/e/1FAIpQLSf87ZyRtzb3IGflTxcT7oiy2ToOY3HeMldEprq6wj5Y6icDcA/viewform?usp=dialog"
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
                 Apply as Trainee →
               
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer — Border Removed */}
      {/* Footer */}
      {/*  */}
{/*  */}

<footer
  style={{
    backgroundColor: "#ffffff",
    marginTop: "auto",
    paddingTop: "3rem",
    paddingBottom: "1rem",
  }}
>
  <Container className="text-center">
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">

      {/* Executed by */}
      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
        <span className="text-muted small">Executed by:</span>
        <div className="d-flex align-items-center gap-2">
          <img
            src={eightgearlogo}
            alt="8thGear Hub"
            style={{ height: "70px", objectFit: "contain" }}
          />
          <img
            src={intellex}
            alt="Intellex"
            style={{ height: "70px", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Divider — desktop only */}
      <span className="text-muted d-none d-md-inline">|</span>

      {/* Supported by */}
      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
        <span className="text-muted small" style={{ whiteSpace: "nowrap" }}>Supported by:</span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            src={germancooperation}
            alt="German Cooperation"
            style={{ height: "55px", objectFit: "contain" }}
          />
          <img
            src={giz}
            alt="GIZ"
            style={{ height: "55px", objectFit: "contain" }}
          />
          <img
            src={ngc}
            alt="NGC"
            style={{ height: "55px", objectFit: "contain" }}
          />
          <img
            src={mrc}
            alt="MRC"
            style={{ height: "55px", objectFit: "contain" }}
          />
        </div>
      </div>

    </div>
  </Container>
</footer>
    </div>
  );
};

export default EmployabilityProject;