// import React from "react";
// import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
// import { HomepageNav } from "../../../components/Navbar";

// const ESP = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#f2e9ee",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Navbar */}
//       <HomepageNav />

//       {/* Hero Section */}
//       <section className="py-5 text-center bg-white">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={8}>
//               <h1
//                 className="display-6 fw-bold mb-3"
//                 style={{ color: "#8B005D" }}
//               >
//                 Ready to Land Your Dream Tech Job?
//               </h1>
//               <p className="fs-6 mb-4 text-muted">
//                 Join Lagos State’s Fully Funded Tech Training Program — No Cost,
//                 Expert-Led, Career-Focused.
//               </p>
//               <Button
//                 variant="primary"
//                 size="md"
//                 className="px-4 py-2 fw-bold"
//                 style={{
//                   backgroundColor: "#8B005D",
//                   borderColor: "#8B005D",
//                   color: "white",
//                   borderRadius: "8px",
//                   fontSize: "1rem",
//                 }}
//                 href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Apply Now →
//               </Button>
//               <p className="mt-3 text-muted small">
//                 Limited slots available. Lagos residents aged 18–35 only.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* What You’ll Get */}
//       <section className="py-5" style={{ backgroundColor: "#f2e9ee" }}>
//         <Container>
//           <h2 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>
//             What You’ll Get
//           </h2>
//           <Row className="g-4 justify-content-center">
//             <Col md={4} className="mb-4">
//               <Card
//                 className="border-0 shadow-sm h-100"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 <Card.Body className="text-center p-4">
//                   <div className="mb-3">
//                     <i
//                       className="bi bi-clock fs-2"
//                       style={{ color: "#8B005D" }}
//                     ></i>
//                   </div>
//                   <h5 className="fw-bold">4 Weeks Intensive Training</h5>
//                   <p className="text-muted small">
//                     Hands-on learning in high-demand tech skills.
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card
//                 className="border-0 shadow-sm h-100"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 <Card.Body className="text-center p-4">
//                   <div className="mb-3">
//                     <i
//                       className="bi bi-person-check fs-2"
//                       style={{ color: "#8B005D" }}
//                     ></i>
//                   </div>
//                   <h5 className="fw-bold">Career Mentorship</h5>
//                   <p className="text-muted small">
//                     Guidance and support to land internships or jobs.
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card
//                 className="border-0 shadow-sm h-100"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 <Card.Body className="text-center p-4">
//                   <div className="mb-3">
//                     <i
//                       className="bi bi-geo-alt fs-2"
//                       style={{ color: "#8B005D" }}
//                     ></i>
//                   </div>
//                   <h5 className="fw-bold">In-Person</h5>
//                   <p className="text-muted small">
//                     8thGear Hub, 41 CMD Road, Magodo, Lagos
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Courses Offered */}
//       <section className="py-5 bg-white">
//         <Container>
//           <Row className="align-items-center">
//             <Col lg={5} className="mb-4 mb-lg-0">
//               <img
//                 src="https://via.placeholder.com/400x300?text=Training+Image"
//                 alt="Training in session"
//                 className="img-fluid rounded-3 shadow"
//                 style={{ borderRadius: "1rem" }}
//               />
//             </Col>
//             <Col lg={7}>
//               <h2 className="fw-bold mb-4" style={{ color: "#333" }}>
//                 Courses Offered
//               </h2>
//               <ul className="list-unstyled mb-0">
//                 <li className="d-flex align-items-center mb-2">
//                   <i
//                     className="bi bi-check-circle-fill me-2"
//                     style={{ color: "#28a745" }}
//                   ></i>
//                   Digital Marketing
//                 </li>
//                 <li className="d-flex align-items-center mb-2">
//                   <i
//                     className="bi bi-check-circle-fill me-2"
//                     style={{ color: "#28a745" }}
//                   ></i>
//                   Data Analytics
//                 </li>
//                 <li className="d-flex align-items-center mb-2">
//                   <i
//                     className="bi bi-check-circle-fill me-2"
//                     style={{ color: "#28a745" }}
//                   ></i>
//                   Web Design & Development
//                 </li>
//                 <li className="d-flex align-items-center mb-2">
//                   <i
//                     className="bi bi-check-circle-fill me-2"
//                     style={{ color: "#28a745" }}
//                   ></i>
//                   Content Creation
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Eligibility Alert */}
//       <section className="py-5" style={{ backgroundColor: "#f2e9ee" }}>
//         <Container>
//           <Alert
//             variant="warning"
//             className="text-center p-4 border-0 rounded-3"
//             style={{ backgroundColor: "#fff3cd" }}
//           >
//             <h5 className="fw-bold mb-2">Who Can Apply?</h5>
//             <p className="mb-0">
//               📍 Must be a Lagos resident aged 18–35
//               <br />
//               🆔 Must have LASSRA ID
//               <br />
//               🏠 Must live near training center
//             </p>
//           </Alert>
//         </Container>
//       </section>

//       {/* Final CTA */}
//       <section className="py-5 text-center bg-white">
//         <Container>
//           <h2 className="fw-bold mb-3">Don’t Miss This Opportunity</h2>
//           <Button
//             variant="primary"
//             size="md"
//             className="px-4 py-2 fw-bold"
//             style={{
//               backgroundColor: "#8B005D",
//               borderColor: "#8B005D",
//               color: "white",
//               borderRadius: "8px",
//               fontSize: "1rem",
//             }}
//             href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Secure Your Spot Now →
//           </Button>
//           <p className="mt-3 text-muted small">
//             Deadline approaching — Apply today!
//           </p>
//         </Container>
//       </section>

