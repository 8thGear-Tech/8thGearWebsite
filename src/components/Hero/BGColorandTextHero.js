import data from "../../data/portfolioHero.json";
//ManagedServicesHero
//PortfoliosandTeamPageHero
// founderMeetupAndDemoday

export const ManagedServicesHero = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="text-center">
          <h3 className="">The Venture Studio Model</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            fuga facilis optio officiis obcaecati reiciendis, vitae distinctio
            voluptates nostrum ut
          </p>
        </div>
      </div>
    </div>
  );
};

// portfolio component start

const PortfolioHeroSingle = (props) => {
  const { text } = props;
  return (
    <div className="container-fluid PortfolioHeroBg p-5">
      <div className="row my-lg-5 mx-lg-3">
        <div className=" d-none d-lg-block d-md-block d-sm-none">
          <h4 className="text-center">{text}</h4>
        </div>
        <div className=" d-lg-none d-md-none d-sm-block d-xs-block">
          <h5 className="text-center">{text}</h5>
        </div>
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
export const FounderMeetup = () => {
  return (
    <div className="PortfolioHero">
      {data.founderMeetup.map((portFolio) => {
        return (
          <div className="" key={portFolio.id}>
            <PortfolioHeroSingle {...portFolio}></PortfolioHeroSingle>
          </div>
        );
      })}
    </div>
  );
};
export const Demoday = () => {
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
export const OurTeam = () => {
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
