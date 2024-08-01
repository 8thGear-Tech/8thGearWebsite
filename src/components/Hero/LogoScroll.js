import React from "react";

// sass file
import "../../sassfiles/pages/projectdelivery/_logoscroll.sass";

const LogoScroll = ({logos}) => {
    return (
        <div className="logo-scroll">
            <div className="scroll-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index + 1}`} />
                ))}
                {logos.map((logo, index) => (
                    <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default LogoScroll;
