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
      <a
        href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/edit"
        target="_blank"
      >
        {" "}
        <button
          className="RequestForProposalBtn"
          // type="button"
          // data-bs-toggle="modal"
          // data-bs-target="#staticBackdrop"
          // type="button"
        >
          Request for a Proposal
        </button>
      </a>
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
//ProjectDeliveryViewMoreBtn
export const RegisterBtn = () => {
  return (
    <>
      <a href="https://forms.gle/guUTioEKNWV8d7WUA" target="_blank">
        {" "}
        <button className="RegisterBtn" type="submit">
          Register
        </button>
      </a>
    </>
  );
};
