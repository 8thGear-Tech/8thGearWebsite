import {Link} from "react-router-dom";
import {BookIcon} from "../components/Icons";
import {HomeBtn, JointheStudioBtn} from "../components/Buttons/ContactBtn";
import venturestudioicon from "../assets/images/venturestudioicon.png";
import projectdeliveryicon from "../assets/images/projectdeliveryicon.png";
import gearupicon from "../assets/images/gearupicon.png";
import evolveicon from "../assets/images/evolveicon.png";
import engageicon from "../assets/images/engageicon.png";
import {HomepageNav, Navbar0} from "../components/Navbar";
import {JoinTheStudioForm} from "../components/Forms/EnquiresandSuggestionForm";
import {HomePageHero} from "../components/Hero/ImageandTextHero";
import {VentureStudioIcon} from "../components/Icons";
import {ProjectDeliveryIcon} from "../components/Icons";
import {GearUpIcon} from "../components/Icons";
import {EvolveIcon} from "../components/Icons";
import {EngageIcon} from "../components/Icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//ASSESTS
import "../sassfiles/pages/_home.scss";
import hubservices from "../assets/images/Homepageassets/HubServices.jpg";
import projects from "../assets/images/Homepageassets/Projects.jpg";
import venture from "../assets/images/Homepageassets/VentureStudio.jpg";
import easesoilless from "../assets/images/Homepageassets/easesoiless.jpg";
import heaven from "../assets/images/Homepageassets/haven.png";
import innkeeper from "../assets/images/Homepageassets/innkeeperlogo.png";
import legalMo from "../assets/images/Homepageassets/legalmo.png";
import trulance from "../assets/images/Homepageassets/trulance.png";
import LogoScroll from "../components/Hero/LogoScroll";
import aboutusimg from "../assets/images/Homepageassets/aboutImg.jpg";
import {Image} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <HomepageNav />
            <HeroSection />
            <Service />
            // {/* <Line /> */}
            <PortCos />
            {/* <SectionTwo /> */}
            <AboutSection />
            {/* <Line /> */}
            //  <SectionThree />
        </>
    );
};

// HERO SECTION
const HeroSection = () => {
    return (
        <div className="px-4 container-fluid HeroSection d-flex pt-3 pb-4 align-items-center">
            <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5 HeroSectionContent">
                <h1 className="d-lg-block">Great people building enduring ventures</h1>
                <p className="d-xs-block d-sm-block d-md-block pt-3">
                    This is a place holder to talk more about the company
                </p>
            </div>
        </div>
    );
};

// SERVICE SECTION
const Service = () => {
    return (
        <div className="container-fluid py-4 serviceSection ">
            <h2 className="purple-text text-center mb-3">Services</h2>
            <div className="d-flex flex-column justify-content-lg-center flex-lg-row  align-items-center flex-sm-column gap-3">
                {/* Hub Services */}
                <Card style={{width: "18rem"}} className="service-card">
                    <Card.Img variant="top" src={hubservices} className="service-thumbnail" thumbnail fluid />
                    <Card.Body className="shadow">
                        <Card.Title className="text-black">Hub Services</Card.Title>
                        <Card.Text className="text-center py-2">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* PROJECTS */}
                <Card style={{width: "18rem"}} className="service-card">
                    <Card.Img variant="top" src={projects} className="service-thumbnail" thumbnail fluid />
                    <Card.Body className="shadow">
                        <Card.Title className="text-black">Projects</Card.Title>
                        <Card.Text className="text-center py-2">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* VENTURE STUDIO */}
                <Card style={{width: "18rem"}} className="service-card rounded-3">
                    <Card.Img variant="top" src={venture} className="service-thumbnail" thumbnail fluid />
                    <Card.Body className="shadow rounded">
                        <Card.Title className="text-black">Venture Studio</Card.Title>
                        <Card.Text className="text-center py-2">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
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

const PortCos = () => {
    const portcos = [easesoilless, heaven, innkeeper, legalMo, trulance];
    return (
        <>
            <div className="container-fluid mb-5 mt-2">
                <h2 className="purple-text text-center py-4">PORTCOs</h2>
                <LogoScroll logos={portcos} />
            </div>
        </>
    );
};

// ABOUT US
const AboutSection = () => {
    return (
        <div className="aboutUS container-fluid d-flex flex-lg-row flex-column justify-content-center justify-content-sm-center justify-content-lg-evenly align-items-center py-4">
            <div className="description my-1 align-items-center">
                <h2 className="purple-text">About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Euryloch adipiscing augue id dignissim in nunc. Lorem ipsum
                    dolor sit amet
                </p>
                <Button className="aboutbtn">
                    <Link to="/about" className="purple-text text-decoration-none">
                        Learn More
                    </Link>
                </Button>
            </div>
            <div className="aboutimg py-4 d-flex justify-content-center ">
                <Image src={aboutusimg} alt="About Us Img" fluid className="aboutImage w-75 " />
            </div>
        </div>
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
                            Turning ideas either ours or yours into sustainable businesses is what we do best.
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

                        <p className="textFont"> Executing impact and self sustaining initiatives is our forte.</p>
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
                On these three pillars, we are creating an Africa of value creators by delving deep to cultivate the
                most innovative startups.
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
                                Mentally and physically prepare for the journey ahead. Bringing ideas to life is no
                                small feat but it is a laudable one.
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
                                Be fluid and dynamic, ready to adjust to market demands while offering value.
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
                                Don't keep that idea under the bushel, actively engage customers for feedback while
                                shouting about it on the rooftop.
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
                <p className="mt-3 talkToUsText text-decoration-underline">Talk to us</p>
            </a>
            {/* <JointheStudioBtn /> */}
        </div>
    );
};

export default Home;
