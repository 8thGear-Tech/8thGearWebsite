import { useState } from "react";
import Button from 'react-bootstrap/Button';


export const OurNewSpaces = () => {
  const images = [
    { src: "/images/coworkingNew/slide1.png", text: "Magogo Hub" },
    { src: "/images/coworkingNew/slide2.png", text: "Downtown Hub" },
    { src: "/images/coworkingNew/slide3.png", text: "Suburban Hub" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="newSpaces text-center">
      <div className="m-4">
        <h3>OUR CO-WORKING SPACES</h3>
        <p>Three locations, Same Excellent Customer Service.</p>
      </div>
      <div className="mb-4 ">
        <div className="content container">
          <div className="image-container position-relative">
            <img src={images[currentIndex].src} alt={`hub${currentIndex + 1}`} className="image" />
            <h3 className="position-absolute image-text">{images[currentIndex].text}</h3>
          </div>
          <div className="button-container">
            <i className="bi bi-arrow-up-square-fill" onClick={handleUp} type="button"></i>
            <i className="bi bi-arrow-down-square-fill" onClick={handleDown} type="button"></i>
          </div>
        </div>
        <Button>
          Book a Space
        </Button>
      </div>
    </div>
  );
};
