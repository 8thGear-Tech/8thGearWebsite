// meristem-lagos-green

import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";

import meristemLogo from "../../../assets/images/projectdelivery/meristem/meristem.png";

const PRIMARY_PURPLE = "#6E006A";
const SECONDARY_PURPLE = "#9B1B96";
const MERISTEM_GREEN = "#3D7C5E";
const MERISTEM_YELLOW = "#F4A460";

const MeristemGreenLagos = () => {
  return (
    <div>
      <HomepageNav />
      <MeristemHero />
      {/* <MeristemHeroo /> */}
      <MeristemJourney />
      <MeristemDeliverables />
      <MeristemImpact />
    </div>
  );
};

// const MeristemHero = () => {
//   return (
//     <div 
//       className="position-relative overflow-hidden"
//       style={{ 
//         background: `linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${MERISTEM_GREEN} 100%)`,
//         minHeight: "85vh",
//         display: "flex",
//         alignItems: "center"
//       }} 
//       id="meristem-green-lagos"
//     >
//       {/* Decorative elements */}
//       <div
//         className="position-absolute"
//         style={{
//           width: "500px",
//           height: "500px",
//           background: "rgba(255, 255, 255, 0.03)",
//           borderRadius: "50%",
//           top: "-100px",
//           right: "-100px",
//         }}
//       ></div>
//       <div
//         className="position-absolute"
//         style={{
//           width: "300px",
//           height: "300px",
//           background: "rgba(244, 164, 96, 0.1)",
//           borderRadius: "50%",
//           bottom: "-50px",
//           left: "-50px",
//         }}
//       ></div>

//       <Container>
//         <Row className="align-items-center">
//           <Col lg={7}>
//            <Badge 
//               className="mb-4" 
//               style={{ 
//                 backgroundColor: MERISTEM_GREEN,
//                 color: "#fff",
//                 fontSize: "0.95rem",
//                 padding: "10px 20px",
//                 fontWeight: "600"
//               }}
//             >
//               Phase 1 Accelerator Program
//             </Badge>
            
//             <h1 className="display-3 fw-bold text-white mb-4">
//               More Lagos Green
//             </h1>

//             <p className="lead text-white mb-5" style={{ fontSize: "1.3rem", lineHeight: "1.6", maxWidth: "600px" }}>
//               Transforming 30 entrepreneurs into investment-ready founders through milestone-driven acceleration.
//             </p>

//           </Col>

