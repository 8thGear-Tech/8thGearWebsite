import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,

} from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";

const PRIMARY_TEAL = "#00a495";
const PRIMARY_PURPLE = "#821e6b";

const DBN = () => {
  return (
    <div>
      <HomepageNav />

      {/* Hero Section */}

      <section
        aria-label="Hero"
        style={{
          background: `linear-gradient(135deg, rgba(0,164,149,0.55) 0%, rgba(130,30,107,0.9) 100%)`,
          color: "#fff",
          paddingTop: 48,
          paddingBottom: 48,
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={7}>
              <h2 style={{ marginBottom: 12 }}>
                DBN Entrepreneurship Training Programme 2025 x 8thGear Hub
              </h2>
              <p style={{ fontSize: 18, marginBottom: 18 }}>
                Calling all Entrepreneurs and Business Owners in South West
                Nigeria! Join the Development Bank of Nigeria's flagship
                training, designed to empower MSMEs with skills for growth and
                funding readiness.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeV92nsSXNKZ0hsvZk2rxdFR8FV_5IaM-E9MvbPjwFRr4zhWQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: PRIMARY_PURPLE,
                    border: "none",
                    padding: "10px 22px",
                    fontWeight: 700,
                  }}
                  aria-label="Apply for DBN Growth Program"
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        aria-label="Programme Highlights"
        style={{ background: "#f9f9f9", paddingTop: 48, paddingBottom: 48 }}
      >
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ gap: "24px" }}
          >
            <Col md={6} xs={12}>
              <Card
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
                  color: "#333",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 12,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  marginBottom: 24,
                }}
                aria-labelledby="highlights-heading"
              >
                <div
                  style={{
                    height: 6,
                    background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${PRIMARY_PURPLE})`,
                    width: "100%",
                  }}
                />

                <Card.Body style={{ padding: "18px 20px 20px 20px" }}>
                  <h3 id="highlights-heading" style={{ marginBottom: 12 }}>
                    Programme Highlights
                  </h3>

                  <ListGroup variant="flush" as="ul">
                    {[
                      "Get access to grants of up to ₦5 Million",
                      "Access a robust online LMS with tailored courses on business planning, finance, marketing & more",
                      "Certification upon completion",
                      "Learn at your own pace, anytime, anywhere",
                    ].map((text, i) => (
                      <ListGroup.Item
                        as="li"
                        key={i}
                        style={{
                          background: "transparent",
                          color: "#333",
                          paddingLeft: 0,
                          paddingTop: 10,
                          paddingBottom: 10,
                          borderBottom:
                            i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <div
                            aria-hidden
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: 12,
                              background: PRIMARY_TEAL,
                              flex: "0 0 auto",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                            }}
                          />
                          <div style={{ flex: 1 }}>{text}</div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} xs={12}>
              {/* Who Should Join Card - Updated Styles */}
              <div
                role="note"
                aria-label="Who should join"
                style={{
                  backgroundColor: "#fff", // Changed background to white
                  color: "#333", // Changed text color to a dark grey for readability
                  padding: "18px",
                  borderRadius: 12,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  marginBottom: 16,
                  // Added a top gradient line for consistency with the other card
                  borderTop: `6px solid ${PRIMARY_TEAL}`,
                  overflow: "hidden", // To ensure the border-radius applies nicely with the borderTop
                }}
              >
                <h4 style={{ marginBottom: 12, fontWeight: 700 }}>
                  Who Should Join?
                </h4>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  MSME owners, startups and operators across all sectors
                </p>
              </div>

              {/* Reserve Your Spot Button */}
              <div style={{ textAlign: "center" }}>
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeV92nsSXNKZ0hsvZk2rxdFR8FV_5IaM-E9MvbPjwFRr4zhWQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: PRIMARY_PURPLE,
                    border: "none",
                    padding: "12px 28px",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                  aria-label="Reserve your spot"
                >
                  Reserve Your Spot
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DBN;
