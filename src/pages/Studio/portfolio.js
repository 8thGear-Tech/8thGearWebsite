import { AllPortfoliosLogoCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/PortfolioLogos.json";
import { Navbar1 } from "../../components/Navbar";
import { PortfolioHero } from "../../components/Hero/BGColorandTextHero";

const PortfolioPage = () => {
  return (
    <>
      <Navbar1 />
      <PortfolioHero />
      <PortfolioSection />
    </>
  );
};
const PortfolioSection = () => {
  return (
    <div className="container-fluid ">
      <div
        style={{
          borderTop: "1px solid #dee2e6",
          borderLeft: "1px solid #dee2e6",
        }}
        className="row TextAlignCenter justify-content-center border-bottom-0"
      >
        {Data.PortfolioLogos.map((PortfolioLogo) => {
          return (
            <div
              style={{
                borderRight: "1px solid #dee2e6",
                borderBottom: "1px solid #dee2e6",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              className="col-lg-3 col-md-3 col-sm-6 col-6 px-4"
              key={PortfolioLogo.id}
            >
              <AllPortfoliosLogoCard {...PortfolioLogo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PortfolioPage;
