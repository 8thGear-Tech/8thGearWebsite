import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ imgSrc, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  return (
    <div
      className={`d-flex flex-column align-items-center ${
        isHovered ? "card-bg-img" : "card"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgSrc}
        alt="card image"
        className={`${isHovered ? "invisible" : ""}`}
      />
      <div className={`cardText ${isHovered ? "invisible" : ""}`}>
        <p className="text-white fs-6 text-center">{text}</p>
      </div>
    </div>
  );
};

export default Card;
