import "./getToKnowUs.css";
import TestimonyCard from "./TestimonyCard";

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
