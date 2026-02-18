import { Card, Button, Row, Col, Badge, Modal } from "react-bootstrap";
import b2bImage from "../../../assets/images/tech-marketplace/b2bImage.png";
import trulance from "../../../assets/images/tech-marketplace/trulance.png";
import legalmo from "../../../assets/images/tech-marketplace/legalmo.png";
import finamo from "../../../assets/images/tech-marketplace/finamo.png";
import talenmo from "../../../assets/images/tech-marketplace/talenmo.png";
import mtn from "../../../assets/images/tech-marketplace/mtn.png";
import legalmologo from "../../../assets/images/tech-marketplace/legalmo-logo.png";
import trulancelogo from "../../../assets/images/tech-marketplace/trulance-logo.png";
import mtnlogo from "../../../assets/images/tech-marketplace/mtn-logo.png";
import zohologo from "../../../assets/images/tech-marketplace/zoho-logo.png";
import crmlogo from "../../../assets/images/tech-marketplace/crm.png";
import eighthgearlogo from "../../../LOGO/8thgearlogo.png";
import partnerwithus from "../../../assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "../../../assets/images/tech-marketplace/tailoredsolution.png";
import { HomepageNav } from "../../../components/Navbar"; 

import saveTimeIcon from "../../../assets/images/tech-marketplace/save-time.png";
import getItRightIcon from "../../../assets/images/tech-marketplace/get-it-right.png";
import simplicityIcon from "../../../assets/images/tech-marketplace/simplicity.png";
import scaleEasilyIcon from "../../../assets/images/tech-marketplace/scale-easily.png";
import { useEffect, useState } from "react";

// export const TasterSessionModal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     // Check if modal has been shown in this session
//     const hasSeenModal = sessionStorage.getItem('hasSeenTasterModal');
    
//     if (!hasSeenModal) {
//       // Show modal only if user hasn't seen it
//       setShowModal(true);
//     } else {
//       // If they've already seen it, show banner instead
//       setShowBanner(true);
//     }
//   }, []);


//   const handleCloseModal = () => {
//     setShowModal(false);
//     setShowBanner(true);
//     // Mark that user has seen the modal in this session
//     sessionStorage.setItem('hasSeenTasterModal', 'true');
//   };

//   const handleCloseBanner = () => {
//     setShowBanner(false);
//   };

//   return (
//     <>
//       {/* Modal */}
//       <Modal
//         show={showModal}
//         onHide={handleCloseModal}
//         size="md"
//         centered
//         className="zoho-modal"
//       >
//         <Modal.Body
//           className="p-0"
//           style={{ borderRadius: "16px", overflow: "hidden" }}
//         >
//           {/* Header Section - White background for colorful logos */}
//           <div
//             className="px-4 py-3"
//             style={{
//               background: "#fff",
//               borderBottom: "3px solid #6E006A",
//             }}
//           >
//             <div className="d-flex justify-content-between align-items-center">
//               {/* 8thGear x Zoho Logos */}
//               <div className="d-flex align-items-center gap-3">
//                 <img
//                   src={eighthgearlogo}
//                   alt="8thGear Hub"
//                   style={{ height: "60px" }}
//                 />
//                 <span
//                   style={{
//                     color: "#6E006A",
//                     fontWeight: "bold",
//                     fontSize: "1.6rem",
//                   }}
//                 >
//                   ×
//                 </span>
//                 <img src={zohologo} alt="Zoho CRM" style={{ height: "50px" }} />
//               </div>

//               <button
//                 onClick={handleCloseModal}
//                 className="btn-close"
//                 style={{ fontSize: "0.8rem" }}
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="px-4 py-3" style={{ background: "#fff" }}>
//             {/* Title */}
//             <div className="text-center mb-3">
//               <p
//                 className="mb-3"
//                 style={{
//                   color: "#6E006A",
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                 }}
//               >
//                 YOU'RE INVITED TO OUR UPCOMING
//               </p>

