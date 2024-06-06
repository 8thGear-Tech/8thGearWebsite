import './getToKnowUs.css'
import TestimonyCard from "./TestimonyCard";

export const Testimonies = () => {
  return (
    <div className="testimonies d-flex flex-column gap-4 justify-content-center py-4">
      {/* Title  */}
      <div className="text-center p-4">
        <h3 className="fw-semibold">Testimonies</h3>
        <p className="fw-normal">Read what the Customers Says</p>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center ">
          {/* Card 1  */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-end border-bottom border-start border-top-0 cardDiv">
              <TestimonyCard 
                imgSrc={'/images/coworkingNew/testimonyImgPlaceholder.jpeg'} 
                name={"Adekoya Kehinde"} 
                role={"Product Designer"} 
                testimony={"I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."} 
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-end border-bottom border-start border-top-0 cardDiv">
              <TestimonyCard 
                imgSrc={'/images/coworkingNew/testimonyImgPlaceholder.jpeg'} 
                name={"Adekoya Kehinde"} 
                role={"Product Designer"} 
                testimony={"I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."} 
              />
            </div>
          </div>
          {/* Card 3  */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-end border-bottom border-start border-top-0 cardDiv">
              <TestimonyCard 
                imgSrc={'/images/coworkingNew/testimonyImgPlaceholder.jpeg'} 
                name={"Adekoya Kehinde"} 
                role={"Product Designer"} 
                testimony={"I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."} 
              />
            </div>
          </div>
          {/* Card 4  */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-end border-bottom border-start border-top-0 cardDiv">
              <TestimonyCard 
                imgSrc={'/images/coworkingNew/testimonyImgPlaceholder.jpeg'} 
                name={"Adekoya Kehinde"} 
                role={"Product Designer"} 
                testimony={"I recently purchased Wi-Fi service from DigiPlus Connect Cafe, and I must say, it has completely transformed my online experience."} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
