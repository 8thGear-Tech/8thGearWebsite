import { useState } from "react";
import "./getToKnowUs.css";
import TestimonyCard from "./TestimonyCard";
import "../../pages/homePage.css";

export const Testimonies = () => {
  const testimonialCardData = [
    {
      imgSrc: "/images/coworkingNew/testimonyImgPlaceholder.jpeg",
      userName: "Adekoya Kehinde",
      role: "Product Designer",
      testimony: "I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."
    },
    {
      imgSrc: "/images/coworkingNew/testimonyImgPlaceholder.jpeg",
      userName: "Adekoya Kehinde",
      role: "Product Designer",
      testimony: "I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."
    },
    {
      imgSrc: "/images/coworkingNew/testimonyImgPlaceholder.jpeg",
      userName: "Adekoya Kehinde",
      role: "Product Designer",
      testimony: "I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."
    }
  ]

  return (
    <div className="testimonies d-flex flex-column gap-4 justify-content-center py-4">
      {/* Title  */}
      <div className="text-center p-4">
        <h3 className="fw-semibold">Testimonies</h3>
        <p className="fw-normal">Read what the Customers Says</p>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {testimonialCardData.map((cardData, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3 mb-md-0">
              <div className="card shadow border-end border-bottom border-start border-top-0 cardDiv">
                <TestimonyCard
                  imgSrc={cardData.imgSrc}
                  name={cardData.userName}
                  role={cardData.role}
                  testimony={cardData.testimony}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const EMBED_URL =
  "https://www.youtube.com/embed/V0JahOeWs4g?si=OPURaA53hQl2P7UX&autoplay=1";
const THUMB_URL = "https://img.youtube.com/vi/V0JahOeWs4g/hqdefault.jpg";
// const THUMB_URL = "https://img.youtube.com/vi/V0JahOeWs4g/maxresdefault.jpg";


export const Testimonials = () => {
  const [src, setSrc] = useState("");

  return (
    <div
      className="container-fluid"
    >
      <h3 className="pt-5 mt-5 text-center">
       TESTIMONIALS
      </h3>

      <div className="d-flex justify-content-center mt-4">
        <div className="col-12 col-md-10 col-lg-6 mx-auto">
          <div
            className="gradient-card"
            onClick={() => !src && setSrc(EMBED_URL)}
          >
            <div
              className="video-placeholder"
              style={{ backgroundImage: `url(${THUMB_URL})` }}
            >
              {!src && <div className="play-button" />}
              {src && (
                <iframe
                  className="video-iframe"
                  src={src}
                  title="8thGear Spotlight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


