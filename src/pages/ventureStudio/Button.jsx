import React from "react";
import "./ventureStudio.css";

const Button = ({ buttonText }) => {
  return (
    <div>
      <a
        href="https://forms.gle/WJEYcDTdFkgZ6rwUA"
        target="_blank" rel="noopener noreferrer"
      >
        {" "}
        <button className="btn ventureStudioBtn">{buttonText}</button>
      </a>
    </div>
  );
};
export const ApplyNowBtn = ({ buttonText }) => {
  return (
    <div>
      <a
        href="https://forms.gle/WJEYcDTdFkgZ6rwUA"
        target="_blank" rel="noopener noreferrer"
      >
        {" "}
        <button className="btn ventureStudioBtn">{buttonText}</button>
      </a>
    </div>
  );
};

export default Button;
