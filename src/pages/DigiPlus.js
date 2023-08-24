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
import consortiumofferingone from "../assets/images/digiplus/consortiumofferings/consortiumofferingone.png";

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
const ResponsibilityMatrix = () => {
  return (
    <>
      <div
        className="container-fluid px-5 pb-3"
        style={{ background: "rgba(217, 217, 217, 0.10)" }}
      >
        <h3 className="text-center pt-5 pb-2">
          <b>DigiPlus Alliance Responsibility Matrix</b>
        </h3>
        <div className="container pb-5 px-4 ">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="eightGearImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
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
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pearlMutualImg my-3 d-flex align-items-end">
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
              <div className="smedanImg my-3 d-flex align-items-end">
                <div className="card imgCardBg mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      Innkeeper Hacker’s Space, Magodo
                    </h6>
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
const ConsortiumOfferings = () => {
  return (
    <>
      <div className="container pb-3">
        <h3 className="text-center pt-5 pb-2">
          <b>Consortium Offerings</b>
        </h3>
        {/* <div className="container pb-5"> */}
        <div className="row justify-content-center justify-content-evenly">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={consortiumofferingone} className="img-fluid" />
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
            <img src={consortiumofferingone} className="img-fluid" />
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
        {/* </div> */}
      </div>
    </>
  );
};

const DigitalTechnologyPartners = () => {
  return (
    <>
      <div className="container-fluid px-5 pb-3 mt-4">
        <h3 className="text-center">
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
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={vmware} className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiPlus;
