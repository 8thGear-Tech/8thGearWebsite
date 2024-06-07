import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import coworking1 from "../../assets/images/coworking/carousel image/coworking1.jpg";
import coworking2 from "../../assets/images/coworking/carousel image/coworking2.jpg";
import podcast1 from "../../assets/images/coworking/carousel image/podcast1.jpg";
import podcast2 from "../../assets/images/coworking/carousel image/podcast2.jpg";

import "../../sassfiles/components/hero/_coWorkingCarousel.scss";

function CoworkingCarousel() {
    //Reduce the weight of the font
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="custom-carousel carousel fluid-container"
            data-ride="carousel"
            data-interval="3000"
        >
            {/* <div className="backdrop">
            </div> */}
            <Carousel.Item className="carousel-item" data-slide-to="0">
                <img src={coworking1} alt="coworking1" className="d-block w-100" />
                <Carousel.Caption className="carousel-caption">
                    <h3>8TH GEAR TRAINING ROOM </h3>
                    <p>Enjoy the best of 8th Gear co working space with the best facilities available</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" data-slide-to="1">
                <img src={podcast1} alt="Podcast1" className="d-block w-100" />
                <Carousel.Caption className="carousel-caption">
                    <h3>DIGIPLUS TECH SHOWROOM</h3>
                    <p>Let your voice be heard from your podcast facility</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" data-slide-to="2">
                <img src={coworking2} alt="coWorking1" className="d-block w-100" />
                <Carousel.Caption className="carousel-caption">
                    <h3>HUBONE, YABA</h3>
                    <p>
                        A workspace that helps you concentrate on your work with a good internet speed and a condusive
                        enviroment.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" data-slide-to="3">
                <img src={podcast2} alt="Podcast2" className="d-block w-100" />
                <Carousel.Caption className="carousel-caption">
                    <h3>PODCAST STUDIO</h3>
                    <p>
                        A fully furnished studio that helps actuallise your dream of having a podcast and any studio
                        production that you can ever imangine.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> */}
        </Carousel>
    );
}

export default CoworkingCarousel;
