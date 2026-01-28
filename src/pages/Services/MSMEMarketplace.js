import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import b2bImage from "../../assets/images/tech-marketplace/b2bImage.png";
import trulance from "../../assets/images/tech-marketplace/trulance.png";
import legalmo from "../../assets/images/tech-marketplace/legalmo.png";
import mtn from "../../assets/images/tech-marketplace/mtn.png";
import legalmologo from "../../assets/images/tech-marketplace/legalmo-logo.png";
import trulancelogo from "../../assets/images/tech-marketplace/trulance-logo.png";
import mtnlogo from "../../assets/images/tech-marketplace/mtn-logo.png";
import zohologo from "../../assets/images/tech-marketplace/zoho-logo.png";
import partnerwithus from "../../assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "../../assets/images/tech-marketplace/tailoredsolution.png";
import { HomepageNav } from "../../components/Navbar";

import saveTimeIcon from "../../assets/images/tech-marketplace/save-time.png";
import getItRightIcon from "../../assets/images/tech-marketplace/get-it-right.png";
import simplicityIcon from "../../assets/images/tech-marketplace/simplicity.png";
import scaleEasilyIcon from "../../assets/images/tech-marketplace/scale-easily.png";

const MSMEMarketplace = () => {
  return (
    <>
      <HomepageNav />
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
          Our MSMS Marketplace offers a curated selection of B2B software,
          <br className="d-none d-md-block" />
          infrastructure, and IT services, all vetted and resold by our experts
          <br className="d-none d-md-block" />
          so you don’t have to start from scratch.
        </p>
      </div>

      <div className="row align-items-stretch">
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
                Access reliable legal services designed for businesses— contract
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
                Discover everything we offer in one place.
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
