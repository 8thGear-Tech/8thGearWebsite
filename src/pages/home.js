import { Link } from "react-router-dom";
import { BookIcon } from "../components/Icons";
import { LetUsKnowBtn } from "../components/Buttons/EventsBtn";
import venturestudioicon from "../assets/images/venturestudioicon.png";
import projectdeliveryicon from "../assets/images/projectdeliveryicon.png";
import gearupicon from "../assets/images/gearupicon.png";
import evolveicon from "../assets/images/evolveicon.png";
import engageicon from "../assets/images/engageicon.png";
const Home = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
};
const SectionOne = () => {
  return (
    <div className="container-fluid p-5 ">
      <p className="text-center pb-4">
        8thGear is a
        <Link
          to="/"
          className=" mx-2"
          // aria-current="page"
          style={{ color: "#000" }}
        >
          Venture Studio
        </Link>
        &
        <Link
          to="/"
          className=" mx-2"
          // aria-current="page"
          style={{ color: "#000" }}
        >
          Project Delivery
        </Link>
        Company
      </p>
      {/* <div className="border-end"></div> */}
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center">
          <h3 className="pb-4 ">We are builders funding the next generation</h3>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex mb-5 ">
            <div className="col">
              {/* <BookIcon /> */}
              <img
                src={venturestudioicon}
                alt=""
                width="50px"
                height="50px"
                className="mb-3"
              />
              <h3>VENTURE STUDIO</h3>
              <p>We build at 8thGear We build at 8thGear We build at 8thGear</p>
            </div>
          </div>
          <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              <img
                src={projectdeliveryicon}
                alt=""
                width="70px"
                height="70px"
                className="mb-3"
              />
              <h3>PROJECT DELIVERY</h3>
              <p>We build at 8thGearWe build at 8thGear We build at 8thGear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionTwo = () => {
  return (
    <div className="container-fluid text-center p-5 sectionTwoBg">
      {" "}
      <h4 className="">Our Business Creation Platform</h4>
      <p className="">
        The next wave of venture capital is more than just investing, it's
        business creation. Our collaborative platform has three components.
      </p>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
          <div className="card mb-5 py-5 cardBg">
            <img
              src={gearupicon}
              className="p-3 mx-auto w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">GEAR UP</h4>
              <p className="card-text">
                {" "}
                It's business creation. Our collaborative platform has three
                components. It's business creation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
          {" "}
          <div className="card mb-5 py-5 cardBg">
            <img
              src={evolveicon}
              className="p-3 mx-auto w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">EVOLVE</h4>
              <p className="card-text">
                {" "}
                It's business creation. Our collaborative platform has three
                components. It's business creation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
          {" "}
          <div className="card mb-5 py-5 cardBg">
            <img
              src={engageicon}
              className="p-3 mx-auto w-50"
              // width="70px"
              // height="70px"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">ENGAGE</h4>
              <p className="card-text">
                {" "}
                It's business creation. Our collaborative platform has three
                components. It's business creation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <LetUsKnowBtn /> */}
    </div>
  );
};

export default Home;
