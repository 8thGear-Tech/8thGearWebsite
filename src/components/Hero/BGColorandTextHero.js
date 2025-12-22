import data from "../../data/portfolioHero.json";
import { EventsRegisterBtn } from "../Buttons/EventsBtn";
import TalentPlacementHeroImg from "../../assets/images/hero/TalentPlacementHero.png";
import {
  ManagedServicesRequestBtn,
  TalentPlacementBtn,
} from "../../components/Buttons/ServicesBtn";
import talentsplaced from "../../assets/images/talentplacement/talentsplaced.png";
import satisfiedclients from "../../assets/images/talentplacement/satisfiedclients.png";
import { Button } from "react-bootstrap";

import "./hero.css";

export const ManagedServicesHero = () => {
  return (
    <div className="container-fluid pt-5 pb-4">
      <div className="row mx-lg-4 mx-md-4 mt-4 justify-content-center">
        <div className="col-lg-7 text-center">
          <h3 className="">8thGear Hub Services</h3>
          <p>
            We at 8thGear are helpmates to your business and because we believe
            in the uniqueness of every individual and business, we tailor our
            solutions to suit your needs and aspirations. We are not only your
            brand ambassadors but your biggest fan.
          </p>
        </div>
      </div>
    </div>
  );
};

// portfolio component start

const PortfolioHeroSingle = (props) => {
  const { title, image, text } = props;
  return (
    <div className="container-fluid PortfolioHeroBg py-5 px-lg-5 px-md-5">
      <div className="row my-lg-5 mx-lg-3 justify-content-center ">
        <div className="col-lg-8 d-none d-lg-block d-md-block d-sm-none">
          <h2 className="text-center pb-3">{title}</h2>
          {image}
          <p className="text-center porfolioParagraph">{text}</p>
          {/* <p className="text-center ">
            What makes 8thGear special is how much we:
          </p>
          <ul>
            <li className="">
              Share information openly, broadly and deliberately
            </li>
            <li className="">Communicate candidly and directly</li>
            <li className=""> Avoid rules that constrict creativity</li>
            <li className="">Encourage decision-making by employees</li>
            <li className="">Keep only our highly effective people.</li>
          </ul> */}
        </div>
        <div className="col-lg-7 d-lg-none d-md-none d-sm-block d-xs-block">
          <h3 className="text-center">{title}</h3>
          {image}
          <p className="text-center porfolioParagraph">{text}</p>
          {/* <p className="text-center ">
            What makes 8thGear special is how much we:
          </p>
          <ul>
            <li className="">
              Share information openly, broadly and deliberately
            </li>
            <li className="">Communicate candidly and directly</li>
            <li className=""> Avoid rules that constrict creativity</li>
            <li className="">Encourage decision-making by employees</li>
            <li className="">Keep only our highly effective people.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};
const FoundersMeetupHeroSingle = (props) => {
  const { title, text } = props;
  return (
    <div className="container-fluid FoundersMeetupBg py-5 px-lg-5 px-md-5">
      <div className="row my-lg-2 mx-lg-3 justify-content-center ">
        <div className="col-lg-8 d-none d-lg-block d-md-block d-sm-none">
          <h2 className="text-center pb-3">{title}</h2>
          <p className="text-center porfolioParagraph">{text}</p>
          {/* <p className="text-center ">
            What makes 8thGear special is how much we:
          </p>
          <ul>
            <li className="">
              Share information openly, broadly and deliberately
            </li>
            <li className="">Communicate candidly and directly</li>
            <li className=""> Avoid rules that constrict creativity</li>
            <li className="">Encourage decision-making by employees</li>
            <li className="">Keep only our highly effective people.</li>
          </ul> */}
        </div>
        <div className="col-lg-7 d-lg-none d-md-none d-sm-block d-xs-block">
          <h3 className="text-center">{title}</h3>
          <p className="text-center porfolioParagraph">{text}</p>
          {/* <p className="text-center ">
            What makes 8thGear special is how much we:
          </p>
          <ul>
            <li className="">
              Share information openly, broadly and deliberately
            </li>
            <li className="">Communicate candidly and directly</li>
            <li className=""> Avoid rules that constrict creativity</li>
            <li className="">Encourage decision-making by employees</li>
            <li className="">Keep only our highly effective people.</li>
          </ul> */}
        </div>
      </div>
      <div className="text-center">
        <EventsRegisterBtn />
      </div>
    </div>
  );
};

