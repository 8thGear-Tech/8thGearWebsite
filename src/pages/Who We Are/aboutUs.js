
import React from "react"

import inn from "../../assets/images/innkeeperdarklogo.png"
import hev from "../../assets/images/Ellipse 4.png"


export const AboutUs = () => {
    return (
        <body className="py-5">
                <h2 className=" heading mb-4">Our Partners</h2>
                <div className="row TextAlignCenter mb-4">
                    <div className=" TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
                    <img src={hev} className="logo1 col-12 " style={{maxWidth:"100%", maxHeight:"100%",}}></img>
                </div>
                <div className=" TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-5 m-auto">
                    <img src={inn} className="logo2 col-12 " style={{maxWidth:"80%", maxHeight:"70%",}}></img>
                    </div>
                    <div className="TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2">
                    <img src={hev} className="logo1 col-12" style={{maxWidth:"100%", maxHeight:"100%",}}></img>
                    </div>
                    <div className="TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-5 m-auto">
                    <img src={inn} className="logo2 col-12" style={{maxWidth:"80%", maxHeight:"70%",}}></img>
                    </div>
                </div>
        </body>
    )
}

export default AboutUs;