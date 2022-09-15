import data from "../../data/managedServiceHero.json";
//ManagedServicesHero
//PortfoliosandTeamPageHero
// founderMeetupAndDemoday

const ManagedServicesHero = (props) => {
  const { title, text } = props;
  return (
    <div className="ManagedServicesHeroText">
      <h1 className="">{title}</h1>
      <p>{text}</p>
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
