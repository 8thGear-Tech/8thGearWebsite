import IndividualPortfolioInfo from "../../components/IndividualPortfolioInfo";
import TrulancePortfolioInfo from "../../data/IndividualPortfolioInfo.json";
import TrulancePortfolioTractions from "../../data/IndividualPortfolioInfo.json";
import { AboutStartup } from "../../components/IndividualPortfolioInfo";
import { Tractions } from "../../components/IndividualPortfolioInfo";
import { Navbar1 } from "../../components/Navbar";

const TrulancePortfolioPage = () => {
  return (
    <>
      <Navbar1 />
      <AboutTrulanceSection />
      <TrulanceTractions />
    </>
  );
};
const AboutTrulanceSection = () => {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="">
          <div className="row">
            {TrulancePortfolioInfo.TrulancePortfolioInfo.map(
              (portfolioInfo) => {
                return (
                  <div
                    className="col-lg-12 col-md-12 col-sm-12"
                    key={portfolioInfo.id}
                  >
                    <AboutStartup {...portfolioInfo}></AboutStartup>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const TrulanceTractions = () => {
  return (
    <>
      <div className="container-fluid text-center p-5 TractionsBg">
        <div className="">
          <div className="row justify-content-center mt-5">
            {TrulancePortfolioTractions.TrulancePortfolioTractions.map(
              (portfolioTractions) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-10 d-flex align-items-stretch"
                    key={portfolioTractions.id}
                  >
                    <Tractions {...portfolioTractions}></Tractions>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrulancePortfolioPage;
