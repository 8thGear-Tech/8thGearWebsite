import React from "react";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        },
      },
    ],
  };

  const slidesData = [
    {
      image: "Image 1",
      title: "Title 1",
      staff: "Staff 1",
      link: "#",
    },
    {
      image: "Image 2",
      title: "Title 2",
      staff: "Staff 2",
      link: "#",
    },
    {
      image: "Image 3",
      title: "Title 3",
      staff: "Staff 3",
      link: "#",
    },
    {
      image: "Image 4",
      title: "Title 4",
      staff: "Staff 4",
      link: "#",
    },
    {
      image: "Image 5",
      title: "Title 5",
      staff: "Staff 5",
      link: "#",
    },
    // Add more slide data as needed
  ];

  return (
    <Container>
      <h2 className="text-center">Advisory Board</h2>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Card key={index} className="mx-2">
            <Card.Img variant="top" src="/images/team/damilolaobidairo.png" />
            <Card.Body>
              <Card.Title>{slide.title}</Card.Title>
              <Card.Text>{slide.staff}</Card.Text>
              <Button variant="link" href={slide.link} className="arrow-link d-flex align-items-center text-white text-decoration-none">
                Learn More <FaLongArrowAltRight />
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default SliderComponent;
