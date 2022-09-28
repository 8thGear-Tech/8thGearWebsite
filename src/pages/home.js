import { Link } from "react-router-dom";
import { BookIcon } from "../components/Icons";
import { JointheStudioBtn } from "../components/Buttons/ContactBtn";
import venturestudioicon from "../assets/images/venturestudioicon.png";
import projectdeliveryicon from "../assets/images/projectdeliveryicon.png";
import gearupicon from "../assets/images/gearupicon.png";
import evolveicon from "../assets/images/evolveicon.png";
import engageicon from "../assets/images/engageicon.png";
import { Navbar0 } from "../components/Navbar";
import { JoinTheStudioForm } from "../components/Forms/EnquiresandSuggestionForm";
import { HomePageHero } from "../components/Hero/ImageandTextHero";

const Home = () => {
  return (
    <>
      <Navbar0 />
      <HomePageHero />
      <SectionOne />
      <Line />
      <SectionTwo />
      <Line />
      <SectionThree />
    </>
  );
};
const SectionOne = () => {
  return (
    <div className="container-fluid py-4 ">
      <p className="text-center homePageText">
        8thGear is a
        <Link
          to="/our-model"
          className=" mx-2"
          // aria-current="page"
          style={{ color: "#000" }}
        >
          Venture Studio
        </Link>
        &
        <Link
          to="/project-delivery"
          className=" mx-2"
          // aria-current="page"
          style={{ color: "#000" }}
        >
          Project Delivery
        </Link>
        Company
      </p>
      {/* <div className="border-end"></div> */}
    </div>
  );
};

const Line = () => {
  return (
    <>
      <div className="container">
        <div className="border-top">{/* <hr /> */}</div>
      </div>
    </>
  );
};
const SectionTwo = () => {
  return (
    <div className="container p-5 d-flex justify-content-center">
      {/* <div className="border-end"></div> */}
      <div className="row ">
        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center">
          <h2 className="pb-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
            We are value creators, building profitable and enduring businesses.
          </h2>
          <h3 className="pb-4 d-xs-block d-sm-block d-md-block d-lg-none">
            We are value creators, building profitable and enduring businesses.
          </h3>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 ">
          {/* <div className="col d-lg-flex d-md-flex mb-5 float-end"> */}
          <div className="col">
            <img
              src={venturestudioicon}
              alt=""
              width="50px"
              height="50px"
              className="mb-3"
            />
            <Link to="/our-model" className="headerText">
              <h3>VENTURE STUDIO</h3>
            </Link>

            <p className="textFont">
              Turning ideas either ours or yours into sustainable businesses is
              what we do best.
            </p>
          </div>
          {/* </div> */}
          {/* <div className="col d-lg-flex d-md-flex float-end"> */}
          <div className="col">
            <img
              src={projectdeliveryicon}
              alt=""
              width="70px"
              height="70px"
              className="mb-3"
            />
            <Link to="/project-delivery" className="headerText">
              <h3>PROJECT DELIVERY</h3>
            </Link>

            <p className="textFont">
              {" "}
              Executing impact and self sustaining initiatives is our forte.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
const SectionThree = () => {
  return (
    <div className="container-fluid text-center p-5 SectionTwoBg mt-5">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <p className="textFont">
        On these three pillars, we are creating an Africa of value creators by
        delving deep to cultivate the most innovative startups.
      </p>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
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
                Mentally and physically prepare for the journey ahead. Bringing
                ideas to live is no small feat but it is a laudable one.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
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
                Be fluid and dynamic, ready to adjust to market demands while
                offering value.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
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
                Don't keep that idea under the bushel, actively engage customers
                for feedback while shouting about it on the rooftop.
              </p>
            </div>
          </div>
        </div>
      </div>
      <JoinTheStudioForm />
      {/* <JointheStudioBtn /> */}
    </div>
  );
};

export default Home;
