import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";

export const OurNewSpaces = () => {
  const images = [
    { src: "/images/coworkingNew/location_1.PNG", text: "8thGear Hub" },
    { src: "/images/coworkingNew/location_2.PNG", text: "Hub One" },
    // { src: "/images/coworkingNew/location_3.PNG", text: "Suburban Hub" },
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
    <div className="newSpaces text-center mt-5">
      {/* <div className="newSpaces text-center mt-3"> */}
      <div className="">
        <h3>OUR CO-WORKING SPACES</h3>
        {/* <p>Three locations, Same Excellent Customer Service.</p> */}
      </div>
      <div className="mb-4 ">
        <div className="content new-spaces-container container">
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
          <div className="button-container d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            {/* <div className="">
            <div className="row row-gap-3">
              <BsArrowUpSquare
                onClick={handleUp}
                type="button"
                className="location-arrow-height"
              />
              <BsArrowDownSquare
                onClick={handleDown}
                type="button"
                className="location-arrow-height"
              />
            </div> */}
            <i
              className="bi bi-arrow-up-square-fill"
              onClick={handleUp}
              type="button"
            ></i>
            <i
              className="bi bi-arrow-down-square-fill"
              onClick={handleDown}
              type="button"
            ></i>
          </div>
        </div>{" "}
        <div className="mt-3 d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
          {/* <BsArrowUpSquare
            onClick={handleUp}
            type="button"
            className="mx-1 location-arrow-height"
          />
          <BsArrowDownSquare
            onClick={handleDown}
            type="button"
            className="mx-1 location-arrow-height"
          /> */}
          <i
            className="bi bi-arrow-up-square-fill mx-1"
            onClick={handleUp}
            type="button"
          ></i>
          <i
            className="bi bi-arrow-down-square-fill mx-1"
            onClick={handleDown}
            type="button"
          ></i>
        </div>{" "}
        <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank">
          <Button>Book a Space</Button>
        </a>{" "}
      </div>
    </div>
  );
};
