import { WhatWeDoIcon } from "../../components/Icons";

const ManagedServicesDigitalMarketing = () => {
  return (
    <>
      <DigitalMarketing />
      <OurOffers />
    </>
  );
};
const DigitalMarketing = () => {
  return (
    <div className="container-fluid p-5 SectionTwoBg">
      {" "}
      {/* <p className="">
        The next wave of venture capital is more than just investing, it's
        business creation. Our collaborative platform has three components.
      </p> */}
      <div className="row justify-content-evenly align-items-center mt-5">
        <div className="col-lg-5 col-md-4 col-sm-10 px-5">
          <h4 className="">Digital marketing</h4>
          <p className="">
            For entrepreneurship, combining company building with venture
            funding combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building with venture funding. FFor
            entrepreneurship, combining company building with venture funding
            combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building
          </p>
          {/* <div className="card mb-5 py-5 cardBg">
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
            </div> */}
        </div>
        <div className="col-lg-5 col-md-4 col-sm-10 px-5">
          <p className="">
            For entrepreneurship, combining company building with venture
            funding combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building with venture funding. FFor
            entrepreneurship, combining company building with venture funding
            combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building. For entrepreneurship, combining company
            building with venture funding, combining company building
          </p>
          {/* <div className="card mb-5 py-5 cardBg">
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
            </div> */}
        </div>
      </div>
      {/* <LetUsKnowBtn /> */}
    </div>
  );
};

const OurOffers = () => {
  return (
    <div className="container-fluid">
      {" "}
      <div className="row justify-content-center mt-5 ">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <div className="col">
              <WhatWeDoIcon />
              <div className="card-body ms-3">
                <p className="card-text">Data Science</p>
              </div>
              <div className="col">
                <WhatWeDoIcon />
                <div className="card-body ms-3">
                  <p className="card-text">Data Analysis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="d-flex align-items-center">
              <WhatWeDoIcon />
              <div className="card-body ms-3">
                <p className="card-text">Data Science</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="d-flex align-items-center">
              <WhatWeDoIcon />
              <div className="card-body ms-3">
                <p className="card-text">Data Science</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="d-flex align-items-center">
              <WhatWeDoIcon />
              <div className="card-body ms-3">
                <p className="card-text">Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServicesDigitalMarketing;
