import { useEffect, useRef } from "react";
import "./Programs.css";
import { HomepageNav } from "../../../components/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import rocket from "../../../assets/images/projectdelivery/gearup-training/rocket.png";
import imgOne from "../../../assets/images/projectdelivery/gearup-training/imgOne.png";
import imgTwo from "../../../assets/images/projectdelivery/gearup-training/imgTwo.png";
import imgThree from "../../../assets/images/projectdelivery/gearup-training/imgThree.png";
import applyNowTimer from "../../../assets/images/projectdelivery/gearup-training/applyNowTimer.png";

import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const GearUp = () => {
  return (
    <>
      <HomepageNav />
      <HeroSection />
      <AboutTheProgram />
      <CardCarousel />
      <WhoCanApply />
      <WhyJoinGearUp />
      <ReadyToLaunch />
      <ApplyNowSection />
    </>
  );
};

const HeroSection = () => {
  const heroStyle = {
    backgroundColor: "#6E006A",
    color: "#FFFFFF",
    padding: "4rem 0",
  };

  const subHeadingStyle = {
    fontSize: "1.2rem",
  };

  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    color: "#6E006A",
    borderColor: "#FFFFFF",
    padding: "0.75rem 2rem",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const rocketImageStyle = {
    width: "80%",
    height: "auto",
  };

  return (
    <div style={heroStyle} className="hero-pattern">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h3>
              Welcome to the GearUp <br />
              Incubation Program
            </h3>
            <p style={subHeadingStyle}>
              <b> Your Launchpad to Building a Globally Relevant Business</b>
            </p>
            <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>
              Powered by 8thGear Hub & Venture Studio, the GearUp Incubation
              Program is the first phase of a bold, multi-country initiative
              designed to spotlight and scale businesses with health-related
              outputs such as food, wellness, and hospital management, starting
              right here in Southwest Nigeria.
            </p>
            <a
              href="https://incubation.bridgeforbillions.org/signup?organization=224&program=586"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={buttonStyle}>Apply Now!</Button>
            </a>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0 d-none d-lg-block">
            <img
              src={rocket}
              alt="Rocket Launch"
              className="img-fluid"
              style={rocketImageStyle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const AboutTheProgram = () => {
  return (
    <div>
      {/* Top Section */}
      <div
        className="text-center position-relative"
        style={{ backgroundColor: "#F7E1F7", padding: "2rem 1rem" }}
      >
        <p
          className="mb-0 px-3 py-3 mx-auto text-center"
          style={{ maxWidth: "700px" }}
        >
          Whether you are an ambitious founder ready to take your business idea
          to the next level or a seasoned professional passionate about
          mentoring the next generation of entrepreneurs, this is where your
          journey begins.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-6">
            <h4 className="text-uppercase fw-bold mb-3">
              What is GearUp Incubation Program?
            </h4>
            <p>
              In just 4 months, the GearUp Incubation Program will equip
              early-stage entrepreneurs in healthcare and related sectors, such
              as health tech, nutrition, hospital management, and more with the
              tools, mentorship, and network to transform their ideas into
              investment-ready ventures. You’ll join a vibrant Pan-African
              founder community and get hands-on support every step of the way.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img src={imgOne} alt="Founders group" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardCarousel = () => {
  const carouselItems = [
    {
      title: "Structured Roadmap",
      description: "to validate and grow your business",
    },
    { title: "Access", description: "to exclusive investor networks" },
    { title: "1:1 Mentorship", description: "from seasoned business leaders" },
    { title: "Expert Support", description: "from our incubation team" },
    { title: "Peer Networking", description: "from other innovative founders" },
    { title: "Funding Opportunities", description: "from partner investors" },
    {
      title: "Global Partnerships",
      description: "opportunities to connect and collaborate worldwide",
    },
    {
      title: "Business Planning Tools",
      description: "to create an executive-ready plan and pitch",
    },
  ];

  const carouselRef = useRef(null);
  const dotRefs = useRef([]);

  const cardStyle = {
    minWidth: "250px",
    flex: "0 0 auto",
    margin: "0 1rem",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #D3D3D3",
    padding: "2rem",
    textAlign: "center",
    scrollSnapAlign: "center", // Changed from "start" to "center"
  };

  const titleStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const arrowButtonStyle = {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#444",
  };

  const scrollCarousel = (direction) => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const firstCard = carouselElement.querySelector(".card");
    if (!firstCard) return;

    const cardStyle = window.getComputedStyle(firstCard);
    const cardMarginRight = parseFloat(cardStyle.marginRight);
    const cardWidth = firstCard.offsetWidth + cardMarginRight;

    if (direction === "left") {
      carouselElement.scrollLeft -= cardWidth;
    } else {
      carouselElement.scrollLeft += cardWidth;
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleScroll = () => {
      const firstCard = carouselElement.querySelector(".card");
      if (!firstCard) return;

      const cardStyle = window.getComputedStyle(firstCard);
      const cardMarginRight = parseFloat(cardStyle.marginRight);
      const cardWidth = firstCard.offsetWidth + cardMarginRight;
      const scrollPosition = carouselElement.scrollLeft;

      const maxScrollLeft =
        carouselElement.scrollWidth - carouselElement.clientWidth;
      let activeIndex;

      if (scrollPosition >= maxScrollLeft - 10) {
        activeIndex = carouselItems.length - 1;
      } else {
        activeIndex = Math.round(scrollPosition / cardWidth);
      }

      dotRefs.current.forEach((dot, index) => {
        if (dot) {
          if (index === activeIndex) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        }
      });
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        scrollCarousel("left");
      } else if (event.key === "ArrowRight") {
        scrollCarousel("right");
      }
    };

    carouselElement.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      carouselElement.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "#F1F8ED", padding: "3rem 0" }}>
      <h4 className="text-uppercase fw-bold mb-3 text-center">
        WHAT WILL SELECTED ENTREPRENEURS RECEIVE?
      </h4>

      <div className="d-flex align-items-center justify-content-center position-relative">
        <div
          onClick={() => scrollCarousel("left")}
          style={{ ...arrowButtonStyle, left: "20px" }}
          className="d-none d-md-flex"
        >
          <ArrowLeft size={16} />
        </div>
        <div
          ref={carouselRef}
          className="d-flex overflow-auto custom-scroll-container px-4"
          style={{ width: "100%" }}
        >
          {carouselItems.map((item, index) => (
            <Card key={index} style={cardStyle}>
              <Card.Body>
                <h4 style={titleStyle}>{item.title}</h4>
                <p className="text-secondary">{item.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div
          onClick={() => scrollCarousel("right")}
          style={{ ...arrowButtonStyle, right: "20px" }}
          className="d-none d-md-flex"
        >
          <ArrowRight size={16} />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            ref={(el) => (dotRefs.current[index] = el)}
            className={`carousel-dot ${index === 0 ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </Container>
  );
};

const WhoCanApply = () => {
  const entrepreneurRequirements = [
    "Reside in or operate primarily from Southwest Nigeria (Lagos, Ogun, Oyo, Osun, Ondo, Ekiti)",
    "You must be the founder or co-founder of an early-stage startup or a clearly defined business idea with health-related outputs (e.g., food, wellness, hospital management, or related solutions).",
    "Business must be problem-solving and scalable",
    "Have prior experience or background in the healthcare or health-related sector",
    "Must commit 6-7 hours per week for 4 months",
    "Must not be currently enrolled in another full-time incubation/acceleration program",
    "Must actively participate in virtual sessions and mentorship check-ins",
  ];

  const mentorRequirements = [
    "5+ years of experience building or running a business (preferably in healthcare or a related sector)",
    "Passion for supporting innovation in healthcare and improving lives across Africa",
    "Available for 1-2 hours/week to support a founder",
    "Available for 1 hour/month to collaborate with other mentors",
    "Strong communication skills and ability to give feedback",
    "Willing to share insights, tips, and relevant networks",
    "Excited to be part of a pan-African innovation community",
    "Willing to engage the program content every week.",
  ];

  const cardStyle = {
    backgroundColor: "#F7E1F7",
    borderRadius: "10px",
    height: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#6E006A",
    borderColor: "#6E006A",
    padding: "0.5rem 2rem",
    fontWeight: "bold",
  };

  const listItemStyle = {
    listStyleType: "none",
    marginBottom: "0.75rem",
    fontSize: "0.9rem",
    lineHeight: "1.25rem",
  };

  const bulletStyle = {
    color: "#6E006A",
    marginRight: "0.5rem",
  };

  const cardHeaderStyle = {
    color: "#000000",
    textAlign: "center",
    marginBottom: "1rem",
  };

  return (
    <Container fluid style={{ backgroundColor: "#FFFFFF", padding: "3rem 0" }}>
      <h4 className="text-center text-uppercase fw-bold mb-5 text-center">
        WHO CAN APPLY
      </h4>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row className="g-4 d-flex justify-content-center align-items-stretch">
              {/* Entrepreneur Card */}
              <Col md={6}>
                <Card className="h-100 p-4" style={cardStyle}>
                  <Card.Body className="d-flex flex-column">
                    <h4 style={cardHeaderStyle}>Entrepreneurs</h4>
                    <p className="text-center text-secondary mb-4">
                      We are looking for bold, innovative founders with ideas
                      that solve real problems in healthcare and related sectors
                      with the potential to scale and make lasting impact.
                    </p>
                    <ul className="p-0">
                      {entrepreneurRequirements.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                          <span style={bulletStyle}>■</span> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-center">
                      <a
                        href="https://incubation.bridgeforbillions.org/signup?organization=224&program=586"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <Button style={buttonStyle}>
                          Apply As An Entrepreneur
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Mentor Card */}
              <Col md={6}>
                <Card className="h-100 p-4" style={cardStyle}>
                  <Card.Body className="d-flex flex-column">
                    <h4 style={cardHeaderStyle}>Mentors</h4>
                    <p className="text-center text-secondary mb-4">
                      We are calling on experienced founders, business
                      professionals, and operators to volunteer and help shape
                      the next wave of African innovators.
                    </p>
                    <ul className="p-0">
                      {mentorRequirements.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                          <span style={bulletStyle}>■</span> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-center">
                      <a
                        href="https://incubation.bridgeforbillions.org/signup?organization=224&program=586"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <Button style={buttonStyle}>Apply As A Mentor</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const WhyJoinGearUp = () => {
  const entrepreneursList = [
    "Build something real with expert help",
    "Get exposure to investors, mentors, and partners",
    "Join a powerful network across Africa",
    "Gain confidence and clarity in your journey",
  ];

  const mentorsList = [
    "Share your experience with driven founders",
    "Help shape impactful businesses",
    "Grow your own network and visibility",
    "Be a part of a pan-African innovation movement",
  ];

  const outerCardStyle = {
    backgroundColor: "#F5F0F5",
    borderRadius: "10px",
    marginBottom: "2rem",
  };

  const textCardStyle = {
    backgroundColor: "transparent",
    border: "none",
    padding: "2rem",
  };

  const listItemStyle = {
    listStyleType: "none",
    marginBottom: "1rem",
    fontSize: "0.9rem",
  };

  const bulletStyle = {
    color: "#882C5B",
    marginRight: "0.5rem",
  };

  const sectionPadding = {
    padding: "3rem 0",
  };

  return (
    <Container fluid style={{ backgroundColor: "#F7E1F7", ...sectionPadding }}>
      <h4 className="text-center text-uppercase fw-bold mb-5 text-center">
        WHY JOIN GEARUP?
      </h4>
      <Container>
        {/* For Entrepreneurs Section */}
        <Card style={outerCardStyle} className="mb-5">
          <Row className="g-0 align-items-center">
            <Col md={6}>
              <Card style={textCardStyle}>
                <Card.Body>
                  <h4 className="mb-4">For Entrepreneurs:</h4>
                  <ul className="p-0">
                    {entrepreneursList.map((item, index) => (
                      <li key={index} style={listItemStyle}>
                        <span style={bulletStyle}>■</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex align-items-stretch">
              <img
                src={imgTwo}
                alt="Entrepreneurs"
                className="img-fluid rounded-bottom rounded-md-end rounded-top-0 rounded-md-top"
              />
            </Col>
          </Row>
        </Card>

        {/* For Mentors Section */}
        <Card style={outerCardStyle}>
          <Row className="g-0 align-items-center flex-md-row-reverse">
            <Col md={6}>
              <Card style={textCardStyle}>
                <Card.Body>
                  <h4 className="mb-4">For Mentors</h4>
                  <ul className="p-0">
                    {mentorsList.map((item, index) => (
                      <li key={index} style={listItemStyle}>
                        <span style={bulletStyle}>■</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex align-items-stretch">
              <img
                src={imgThree}
                alt="Mentors"
                className="img-fluid rounded-bottom rounded-md-start rounded-top-0 rounded-md-top"
              />
            </Col>
          </Row>
        </Card>
      </Container>
    </Container>
  );
};

const ReadyToLaunch = () => {
  return (
    <div
      className="text-center position-relative"
      style={{ backgroundColor: "#F1F8ED", padding: "3rem 1rem" }}
    >
      <h4 className="text-center text-uppercase fw-bold mb-2 text-center">
        READY TO LAUNCH YOUR FUTURE?
      </h4>
      <p
        className="mb-0 px-3 py-3 mx-auto text-center"
        style={{ maxWidth: "700px" }}
      >
        As an entrepreneur, by the end of the GearUp Incubation Program, you
        will have a refined business plan, a solid investor pitch, and the tools
        to grow your business beyond borders. As a mentor, beyond advising, you
        will be a thought partner; guiding entrepreneurs toward smarter
        decisions and real growth.
      </p>
    </div>
  );
};

const ApplyNowSection = () => {
  const sectionStyle = {
    backgroundColor: "#FFFFFF",
    padding: "2rem 0",
  };

  const cardContainerStyle = {
    backgroundColor: "#F7E1F7",
    borderRadius: "10px",
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    color: "#8A2BE2",
    fontWeight: "bold",
    marginBottom: "2rem",
    fontSize: "1.5rem",
  };

  const textStyle = {
    color: "#555555",
    fontSize: "0.9rem",
  };

  const buttonStyle = {
    backgroundColor: "#6E006A",
    borderColor: "#6E006A",
    padding: "0.75rem 1.5rem",
    fontWeight: "bold",
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  };

  const iconImageStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h4 className="text-center text-uppercase fw-bold mb-4">APPLY NOW</h4>
        <div style={cardContainerStyle}>
          <Row className="d-flex align-items-center mb-4 text-center">
            <Col xs={12}>
              <p className="mb-0" style={textStyle}>
                <img
                  src={applyNowTimer}
                  alt="Hourglass Icon"
                  style={iconImageStyle}
                />
                Spots are limited! Don't miss your chance to launch, grow, and
                connect through this continent-wide movement.
              </p>{" "}
              <p style={textStyle}>
                {" "}
                <b style={{ color: "#6E006A" }}>Deadline: September 12, 2025</b>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center g-3">
            <Col xs="auto">
              <a
                href="https://incubation.bridgeforbillions.org/signup?organization=224&program=586"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button style={buttonStyle}>Apply As An Entrepreneur</Button>
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://incubation.bridgeforbillions.org/signup?organization=224&program=586"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button style={buttonStyle}>Apply As A Mentor</Button>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GearUp;
