import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutUs.css";

const slidesData = [
  {
    image: "/images/team/damilolaobidairo.png",
    title: "Damilola Obidairo",
    staff: "CEO",
    link: "https://www.linkedin.com/in/damilolaobidairo/",
  },
  {
    image: "/images/team/madamwunmi.png",
    title: "Omowunmi Obidairo",
    staff: "Executive Director",
    link: "https://www.linkedin.com/in/omowunmiobidairo/",
  },
  {
    image: "/images/team/damilolaobidairo.png",
    title: "Rotimi Owowa",
    staff: "Director",
    link: "https://www.linkedin.com/in/rotimi-owowa-bab8b113/",
  },
  {
    image: "/images/advisoryImage/sutinyang.png",
    title: "Sutin Yang",
    staff: "Partnerships Advisor",
    link: "https://www.linkedin.com/in/sutiny/",
  },
  {
    image: "/images/advisoryImage/Seyi Bioku.jpg",
    title: "Seyi Bioku",
    staff: "Advisor & Board Secretary",
    link: "https://www.linkedin.com/in/seyi-bioku-870539116/",
  },
  {
    image: "/images/advisoryImage/morenikejibuari.png",
    title: "Morenikeji Buari",
    staff: "Finance Advisor",
    link: "https://www.linkedin.com/in/morenikeji-dayo-adebanjo-buari-fca-acit-mba-3b5b4172/",
  },
  {
    image: "/images/advisoryImage/Sholeye.jpg",
    title: "Olatutu Soleye",
    staff: "Governance & Ethics Advisor",
    link: "https://www.linkedin.com/in/olatutu-sholeye-470a9948/",
  },
  {
    image: "/images/advisoryImage/yinkaogunleye.png",
    title: "Yinka Ogunleye",
    staff: "Strategy Advisor",
    link: "#",
  },
];

const SliderComponent = () => {
  return (
    <Container>
      <h2 className="text-center my-4 mt-5 fs-4">ADVISORY BOARD</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <div className="scroll-container">
            <div className="scroll-content">
              {slidesData.map((slide, index) => (
                <Card key={index} className="scroll-card slideCard mb-5">
                  <Card.Img variant="top" src={slide.image} className="img-fluid ImgCard" />
                  <Card.Body className="rounded-bottom bodyBG text-white">
                    <Card.Title className="fs-5 mb-0">{slide.title}</Card.Title>
                    <Card.Text className="fs-6 mb-1">{slide.staff}</Card.Text>
                    <a href={slide.link} className="arrow-link d-flex align-items-center text-white text-decoration-none">
                      <FaArrowRight />
                    </a>
                  </Card.Body>
                </Card>
              ))}
              {/* Repeat the content to create an infinite scroll illusion */}
              {slidesData.map((slide, index) => (
                <Card key={index + slidesData.length} className="scroll-card slideCard">
                  <Card.Img variant="top" src={slide.image} className="img-fluid ImgCard" />
                  <Card.Body className="rounded-bottom bodyBG text-white">
                    <Card.Title className="fs-5 mb-0">{slide.title}</Card.Title>
                    <Card.Text className="fs-6 mb-1">{slide.staff}</Card.Text>
                    <a href={slide.link} className="arrow-link d-flex align-items-center text-white text-decoration-none">
                      <FaArrowRight />
                    </a>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SliderComponent;
