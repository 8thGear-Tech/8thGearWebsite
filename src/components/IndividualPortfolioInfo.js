import innkeeperlogo from "../assets/images/innkeeperlogo.png";

const IndividualPortfolioInfo = () => {
  return (
    <>
      <AboutStartup />
      <Tractions />
    </>
  );
};

const AboutStartup = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 pt-5 ">
            <img
              src={innkeeperlogo}
              className="mb-4 "
              //   width="70px"
              //   height="70px"
              alt="..."
            />
            {/* <h3
              className="lh-5 d-none d-lg-block d-md-none d-sm-none d-xs-none text-center"
              style={{ color: "#2B0947" }}
            >
              Ways to engage your Champs this summer
            </h3> */}
            {/* <h4
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none text-center"
              style={{ color: "#2B0947" }}
            >
              Ways to engage your Champs this summer
            </h4> */}
            <p className="d-flex text-center mx-2">
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining comapny building with venture
              funding.The Venture Studio model for entrepreneurship, combining
              comapny building with venture funding
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5 g-0">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <div className="card-body ms-3">
              <h3 className="card-text">CEO</h3>
              <p className="card-text">CEO’s name</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <div className="card-body ms-3">
              <h3 className="card-text">Year - 2019</h3>
              <a href="#" className="text-decoration-none text-black">
                <p> www.innkeeper.work</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tractions = () => {
  return (
    <>
      <div className="container-fluid text-center p-5 TractionsBg">
        {" "}
        <div className="row justify-content-evenly mt-5">
          <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
            <div className="card mb-5 py-5 tractionsCardBg">
              <div className="card-body">
                <h1 className="card-title">$1.35M</h1>
                <h4 className="card-title">Funds Raised</h4>
                <p className="card-text">
                  {" "}
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                  combining comapny building with venture funding
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
            {" "}
            <div className="card mb-5 py-5 tractionsCardBg">
              <div className="card-body">
                <h1 className="card-title">$1.35M</h1>
                <h4 className="card-title">Funds Raised</h4>
                <p className="card-text">
                  {" "}
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                  combining comapny building with venture funding
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
            {" "}
            <div className="card mb-5 py-5 tractionsCardBg">
              <div className="card-body">
                <h1 className="card-title">$1.35M</h1>
                <h4 className="card-title">Funds Raised</h4>
                <p className="card-text">
                  {" "}
                  The Venture Studio model for entrepreneurship, combining
                  comapny building with venture funding.The Venture Studio model
                  for entrepreneurship, combining comapny building with venture
                  funding.The Venture Studio model for entrepreneurship,
                  combining comapny building with venture funding
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <LetUsKnowBtn /> */}
      </div>
    </>
  );
};

export default IndividualPortfolioInfo;