//               {/* Zoho CRM Logo - Smaller */}
//               <div className="mb-3 d-flex justify-content-center">
//                 <img src={crmlogo} alt="Zoho CRM" style={{ height: "60px" }} />
//               </div>

//               <h4
//                 className="fw-bold mb-3"
//                 style={{
//                   color: "#9B1B96",
//                   fontSize: "1.4rem",
//                 }}
//               >
//                 Taster Session
//               </h4>
//             </div>

//             {/* Benefits */}
//             <div className="mb-3">
//               <p
//                 className="mb-2 small"
//                 style={{ color: "#333", fontWeight: "500" }}
//               >
//                 See how Zoho CRM helps you:
//               </p>
//               <div className="row g-2">
//                 {[
//                   { text: "Organize customers", color: "#E91E63" },
//                   { text: "Automate follow-ups", color: "#9C27B0" },
//                   { text: "Track sales", color: "#3F51B5" },
//                   { text: "Grow smarter", color: "#009688" },
//                 ].map((item, i) => (
//                   <div className="col-6" key={i}>
//                     <div
//                       className="p-2 text-white rounded d-flex align-items-center"
//                       style={{
//                         background: item.color,
//                         fontSize: "0.8rem",
//                       }}
//                     >
//                       <span
//                         className="me-2"
//                         style={{
//                           width: "6px",
//                           height: "6px",
//                           background: "#fff",
//                           borderRadius: "50%",
//                           display: "inline-block",
//                         }}
//                       />
//                       <span className="fw-semibold">{item.text}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Date and Time */}
//             <div
//               className="text-center py-3 mb-3 rounded"
//               style={{
//                 background: "linear-gradient(135deg, #F5E6F5 0%, #E8D4E8 100%)",
//               }}
//             >
//               <div className="d-flex justify-content-center align-items-center gap-3">
//                 <div>
//                   <p
//                     className="mb-0 fw-bold"
//                     style={{ color: "#6E006A", fontSize: "0.9rem" }}
//                   >
//                     Wednesday
//                   </p>
//                   <h5 className="mb-0 fw-bold" style={{ color: "#6E006A" }}>
//                     18th Feb, 2026
//                   </h5>
//                 </div>
//                 <div
//                   style={{
//                     width: "2px",
//                     height: "40px",
//                     background: "#6E006A",
//                     opacity: "0.3",
//                   }}
//                 />
//                 <div>
//                   <p
//                     className="mb-0 fw-bold"
//                     style={{ color: "#6E006A", fontSize: "0.9rem" }}
//                   >
//                     🕐 Time
//                   </p>
//                   <h5 className="mb-0 fw-bold" style={{ color: "#6E006A" }}>
//                     4:00 PM WAT
//                   </h5>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button - Not rounded */}
//             <div className="text-center mb-3">
//               <a
//                 href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-lg w-100 fw-bold"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
//                   color: "white",
//                   borderRadius: "8px",
//                   border: "none",
//                   padding: "12px",
//                   fontSize: "1rem",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 20px rgba(110, 0, 106, 0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 Register Now →
//               </a>
//             </div>

//             {/* Footer with Social Icons */}
//             <div className="text-center">
//               <div className="d-flex justify-content-center align-items-center gap-2">
//                 <p className="mb-0 small text-muted">📞 +234 913 246 2410</p>
//                 <span className="text-muted">|</span>
//                 <div className="d-flex align-items-center gap-2">
//                   <a
//                     href="https://www.linkedin.com/company/msme-marketplace"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: "#6E006A" }}
//                   >
//                     <i
//                       className="bi bi-linkedin"
//                       style={{ fontSize: "1.1rem" }}
//                     ></i>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/msme_marketplace"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: "#6E006A" }}
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "1.1rem" }}
//                     ></i>
//                   </a>
//                   <span className="small text-muted">@msme_marketplace</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>

