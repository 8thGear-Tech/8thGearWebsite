import data from "../../data/portfolioHero.json";
import { EventsRegisterBtn } from "../Buttons/EventsBtn";
import TalentPlacementHeroImg from "../../assets/images/hero/TalentPlacementHero.png";
import {
  ManagedServicesRequestBtn,
  TalentPlacementBtn,
} from "../../components/Buttons/ServicesBtn";
import talentsplaced from "../../assets/images/talentplacement/talentsplaced.png";
import satisfiedclients from "../../assets/images/talentplacement/satisfiedclients.png";

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

export const NewTalentPlacementHero = () => {
  return (
    <div className="px-4 container-fluid NewTalentPlacementHeroBg d-flex pt-3 pb-3 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-12 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor NewTalentPlacementHeroText">
            Hire Vetted Tech Talents
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Hire Vetted Tech Talents
          </h2>
          <p style={{ color: "#ffffff" }} className="ms-lg-5 ms-xs-5">
            Scale your business with our top-tier tech talent. <br />
            Expert sourcing, development, and management for excellence.
          </p>{" "}
          <div>
            <a
              href="https://bit.ly/8thgeartalentrequestform"
              target="_blank"
              className="talentPlacementBtn ms-lg-5 ms-xs-5"
            >
              {" "}
              <TalentPlacementBtn />
            </a>
          </div>
        </div>
      </div>
    </div>
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
            <a href="https://bit.ly/8thgeartalentrequestform" target="_blank">
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
