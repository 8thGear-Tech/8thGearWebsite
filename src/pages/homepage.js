import { Link } from "react-router-dom";
import { BookIcon } from "../components/Icons";
import { HomeBtn, JointheStudioBtn } from "../components/Buttons/ContactBtn";
import venturestudioicon from "../assets/images/venturestudioicon.png";
import projectdeliveryicon from "../assets/images/projectdeliveryicon.png";
import gearupicon from "../assets/images/gearupicon.png";
import evolveicon from "../assets/images/evolveicon.png";
import engageicon from "../assets/images/engageicon.png";
import { HomepageNav, Navbar0 } from "../components/Navbar";
import { JoinTheStudioForm } from "../components/Forms/EnquiresandSuggestionForm";
import { HomePageHero } from "../components/Hero/ImageandTextHero";
import { VentureStudioIcon } from "../components/Icons";
import { ProjectDeliveryIcon } from "../components/Icons";
import { GearUpIcon } from "../components/Icons";
import { EvolveIcon } from "../components/Icons";
import { EngageIcon } from "../components/Icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//ASSESTS
import "../sassfiles/pages/_home.scss";
import hubservices from "../assets/images/Homepageassets/HubServices.jpg";
import projects from "../assets/images/Homepageassets/Projects.jpg";
import venture from "../assets/images/Homepageassets/VentureStudio.jpg";
// import easesoilless from "../assets/images/Homepageassets/easesoiless.jpg";
// import heaven from "../assets/images/Homepageassets/haven.png";
// import innkeeper from "../assets/images/Homepageassets/innkeeperlogo.png";
// import legalMo from "../assets/images/Homepageassets/legalmo.png";
// import trulance from "../assets/images/Homepageassets/trulance.png";
import LogoScroll from "../components/Hero/LogoScroll";
import aboutusimg from "../assets/images/Homepageassets/aboutImg.png";
import homeImg from "../assets/images/Homepageassets/homeImg.png";
import { Image } from "react-bootstrap";
import { Partners } from "./WhoWeAre/aboutUs";

const Home = () => {
  return (
    <>
      <HomepageNav />
      {/* <Navbar0/> */}
      <BigHeroSection />
      <SmallHeroSection />
      <Service />
      {/* <Line /> */}
      <Partners />
      {/* <SectionTwo /> */}
      <AboutSection />
      {/* <Line /> */}
      {/* <SectionThree /> */}
    </>
  );
};

