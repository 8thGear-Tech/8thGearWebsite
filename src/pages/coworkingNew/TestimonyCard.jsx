import PropTypes from "prop-types";

const TestimonyCard = ({ imgSrc, name, role, testimony }) => {
  TestimonyCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    testimony: PropTypes.string.isRequired,
  };

  return (
    <div className="testimony d-flex flex-column align-items-center">
      <img src={imgSrc} alt="card image" className="rounded-circle pt-2" />
      <div className="cardText text-center">
        <h2 className="name fw-medium fs-6 text-center pt-2">{name}</h2>
        <p className="role fw-normal">{role}</p>
        <p className="testimonyText fw-normal px-3">{testimony}</p>
        <div className="stars">
          <img src="/images/coworkingNew/star.png" alt="" />
          <img src="/images/coworkingNew/star.png" alt="" />
          <img src="/images/coworkingNew/star.png" alt="" />
          <img src="/images/coworkingNew/star.png" alt="" />
          <img src="/images/coworkingNew/star.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
