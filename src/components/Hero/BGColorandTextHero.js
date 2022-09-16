// import data from "../../data/managedServiceHero.json";
import data from "../../data/portfolioHero.json";
//ManagedServicesHero
//PortfoliosandTeamPageHero
// founderMeetupAndDemoday

const ManagedServicesHero = (props) => {
  const { title, text } = props;
  return (
    <div>
      <div className="ManagedServicesHeroText d-none d-md-block d-sm-none">
        <h1 className="">{title}</h1>
        <p>{text}</p>
      </div>
      {/* mobile display */}
      <div className="ManagedServicesHeroText d-md-none d-sm-block">
        <h1 className="">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Servicehero = () => {
  return (
    <div className="ManagedServicesHero">
      {data.managedServicesHero.map((hero) => {
        return (
          <div className="" key={hero.id}>
            <ManagedServicesHero {...hero}></ManagedServicesHero>
          </div>
        );
      })}
    </div>
  );
};

// portfolio component start

const PortfolioHeroSingle = (props) => {
  const { text } = props;
  return (
    <div>
      <div className="PortfolioHeroText d-lg-block d-md-none d-sm-none d-xs-none">
        <h3>{text}</h3>
      </div>
      <div className="PortfolioHeroText d-lg-none d-md-none d-sm-block d-xs-block">
        <h4>{text}</h4>
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
