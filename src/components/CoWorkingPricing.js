import React from "react";
import image from "./image/workspace.jpg";
import "./css/CoWorking.css";

export function CoWorkingPricing() {
  return (
    <div className="coworking-pricing">
      <div className="workspace">
        <h3>Lagos Innovates: Free Workspace Voucher</h3>
        <p>
          Redeem your workspace voucher <a href="https://www.google.com">here</a>. To
          apply for your workspace grant, click <a href="https://www.google.com">here</a>.
        </p>
        <img src={image} className="fluid coworking-img" alt="Workspace" />
      </div>
    </div>
  );
}

export default CoWorkingPricing;