//       {/* Sticky Banner */}
//       {showBanner && (
//   <div
//     className="w-100 py-2 px-3"
//     style={{
//       top: 0,
//       background: "linear-gradient(90deg, #6E006A 0%, #9B1B96 100%)",
//       zIndex: 1050,
//       boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//     }}
//   >
//     <div className="container">
//       {/* Desktop layout - single row */}
//       <div className="d-none d-md-flex justify-content-between align-items-center">
//         <div className="d-flex align-items-center gap-3 text-white">
//           <img
//             src={crmlogo}
//             alt="Zoho CRM"
//             style={{ height: "28px", filter: "brightness(0) invert(1)" }}
//           />
//           <span className="fw-semibold">
//             Taster Session • <strong>Feb 18, 2026 | 4PM WAT</strong>
//           </span>
//         </div>
//         <div className="d-flex align-items-center gap-2">
//           <a
//             href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-sm fw-semibold"
//             style={{
//               background: "white",
//               color: "#6E006A",
//               borderRadius: "8px",
//               padding: "8px 24px",
//               fontSize: "0.9rem",
//               border: "none",
//             }}
//           >
//             Register Now →
//           </a>
//           <button
//             onClick={handleCloseBanner}
//             className="btn-close btn-close-white"
//             aria-label="Close"
//             style={{ fontSize: "0.6rem" }}
//           />
//         </div>
//       </div>

//       {/* Mobile layout - stacked */}
//       <div className="d-flex d-md-none flex-column gap-2">
//         {/* Top row: logo, text, close button */}
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center gap-2 text-white">
//             <img
//               src={crmlogo}
//               alt="Zoho CRM"
//               style={{ height: "24px", filter: "brightness(0) invert(1)" }}
//             />
//             <div className="d-flex flex-column" style={{ lineHeight: "1.3" }}>
//               <span className="fw-semibold" style={{ fontSize: "0.85rem" }}>
//                 Taster Session
//               </span>
//               <strong style={{ fontSize: "0.8rem" }}>Feb 18, 2026 | 4PM WAT</strong>
//             </div>
//           </div>
//           <button
//             onClick={handleCloseBanner}
//             className="btn-close btn-close-white"
//             aria-label="Close"
//             style={{ fontSize: "0.6rem" }}
//           />
//         </div>

//         {/* Bottom row: register button (full width) */}
//         <a
//           href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-sm fw-semibold w-100"
//           style={{
//             background: "white",
//             color: "#6E006A",
//             borderRadius: "8px",
//             padding: "8px",
//             fontSize: "0.85rem",
//             border: "none",
//           }}
//         >
//           Register Now →
//         </a>
//       </div>
//     </div>
//   </div>
// )}
//     </>
//   );
// };

const MSMEMarketplace = () => {
   return (
    <>
    <HomepageNav/>
      <Hero />
      <SolutionsSection />
      <TailoredSolutionsSection />
      <PartnersLogo />
      <PartnersSection />
    </>
  );
};


