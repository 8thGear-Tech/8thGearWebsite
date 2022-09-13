import { Link } from "react-router-dom";

const ManagedServicesPage = () => {
  return (
    <>
      <HowItWorks />
    </>
  );
};
const HowItWorks = () => {
  return (
    <div className="container-fluid p-5 howItWorksBg">
      <div className="row mx-5">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex">
            <div className="col">
              {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
              <p>How It Works</p>
              <h2 className="">We are builders funding the next generation</h2>
            </div>
          </div>
          {/* <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              <i
                className="bi bi-bookmarks iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>PROJECT DELIVERY</h3>
              <p>We build at 8thGearWe build at 8thGear We build at 8thGear</p>
            </div>
          </div> */}
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center">
          <p>
            We at 8thGear are helpmates to your business and because we believe
            in the uniqueness of every individual and business, we tailor our
            solutions to suit your needs and aspirations. We are not only our
            client’s brand ambassadors but their biggest fan. We at 8thGear are
            helpmates to your business and because we believe in the uniqueness
            of every individual and business, we tailor our solutions to suit
            your needs and aspirations. We are not only our client’s brand
            ambassadors but their biggest fan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagedServicesPage;
