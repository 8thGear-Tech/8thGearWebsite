import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";

export const OurNewSpaces = () => {
  const images = [
    { src: "/images/coworkingNew/location_1.PNG", text: "8thGear Hub" },
    { src: "/images/coworkingNew/location_2.PNG", text: "Hub One" },
    // { src: "/images/coworkingNew/slide3.png", text: "Suburban Hub" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
            <img
              src={images[currentIndex].src}
              alt={`hub${currentIndex + 1}`}
              className="image img-fluid w-100"
            />
            <h3 className="position-absolute image-text">
              {images[currentIndex].text}
            </h3>
          </div>
          <div className="row row-gap-3">
            <BsArrowUpSquare onClick={handleUp} type="button"  />
            <BsArrowDownSquare onClick={handleDown} type="button" />
          </div>
        </div>{" "}
        <a
          href="https://forms.gle/pjR1os5hN6WnbzFa9"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Book a Space</Button>
        </a>
      </div>
    </div>
  );
};
