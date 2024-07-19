import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutUs.css";

//Slider Settings
const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

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

  return (
    <Container>
      <h2 className="text-center my-4 fs-4">ADVISORY BOARD</h2>
      <Slider {...settings} className="SliderBg mt-5">
        {slidesData.map((slide, index) => (
          <Card key={index} className="slideCard mt-5 mb-5">
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
      </Slider>
    </Container>
  );
};

export default SliderComponent;
