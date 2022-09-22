
import React from "react"

import inn from "../../assets/images/innkeeperdarklogo.png"
import hev from "../../assets/images/Ellipse 4.png"
// import mind from "../../assets/images/mindafrik-03 (1).png"
// import ease from "../../assets/images/IMG-20220909-WA0010-removebg-preview.png"


export const AboutUs = () => {
    return (
     <div className="container">
        <h4 className="mb-0">Our Partners</h4>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-6">
                    <img className="img-fluid" src={hev} alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                <img className="img-fluid" src={inn} alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                    <img className="img-fluid" src={hev} alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                    <img className="img-fluid" src={hev} alt=""></img>
            </div>
        </div>
     </div>
    );
  };
  
  export default AboutUs;