import IndividualPortfolioInfo from "../../components/IndividualPortfolioInfo";
import MindAfrikPortfolioInfo from "../../data/IndividualPortfolioInfo.json";
import MindAfrikPortfolioTractions from "../../data/IndividualPortfolioInfo.json";
import { AboutStartup } from "../../components/IndividualPortfolioInfo";
import { Tractions } from "../../components/IndividualPortfolioInfo";
import { Navbar1 } from "../../components/Navbar";

const MindAfrikPortfolioPage = () => {
  return (
    <>
      <Navbar1 />
      <AboutMindAfrikSection />
      <MindAfrikTractions />
    </>
  );
};
const AboutMindAfrikSection = () => {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="">
          <div className="row">
            {MindAfrikPortfolioInfo.MindAfrikPortfolioInfo.map(
              (portfolioInfo) => {
                return (
                  <div
                    className="col-lg-12 col-md-6 col-sm-12"
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
const MindAfrikTractions = () => {
  return (
    <>
      <div className="container-fluid text-center p-5 TractionsBg">
        <div className="">
          <div className="row justify-content-evenly mt-5">
            {MindAfrikPortfolioTractions.MindAfrikPortfolioTractions.map(
              (portfolioTractions) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-10 px-5 d-flex align-items-stretch"
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

export default MindAfrikPortfolioPage;
