// import IndividualPortfolioInfo from "../../components/IndividualPortfolioInfo";
// import HavenPortfolioInfo from "../../data/IndividualPortfolioInfo.json";
// import HavenPortfolioTractions from "../../data/IndividualPortfolioInfo.json";
// import { AboutStartup } from "../../components/IndividualPortfolioInfo";
// import { Tractions } from "../../components/IndividualPortfolioInfo";
// import { Navbar1 } from "../../components/Navbar";

// const HavenPortfolioPage = () => {
//   return (
//     <>
//       <Navbar1 />
//       <AboutHavenSection />
//       <HavenTractions />
//     </>
//   );
// };
// const AboutHavenSection = () => {
//   return (
//     <>
//       <div className="container-fluid pb-5">
//         <div className="">
//           <div className="row">
//             {HavenPortfolioInfo.HavenPortfolioInfo.map((portfolioInfo) => {
//               return (
//                 <div
//                   className="col-lg-12 col-md-12 col-sm-12"
//                   key={portfolioInfo.id}
//                 >
//                   <AboutStartup {...portfolioInfo}></AboutStartup>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// const HavenTractions = () => {
//   return (
//     <>
//       <div className="container-fluid text-center p-5 TractionsBg">
//         <div className="">
//           <div className="row justify-content-center mt-5">
//             {HavenPortfolioTractions.HavenPortfolioTractions.map(
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

// export default HavenPortfolioPage;
