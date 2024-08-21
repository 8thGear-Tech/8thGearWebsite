import { Navbar16 } from "../../components/Navbar";
import "./demoDay.css";
import demoimgone from "../Events/image/demo1.png";
import demoimgtwo from "../Events/image/demo2.png";

const DemoDayPage = () => {
  return (
    <>
      <Navbar16 />
      <div className="demoDay-background">
        <div className="demoDay-layout w-100 start-0 d-flex justify-content-center align-items-center">
          <DemoHero />
        </div>
      </div>
      <DemoSection />
      {/* <AboutDemoDay /> */}
    </>
  );
};

const DemoHero = () => {
  return (
    <div className="container-fluid px-0">
      <div className="w-100 start-0 d-flex justify-content-center align-items-center flex-column text-center text-white py-5">
        <h2 className="mb-3">Demo Day</h2>
        <h3 className="fw-bold fs-4 mb-4 text-white">
          Showcasing Innovation and Excellence
        </h3>
        <p className=" mb-4 mx-3 mx-md-5">
          From time to time 8thGear Hub hosts Demo days for all its portfolio
          and select companies
        </p>
        <div className="d-lg-flex d-md-flex">
          {" "}
          <p className="mx-2 fs-5">
            {" "}
            <i
              className="bi bi-calendar demoLogo me-2"
              aria-hidden="true"
            ></i>{" "}
            TBD
          </p>
          <p className="mx-2 fs-5">
            <i className="bi bi-geo-alt demoLogo me-2" aria-hidden="true"></i>{" "}
            8thGear Hub, CMD road, Magodo/Secretariat, Lagos state
          </p>
          <p className="mx-2 fs-5">
            {" "}
            <i className="bi bi-clock demoLogo me-2" aria-hidden="true"></i> TBD
          </p>
        </div>
        {/* <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center fs-5 mb-4 mx-3 mx-md-5">
          <li className="d-flex align-items-center mx-2 mx-md-3 demoHeroList">
            <i className="bi bi-calendar demoLogo me-2" aria-hidden="true"></i>{" "}
            TBD
          </li>
          <li className="d-flex align-items-center mx-2 mx-md-3 demoHeroList">
            <i className="bi bi-geo-alt demoLogo me-2" aria-hidden="true"></i>{" "}
            8thGear Hub, CMD road, Magodo/Secretariat, Lagos state
          </li>
          <li className="d-flex align-items-center mx-2 mx-md-3 demoHeroList">
            <i className="bi bi-clock demoLogo me-2" aria-hidden="true"></i> TBD
          </li>
        </ul> */}
        <button className="btn btn-primary rounded-pill demoButton mt-4 px-4 py-2 fs-4 fw-bold">
          Register Now
        </button>
      </div>
    </div>
  );
};

const DemoSection = () => {
  return (
    <div className="container mt-4 mb-5 align-items-left">
      {/* Heading and Paragraph */}
      <div className="text-center mb-4">
        <h2 className="fw-500 fs-4 demoTextColor">8thGear Hub Demo Day</h2>
        <p className="">
          It is a value-packed day where every member of our ecosystem comes
          together to witness the brilliance of creative minds and hear pitch
          ideas that have the potential to scale.
        </p>
      </div>

      {/* Text and Image Row */}
      <div className="row mb-5 mt-4 align-items-center">
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column">
          <h3 className="fw-500 fs-4">What is Demo Day?</h3>
          <div className="fs-5">
            <p className="mb-3 ">
              On Demo Day, 8thGear Hub offers startups an opportunity to pitch
              their ideas and meet with possible investors.
            </p>
            <p className="mb-3">
              Demo Day is open to all startups who are looking for investors and
              are willing to take their business to the next level!!
            </p>
            <p className="mb-3">
              We have a couple of investors who are willing and looking for
              startups to invest in.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img
            src={demoimgone}
            alt="Demo Day"
            className="img-fluid rounded-5"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="row align-items-center">
        {/* Image First on Desktop, Last on Mobile */}
        <div className="col-md-6 d-flex align-items-center order-md-1 order-3">
          <img src={demoimgtwo} alt="Join Demo Day" className="img-fluid" />
        </div>

        {/* Heading and Paragraph First on Mobile, Second on Desktop */}
        <div className="col-md-6 d-flex flex-column order-md-2 order-1">
          <h3 className="fw-500 fs-4 demoTextColor">
            Want to be a part of demo day?
          </h3>
          <div className="fs-5">
            <p className="mb-3">
              1. Must have registered using the link{" "}
              {/* <a
                href="https://bit.ly/3WyJVFe"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bit.ly/3WyJVFe
              </a> */}
            </p>
            <p className="mb-3">2. Confident speaking in English</p>
            <p className="mb-3">3. Must have a business plan</p>
            <p className="mb-3">4. Should have a good portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDayPage;
