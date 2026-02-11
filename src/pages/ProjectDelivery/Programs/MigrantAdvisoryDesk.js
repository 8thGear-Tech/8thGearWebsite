// import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
// import { HomepageNav } from "../../../components/Navbar"; 

// import migrationadvisorydesk from "../../../assets/images/talentplacement/migrationadvisorydesk.jpg";

// const PRIMARY_PURPLE = "#6E006A";
// const SECONDARY_PURPLE = "#9B1B96";

// const MigrantAdvisoryDesk = () => {
//   return (
//     <div>
//       <HomepageNav />
//       <MADHero />
//       <MADAbout />
//       <MADServices />
//       <MADWhoWeServe />
//       <MADPartners />
//       <MADHowItWorks />
//       <MADCTA />
//     </div>
//   );
// };

// const MADHero = () => {
//   return (
//  <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, rgba(130, 30, 107, 0.05) 0%, rgba(130, 30, 107, 0.15) 100%)" }} id="migrant-advisory-desk">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Text Content */}
//           <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
//             <div className="pe-lg-4">
//                 <h2 className="fw-bold mb-3" >
//                 Migrant Advisory Desk
//               </h2>

//               <h5 className="mb-4">
//                 Verified Guidance for Safe, Successful Migration
//               </h5>

//               {/* <p className="mb-4">
//                 Get trusted migration support backed by our GIZ partnership. MAD provides verified guidance and practical employability training, ensuring you are globally job-ready, not just travel-ready.
//               </p> */}

//               <div className="row g-3 mb-4">
//                 <div className="col-md-6">
//                   <div className="d-flex align-items-start">
//                     <div
//                       className="me-3 mt-1"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         background: "#821E6B",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0
//                       }}
//                     >
//                       <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
//                     </div>
//                     <div>
//                       <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Expert Support</h6>
//                       <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
//                         Backed by GIZ partnership
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="d-flex align-items-start">
//                     <div
//                       className="me-3 mt-1"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         background: "#821E6B",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0
//                       }}
//                     >
//                       <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
//                     </div>
//                     <div>
//                       <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Safe Migration</h6>
//                       <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
//                         Trusted support throughout
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="d-flex align-items-start">
//                     <div
//                       className="me-3 mt-1"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         background: "#821E6B",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0
//                       }}
//                     >
//                       <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
//                     </div>
//                     <div>
//                       <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Employability Training</h6>
//                       <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
//                         Practical skills development
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="d-flex align-items-start">
//                     <div
//                       className="me-3 mt-1"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         background: "#821E6B",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0
//                       }}
//                     >
//                       <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
//                     </div>
//                     <div>
//                       <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Global Job-Ready</h6>
//                       <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
//                         Not just travel-ready
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">


//                 <Button
//                   className="aboutbtn m-0"
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                   }}
//                   style={{
//                     transition: "all 0.3s ease"
//                   }}
//                 >
//                   <a
//                     href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-decoration-none purple-text"
//                   >
//                     Learn More →
//                   </a>
//                 </Button>
//               </div>

//             </div>
//           </div>

//           {/* Image Content */}
//           <div className="col-lg-6 col-md-12">
//             <div className="position-relative">
//               <div
//                 className="p-4 rounded-3"
//                 style={{
//                   background: "#fff",
//                   boxShadow: "0 10px 40px rgba(130, 30, 107, 0.15)"
//                 }}
//               >
//                 <img
//                   src={migrationadvisorydesk}
//                   className="img-fluid rounded-3"
//                   alt="Migrant Advisory Desk"
//                 />
//               </div>

