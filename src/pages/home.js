import { Link } from "react-router-dom";

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
      <h3 className="text-center pb-4">
        8thGear is a Venture Studio & Project Delivery Company
      </h3>
      <div className="row ">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex align-items-center">
          <h3 className="pb-4 ">We are builders funding the next generation</h3>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex mb-5 ">
            <div className="col">
              {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
              <h3>VENTURE STUDIO</h3>
              <p>We build at 8thGear We build at 8thGear We build at 8thGear</p>
            </div>
          </div>
          <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              {/* <i
                className="bi bi-bookmarks iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
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
    <div className="container-fluid text-center px-5">
      {" "}
      <h4 className="">Our Business Creation Platform</h4>
      <p>
        The next wave of venture capital is more than just investing, it's
        business creation. Our collaborative platform has three components.
      </p>
      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
          <div className="card mb-5">
            {/* <img src={madamwunmi} className="card-img-top p-3" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">GEAR UP</h5>
              <p className="card-text">
                {" "}
                it's business creation. Our collaborative platform has three
                components
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
          {" "}
          <div className="card mb-5">
            <div>
              {" "}
              {/* <img src={samuel} className="card-img-top p-3" alt="..." /> */}
            </div>

            <div className="card-body">
              <h5 className="card-title">EVOLVE</h5>
              <p className="card-text">
                it's business creation. Our collaborative platform has three
                components
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
          {" "}
          <div className="card mb-5">
            <div>
              {" "}
              {/* <img src={omotola} className="card-img-top p-3" alt="..." /> */}
            </div>

            <div className="card-body">
              <h5 className="card-title">ENGAGE</h5>
              <p className="card-text">
                it's business creation. Our collaborative platform has three
                components
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="col-lg-4 col-md-4 col-sm-10 px-5">
          {" "}
          <div className="card mb-5">
            <img src={olamide} className="card-img-top p-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Olamide Ogunbanjo</h5>
              <p className="card-text">Lead Language Instructor</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
