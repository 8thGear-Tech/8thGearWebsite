import innkeeperlogo from "../assets/images/innkeeperlogo.png";
import { Link } from "react-router-dom";

const IndividualPortfolioInfo = () => {
  return (
    <>
      {/* <AboutStartup /> */}
      <Tractions />
    </>
  );
};

export const AboutStartup = (props) => {
  const { link, img, about, role, fullname, year, website } = props;
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-center pt-5">
            {" "}
            <Link to={link}>
              {" "}
              <img
                src={img}
                className=""
                //   // width="70px"
                //   height="40px"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 pt-4 ">
            <p className="d-flex text-center mx-2">{about}</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center my-3 g-0">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <div className="card-body ms-3">
              <h3 className="card-text">{role}</h3>
              <p className="card-text">{fullname}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <div className="card-body ms-3">
              <h3 className="card-text">{year}</h3>
              <a href="#" className="text-decoration-none text-black">
                <p>{website}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Tractions = (props) => {
  const { number, title, details } = props;
  return (
    <>
      <div className="card mb-5 py-5 tractionsCardBg">
        <div className="card-body">
          <h1 className="card-title">{number}</h1>
          <h4 className="card-title">{title}</h4>
          <p className="card-text"> {details}</p>
        </div>
      </div>
    </>
  );
};

export default IndividualPortfolioInfo;
