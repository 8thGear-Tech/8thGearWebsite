import { useState } from "react";

const Card = ({ imgSrc, text, bgImgSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`d-flex flex-column align-items-center ${
        isHovered ? "card-bg-img" : "card"
      }`}
      style={{
        backgroundImage: isHovered ? `url(${bgImgSrc})` : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgSrc}
        alt="card"
        className={`${isHovered ? "invisible" : ""} py-2`}
      />
      <div className={`cardText ${isHovered ? "invisible" : ""} py-3`}>
        <p className="text-white fs-6 text-center">{text}</p>
      </div>
    </div>
  );
};

export default Card;
