import IndividualPortfolioInfo from "../../components/IndividualPortfolioInfo";
import EaseSoilessPortfolioInfo from "../../data/IndividualPortfolioInfo.json";
import EaseSoilessPortfolioTractions from "../../data/IndividualPortfolioInfo.json";
import { AboutStartup } from "../../components/IndividualPortfolioInfo";
import { Tractions } from "../../components/IndividualPortfolioInfo";
import { Navbar1 } from "../../components/Navbar";

const EaseSoilessPortfolioPage = () => {
  return (
    <>
      <Navbar1 />
      <AboutEaseSoilessSection />
      <EaseSoilessTractions />
    </>
  );
};
const AboutEaseSoilessSection = () => {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="">
          <div className="row">
            {EaseSoilessPortfolioInfo.EaseSoilessPortfolioInfo.map(
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
const EaseSoilessTractions = () => {
  return (
    <>
      <div className="container-fluid text-center p-5 TractionsBg">
        <div className="">
          <div className="row justify-content-evenly mt-5">
            {EaseSoilessPortfolioTractions.EaseSoilessPortfolioTractions.map(
              (portfolioTractions) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-10 px-3 d-flex align-items-stretch"
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

export default EaseSoilessPortfolioPage;
