import Card from "./Cards";
import "./getToKnowUs.css";

export const GetToKnowUs = () => {

  const cardData = [
    {
      title: "Monday-Friday (9am-5pm)",
      imgSrc: "/images/coworkingNew/alarm.svg",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Kitchenette",
      imgSrc: "/images/coworkingNew/Vector.svg",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Access to Advisory Services",
      imgSrc: "/images/coworkingNew/advisoryServices.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Serene Environment",
      imgSrc: "/images/coworkingNew/sereneEnvironment.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Ecosystem Events",
      imgSrc: "/images/coworkingNew/ecosystemEvents.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Lagos Innovative Partnered",
      imgSrc: "/images/coworkingNew/innovatePartnered.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Meeting Room / Training Room",
      imgSrc: "/images/coworkingNew/meetingRoom.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
    {
      title: "Internet Services",
      imgSrc: "/images/coworkingNew/intrnetServices.png",
      bgImgSrc: "/images/coworkingNew/card-bg-pics.png"
    },
  ];


  return (
    <div className="get-to-know-us d-flex flex-column gap-4 justify-content-center py-4">
      {/* Title  */}
      <div className="text-center p-4">
        <h3 className="fw-semibold">GET TO KNOW US</h3>
        <p className="fw-normal">The Gears You Need</p>
      </div>
      {/* Cards rows and columns */}
      <div className="container">
        <div className="row gy-4  mx-md-5">
          {cardData.map((data, index) => (
            <div className="col-12 col-md-6 d-flex justify-content-center" key={index}>
              <Card
                imgSrc={data.imgSrc}
                text={data.title}
                bgImgSrc={data.bgImgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
