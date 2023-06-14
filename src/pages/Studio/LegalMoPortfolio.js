import IndividualPortfolioInfo from "../../components/IndividualPortfolioInfo";
import LegalMoPortfolioInfo from "../../data/IndividualPortfolioInfo.json";
// import LegalMoPortfolioTractions from "../../data/IndividualPortfolioInfo.json";
import { AboutStartup } from "../../components/IndividualPortfolioInfo";
import { Tractions } from "../../components/IndividualPortfolioInfo";
import { Navbar1 } from "../../components/Navbar";

const LegalMoPortfolioPage = () => {
  return (
    <>
      <Navbar1 />
      <AboutStartupSection />
      {/* <StartupsTractions /> */}
    </>
  );
};
const AboutStartupSection = () => {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="">
          <div className="row">
            {LegalMoPortfolioInfo.LegalMoPortfolioInfo.map((portfolioInfo) => {
              return (
                <div
                  className="col-lg-12 col-md-12 col-sm-12"
                  key={portfolioInfo.id}
                >
                  <AboutStartup {...portfolioInfo}></AboutStartup>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
// const StartupsTractions = () => {
//   return (
//     <>
//       <div className="container-fluid text-center p-5 TractionsBg">
//         <div className="">
//           <div className="row justify-content-center mt-5">
//             {LegalMoPortfolioTractions.LegalMoPortfolioTractions.map(
//               (portfolioTractions) => {
//                 return (
//                   <div
//                     className="col-lg-3 col-md-6 col-sm-10 d-flex align-items-stretch"
//                     key={portfolioTractions.id}
//                   >
//                     <Tractions {...portfolioTractions}></Tractions>
//                   </div>
//                 );
//               }
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default LegalMoPortfolioPage;
