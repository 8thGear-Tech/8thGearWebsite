import React from "react";
import gizlogo from "../../assets/images/projectdelivery/gizlogo.png";
import itflogo from "../../assets/images/projectdelivery/itflogo.png";
import lsetflogo from "../../assets/images/projectdelivery/lsetflogo.png";
import usadflogo from "../../assets/images/projectdelivery/usadflogo.png";
import s4plogo from "../../assets/images/projectdelivery/s4plogo.png";
import fcmblogo from "../../assets/images/projectdelivery/fcmblogo.png";
import Afrilab from "../../assets/images/projectdelivery/Afrilab logo.png";
import leadAfrica from "../../assets/images/projectdelivery/Leap Africa.jpeg";
import Peiges from "../../assets/images/projectdelivery/Peiges.PNG";

// // sass file
// import "../../sassfiles/pages/projectdelivery/_logoscroll.sass";

// const logos = [
//   gizlogo,
//   itflogo,
//   lsetflogo,
//   usadflogo,
//   s4plogo,
//   fcmblogo,
//   Afrilab,
//   leadAfrica,
//   Peiges,
// ];

// // const LogoScroll = () => {
// //     return (
// //         <div className="logo-scroll">
// //             <div className="scroll-container">
// //                 {logos.map((logo, index) => (
// //                     <img key={index} src={logo} alt={`Logo ${index + 1}`} />
// //                 ))}
// //                 {logos.map((logo, index) => (
// //                     <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// const LogoScroll = () => (
//   <>
//     <div>
//       <div className="slider2" style={{ position: "relative", zIndex: 1 }}>
//         <div className="slide-track2">
//           {[
//             gizlogo,
//             itflogo,
//             lsetflogo,
//             usadflogo,
//             s4plogo,
//             fcmblogo,
//             Afrilab,
//             leadAfrica,
//             Peiges,
//           ].map((src, index) => (
//             <div
//               className="slide2"
//               key={index}
//               style={index === 0 ? { marginLeft: "0px" } : undefined}
//             >
//               <img
//                 src={src}
//                 alt={`Logo ${index + 1}`}
//                 className="carousel-logo"
//                 style={{
//                   width: "130px",
//                   height: "100px",
//                   margin: "0 30px",
//                 }}
//               />
//             </div>
//           ))}
//           {[
//             gizlogo,
//             itflogo,
//             lsetflogo,
//             usadflogo,
//             s4plogo,
//             fcmblogo,
//             Afrilab,
//             leadAfrica,
//             Peiges,
//           ].map((src, index) => (
//             <div
//               className="slide2"
//               key={index}
//               style={index === 0 ? { marginLeft: "0px" } : undefined}
//             >
//               <img
//                 src={src}
//                 alt={`Logo ${index + 1}`}
//                 className="carousel-logo"
//                 style={{
//                   width: "130px",
//                   height: "100px",
//                   margin: "0 30px",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>
// );

const LogoScroll = () => (
  <>
    <div>
      <div className="slider2" style={{ position: "relative", zIndex: 1 }}>
        <div className="slide-track2">
          {[
            gizlogo,
            itflogo,
            lsetflogo,
            usadflogo,
            s4plogo,
            fcmblogo,
            Afrilab,
            leadAfrica,
            Peiges,
          ].map((src, index) => (
            <div
              className="slide2"
              key={index}
              style={index === 0 ? { marginLeft: "0px" } : undefined}
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="carousel-logo"
                style={{
                  width: "130px",
                  height: "100px",
                  margin: "0 30px",
                }}
              />
            </div>
          ))}
          {[
            gizlogo,
            itflogo,
            lsetflogo,
            usadflogo,
            s4plogo,
            fcmblogo,
            Afrilab,
            leadAfrica,
            Peiges,
          ].map((src, index) => (
            <div
              className="slide2"
              key={index}
              style={index === 0 ? { marginLeft: "0px" } : undefined}
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="carousel-logo"
                style={{
                  width: "130px",
                  height: "100px",
                  margin: "0 30px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default LogoScroll;
