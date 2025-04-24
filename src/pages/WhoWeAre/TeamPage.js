import { AdvisoryTeamPic } from "../../components/AllCards/TeamCard";

import { Gerians } from "../../components/AllCards/TeamCard";

const TeamPage = () => {
  return (
    <>
      {/* <TeamHero /> */}
      {/* <OurTeamHero /> */}
      <Gerians />
      {/* <EIR /> */}
      <AdvisoryTeamPic />
      <JointheTeam />
    </>
  );
};

const JointheTeam = () => {
  return (
    <>
      <div className="container-fluid py-3 px-lg-5 px-md-5 WhatWeDoBg">
        <div className="row mt-lg-5 mb-lg-3 mx-lg-3 px-5 justify-content-center ">
          <div className="col-lg-8">
            <h3 className="text-center pb-2">Become an 8thGearian</h3>
            <p className="text-center" style={{ fontSize: "0.8rem" }}>
              Dream teams are not right for everyone. Some people prefer job
              security, and choose to work at companies that are more focused on
              stability and seniority, and less rigorous about performance
              management. Our model works best for people who value excellence
              and the opportunities it provides.
            </p>
            <p className="text-center" style={{ fontSize: "0.8rem" }}>
              Does our positioning and mission resonate with you? If yes, we
              have been waiting to have you!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          {/* <JoinTheTeamForm /> */}
        </div>
      </div>
    </>
  );
};
export default TeamPage;