//               {/* Decorative element */}
//               <div
//                 className="position-absolute"
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   background: "rgba(130, 30, 107, 0.1)",
//                   borderRadius: "50%",
//                   top: "-20px",
//                   right: "-20px",
//                   zIndex: -1
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MADAbout = () => {
//   return (
//     <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col lg={10}>
//             <div className="text-center mb-4">
//               <h3 className="fw-bold">
//                 What is the Migrant Advisory Desk?
//               </h3>
//               <p className="text-muted">
//                 Making informed decisions about skills, livelihoods, and migration
//               </p>
//             </div>

//             <Card className="border-0 shadow-sm mb-5 px-4">
//               <p className="mb-3" style={{ lineHeight: "1.9", color: "#4a5568" }}>
//                 The <strong>Migrant Advisory Desk (m.A.D)</strong> is a structured counselling and 
//                 profiling platform developed by GIZ and implemented by 8thGear to empower young people, 
//                 especially those not in education, employment, or training (NEETs) to make 
//                 informed decisions about skills, livelihoods, and migration.
//               </p>
//               <p className="mb-0" style={{ lineHeight: "1.9", color: "#4a5568" }}>
//                 Using guided interviews and data-driven tools, we assess individual backgrounds, 
//                 interests, and constraints, then link participants to appropriate training, employment, 
//                 or enterprise pathways. For MSMEs, we provide access to trained, job-ready talent while 
//                 reducing uninformed migration and improving long-term economic outcomes for individuals 
//                 and businesses alike.
//               </p>
//             </Card>

//             <Row className="g-4">
//               <Col md={4}>
//                 <Card 
//                   className="h-100 border-0 shadow-sm text-center p-4"
//                   style={{ borderTop: `4px solid ${PRIMARY_PURPLE}` }}
//                 >
//                   <div 
//                     className="mb-3 mx-auto d-flex align-items-center justify-content-center"
//                     style={{
//                       width: "80px",
//                       height: "80px",
//                       background: "rgba(110, 0, 106, 0.1)",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <span style={{ fontSize: "2.5rem" }}>🎯</span>
//                   </div>
//                   <h5 className="fw-bold mb-2">Data-Driven</h5>
//                   <p className="text-muted mb-0">
//                     Guided assessments to understand unique skills and aspirations
//                   </p>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card 
//                   className="h-100 border-0 shadow-sm text-center p-4"
//                   style={{ borderTop: `4px solid ${SECONDARY_PURPLE}` }}
//                 >
//                   <div 
//                     className="mb-3 mx-auto d-flex align-items-center justify-content-center"
//                     style={{
//                       width: "80px",
//                       height: "80px",
//                       background: "rgba(155, 27, 150, 0.1)",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <span style={{ fontSize: "2.5rem" }}>🛣️</span>
//                   </div>
//                   <h5 className="fw-bold mb-2">Clear Pathways</h5>
//                   <p className="text-muted mb-0">
//                     Direct connections to training, jobs, and migration opportunities
//                   </p>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card 
//                   className="h-100 border-0 shadow-sm text-center p-4"
//                   style={{ borderTop: "4px solid #E91E63" }}
//                 >
//                   <div 
//                     className="mb-3 mx-auto d-flex align-items-center justify-content-center"
//                     style={{
//                       width: "80px",
//                       height: "80px",
//                       background: "rgba(233, 30, 99, 0.1)",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <span style={{ fontSize: "2.5rem" }}>✅</span>
//                   </div>
//                   <h5 className="fw-bold mb-2">Informed Decisions</h5>
//                   <p className="text-muted mb-0">
//                     Reduce risks and improve long-term economic outcomes
//                   </p>
//                 </Card>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// const MADServices = () => {
//   const services = [
//     {
//       icon: "🗺️",
//       title: "Migration Counselling",
//       description: "Expert guidance on legal migration pathways, requirements, and risks. Comprehensive support for safe, informed migration decisions.",
//       color: PRIMARY_PURPLE,
//     },
//     {
//       icon: "💼",
//       title: "Career Guidance",
//       description: "Professional career counselling for local jobseekers. Skills assessment and pathway planning for sustainable employment.",
//       color: SECONDARY_PURPLE,
//     },
//     {
//       icon: "🎓",
//       title: "Skills Training",
//       description: "Employability workshops covering CV writing, digital skills, and workplace readiness. Sector-specific training aligned with market demand.",
//       color: "#E91E63",
//     },
//     {
//       icon: "🤝",
//       title: "Job Placement",
//       description: "Direct connections to employment opportunities through our extensive employer network and partnerships.",
//       color: "#9C27B0",
//     },
//     {
//       icon: "🏠",
//       title: "Reintegration Support",
//       description: "Comprehensive support for returnees from abroad, including entrepreneurship guidance and local job placement.",
//       color: "#3F51B5",
//     },
//     {
//       icon: "📊",
//       title: "Labour Market Intelligence",
//       description: "Data-driven insights on skills demand, market gaps, and employment trends to guide your decisions.",
//       color: "#009688",
//     },
//   ];

//   return (
//     <section 
//       style={{ 
//         paddingTop: 80, 
//         paddingBottom: 80, 
//         background: "linear-gradient(135deg, #f5f0f5 0%, #ffffff 100%)" 
//       }}
//     >
//       <Container>
//         <div className="text-center mb-5">
//           <h3 className="fw-bold mb-2">
//             Our Services
//           </h3>
//           <p className="text-muted">
//             Comprehensive support for your journey
//           </p>
//         </div>

//         <Row className="g-4">
//           {services.map((service, index) => (
//             <Col key={index} md={6} lg={4}>
//               <Card 
//                 className="h-100 border-0 shadow-sm p-4"
//                 style={{ borderLeft: `5px solid ${service.color}` }}
//               >
//                 <div
//                   className="mb-3 d-flex align-items-center justify-content-center"
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     background: service.color,
//                     borderRadius: "12px",
//                     fontSize: "1.8rem",
//                   }}
//                 >
//                   {service.icon}
//                 </div>
//                 <h5 className="fw-bold mb-2">{service.title}</h5>
//                 <p className="text-muted mb-0">{service.description}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// const MADWhoWeServe = () => {
//   const targetGroups = [
//     {
//       title: "Youth Jobseekers in Lagos",
//       description: "Unemployed and underemployed young people seeking career opportunities and skills development",
//       icon: "👥",
//     },
//     {
//       title: "Prospective Migrants",
//       description: "Individuals seeking structured pathways to study, vocational training, or work in Germany",
//       icon: "✈️",
//     },
//     {
//       title: "Returnees from Germany/Europe",
//       description: "Migrants requiring reintegration support and access to local opportunities",
//       icon: "🏠",
//     },
//     {
//       title: "Employers in Lagos",
//       description: "MSMEs and businesses seeking access to trained, job-ready talent for their workforce needs",
//       icon: "🏢",
//     },
//     {
//       title: "Training Providers & Sponsors",
//       description: "Organizations seeking direct access to motivated, ready participants",
//       icon: "🎓",
//     },
//   ];

//   return (
//     <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
//       <Container>
//         <div className="text-center mb-5">
//           <h3 className="fw-bold mb-3">
//             Who We Serve
//           </h3>
//           <p className="text-muted">
//             Supporting diverse groups on their journey to success
//           </p>
//         </div>

//         <Row className="g-4 justify-content-center">
//           {targetGroups.map((group, index) => (
//             <Col key={index} md={6} lg={4}>
//               <Card className="h-100 border-0 shadow-sm p-4">
//                 <div className="d-flex flex-column align-items-center text-center">
//                   <div
//                     className="d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       background: `linear-gradient(135deg, ${PRIMARY_PURPLE}, ${SECONDARY_PURPLE})`,
//                       borderRadius: "12px",
//                       fontSize: "2rem",
//                     }}
//                   >
//                     {group.icon}
//                   </div>
//                   <div>
//                     <h5 className="fw-bold mb-2">{group.title}</h5>
//                     <p className="text-muted mb-0">{group.description}</p>
//                   </div>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// const MADPartners = () => {
//   return (
//     <section 
//       style={{ 
//         paddingTop: 80, 
//         paddingBottom: 80, 
//         background: "linear-gradient(135deg, #f5f0f5 0%, #e8d4e8 100%)" 
//       }}
//     >
//       <Container>
//         <div className="text-center mb-5">
         
//           <h3 className="fw-bold mb-4">
//             Our Partners
//           </h3>
//         </div>

//         <Row className="justify-content-center align-items-center g-4">
//           <Col md={10}>
//             <Card className="border-0 shadow-sm p-5">
//               <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
//                 <div className="text-center" style={{ flex: "1 1 200px" }}>
//                   <img
//                     src="./images/mad/german-cooperation.png"
//                     alt="German Cooperation"
//                     style={{ maxHeight: "80px", objectFit: "contain" }}
//                   />
//                 </div>
//                 <div className="text-center" style={{ flex: "1 1 200px" }}>
//                   <img
//                     src="./images/mad/giz.png"
//                     alt="GIZ"
//                     style={{ maxHeight: "80px", objectFit: "contain" }}
//                   />
//                 </div>
//                 <div className="text-center" style={{ flex: "1 1 200px" }}>
//                   <img
//                     src="./images/mad/nigerian-german-centre.png"
//                     alt="Nigerian-German Centre"
//                     style={{ maxHeight: "80px", objectFit: "contain" }}
//                   />
//                 </div>
//                 <div className="text-center" style={{ flex: "1 1 200px" }}>
//                   <img
//                     src="./images/mad/federal-ministry.png"
//                     alt="Federal Ministry of Labour & Employment"
//                     style={{ maxHeight: "80px", objectFit: "contain" }}
//                   />
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// const MADHowItWorks = () => {
//   const steps = [
//     {
//       number: "1",
//       title: "Initial Consultation",
//       description: "Meet with our expert advisors for a comprehensive assessment of your background, skills, and aspirations.",
//     },
//     {
//       number: "2",
//       title: "Profiling & Assessment",
//       description: "Complete guided interviews and data-driven tools to identify your strengths, interests, and constraints.",
//     },
//     {
//       number: "3",
//       title: "Pathway Planning",
//       description: "Receive personalized recommendations for training, employment, migration, or enterprise opportunities.",
//     },
//     {
//       number: "4",
//       title: "Skill Development",
//       description: "Access relevant training programs, workshops, and resources to build your capabilities.",
//     },
//     {
//       number: "5",
//       title: "Placement & Support",
//       description: "Get connected to job opportunities, migration programs, or business support based on your chosen path.",
//     },
//   ];

//   return (
//     <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
//       <Container>
//         <div className="text-center mb-5">
//           <h3 className="fw-bold mb-3">
//             How It Works
//           </h3>
//           <p className="text-muted">
//             Your journey to success in 5 simple steps
//           </p>
//         </div>

//         <Row className="g-4">
//           {steps.map((step, index) => (
//             <Col key={index} md={6} lg={4}>
//               <Card 
//                 className="h-100 border-0 shadow-sm p-4 position-relative"
//                 style={{ 
//                   background: index === steps.length - 1 
//                     ? `linear-gradient(135deg, ${PRIMARY_PURPLE}, ${SECONDARY_PURPLE})` 
//                     : "#fff",
//                   color: index === steps.length - 1 ? "#fff" : "#000",
//                 }}
//               >
//                 <div
//                   className="position-absolute d-flex align-items-center justify-content-center fw-bold"
//                   style={{
//                     top: "-15px",
//                     left: "20px",
//                     width: "50px",
//                     height: "50px",
//                     background: index === steps.length - 1 ? "#fff" : PRIMARY_PURPLE,
//                     color: index === steps.length - 1 ? PRIMARY_PURPLE : "#fff",
//                     borderRadius: "50%",
//                     fontSize: "1.5rem",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                   }}
//                 >
//                   {step.number}
//                 </div>
//                 <div style={{ marginTop: "20px" }}>
//                   <h5 className="fw-bold mb-2">{step.title}</h5>
//                   <p className="mb-0" style={{ opacity: index === steps.length - 1 ? 0.95 : 1 }}>
//                     {step.description}
//                   </p>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// const MADCTA = () => {
//   return (
//     <section
//       id="contact"
//       style={{
//         paddingTop: 40,
//         paddingBottom: 40,
//         background: `linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${SECONDARY_PURPLE} 100%)`,
//         color: "#fff",
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center text-center">
//           <Col lg={8}>
//             <h3 className="fw-bold mb-4">
//               Ready to Start Your Journey?
//             </h3>
//             <p className="mb-4" style={{ lineHeight: "1.8" }}>
//               Whether you're seeking employment, planning migration, need reintegration support, 
//               or looking for trained talent for your MSME, the Migrant Advisory Desk is here to 
//               guide you every step of the way.
//             </p>
//             <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
//               <Button
//                 href="mailto:info@8thgearpartners.com"
//                 size="lg"
//                 style={{
//                   backgroundColor: "#fff",
//                   color: PRIMARY_PURPLE,
//                   border: "none",
//                   fontWeight: 700,
//                   fontSize: "1.1rem",
//                   borderRadius: "8px",
//                 }}
//               >
//                 Get in Touch →
//               </Button>
//             </div>
          
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default MigrantAdvisoryDesk;



import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar"; 

import migrationadvisorydesk from "../../../assets/images/talentplacement/migrationadvisorydesk.jpg";
import giz from "../../../assets/images/projectdelivery/m.A.D/GIZ.png"
import ngc from "../../../assets/images/projectdelivery/m.A.D/NGC.png"
import fmle from "../../../assets/images/projectdelivery/m.A.D/FMLE.png"

const PRIMARY_PURPLE = "#6E006A";
const SECONDARY_PURPLE = "#9B1B96";

const MigrantAdvisoryDesk = () => {
  return (
    <div>
      <HomepageNav />
      <MADHero />
      <MADAbout />
      <MADServices />
      <MADWhoWeServe />
      <MADPartners />
      <MADHowItWorks />
      <MADCTA />
    </div>
  );
};

const MADHero = () => {
  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, rgba(130, 30, 107, 0.05) 0%, rgba(130, 30, 107, 0.15) 100%)" }} id="migrant-advisory-desk">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h2 className="fw-bold mb-3">
                Migrant Advisory Desk
              </h2>

              <h5 className="mb-4">
                Verified Guidance for Safe, Successful Migration
              </h5>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Expert Support</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Backed by GIZ partnership
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Safe Migration</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Trusted support throughout
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Employability Training</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Practical skills development
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Global Job-Ready</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Not just travel-ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 flex-wrap mb-4">
                <Button
                  className="aboutbtn"
                  href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                   style={{
                    transition: "all 0.3s ease",
                    backgroundColor: "transparent",
                    border: `2px solid ${PRIMARY_PURPLE}`,
                    color: PRIMARY_PURPLE
                  }}
                >
                  Get Counselling →
                </Button>

                <Button
                  className="aboutbtn"
                  href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                  target="_blank"
                   rel="noopener noreferrer" 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  style={{
                    transition: "all 0.3s ease",
                    backgroundColor: "transparent",
                    border: `2px solid ${PRIMARY_PURPLE}`,
                    color: PRIMARY_PURPLE
                  }}
                >
                  Access Talent Pool →
                </Button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 col-md-12">
            <div className="position-relative">
              <div
                className="p-4 rounded-3"
                style={{
                  background: "#fff",
                  boxShadow: "0 10px 40px rgba(130, 30, 107, 0.15)"
                }}
              >
                <img
                  src={migrationadvisorydesk}
                  className="img-fluid rounded-3"
                  alt="Migrant Advisory Desk"
                />
              </div>

              {/* Decorative element */}
              <div
                className="position-absolute"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "rgba(130, 30, 107, 0.1)",
                  borderRadius: "50%",
                  top: "-20px",
                  right: "-20px",
                  zIndex: -1
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MADAbout = () => {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-4">
              <h3 className="fw-bold">
                What is the Migrant Advisory Desk?
              </h3>
              <p className="text-muted">
                Making informed decisions about skills, livelihoods, and migration
              </p>
            </div>

            <Card className="border-0 shadow-sm mb-5 px-4">
              <p className="mb-3" style={{ lineHeight: "1.9", color: "#4a5568" }}>
                The <strong>Migrant Advisory Desk (m.A.D)</strong> is a structured counselling and 
                profiling platform developed by GIZ and implemented by 8thGear to empower young people, 
                especially those not in education, employment, or training (NEETs) to make 
                informed decisions about skills, livelihoods, and migration. Through m.A.D, 8thGear 
                supports MSMEs by connecting them with trained, job-ready talent that meets their 
                specific workforce needs.
              </p>
              <p className="mb-0" style={{ lineHeight: "1.9", color: "#4a5568" }}>
                Using guided interviews and data-driven tools, we assess individual backgrounds, 
                interests, and constraints, then link participants to appropriate training, employment, 
                or enterprise pathways. For MSMEs, we provide direct access to a pool of skilled, 
                motivated candidates while reducing uninformed migration and improving long-term 
                economic outcomes for individuals and businesses alike.
              </p>
            </Card>

            <Row className="g-4">
              <Col md={4}>
                <Card 
                  className="h-100 border-0 shadow-sm text-center p-4"
                  style={{ borderTop: `4px solid ${PRIMARY_PURPLE}` }}
                >
                  <div 
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(110, 0, 106, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>🎯</span>
                  </div>
                  <h5 className="fw-bold mb-2">Data-Driven</h5>
                  <p className="text-muted mb-0">
                    Guided assessments to understand unique skills and aspirations
                  </p>
                </Card>
              </Col>

              <Col md={4}>
                <Card 
                  className="h-100 border-0 shadow-sm text-center p-4"
                  style={{ borderTop: `4px solid ${SECONDARY_PURPLE}` }}
                >
                  <div 
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(155, 27, 150, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>🛣️</span>
                  </div>
                  <h5 className="fw-bold mb-2">Clear Pathways</h5>
                  <p className="text-muted mb-0">
                    Direct connections to training, jobs, and migration opportunities
                  </p>
                </Card>
              </Col>

              <Col md={4}>
                <Card 
                  className="h-100 border-0 shadow-sm text-center p-4"
                  style={{ borderTop: "4px solid #E91E63" }}
                >
                  <div 
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(233, 30, 99, 0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>✅</span>
                  </div>
                  <h5 className="fw-bold mb-2">Informed Decisions</h5>
                  <p className="text-muted mb-0">
                    Reduce risks and improve long-term economic outcomes
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

const MADServices = () => {
  const services = [
    {
      icon: "🗺️",
      title: "Migration Counselling",
      description: "Expert guidance on legal migration pathways, requirements, and risks. Comprehensive support for safe, informed migration decisions.",
      color: PRIMARY_PURPLE,
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Professional career counselling for local jobseekers. Skills assessment and pathway planning for sustainable employment.",
      color: SECONDARY_PURPLE,
    },
    {
      icon: "🎓",
      title: "Skills Training",
      description: "Employability workshops covering CV writing, digital skills, and workplace readiness. Sector-specific training aligned with market demand.",
      color: "#E91E63",
    },
    {
      icon: "🤝",
      title: "Job Placement",
      description: "Direct connections to employment opportunities through our extensive employer network and partnerships.",
      color: "#9C27B0",
    },
    {
      icon: "🏠",
      title: "Reintegration Support",
      description: "Comprehensive support for returnees from abroad, including entrepreneurship guidance and local job placement.",
      color: "#3F51B5",
    },
    {
      icon: "📊",
      title: "Labour Market Intelligence",
      description: "Data-driven insights on skills demand, market gaps, and employment trends to guide your decisions.",
      color: "#009688",
    },
  ];

  return (
    <section 
      style={{ 
        paddingTop: 80, 
        paddingBottom: 80, 
        background: "linear-gradient(135deg, #f5f0f5 0%, #ffffff 100%)" 
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-2">
            Our Services
          </h3>
          <p className="text-muted">
            Comprehensive support for your journey
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="h-100 border-0 shadow-sm p-4"
                style={{ borderLeft: `5px solid ${service.color}` }}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: service.color,
                    borderRadius: "12px",
                    fontSize: "1.8rem",
                  }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted mb-0">{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const MADWhoWeServe = () => {
  const targetGroups = [
    {
      title: "MSMEs & Employers in Lagos",
      description: "Businesses seeking access to trained, job-ready talent for their workforce needs through our verified talent pool",
      icon: "🏢",
    },
    {
      title: "Youth Jobseekers in Lagos",
      description: "Unemployed and underemployed young people seeking career opportunities and skills development",
      icon: "👥",
    },
    {
      title: "Prospective Migrants",
      description: "Individuals seeking structured pathways to study, vocational training, or work in Germany",
      icon: "✈️",
    },
    {
      title: "Returnees from Germany/Europe",
      description: "Migrants requiring reintegration support and access to local opportunities",
      icon: "🏠",
    },
    {
      title: "Training Providers & Sponsors",
      description: "Organizations seeking direct access to motivated, ready participants",
      icon: "🎓",
    },
  ];

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3">
            Who We Serve
          </h3>
          <p className="text-muted">
            Supporting diverse groups on their journey to success
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {targetGroups.map((group, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: `linear-gradient(135deg, ${PRIMARY_PURPLE}, ${SECONDARY_PURPLE})`,
                      borderRadius: "12px",
                      fontSize: "2rem",
                    }}
                  >
                    {group.icon}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">{group.title}</h5>
                    <p className="text-muted mb-0">{group.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const MADPartners = () => {
  return (
    <section 
      style={{ 
        paddingTop: 80, 
        paddingBottom: 80, 
        background: "linear-gradient(135deg, #f5f0f5 0%, #e8d4e8 100%)" 
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-4">
            Our Partners
          </h3>
        </div>

        <Row className="justify-content-center align-items-center g-4">
          <Col md={10}>
            <Card className="border-0 shadow-sm p-5">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                <div className="text-center" style={{ flex: "1 1 200px" }}>
                  <img
                    src={giz}
                    alt="German Cooperation"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
                <div className="text-center" style={{ flex: "1 1 200px" }}>
                  <img
                    src={ngc}
                    alt="GIZ"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
                <div className="text-center" style={{ flex: "1 1 200px" }}>
                  <img
                    src={fmle}
                    alt="Nigerian-German Centre"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
                {/* <div className="text-center" style={{ flex: "1 1 200px" }}>
                  <img
                    src="./images/mad/federal-ministry.png"
                    alt="Federal Ministry of Labour & Employment"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div> */}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const MADHowItWorks = () => {
  const steps = [
   {
      number: "1",
      title: "Migration & Employment Counselling",
      description: "Expert guidance on legal migration pathways, career counselling for jobseekers, and reintegration support for returnees.",
    },
    {
      number: "2",
      title: "Labour Market Data Hub",
      description: "Profile jobseekers and migrants, capture skills and aspirations, and provide data-driven labour market insights.",
    },
    {
      number: "3",
      title: "Training & Upskilling",
      description: "Employability workshops and sector-specific training in healthcare, ICT, logistics, construction through partnership programs.",
    },
    {
      number: "4",
      title: "Job Placement Services",
      description: "Connect talent to jobs through our 100k Jobs Partnership with LSETF and employer network. Entrepreneurship support for returnees and local youth.",
    },
    {
      number: "5",
      title: "Partnerships & Programme Alignment",
      description: "Collaboration with GIZ/ZME, LEEP (Labour Employment and Empowerment Programme, Federal Ministry of Youth Development), government programs, and corporate and NGO sponsors for comprehensive support.",
    },
  ];

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff" }}>
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3">
            How It Works
          </h3>
          <p className="text-muted">
            Our comprehensive approach to migration advisory and talent development
          </p>
        </div>

        <Row className="g-4">
          {steps.map((step, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="h-100 border-0 shadow-sm p-4 position-relative"
                style={{ 
                  background: index === steps.length - 1 
                    ? `linear-gradient(135deg, ${PRIMARY_PURPLE}, ${SECONDARY_PURPLE})` 
                    : "#fff",
                  color: index === steps.length - 1 ? "#fff" : "#000",
                }}
              >
                <div
                  className="position-absolute d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    top: "-15px",
                    left: "20px",
                    width: "50px",
                    height: "50px",
                    background: index === steps.length - 1 ? "#fff" : PRIMARY_PURPLE,
                    color: index === steps.length - 1 ? PRIMARY_PURPLE : "#fff",
                    borderRadius: "50%",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  {step.number}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="mb-0" style={{ opacity: index === steps.length - 1 ? 0.95 : 1 }}>
                    {step.description}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const MADCTA = () => {
  return (
    <section
      id="contact"
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        background: `linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${SECONDARY_PURPLE} 100%)`,
        color: "#fff",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h3 className="fw-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              Whether you're an MSME seeking trained talent, a jobseeker planning your career, 
              considering migration, need reintegration support, or looking to access our talent 
              pool, the Migrant Advisory Desk is here to guide you every step of the way.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
              <Button
                href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                style={{
                  backgroundColor: "#fff",
                  color: PRIMARY_PURPLE,
                  border: "none",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                }}
              >
                Get Counselling →
              </Button>
              <Button
                 href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                  target="_blank"
                   rel="noopener noreferrer" 
                size="lg"
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "2px solid #fff",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                }}
              >
                Access Talent Pool →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MigrantAdvisoryDesk;