//           <Col lg={5}>
//             <div className="position-relative mt-5 mt-lg-0">
//               <div
//                 className="p-4 rounded-4"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.95)",
//                   backdropFilter: "blur(20px)",
//                   boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
//                 }}
//               >
//                 <img
//                   src={meristemLogo}
//                   className="img-fluid"
//                   alt="More Lagos Green"
//                   style={{ maxWidth: "100%", height: "auto" }}
//                 />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };
const MeristemHero = () => {
  return (
    <section
      id="meristem-green-lagos"
      className="position-relative"
      style={{
        background: `
          radial-gradient(circle at top right, rgba(255,255,255,0.05) 0%, transparent 40%),
          radial-gradient(circle at bottom left, rgba(61,124,94,0.15) 0%, transparent 40%),
          linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${MERISTEM_GREEN} 100%)
        `,
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "25px",   // space from fixed navbar
        paddingBottom: "25px" // space before next section
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col lg={7}>
            <Badge
              className="mb-4"
              bg=""  
              style={{
                backgroundColor: MERISTEM_GREEN,
                color: "#fff",
                fontSize: "0.9rem",
                padding: "15px 20px",
                fontWeight: "600",
                border: "none"
              }}
            >
              Accelerator Program
            </Badge>

            <h1
              className="fw-bold text-white mb-4"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: "1.2"
              }}
            >
              More Lagos Green
            </h1>

            <p
              className="text-white mb-5"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: "1.7",
                maxWidth: "600px",
                opacity: 0.95
              }}
            >
              Transforming 30 entrepreneurs into investment-ready founders through milestone-driven acceleration.
            </p>
          </Col>

          {/* Right Logo Card */}
          <Col lg={5}>
            <div
              className="p-4 p-md-5 rounded-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25)"
              }}
            >
              <img
                src={meristemLogo}
                alt="More Lagos Green"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const MeristemJourney = () => {
  const journey = [
    {
      phase: "Select",
      icon: "🎯",
      description: "30 entrepreneurs chosen through rigorous screening",
      color: PRIMARY_PURPLE
    },
    {
      phase: "Build",
      icon: "🛠️",
      description: "8 virtual sessions + 2 physical touchpoints for intensive development",
      color: MERISTEM_GREEN
    },
    {
      phase: "Validate",
      icon: "✅",
      description: "Business models, plans, and pitch decks tested and refined",
      color: MERISTEM_YELLOW
    },
    {
      phase: "Invest",
      icon: "💰",
      description: "Top 13 businesses advance to More by Meristem investment",
      color: SECONDARY_PURPLE
    }
  ];

  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, background: "#fff" }}>
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3">
            The Journey
          </h3>
          <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
            A structured pathway from selection to investment readiness
          </p>
        </div>

        <div className="position-relative">
          {/* Connection line */}
          <div 
            className="d-none d-lg-block position-absolute"
            style={{
              top: "80px",
              left: "12%",
              right: "12%",
              height: "3px",
              background: `linear-gradient(90deg, ${PRIMARY_PURPLE}, ${MERISTEM_GREEN}, ${MERISTEM_YELLOW}, ${SECONDARY_PURPLE})`,
              zIndex: 0
            }}
          ></div>

          <Row className="position-relative" style={{ zIndex: 1 }}>
            {journey.map((step, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <div className="text-center">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: "#fff",
                      border: `4px solid ${step.color}`,
                      borderRadius: "50%",
                      fontSize: "3rem",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    {step.icon}
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: step.color }}>
                    {step.phase}
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

const MeristemDeliverables = () => {
  return (
    <section 
      style={{ 
        paddingTop: 100, 
        paddingBottom: 100,
        background: `linear-gradient(135deg, #f8f4f8 0%, #f0f8f4 100%)`
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4" >
              What Participants Achieve
            </h2>
            <p className="mb-4" style={{ lineHeight: "1.8", color: "#4a5568" }}>
              Every entrepreneur completes the program with tangible, investor-ready outputs 
              developed through expert guidance and peer collaboration.
            </p>

            {/* Stats Grid */}
            <Row className="g-3">
              <Col xs={6}>
                <Card 
                  className="border-0 p-3 text-center h-100"
                  style={{ 
                    background: PRIMARY_PURPLE,
                    color: "#fff"
                  }}
                >
                  <h3 className="fw-bold mb-1">100%</h3>
                  <p className="mb-0" style={{ fontSize: "0.85rem" }}>Completion Rate</p>
                </Card>
              </Col>
              <Col xs={6}>
                <Card 
                  className="border-0 p-3 text-center h-100"
                  style={{ 
                    background: MERISTEM_GREEN,
                    color: "#fff"
                  }}
                >
                  <h3 className="fw-bold mb-1">56.5%</h3>
                  <p className="mb-0" style={{ fontSize: "0.85rem" }}>Investment Track</p>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={7}>
            <Row className="g-4">
              <Col md={6}>
                <Card 
                  className="border-0 shadow-sm p-4 h-100"
                  style={{ 
                    borderTop: `5px solid ${PRIMARY_PURPLE}`,
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div 
                    className="mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `${PRIMARY_PURPLE}15`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem"
                    }}
                  >
                    📋
                  </div>
                  <h5 className="fw-bold mb-2">Business Model Canvas</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Validated framework with clear value proposition and revenue streams
                  </p>
                </Card>
              </Col>

              <Col md={6}>
                <Card 
                  className="border-0 shadow-sm p-4 h-100"
                  style={{ 
                    borderTop: `5px solid ${MERISTEM_GREEN}`,
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div 
                    className="mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `${MERISTEM_GREEN}15`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem"
                    }}
                  >
                    📊
                  </div>
                  <h5 className="fw-bold mb-2">Complete Business Plan</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Market analysis, financials, and operational roadmap
                  </p>
                </Card>
              </Col>

              <Col md={6}>
                <Card 
                  className="border-0 shadow-sm p-4 h-100"
                  style={{ 
                    borderTop: `5px solid ${MERISTEM_YELLOW}`,
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div 
                    className="mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `${MERISTEM_YELLOW}15`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem"
                    }}
                  >
                    🎤
                  </div>
                  <h5 className="fw-bold mb-2">Investor Pitch Deck</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Professional presentation ready for funding conversations
                  </p>
                </Card>
              </Col>

              <Col md={6}>
                <Card 
                  className="border-0 shadow-sm p-4 h-100"
                  style={{ 
                    borderTop: `5px solid ${SECONDARY_PURPLE}`,
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div 
                    className="mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: `${SECONDARY_PURPLE}15`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem"
                    }}
                  >
                    🤝
                  </div>
                  <h5 className="fw-bold mb-2">Network Access</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Connections with mentors, investors, and peer entrepreneurs
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const MeristemImpact = () => {
  return (
    <section
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: `linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${MERISTEM_GREEN} 100%)`,
        color: "#fff",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h3 className="fw-bold mb-4">
                Building Investment-Ready Businesses
              </h3>
              <p style={{ lineHeight: "1.8", opacity: 0.95, maxWidth: "800px", margin: "0 auto" }}>
                More Lagos Green represents the partnership between 8thGear and More by Meristem 
                to nurture Nigeria's next generation of successful entrepreneurs through structured 
                acceleration and direct investment pathways.
              </p>
            </div>

            <Row className="g-4 mt-5">
              <Col md={4}>
                <div className="text-center p-4">
                  <div 
                    className="mx-auto mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem"
                    }}
                  >
                    🚀
                  </div>
                  <h5 className="fw-bold mb-2">Accelerated Growth</h5>
                  <p className="mb-0" style={{ opacity: 0.9, fontSize: "0.95rem" }}>
                    30-week intensive program compressing years of learning
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center p-4">
                  <div 
                    className="mx-auto mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem"
                    }}
                  >
                    🎓
                  </div>
                  <h5 className="fw-bold mb-2">Expert Guidance</h5>
                  <p className="mb-0" style={{ opacity: 0.9, fontSize: "0.95rem" }}>
                    Mentorship from successful founders and industry leaders
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center p-4">
                  <div 
                    className="mx-auto mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem"
                    }}
                  >
                    💎
                  </div>
                  <h5 className="fw-bold mb-2">Investment Pipeline</h5>
                  <p className="mb-0" style={{ opacity: 0.9, fontSize: "0.95rem" }}>
                    Direct access to More by Meristem funding opportunities
                  </p>
                </div>
              </Col>
            </Row>

            {/* <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <p className="mb-0" style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                For inquiries about future programs: <a href="mailto:info@8thgearpartners.com" style={{ color: "#fff", textDecoration: "underline", fontWeight: "600" }}>info@8thgearpartners.com</a>
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MeristemGreenLagos;