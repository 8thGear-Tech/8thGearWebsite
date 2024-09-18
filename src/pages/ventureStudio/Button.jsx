import React from "react";
import "./ventureStudio.css";

const Button = ({ buttonText }) => {
  return (
    <div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScYKIGrYhSeAHBQ8jLP07eH18UcTMCVxoUIaFtPj8-soyr_Xw/viewform?usp=pp_url"
        target="_blank"
      >
        {" "}
        <button className="btn ventureStudioBtn">{buttonText}</button>
      </a>
    </div>
  );
};

export default Button;
