//AdvisoryBoardCard

import React from "react";
import ReactDOM from "react-dom";
// import TeamImage from "../../assets/images/TeamImage";

export const TeamCard = () => {
  return (
    <div class="card">
      {/* <img src={TeamImage} class="card-img-top" alt="Teamimage" /> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">DAMILOLA OBIDAIRO</p>
        <h5> C0-FOUNDER</h5>
        <a href="#" class="btn btn-primary">
          View Bio
        </a>
      </div>
    </div>
  );
};