//       {/* Footer */}
//       <footer
//         style={{
//           backgroundColor: "#f2e9ee",
//           padding: "2rem 0",
//           marginTop: "auto",
//           borderTop: "1px solid #e0d5dc",
//         }}
//       >
//         <Container className="text-center text-muted">
//           <p className="mb-2">
//             <strong>Executed by:</strong> 8thGear Hub | Supported by LSETF, GIZ,
//             and Swiss Agency
//           </p>
//         </Container>
//       </footer>

//       {/* Bootstrap Icons CDN */}
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.js"></script>
//     </div>
//   );
// };

// export default ESP;

import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";

const ESP = () => {
  return (
    <div
      style={{
        backgroundColor: "#fafafa", // Neutral, clean background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <HomepageNav />

      {/* Hero Section — Fixed: Added background tint + border for separation */}
      <section
        className="py-5 text-center"
        style={{
          backgroundColor: "#f8f2f8", // Soft lavender to match brand
          borderBottom: "1px solid #e0d5dc",
          position: "relative",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1
                className="display-6 fw-bold mb-3"
                style={{ color: "#8B005D" }}
              >
                Ready to Land Your Dream Tech Job?
              </h1>
              <p className="fs-6 mb-4 text-muted">
                Join Lagos State’s Fully Funded Tech Training Program — No Cost,
                Expert-Led, Career-Focused.
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
                  href="https://forms.gle/fugPZxhZixdWmHcA9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now →
                </Button>
                <Button
                  variant="outline-primary"
                  size="md"
                  className="px-4 py-2 fw-bold"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#8B005D",
                    color: "#8B005D",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl?mode=ems_wa_t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Updates →
                </Button>
              </div>
              <p className="mt-3 text-muted small">
                Limited slots available. Lagos residents aged 18–35 only.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What You’ll Get */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>
            What You’ll Get
          </h2>
          <Row className="g-4 justify-content-center">
            <Col md={4} className="mb-4">
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i
                      className="bi bi-clock fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">4 Weeks Intensive Training</h5>
                  <p className="text-muted small">
                    Hands-on learning in high-demand tech skills.
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
                      className="bi bi-person-check fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">Career Mentorship</h5>
                  <p className="text-muted small">
                    Guidance and support to land internships or jobs.
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
                      className="bi bi-geo-alt fs-2"
                      style={{ color: "#8B005D" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">In-Person</h5>
                  <p className="text-muted small">
                    8thGear Hub, 41 CMD Road, Magodo, Lagos
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Offered */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <img
                src="https://via.placeholder.com/400x300?text=Training+Image"
                alt="Training in session"
                className="img-fluid rounded-3 shadow"
                style={{ borderRadius: "1rem" }}
              />
            </Col>
            <Col lg={7}>
              <h2 className="fw-bold mb-4" style={{ color: "#333" }}>
                Courses Offered
              </h2>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ color: "#28a745" }}
                  ></i>
                  Digital Marketing
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ color: "#28a745" }}
                  ></i>
                  Data Analytics
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ color: "#28a745" }}
                  ></i>
                  Web Design & Development
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ color: "#28a745" }}
                  ></i>
                  Content Creation
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Alert — Fixed: Replaced with warm, readable alert with icons */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <Alert
            variant="warning"
            className="text-center p-4 border-0 rounded-3 shadow-sm"
            style={{
              backgroundColor: "#fff8e1",
              borderColor: "#ffe0b2",
              color: "#856404",
            }}
          >
            <h5 className="fw-bold mb-3">Who Can Apply?</h5>
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-geo-alt me-2"
                  style={{ color: "#856404" }}
                ></i>
                <span>Must be a Lagos resident aged 18–35</span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-card-list me-2"
                  style={{ color: "#856404" }}
                ></i>
                <span>Must have LASSRA ID</span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-house me-2"
                  style={{ color: "#856404" }}
                ></i>
                <span>Must live near training center</span>
              </div>
            </div>
          </Alert>
        </Container>
      </section>

      {/* Final CTA — Fixed: Split into two clear actions */}
      <section className="py-5 text-center bg-white">
        <Container>
          <h2 className="fw-bold mb-3">Don’t Miss This Opportunity</h2>
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
              href="https://forms.gle/fugPZxhZixdWmHcA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure Your Spot Now →
            </Button>
            <Button
              variant="outline-primary"
              size="md"
              className="px-4 py-2 fw-bold"
              style={{
                backgroundColor: "transparent",
                borderColor: "#8B005D",
                color: "#8B005D",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
              href="https://chat.whatsapp.com/Kz1Kd2T0bkE5Kzo8hyVHQl?mode=ems_wa_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Group →
            </Button>
          </div>
          <p className="mt-3 text-muted small">
            Deadline approaching — Apply today!
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#fafafa",
          padding: "2rem 0",
          marginTop: "auto",
          borderTop: "1px solid #e0d5dc",
        }}
      >
        <Container className="text-center text-muted">
          <p className="mb-2">
            <strong>Executed by:</strong> 8thGear Hub | Supported by LSETF, GIZ,
            and Swiss Agency
          </p>
        </Container>
      </footer>

      {/* Bootstrap Icons CDN */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.js"></script>
    </div>
  );
};

export default ESP;