// HERO SECTION
const BigHeroSection = () => {
  return (
    <>
      {/* <div className=""> */}
      <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
        {/* <div className=""> */}
        <div className="px-4 container-fluid homeHeroBig d-flex pt-3 pb-4 align-items-center ">
          <div className="gradientBgg overlayBgg"></div>
          <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5">
            <h1
              className="blurred-text-container homedesktophero"
              style={{ fontSize: "2.8rem", color: "#fff" }}
            >
              <span className="blurred-text homedesktophero">
                {" "}
                Great people building enduring ventures
              </span>
            </h1>

            <p
              className="blurred-text-container homedesktophero"
              style={{ fontSize: "1.2rem", color: "#fff" }}
            >
              <span className="blurred-text homedesktophero">
                {" "}
                Developing a Thriving Ecosystem for Enterpreneurs
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ABOUT US
const SmallHerooSection = () => {
  return (
    <div className="d-lg-none d-md-none d-sm-block d-xs-block">
      <div
        className="container-fluid jj"
        // style={{ backgroundColor: "linear-gradient(to bottom, grey, white)" }}
      >
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-12 pt-lg-3 pt-md-3 my-5">
            <h2
              className="blurred-text-container homedesktophero"
              style={{ fontSize: "2.2rem", color: "#fff" }}
            >
              <span className="blurred-text homedesktophero">
                {" "}
                Great people building enduring ventures
              </span>
            </h2>

            <p
              className="blurred-text-container homedesktophero"
              style={{ fontSize: "1.2rem", color: "#fff" }}
            >
              <span className="blurred-text homedesktophero">
                {" "}
                Developing a Thriving Ecosystem for Enterpreneurs
              </span>
            </p>
          </div>
          <div className="col-sm-12">
            <img
              src={homeImg}
              className="d-block img-fluid"
              alt=""
              loading=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const SmallHeroSection = () => {
  return (
    <div className="d-lg-none d-md-none d-sm-block d-xs-block">
      {/* <div className=""> */}
      <div className="px-4 container-fluid homeHeroSmall pt-3 pb-4 align-items-center">
        {/* <div className="px-4 container-fluid homeHeroSmall d-flex pt-3 pb-4 align-items-center "> */}
        <div className="gradientBggg overlayBggg"></div>
        <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5 mt-3 pb-5">
          <h2
            className="blurred-text-container homedesktophero"
            style={{ fontSize: "2rem", color: "#fff" }}
          >
            <span className="blurred-text homedesktophero">
              {" "}
              Great people building enduring ventures
            </span>
          </h2>

          <p
            className="blurred-text-container homedesktophero"
            style={{ fontSize: "1.2rem", color: "#fff" }}
          >
            <span className="blurred-text homedesktophero">
              {" "}
              Developing a Thriving Ecosystem for Enterpreneurs
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
// SERVICE SECTION
const Service = () => {
  return (
    <div
      className="container-fluid pb-5"
      style={{ backgroundColor: "#f1f8ed" }}
    >
      <div className="row justify-content-evenly px-lg-5 px-md-5">
        <h3 className="purple-text pt-5 text-center">OFFERINGS</h3>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div
            className="service-card text-center"
            style={{ backgroundColor: "#fff" }}
          >
            <img
              src={hubservices}
              className="card-img-top"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              alt=""
            />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">Hub Services</h4>
              <p className="">
                Empowering your venture with{" "}
                <Link
                  to="/growth-advisory"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Growth-Advisory
                </Link>
                ,{" "}
                <Link
                  to="/talent-placement"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Talent Placement
                </Link>{" "}
                & collaborative{" "}
                <Link
                  to="/coworking"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Co-working
                </Link>{" "}
                services.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div
            className="service-card text-center"
            style={{ backgroundColor: "#fff" }}
          >
            <img
              src={projects}
              className="card-img-top"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              alt=""
            />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">
                <Link
                  to="/projects"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Projects
                </Link>
              </h4>
              <p className="">
                Innovate. Execute. Succeed - The Project Experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-3 mb-5 px-4 d-flex">
          <div
            className="service-card text-center"
            style={{ backgroundColor: "#fff" }}
          >
            <img
              src={venture}
              className="card-img-top"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              alt=""
            />
            <div className="card-body pb-3 px-3">
              <h4 className="card-text mt-4">
                <Link
                  to="/portfolio"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Venture Studio
                </Link>
              </h4>
              <p className="">
                Crafting Success: Your Idea, Our Expertise, Thriving Ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid py-4 serviceSection">
    //   <h3 className="purple-text text-center mb-3">SERVICES</h3>
    //   <div className="row d-flex ">
    //     {/* <div className="d-flex flex-column justify-content-lg-center flex-lg-row align-items-center flex-sm-column gap-3"> */}
    //     {/* Hub Services */}
    //     <Card style={{ width: "18rem" }} className="service-card rounded">
    //       <Card.Img
    //         variant="top"
    //         src={hubservices}
    //         className="service-thumbnail"
    //         thumbnail
    //         fluid
    //       />
    //       <Card.Body className="shadow text-center">
    //         <Card.Title className="text-black">Hub Services</Card.Title>
    //         <Card.Text className="text-center py-2">
    //           Empowering your venture with Growth-as-a-service, Talent Placement
    //           & collaborative Co-working services
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     {/* PROJECTS */}
    //     <Card style={{ width: "18rem" }} className="service-card rounded">
    //       <Card.Img
    //         variant="top"
    //         src={projects}
    //         className="service-thumbnail"
    //         thumbnail
    //         fluid
    //       />
    //       <Card.Body className="shadow text-center">
    //         <Card.Title className="text-black">Projects</Card.Title>
    //         <Card.Text className="text-center py-2">
    //           Innovate. Execute. Succeed - The Project Experience
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     {/* VENTURE STUDIO */}
    //     <Card style={{ width: "18rem" }} className="service-card rounded">
    //       <Card.Img
    //         variant="top"
    //         src={venture}
    //         className="service-thumbnail"
    //         thumbnail
    //         fluid
    //       />
    //       <Card.Body className="shadow text-center rounded">
    //         <Card.Title className="text-black">Venture Studio</Card.Title>
    //         <Card.Text className="text-center py-2">
    //           Crafting Success: Your Idea, Our Expertise, Thriving Ventures
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </div>
  );
};

// const Line = () => {
//     return (
//         <>
//             <div className="container">
//                 <div className="border-top">{/* <hr /> */}</div>
//             </div>
//         </>
//     );
// };

// ABOUT US
const AboutSection = () => {
  return (
    <div className="container-fluid aboutUS py-lg-5 py-md-3">
      <div className="row align-items-center justify-content-center px-4 pt-lg-5 pt-md-3 pb-5">
        <div className="col-lg-5 col-md-7 col-sm-12 pt-lg-3 pt-md-3 my-5">
          <h3 className="purple-text">
            ABOUT US
            <br />
          </h3>
          <p className="">
            Your trusted partner in venture building, guiding startups and
            businesses towards sustainable growth and success.
          </p>
          <Button className="aboutbtn m-0">
            <Link to="/about" className="purple-text text-decoration-none">
              Who We Are
            </Link>
          </Button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={aboutusimg}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
            style={{
              borderRadius: "20px",
              boxShadow: "0 12px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>

    // <div className="aboutUS container-fluid d-flex flex-lg-row flex-column justify-content-center justify-content-sm-center justify-content-lg-evenly align-items-center py-5">
    //   <div className="my-1 align-items-center">
    //     <h3 className="purple-text">ABOUT US</h3>
    //     <p>
    //       Your trusted partner in Venture Building, guiding startups and
    //       Businesses towards sustainable growth and success
    //     </p>
    //     <Button className="aboutbtn">
    //       <Link to="/about" className="purple-text text-decoration-none">
    //         Who We Are
    //       </Link>
    //     </Button>
    //   </div>
    //   <div className="aboutimg py-4 d-flex justify-content-center ">
    //     <Image
    //       src={aboutusimg}
    //       alt="About Us Img"
    //       fluid
    //       className="aboutImage w-75 "
    //     />
    //   </div>
    // </div>
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
            <VentureStudioIcon />
            {/* <img
              src={venturestudioicon}
              alt=""
              width="50px"
              height="50px"
              className="mb-3"
            /> */}
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
            <ProjectDeliveryIcon />
            {/* <img
              src={projectdeliveryicon}
              alt=""
              width="70px"
              height="70px"
              className="mb-3"
            /> */}
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
    <div className="container-fluid text-center px-5 pt-5 pb-3 SectionTwoBg mt-5">
      {" "}
      <h4 className="">PILLARS</h4>
      <p className="textFont">
        On these three pillars, we are creating an Africa of value creators by
        delving deep to cultivate the most innovative startups.
      </p>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="card mb-5 py-4 cardBg">
            <div className="text-center">
              <GearUpIcon />
            </div>
            <div className="card-body">
              <h4 className="card-title">GEAR UP</h4>
              <p className="card-text">
                Mentally and physically prepare for the journey ahead. Bringing
                ideas to life is no small feat but it is a laudable one.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          {" "}
          <div className="card mb-5 py-4 cardBg">
            <div className="text-center">
              <EvolveIcon />
            </div>
            <div className="card-body">
              <h4 className="card-title">EVOLVE</h4>
              <p className="card-text">
                Be fluid and dynamic, ready to adjust to market demands while
                offering value.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          {" "}
          <div className="card mb-5 py-4 cardBg">
            <div className="text-center">
              <EngageIcon />
            </div>
            <div className="card-body">
              <h4 className="card-title">ENGAGE</h4>
              <p className="card-text">
                Don't keep that idea under the bushel, actively engage customers
                for feedback while shouting about it on the rooftop.
              </p>
            </div>
          </div>
        </div>
      </div>
      <JoinTheStudioForm />
      <a
        href="https://calendly.com/inc-consults/15min?month=2022-10"
        target="_blank"
        className="text-decoration-none"
      >
        <p className="mt-3 talkToUsText text-decoration-underline">
          Talk to us
        </p>
      </a>
      {/* <JointheStudioBtn /> */}
    </div>
  );
};

export default Home;
