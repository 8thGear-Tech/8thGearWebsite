import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";

const PRIMARY_TEAL = "#00a495";
const PRIMARY_PURPLE = "#821e6b";

const MSME_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV92nsSXNKZ0hsvZk2rxdFR8FV_5IaM-E9MvbPjwFRr4zhWQ/viewform";
const STUDENT_FORM_URL = "https://forms.gle/UGZsMrsXyKcaXj1AA"; 

const DBN = () => {
  return (
    <div>
      <HomepageNav />
      <DBNHero />
      <DBNAbout />
      <DBNProgramHighlights />
      <DBNWhatYouGain />
      <DBNPitchCompetition />
      <DBNCTA />
    </div>
  );
};

// ── Hero ─────────────────────────────────────────────────────────────────────
const DBNHero = () => {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, rgba(0,164,149,0.9) 0%, rgba(130,30,107,0.95) 100%)`,
        color: "#fff",
        paddingTop: 40,
        paddingBottom: 40,
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
              <Badge pill bg="light" className="text-dark px-3 py-2">
                Partnership with Development Bank of Nigeria
              </Badge>
            </div>
            <h3
              className="fw-bold mb-4"
              style={{ fontSize: "1.8rem", lineHeight: "1.2" }}
            >
              DBN Entrepreneurship Training Programme 2026
            </h3>
            <p style={{ marginBottom: 24, lineHeight: "1.8" }}>
              Calling all Entrepreneurs and Business Owners in South West
              Nigeria! Join the Development Bank of Nigeria's flagship training,
              designed to empower MSMEs with skills for growth and funding
              readiness.
            </p>

            {/* Start Date */}
            <div
              className="px-4 py-3 rounded d-inline-block mb-4"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="mb-0 fw-semibold" style={{ fontSize: "0.9rem" }}>
                PROGRAMME STARTS
              </p>
              <h3 className="mb-0 fw-bold" style={{ fontSize: "1.8rem" }}>
                February 2026
              </h3>
            </div>

            {/* Dual CTA */}
            <div className="d-flex flex-column flex-sm-row gap-3 align-items-stretch justify-content-center">
              {/* Entrepreneurs */}
              <div className="text-center">
                <Button
                  href={MSME_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  style={{
                    backgroundColor: "#fff",
                    color: PRIMARY_PURPLE,
                    border: "none",
                    padding: "12px 28px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    display: "block",
                    width: "100%",
                  }}
                >
                  Apply Now →
                </Button>
                <p className="mt-2 mb-0" style={{ fontSize: "0.78rem", opacity: 0.75 }}>
                  For entrepreneurs &amp; MSMEs
                </p>
              </div>

              {/* Students & Corps Members */}
              <div className="text-center">
                <Button
                  href={STUDENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "2px solid rgba(255,255,255,0.8)",
                    padding: "10px 28px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    display: "block",
                    width: "100%",
                  }}
                >
                  Apply Now →
                </Button>
                <p className="mt-2 mb-0" style={{ fontSize: "0.78rem", opacity: 0.75 }}>
                  For students &amp; corp members
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ── About ─────────────────────────────────────────────────────────────────────
const DBNAbout = () => {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h3 className="fw-bold mb-3" style={{ color: PRIMARY_PURPLE }}>
                About the Programme
              </h3>
              <p className="text-muted">
                Strengthening MSMEs for sustainable growth and financial readiness
              </p>
            </div>
            <div>
              <p style={{ lineHeight: "1.9", color: "#4a5568" }}>
                The{" "}
                <strong>DBN Entrepreneurship Training Programme (ETP)</strong>{" "}
                is designed to strengthen Micro, Small, and Medium Enterprises
                (MSMEs) by equipping them with practical knowledge, essential
                tools, and strategic support to improve financial readiness,
                sustainability, and long-term growth.
              </p>
              <p style={{ lineHeight: "1.9", color: "#4a5568" }}>
                The programme enhances participants' ability to access finance
                through Participating Financial Institutions (PFIs) while
                building their legal, operational, and strategic capacity.
              </p>
              <p className="fw-semibold" style={{ color: PRIMARY_PURPLE }}>
                Overall, the programme aligns with the Development Bank of
                Nigeria's (DBN) broader mandate to promote MSME growth,
                formalisation, and improved access to finance across Nigeria.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ── Programme Highlights ──────────────────────────────────────────────────────
const DBNProgramHighlights = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Comprehensive Training",
      description:
        "Access a robust online LMS with tailored courses on business planning, finance, marketing & more",
      color: PRIMARY_TEAL,
    },
    {
      icon: "💼",
      title: "Practical Training",
      description:
        "Hands-on workshops in Ondo and Lagos States with expert facilitators",
      color: "#FF6B35",
    },
    {
      icon: "📜",
      title: "Certification",
      description:
        "Receive official certification upon successful programme completion",
      color: PRIMARY_PURPLE,
    },
    {
      icon: "🤝",
      title: "PFI Access",
      description:
        "Enhanced connections to Participating Financial Institutions for funding opportunities",
      color: "#00a495",
    },
  ];

  return (
    <section
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3" style={{ color: PRIMARY_PURPLE }}>
            Programme Highlights
          </h3>
          <p className="text-muted">What makes this programme unique</p>
        </div>

        <Row className="g-4">
          {highlights.map((item, index) => (
            <Col key={index} md={6}>
              <Card
                className="h-100 border-0 shadow-sm p-4"
                style={{ borderLeft: `5px solid ${item.color}` }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: item.color,
                      borderRadius: "12px",
                      fontSize: "1.8rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ── Who Should Join ───────────────────────────────────────────────── */}
        <Row className="justify-content-center mt-5 pt-5">
          <Col lg={9}>
            <Card
              className="border-0 shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY_TEAL} 0%, ${PRIMARY_PURPLE} 100%)`,
                color: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Card.Body className="py-5 px-3">
                <h3 className="fw-bold mb-3 text-center">Who Should Join?</h3>
                <p className="mb-0 text-center">
                  <strong>
                    MSMEs, startups and operators across all sectors
                  </strong>{" "}
                  in Ondo and Lagos States looking to strengthen their business
                  foundations and improve access to finance.
                </p>

                <hr
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    margin: "28px 0",
                  }}
                />

                <p
                  className="text-center mb-4"
                  style={{ fontSize: "0.88rem", opacity: 0.85 }}
                >
                  This programme is open to all. Select what describes you to apply:
                </p>

                <Row className="g-3 justify-content-center">
                  {/* Entrepreneurs / MSMEs*/}
                  <Col xs={12} sm={6} md={5}>
                    <div
                      className="h-100 d-flex flex-column justify-content-between p-3 rounded-3"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <div className="mb-3">
                        <p className="fw-bold mb-1" style={{ fontSize: "0.95rem" }}>
                          💼 Entrepreneurs &amp; MSMEs
                        </p>
                        <p
                          style={{
                            fontSize: "0.83rem",
                            opacity: 0.88,
                            lineHeight: 1.5,
                            marginBottom: 0,
                          }}
                        >
                          Business owners and operators running an existing
                          enterprise or startup
                        </p>
                      </div>
                      <a
                        href={MSME_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          textAlign: "center",
                          backgroundColor: "rgba(255,255,255,0.95)",
                          color: PRIMARY_PURPLE,
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          padding: "9px 16px",
                          borderRadius: "7px",
                          textDecoration: "none",
                        }}
                      >
                        Apply Now →
                      </a>
                    </div>
                  </Col>

                  {/* Students & Corps Members */}
                  <Col xs={12} sm={6} md={5}>
                    <div
                      className="h-100 d-flex flex-column justify-content-between p-3 rounded-3"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <div className="mb-3">
                        <p className="fw-bold mb-1" style={{ fontSize: "0.95rem" }}>
                          🎓 Students &amp; Corp Members
                        </p>
                        <p
                          style={{
                            fontSize: "0.83rem",
                            opacity: 0.88,
                            lineHeight: 1.5,
                            marginBottom: 0,
                          }}
                        >
                          Nigerian university, polytechnic, college of education
                          students, or serving corps members with a business or
                          interest in entrepreneurship
                        </p>
                      </div>
                      <a
                        href={STUDENT_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          textAlign: "center",
                          backgroundColor: "transparent",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          padding: "7px 16px",
                          borderRadius: "7px",
                          border: "2px solid rgba(255,255,255,0.85)",
                          textDecoration: "none",
                        }}
                      >
                        Apply Now →
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ── What You'll Gain ──────────────────────────────────────────────────────────
const DBNWhatYouGain = () => {
  const benefits = [
    "Practical knowledge in business planning and financial management",
    "Enhanced legal and regulatory compliance understanding",
    "Improved financial readiness for accessing institutional funding",
    "Networking with fellow entrepreneurs and industry experts",
    "Access to DBN's network of Participating Financial Institutions",
    "Opportunity to participate in pitch competition for funding",
  ];

  return (
    <section style={{ paddingTop: 40, paddingBottom: 40, background: "#fff" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h3 className="fw-bold mb-3" style={{ color: PRIMARY_PURPLE }}>
                What You'll Gain
              </h3>
              <p className="text-muted">
                Transform your business with comprehensive support
              </p>
            </div>
            <Row className="g-3">
              {benefits.map((benefit, index) => (
                <Col key={index} md={6}>
                  <div
                    className="d-flex align-items-center gap-3 p-3 rounded"
                    style={{ background: "#f7f2f7" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: PRIMARY_TEAL,
                        borderRadius: "50%",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </div>
                    <p className="mb-0 fw-semibold text-black">{benefit}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ── Pitch Competition ─────────────────────────────────────────────────────────
const DBNPitchCompetition = () => {
  return (
    <section
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: `linear-gradient(135deg, rgba(0,164,149,0.05) 0%, rgba(130,30,107,0.05) 100%)`,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card
              className="border-0 shadow-lg overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              <div
                style={{
                  height: "8px",
                  background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${PRIMARY_PURPLE})`,
                }}
              />
              <Card.Body className="p-5">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h3 className="fw-bold mb-3" style={{ color: PRIMARY_PURPLE }}>
                      🏆 Pitch Competition Opportunity
                    </h3>
                    <p
                      className="mb-3 text-black"
                      style={{ lineHeight: "1.8" }}
                    >
                      As part of the programme, a structured{" "}
                      <strong>pitch competition</strong> will be organised to
                      showcase and reward high-performing MSMEs.
                    </p>
                    <div
                      className="p-3 rounded mb-3"
                      style={{ background: "rgba(0,164,149,0.1)" }}
                    >
                      <p className="mb-0 fw-semibold">
                        💰 Prize Pool:{" "}
                        <span
                          style={{ color: PRIMARY_TEAL, fontSize: "1.5rem" }}
                        >
                          Up to ₦100,000,000
                        </span>
                      </p>
                    </div>
                    <p className="text-muted mb-0">
                      Winners gain visibility, funding, and growth opportunities
                      to scale their businesses.
                    </p>
                  </Col>
                  <Col md={4} className="text-center d-none d-md-block">
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        background: `linear-gradient(135deg, ${PRIMARY_TEAL}, ${PRIMARY_PURPLE})`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                        margin: "0 auto",
                      }}
                    >
                      🏆
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ── CTA ───────────────────────────────────────────────────────────────────────
const DBNCTA = () => {
  return (
    <section
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        background: `linear-gradient(135deg, ${PRIMARY_TEAL} 0%, ${PRIMARY_PURPLE} 100%)`,
        color: "#fff",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h3 className="fw-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              Join MSMEs across Ondo and Lagos States in building financial
              readiness, operational capacity, and sustainable growth pathways.
            </p>
            <div className="mb-5">
              <p className="mb-0 fw-semibold" style={{ opacity: 0.95 }}>
                Programme starts: <strong>February 2026</strong>
              </p>
            </div>

            {/* Dual CTA cards — always side by side */}
            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center align-items-sm-stretch">
              <div
                className="p-4 rounded-3 text-start flex-fill"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  maxWidth: "320px",
                  width: "100%",
                }}
              >
                <p
                  className="mb-1 fw-semibold text-uppercase"
                  style={{
                    fontSize: "0.72rem",
                    opacity: 0.8,
                    letterSpacing: "0.08em",
                  }}
                >
                  Entrepreneurs &amp; MSME<span style={{ textTransform: "lowercase", fontWeight: "normal", fontSize: "0.7rem"}}>s</span>
                </p>
                <p
                  className="mb-3"
                  style={{ fontSize: "0.85rem", opacity: 0.9 }}
                >
                  Business owners &amp; operators in Ondo and Lagos States
                </p>
                <Button
                  href={MSME_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#fff",
                    color: PRIMARY_PURPLE,
                    border: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    borderRadius: "8px",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  Reserve Your Spot →
                </Button>
              </div>

              <div
                className="p-4 rounded-3 text-start flex-fill"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  maxWidth: "320px",
                  width: "100%",
                }}
              >
                <p
                  className="mb-1 fw-semibold text-uppercase"
                  style={{
                    fontSize: "0.72rem",
                    opacity: 0.8,
                    letterSpacing: "0.08em",
                  }}
                >
                  Students &amp; Corp Members
                </p>
                <p
                  className="mb-3"
                  style={{ fontSize: "0.85rem", opacity: 0.9 }}
                >
                  University, polytechnic students &amp; serving corps members
                </p>
                <Button
                  href={STUDENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "2px solid rgba(255,255,255,0.9)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    borderRadius: "8px",
                    width: "100%",
                    padding: "8px 10px",
                  }}
                >
                  Reserve Your Spot →
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DBN;