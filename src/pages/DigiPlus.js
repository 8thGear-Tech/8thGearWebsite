import { Navbar26 } from "../components/Navbar";
import { DigiPlusPageHero } from "../components/Hero/ImageandTextHero";

// consortium partners logo
import futa from "../assets/images/digiplus/consortiumpartners/futa.png";
import sterling from "../assets/images/digiplus/consortiumpartners/sterling.png";
import smedan from "../assets/images/digiplus/consortiumpartners/smedan.png";
import innkeeper from "../assets/images/digiplus/consortiumpartners/innkeeper.png";
import pearlmutual from "../assets/images/digiplus/consortiumpartners/pearlmutual.png";

// digital technology partners logo
import microsoft from "../assets/images/digiplus/digitaltechnologypartners/microsoft.png";
import cisco from "../assets/images/digiplus/digitaltechnologypartners/cisco.png";
import mtn from "../assets/images/digiplus/digitaltechnologypartners/mtn.png";
import cloudflex from "../assets/images/digiplus/digitaltechnologypartners/cloudflex.png";
import vmware from "../assets/images/digiplus/digitaltechnologypartners/vmware.png";

// consortium offerings
import infographicone from "../assets/images/digiplus/consortiumofferings/infographicone.png";
import infographictwo from "../assets/images/digiplus/consortiumofferings/infographictwo.png";
import infographicthree from "../assets/images/digiplus/consortiumofferings/infographicthree.png";
import infographicfour from "../assets/images/digiplus/consortiumofferings/infographicfour.png";
import key from "../assets/images/digiplus/consortiumofferings/key.png";
import keyone from "../assets/images/digiplus/consortiumofferings/keyone.png";
import keytwo from "../assets/images/digiplus/consortiumofferings/keytwo.png";

//card
import { DigiPlusResponsibilityMatrixCards } from "../components/AllCards/MediaCards";
import cardsData from "../data/digiPlus.json";

const DigiPlus = () => {
  return (
    <>
      <Navbar26 />
      <DigiPlusPageHero />
      <ConsortiumPartners />
      <ResponsibilityMatrix />
      <ConsortiumOfferings />
      <DigitalTechnologyPartners />
    </>
  );
};

