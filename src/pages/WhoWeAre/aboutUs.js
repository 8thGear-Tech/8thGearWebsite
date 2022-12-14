import React from "react";

import ciscologo from "../../assets/images/whoweare/ciscologo.png";
import afrilabslogo from "../../assets/images/whoweare/afrilabslogo.png";
import gizlogo from "../../assets/images/whoweare/gizlogo.png";
import lsetflogo from "../../assets/images/whoweare/lsetflogo.png";
import usadflogo from "../../assets/images/whoweare/usadflogo.png";
import corevalues from "../../assets/images/whoweare/corevalues.png";
import { Navbar10 } from "../../components/Navbar";
import { AboutPageHero } from "../../components/Hero/VideoHero";
import coworking from "../../assets/images/coworking/coworking.png";

const AboutUs = () => {
  return (
    <>
      <Navbar10 />
      <AboutPageHero />
      <CoreValues />
      <Partners />
    </>
  );
};

const CoreValues = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <img
          src={corevalues}
          className="col-12"
          // style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></img>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="container-fluid partnersBg py-4">
      {" "}
      <div className="row g-0">
        <h3 className="mt-4 text-center mb-4">Our Partners</h3>
        <div className="row TextAlignCenter justify-content-center justify-content-evenly">
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={ciscologo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={afrilabslogo}
              className="logo1 col-12"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={gizlogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={lsetflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
          <div className=" TextAlignCenter col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img
              src={usadflogo}
              className="logo1 col-12 "
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
// const Partners = () => {
//   return (
//     <div className="container-fluid partnersBg">
//       {" "}
//       <div className="row ">
//         <h3 className="mt-4 text-center">Our Partners</h3>
//         <div className="row ">
//           <div className=" TextAlignCenter col-lg-2 col-md-6 col-sm-6 col-xs-6 my-2">
//             <img
//               src={ciscologo}
//               className="logo1 "
//               // style={{ maxWidth: "100%", maxHeight: "100%" }}
//             ></img>
//           </div>
//           <div className="  col-lg-2 col-md-6 col-sm-6 col-xs-6 my-2">
//             <img
//               src={afrilabslogo}
//               className="logo1 "
//               // style={{ maxWidth: "100%", maxHeight: "100%" }}
//             ></img>
//           </div>
//           <div className=" TextAlignCenter col-lg-2 col-md-6 col-sm-6 col-xs-6 my-2">
//             <img
//               src={gizlogo}
//               className="logo1 "
//               // style={{ maxWidth: "100%", maxHeight: "100%" }}
//             ></img>
//           </div>
//           <div className="  col-lg-2 col-md-6 col-sm-6 col-xs-6 my-2">
//             <img
//               src={lsetflogo}
//               className="logo1 "
//               // style={{ maxWidth: "100%", maxHeight: "100%" }}
//             ></img>
//           </div>
//           <div className="  col-lg-2 col-md-6 col-sm-6 col-xs-6 my-2">
//             <img
//               src={usadflogo}
//               className="logo1 "
//               // style={{ maxWidth: "100%", maxHeight: "100%" }}
//             ></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

{
  /* <div className="TextAlignCenter col-lg-3 col-md-6 col-sm-6 col-xs-6 my-5 m-auto">
            <img
              src={lsetflogo}
              className="logo2 col-12"
              // style={{ maxWidth: "80%", maxHeight: "70%" }}
            ></img>
          </div> */
}

export default AboutUs;
