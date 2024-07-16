import { OurImpactIcon } from "../components/Icons";
import { BusinessInHouseIcon } from "../components/Icons";
import { JobsCreatedIcon } from "../components/Icons";
import { JobsPlacedIcon } from "../components/Icons";
import { JobsSavedIcon } from "../components/Icons";
import { StartupsSupportedIcon } from "../components/Icons";
import { ProjectsDeliveredIcon } from "../components/Icons";
import { TechTalentsEmpoweredIcon } from "../components/Icons";

import { Card } from "react-bootstrap";
//COUNTUP Animation
import useCountUp from "../hooks/useCountup";

export const OurImpact = () => {
  //TO count the numbers
  const countProjects = useCountUp(10, 30);
  const countStartUps = useCountUp(70, 30);
  const countTalents = useCountUp(600, 30);

  return (
    <div className="container-fluid text-center px-5 impactSection">
      <div className="row justify-content-center ">
        <h3 className="text-center mt-3 mb-5 purple-text">OUR IMPACT</h3>
      </div>
      <div className="impactRow">
        {" "}
        <div className="">
          {" "}
          <Card className="impactCards border-0">
            <div>
              {" "}
              <ProjectsDeliveredIcon className="pt-2" />
            </div>
            <div className="p-1">
              <h5 className="traction-text">{`${countProjects}+`}</h5>
            </div>
            <div>
              <p className="text-bold">PROJECTS DELIVERED</p>
            </div>
          </Card>
        </div>
        <div className="">
          {" "}
          <Card className="impactCards border-0">
            <TechTalentsEmpoweredIcon className="pt-2" />
            <div className="p-1">
              <h5 className="traction-text">{`${countTalents}+`}</h5>
            </div>
            <p className="text-bold">TECH TALENTS EMPOWERED</p>
          </Card>
        </div>
        <div className="">
          {" "}
          <Card className="impactCards border-0">
            <StartupsSupportedIcon className="pt-2" />
            <div className="p-1">
              <h5 className="traction-text">{`${countStartUps}+`}</h5>
            </div>
            <p className="text-bold">STARTUPS SUPPORTED</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
export const OurModelTractions = () => {
  return (
    <div className="container-fluid text-center px-5 ourImpactBg">
      <div className="row justify-content-evenly py-5">
        {/* <h4 className="text-center my-5">OUR IMPACT</h4> */}

        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body">
              <h1 className="card-text">75%</h1>
              <p className="card-text text-nowrap">HAVE FEMALE CO-FOUNDERS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text"> 240</h1>
              <p className="card-text">MENTORSHIP HOURS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 my-3 ">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text">12</h1>
              <p className="card-text">PORTFOLIO BUSINESSES</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12  my-3">
          <div className="align-items-center">
            {/* <OurImpactIcon /> */}
            <div className="card-body ">
              <h1 className="card-text">20</h1>
              <p className="card-text">JOBS CREATED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ManagedServicesTractions = () => {
  return (
    <div className="container-fluid text-center px-5">
      <div className="row justify-content-evenly py-4">
        {/* <h4 className="text-center my-5">OUR IMPACT</h4> */}
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">EXHIBITIONS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">2</h1>
              <p className="card-text">TALK SESSIONS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 my-3">
          <div className="align-items-center">
            <div className="card-body ">
              <h1 className="card-text">10</h1>
              <p className="card-text">PROJECTS DELIVERED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