const ConsortiumPartners = () => {
  return (
    <>
      <div className="container-fluid px-5 pb-2 mt-5">
        <h3 className="text-center">
          <b>Consortium Partners</b>
        </h3>
        <div className="row justify-content-center text-center mt-4">
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={futa} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={sterling} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={smedan} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={innkeeper} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={pearlmutual} className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// "paragraphThree": "Community Development - Representation & Promotion (MSMEs)",
//       "paragraphFour": "Incubation Services/Enterprise Support",
const ResponsibilityMatrix = () => {
  return (
    <>
      <div
        className="container-fluid pb-3"
        style={{ background: "rgba(217, 217, 217, 0.10)" }}
      >
        <h3 className="text-center pt-5 pb-2">
          <b>DigiPlus Alliance Responsibility Matrix</b>
        </h3>
        <div className="pb-5 px-4">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="eightGearImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h6 className="mb-2 text-md-start">Consortium Lead</h6>
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      8thGear Hub & Venture Studio
                    </h5>
                    <p className="text-md-start">Technology & Innovation Hub</p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Project Management Consortium Operations
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Access to Tech Infrastructure
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Community Development - Representation & Promotion
                            (MSMEs)
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Incubation Services/Enterprise Support
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Test before Invest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="FUTAImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      Federal University of Technology Akure
                    </h5>
                    <p className="text-md-start">
                      Academic, Research & Development Institute
                    </p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Research Pool (Research Commercialization)
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Talent Pool
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Hardware Innovation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="sterlingImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      Sterling Bank Plc
                    </h5>
                    <p className="text-md-start">
                      Public Funding/Finance Organization
                    </p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Access to Finance
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Financial Advisory
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Access to Subject Matter Experts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="innkeeperImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      Innkeeper Talent Accelerator Ltd
                    </h5>
                    <p className="text-md-start">
                      Vocational Training Center (Digital Skills)
                    </p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Digital Skills Training
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Talent Management (Tech Talent Pool)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="pearlMutualImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      PearlMutual Consulting Ltd
                    </h5>
                    <p className="text-md-start">
                      Research & Development Institute (Consultancy)
                    </p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Business/Management Training
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Business Development Services
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Investment Readiness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="smedanImg my-3 d-flex align-items-end ">
                <div className="card imgCardBg mt-auto d-flex h-75">
                  <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
                    <h5
                      className="card-title spaceTitle text-md-start"
                      style={{ fontSize: "1rem", marginBottom: "10px" }}
                    >
                      Small & Medium Entreprise Development Agency of Nigeria
                    </h5>
                    <p className="text-md-start">Trade Associations</p>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Access to MSME clusters
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="px-1">
                          <i className="bi bi-check2-square"></i>
                        </div>
                        <div className="flex-grow-1 px-1 ">
                          <p
                            className=""
                            style={{ fontSize: "0.8rem", margin: 0 }}
                          >
                            Policy Formation support and implementation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ResponsibilityMatrixx = () => {
  return (
    <>
      <div
        className="container pb-3"
        style={{ background: "rgba(217, 217, 217, 0.10)" }}
      >
        <h3 className="text-center pt-5 pb-2">
          <b>DigiPlus Alliance Responsibility Matrix</b>
        </h3>
        <div className="pb-5 px-4">
          {/* <div className="row justify-content-center"> */}
          {/* <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="eightGearImg my-3 d-flex align-items-end"> */}
          <div className="row justify-content-center">
            {cardsData.responsibilityMatrix.map((items) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                    key={items.id}
                  >
                    <DigiPlusResponsibilityMatrixCards {...items} />
                  </div>
                </>
              );
            })}
          </div>
          {/* <div className="card imgCardBg mt-auto">
                  <div className="card-body">
                    <h6>Consortium Lead</h6>
                    <h5 className="card-title spaceTitle my-aut o">
                      8thGear Hub & Venture Studio
                    </h5>
                    <p>(Technology & Innovation Hub)</p>
                    <div className="d-flex align-items-center">
                      <div className="px-1">
                        <i className="bi bi-check2-square"></i>
                      </div>
                      <div className="flex-grow-1 px-1">
                        <p style={{ fontSize: "0.8rem", margin: 0 }}>
                          Project Management Consortium Operations
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
          {/* </div>
            </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="FUTAImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear
                    </h6>
                  </div>
                </div>
              </div>
            </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-12"> */}
          {/* <div className="sterlingImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="innkeeperImg  my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pearlMutualImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="smedanImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear
                    </h6>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
const ConsortiumOfferings = () => {
  return (
    <>
      <div className="container pb-3">
        <h3 className="text-center mt-3 pt-5 pb-2">
          <b>Consortium Offerings</b>
        </h3>
        {/* <div className="container pb-5"> */}
        <div className="row justify-content-center justify-content-evenly">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={infographicone} className="img-fluid" />
            {/* <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={infographictwo} className="img-fluid" />
            {/* <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={infographicthree} className="img-fluid" />
            {/* <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={infographicfour} className="img-fluid" />
            {/* <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div> */}
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="FUTAImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      HubOne, Yaba
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="sterlingImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      Innkeeper Hacker’s Space, Magodo
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="innkeeperImg  my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      Innkeeper Hacker’s Space, Magodo
                    </h6>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <img src={keyone} className="img-fluid" />
            {/* <img src={keyone} className="img-fluid keyBoxShadow" /> */}
            {/* <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const DigitalTechnologyPartners = () => {
  return (
    <>
      <div
        className="container-fluid px-5 pb-3 mt-4"
        style={{ background: "rgba(217, 217, 217, 0.10)" }}
      >
        <h3 className="text-center pt-5">
          <b>Digital Technology Partners</b>
        </h3>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={microsoft} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={cisco} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={mtn} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={cloudflex} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={vmware} className="h-100" />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={vmware} className="h-100" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DigiPlus;
