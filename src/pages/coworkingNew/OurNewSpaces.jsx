import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";

export const OurNewSpaces = () => {
  const images = [
    // { src: "/images/coworkingNew/location_1.png", text: "8thGear Hub" },
    // { src: "/images/coworkingNew/location_2.png", text: "Hub One" },
    // { src: "/images/coworkingNew/location_3.PNG", text: "Suburban Hub" },
    { src: "https://www.youtube.com/embed/xw2gPCt1vfE?si=SKv79QNdgE57P6z0", text: "8thGear HQ" },
    { src: "https://www.youtube.com/embed/MODRgv5Wev0?si=uDkUscOSvy12YJu5", text: "Tech Showroom" },
    { src: "https://www.youtube.com/embed/0eI0lLgHjAQ?si=CAztrQqxFvAcEMJE", text: "Hub One" },
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
      <div className="pb-2">
        <h3>OUR CO-WORKING SPACES</h3>
        {/* <p>Three locations, Same Excellent Customer Service.</p> */}
      </div>
      <div className="mb-4 text-center container">
        <div className="content new-spaces-container container justify-content-center ">
          <div className="responsive-iframe">
            <iframe
              src={images[currentIndex].src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="position-absolute image-text">
              {images[currentIndex].text}
            </h3>

            <span className="text-primary">Here</span>
          </div>
          <div className="row row-gap-3 button-container d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
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
          </div>
        </div>{" "}


        <div className="mt-3 d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
          <BsArrowUpSquare
            onClick={handleUp}
            type="button"
            className="mx-1 location-arrow-height"
          />
          <BsArrowDownSquare
            onClick={handleDown}
            type="button"
            className="mx-1 location-arrow-height"
          />
        </div>{" "}
        <div>
          <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noreferrer">
            <Button>Book a Space</Button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