export const PortfolioHero = () => {
  return (
    <div className="PortfolioHero">
      {data.portFolioHero.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const FoundersMeetupHero = () => {
  return (
    <div className="PortfolioHero">
      {data.founderMeetup.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <FoundersMeetupHeroSingle {...portFolio}></FoundersMeetupHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const DemoDayHero = () => {
  return (
    <div className="PortfolioHero">
      {data.demoDay.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const OurTeamHero = () => {
  return (
    <div className="PortfolioHero">
      {data.ourTeam.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};

export const ArticleReadMoreHero = () => {
  return (
    <div className="container-fluid py-5 ReadMoreResourcesBg">
      <div className="row mx-lg-4 mx-md-4 mt-4 justify-content-center">
        <div className="col-lg-8 py-5">
          <h3 className="text-white">
            Lörem ipsum startup teotris fysisk cd. Tukrogåligen transparens.
            Innovationskontor biojäd, samt gamification.{" "}
          </h3>
          <p className="text-white">
            For entrepreneurship, combining company building with venture
            funding combining company building with venture funding. For
            entrepreneurship, .
          </p>
        </div>
      </div>
    </div>
  );
};

// export const NewTalentPlacementHero = () => {
//   return (
//     <div className="px-4 container-fluid NewTalentPlacementHeroBg d-flex pt-3 pb-3 align-items-center">
//       <div className="gradientBg overlayBg"></div>
//       <div className="row">
//         <div className="col-lg-12 col-md-8 col-sm-12">
//           <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor NewTalentPlacementHeroText">
//             Hire Vetted Tech Talents
//           </h1>
//           <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
//             {/* <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo"> */}
//             Hire Vetted Tech Talents
//           </h2>
//           <p style={{ color: "#ffffff" }} className="ms-lg-5 ms-xs-5">
//             Scale your business with our top-tier tech talent. <br />
//             Expert sourcing, development, and management for excellence.
//           </p>{" "}
//            <div className="mb-4 ms-lg-5 ms-xs-5">
//           {" "}
//           <Button className="aboutbtn m-0 talentPlacementBtn">
//             <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/viewform"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-decoration-none purple-text"
//             >
//               {" "}
//              Build Your Dream Team
//             </a>
//           </Button>
//           <p className="mt-3 text-muted small">
//                 <em>
//                   <a
//                     href="#migrant-advisory-desk"
//                     style={{
//                       color: "#ffffff",
//                       textDecoration: "none",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Individuals: Learn more about Migrant Advisory Desk ↴
//                   </a>
//                 </em>
//               </p>
//         </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export const NewTalentPlacementHero = () => {
//   return (
//     <div className="px-4 container-fluid NewTalentPlacementHeroBg d-flex pt-3 pb-3 align-items-center">
//       <div className="gradientBg overlayBg"></div>
//       <div className="row">
//         <div className="col-lg-12 col-md-8 col-sm-12">
//           <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor NewTalentPlacementHeroText">
//             Hire Vetted Tech Talents
//           </h1>
//           <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
//             Hire Vetted Tech Talents
//           </h2>
//           <p style={{ color: "#ffffff" }} className="ms-lg-5 ms-xs-5">
//             Scale your business with our top-tier tech talent. <br />
//             Expert sourcing, development, and management for excellence.
//           </p>

//           {/* Card Layout CTAs */}
//           <div className="mb-4 ms-lg-5 ms-xs-5">
//             <div className="row g-3" style={{ maxWidth: "800px" }}>
//               {/* MSME Card */}
//               <div className="col-12 col-md-6">
//                 <a
//                   href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/viewform"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-decoration-none d-block cta-card"
//                 >
//                   <div className="card border-0 p-4 glass-card">
//                     <div className="d-flex align-items-center gap-2 mb-3">
//                       <div className="icon-box">
//                         <i className="bi bi-briefcase"></i>
//                       </div>
//                       <span className="card-label">FOR MSMES</span>
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <span className="card-title">Build Your Dream Team</span>
//                       <i className="bi bi-arrow-right"></i>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Individuals Card */}
//             <div className="col-12 col-md-6">
//               <a
//                 href="#migrant-advisory-desk"
//                 className="text-decoration-none d-block cta-card"
//               >
//                 <div className="card border-0 p-4 glass-card">
//                   <div className="d-flex align-items-center gap-2 mb-3">
//                     <div className="icon-box">
//                       <i className="bi bi-person"></i>
//                     </div>
//                     <span className="card-label">FOR INDIVIDUALS</span>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <span className="card-title">Migrant Advisory Desk</span>
//                     <i className="bi bi-arrow-down"></i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       //{" "}
//     </div>
//     // </div>
//   );
// };


///latest


export const NewTalentPlacementHero = () => {
  return (
    <section className="talent-hero-section">
      <div className="talent-hero-overlay"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="talent-hero-content">
              <h1 className="talent-hero-heading">
                Hire Vetted Tech Talents
              </h1>
              <p className="talent-hero-text">
                Scale your business with our top-tier tech talent.
                <br />
                Expert sourcing, development, and management for excellence.
              </p>

              <div className="row g-3 mt-4">
                {/* MSME Card */}
                <div className="col-md-6 col-12">
                  
                    <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-block cta-card"
                >
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="talent-icon-box">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <span className="talent-badge-text">FOR MSMES</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="talent-card-heading">Build Your Dream Team</span>
                      <i className="bi bi-arrow-right talent-arrow-icon"></i>
                    </div>
                  </a>
                </div>

                {/* Individuals Card */}
                <div className="col-md-6 col-12">
                 <a
                href="#migrant-advisory-desk"
                className="text-decoration-none d-block cta-card"
              >
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="talent-icon-box">
                        <i className="bi bi-person"></i>
                      </div>
                      <span className="talent-badge-text">FOR INDIVIDUALS</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="talent-card-heading">Migrant Advisory Desk</span>
                      <i className="bi bi-arrow-down talent-arrow-icon"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TalentPlacementHero = () => {
  return (
    <div className="container-fluid talentHeroBg">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-2">
          <h6>Seamless Hiring Process!</h6>
          <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none mt-3">
            Hire Top Talents
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none mt-3">
            Hire Top Talents
            <br />
          </h3>
          <p className="mt-3">
            We are experts in talent placement for tech roles and are committed
            to providing you with top-notch professionals who possess the exact
            skills your business needs.
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4"></div>
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <ManagedServicesRequestBtn />
            </a>
          </div>
          <div className="d-flex mt-4">
            <div className="d-flex align-items-center">
              <div>
                <img src={talentsplaced} className="img-fluid" />
              </div>
              <div className="ms-2">
                <p className="p-0 m-0">
                  <b>200+</b>
                </p>
                <p className="p-0 m-0">Talents</p>
              </div>
            </div>
            <div className="d-flex align-items-center ms-3">
              <div>
                <img src={satisfiedclients} className="img-fluid" />
              </div>
              <div className="ms-2">
                <p className="p-0 m-0">
                  <b>50+</b>
                </p>
                <p className="p-0 m-0">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <div className="d-flex justify-content-center mt-5">
            <img
              src={TalentPlacementHeroImg}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
              width="350"
              height="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
