import React from "react";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
import s4plogo from "../../assets/images/projectdelivery/s4plogo.png";
import fcmblogo from "../../assets/images/projectdelivery/fcmblogo.png";
// sass file
import "../../sassfiles/pages/projectdelivery/_logoscroll.sass";

const logos = [gizlogo, itflogo, lsetflogo, usadflogo, s4plogo, fcmblogo]; // Add more logos to this array

const LogoScroll = () => {
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
