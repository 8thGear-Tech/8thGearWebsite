import React from "react";
import {Carousel} from "react-bootstrap";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
import s4plogo from "../../assets/images/projectdelivery/s4plogo.png";
import fcmblogo from "../../assets/images/projectdelivery/fcmblogo.png";

//SASS file
import "../../sassfiles/components/hero/_logosCarousel.scss";

const LogoCarousel = () => {
    return (
        <Carousel indicators={false} controls={false} interval={2000} className="small-carousel">
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={gizlogo} alt="GIZ logo" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={itflogo} alt="Itf Logo" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={lsetflogo} alt="lsetflogo" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={usadflogo} alt="usadf Logo" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={s4plogo} alt="S4P logo" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={fcmblogo} alt="FCMB logo" />
            </Carousel.Item>
        </Carousel>
    );
};

export default LogoCarousel;
