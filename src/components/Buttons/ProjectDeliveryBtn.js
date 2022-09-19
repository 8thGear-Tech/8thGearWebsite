//LearnMoreBtn
import React from "react";

export const LearnMoreBtn = () => {
  return (
    <>
      <button className="LearnMoreBtn" type="submit">
        Learn more
      </button>
    </>
  );
};

//RequestForProposalBtn
export const RequestForProposalBtn = () => {
  return (
    <>
      <button
        className="RequestForProposalBtn"
        // type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        type="button"
      >
        Request for a Proposal
      </button>
    </>
  );
};

//ProjectDeliveryViewMoreBtn
export const ProjectDeliveryViewMoreBtn = () => {
  return (
    <>
      <button className="ProjectDeliveryViewMoreBtn" type="submit">
        view more
      </button>
    </>
  );
};