const Hero = () => {
  const cards = [
    {
      icon: saveTimeIcon,
      title: "Save Time",
      text: "Skip cold outreach and endless vendor demos",
    },
    {
      icon: getItRightIcon,
      title: "Get It Right",
      text: "Access trusted solutions across various categories",
    },
    {
      icon: simplicityIcon,
      title: "Simplicity",
      text: "Expert support, clear pricing, no pressure",
    },
    {
      icon: scaleEasilyIcon,
      title: "Scale Easily",
      text: "Find solutions that grow with your business",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <Badge
          pill
          bg="light"
          className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
        >
          The Smarter Way to Grow
        </Badge>
        <h2 className="fw-bold">
          Fuel your Enterprise with
          <br />
          Proven B2B Tech Solutions
        </h2>
        <p className="text-muted">
          Our MSME Marketplace offers a curated selection of B2B software,
          <br className="d-none d-md-block" />
          infrastructure, and IT services, all vetted and resold by our experts
          <br className="d-none d-md-block" />
          so you don’t have to start from scratch.
        </p>
        <a
          href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="mt-2 mb-5">
            Get Started
          </Button>
        </a>
      </div>

      <div className="row align-items-stretch mt-5 pt-3">
        {/* Image */}
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex">
          <img
            src={b2bImage}
            alt="8thGear Hub" 
            className="img-fluid rounded flex-fill"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Cards */}
        <div className="col-lg-6">
          <div className="row g-3 info-cards-row">
            {cards.map(({ icon, title, text }, i) => (
              <div className="col-sm-6" key={i}>
                <div className="info-card p-4 shadow-sm rounded bg-light d-flex flex-column">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="mb-3"
                    style={{ width: "48px", height: "50px" }}
                  />
                  <h6 className="fw-bold">{title}</h6>
                  <p className="mb-0 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ACTIONS = [
  {
    label: "Manage leads and customers",
    href: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
  },
  {
    label: "Automate campaigns",
    href: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
  },
  {
    label: "Track expenses and revenue",
    href: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1957eae31aff62948c7fe7f162b916b5",
  },
  {
    label: "Engage visitors with chat",
    href: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
  },
];

const SolutionsSection = () => {
  return (
    <section className="container pb-5">
      {/* Badge + Title */}
      <div className="text-center mb-4">
        <Badge
          pill
          bg="light"
          className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
        >
          Solution
        </Badge>
        <h2 className="fw-bold">
          Explore Solutions from our <br className="d-none d-md-block" />
          Trusted Tech Providers
        </h2>
        <p className="text-muted">
          Our marketplace features top-rated software and tools handpicked for
          scalability.
        </p>
      </div>

      {/* Search bar */}
      {/* <Row className="justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          <InputGroup>
            <FormControl placeholder="Type your search" />
            <Button variant="outline-secondary">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
      </Row> */}

      {/* Top two cards */}
      <Row className="g-4 mb-5">
        <Col lg={6}>
          <Card
            className="h-100 border-0 shadow-sm overflow-hidden"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Img src={trulance} alt="Grow your digital presence" />
            <Card.Body className="">
              <h4 className="fw-bold">Grow Your Digital Presence</h4>
              <Card.Text className="text-muted">
                Launch and scale your online footprint with expert support in
                web development, content creation, digital marketing, and data
                analysis.
              </Card.Text>
              <a
                href="https://trulance.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out Trulance</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card
            className="h-100 border-0 shadow-sm overflow-hidden"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Img src={legalmo} alt="Simplify legal processes" />
            <Card.Body className="">
              <h4 className="fw-bold">Simplify Legal Processes</h4>
              <Card.Text className="text-muted">
                Access reliable legal services designed for businesses, contract
                creation, compliance, IP protection, and more.
              </Card.Text>
              <a
                href="https://www.legalmo.biz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out LegalMo</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bottom two sections */}
      <Row className="g-4">
        {/* All Products */}
        <Col lg={6}>
          <Card
            className="h-100 border-0 shadow-sm overflow-hidden"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Img src={mtn} alt="Connectivity Tools & Devices" />
            <Card.Body className="">
              <h4 className="fw-bold">Connectivity Tools & Devices</h4>
              <Card.Text className="text-muted">
                Stay connected with enterprise-grade solutions built for
                Nigerian businesses, from high-speed broadband and dedicated
                networks to smart IoT devices and unified communication tools.
              </Card.Text>
              <a
                href="https://shop.mtn.ng/all-products.html?affiliate_code=8thGearHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out MTN Solutions</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* All-in-One Business Suite */}
        <Col lg={6}>
          <Card
            className="p-4 rounded-3 border-0 shadow-sm"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Body className="p-0">
              <Card.Title as="h5" className="fw-bold mb-2">
                All-in-One Business Suite for Smarter Growth
              </Card.Title>
              <Card.Text as="p" className="text-muted small mb-4">
                This integrated toolset helps you:
              </Card.Text>

              <div className="d-grid gap-2 mb-4">
                {ACTIONS.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="btn btn-outline-secondary text-start d-flex justify-content-between align-items-center rounded"
                    style={{ padding: "0.75rem 1rem" }}
                  >
                    <span>{item.label}</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                ))}
              </div>
              <a
                href="https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out Zoho Solutions</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card
            className="h-100 border-0 shadow-sm overflow-hidden"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Img src={finamo} alt="Financial Systems" />
            <Card.Body className="">
              <h4 className="fw-bold">
                Run Your Business on Solid Financial Systems
              </h4>

              <Card.Text className="text-muted">
                Access reliable financial services for bookkeeping, tax
                compliance, reporting, budgeting, and business structuring.
              </Card.Text>
              <a
                href="https://www.finamo.biz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out FinaMo</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card
            className="h-100 border-0 shadow-sm overflow-hidden"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <Card.Img src={talenmo} alt="Talent Placement" />
            <Card.Body className="">
              <h4 className="fw-bold">Talent Placement Made Simple</h4>
              <Card.Text className="text-muted">
                Access end-to-end talent sourcing, screening, training, and
                placement for internships, contract, and full-time roles.
              </Card.Text>
              <a
                href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Check out TalenMo</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};




const TailoredSolutionsSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Content - Left */}
        <div className="col-md-6 mb-4 mb-md-0">
          <Badge
            pill
            bg="light"
            className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
          >
            Tailored Solutions
          </Badge>
          <h2 className="fw-bold">
            Tell Us What You Need, <br className="d-none d-md-block" />
            We’ll Make It Happen
          </h2>
          <p className="text-muted">
            If our featured solutions don’t quite match your needs, we’re here
            to create one that does.
          </p>

          <a
            href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">Request a Custom Solution</Button>
          </a>
        </div>

        {/* Image Content - Right */}
        <div className="col-md-6 text-center">
          <img
            src={tailoredsolution}
            alt="Tailored Solution"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

const PartnersLogo = () => {
  const logos = [
    { src: legalmologo, alt: "Legalmo" },
    { src: trulancelogo, alt: "Trulance" },
    { src: mtnlogo, alt: "MTN" },
    { src: zohologo, alt: "Zoho" },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      <section className="py-5 text-center">
        <div className="container">
          <Badge
            pill
            bg="light"
            className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
          >
            Our Partners
          </Badge>

          <h2 className="mb-3 fw-bold">Meet our Trusted B2B Partners</h2>
          <p className="text-muted mb-5">
            We collaborate with industry-leading platforms and service providers
            to bring you the best in business technology.
          </p>

          <div className="row justify-content-center align-items-center g-4">
            {logos.map(({ src, alt }, index) => (
              <div className="col-6 col-sm-4 col-lg-3" key={index}>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "100px" }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="img-fluid"
                    style={{ maxHeight: "70px", objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div className="container px-0 mt-5 pt-5">
      <div
        className="hero-section text-white d-flex justify-content-center align-items-center rounded-4"
        style={{
          backgroundImage: `url(${partnerwithus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="text-center p-4 rounded">
          {/* <div className="text-center bg-dark bg-opacity-50 p-4 rounded"> */}
          <h2 className="fw-bold mb-3">
            Want to Offer Your Tech <br className="d-none d-md-block" />
            Solution to Growing Businesses?
          </h2>
          <p className="mb-4">
            Join our marketplace and connect with the right B2B audience.
            <br className="d-none d-md-block" />
            Showcase your product, gain visibility, and grow your reach.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_k2Vk4CgZKz4-sPtP7h7aflemd-AcpGSpWodxUoGT6UuKJg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="btn btn-light">Partner With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MSMEMarketplace;
