// // import * as React from "react";
// import { Navbar8 } from "../../components/Navbar";
// // // import ProjectDeliveryPageHer
// import { CoworkingTestimonial } from "../../components/AllCards/TestimonialCards";
// // import Image from "../../assets/images/Rectangle4344.png";
// import { CoworkingHero } from "../../components/Hero/ImageandTextHero";

// const CoWorking = () => {
//   return (
//     <>
//       <Navbar8 />
//       <CoworkingHero />
//       {/* <ProjectDeliveryPageHero /> */}

//       <div className="text-center mt-5">
//         <p>
//           <h3> GET TO KNOW US </h3>
//         </p>
//       </div>
//       <div className="purple">
//         <div className="all">
//           <div className="grid1 mt-5">
//             <div className="c1-element1">
//               <i className="bi bi-alarm" style={{ fontSize: "3rem" }}></i>
//               <p> 24/7 Access </p>
//             </div>

//             <div className="c2-element1">
//               <i className="bi bi-cup-hot" style={{ fontSize: "3rem" }}></i>
//               <p>Available Coffee and Tea Bar</p>
//             </div>
//             <div className="c2-element2">
//               <i className="bi bi-globe" style={{ fontSize: "3rem" }}></i>
//               <p>Community Access to 8thGear Venture Studio</p>
//             </div>
//             <div className="c2-element3">
//               <h6>Community and Lounge Area</h6>
//               <i className="bi bi-cup-straw" style={{ fontSize: "3rem" }}></i>
//             </div>

//             <div className="c3-element1">
//               <p> Demo Day and Founder's Gathering Event</p>
//               <i
//                 className="bi bi-journal-text"
//                 style={{ fontSize: "3rem" }}
//               ></i>
//             </div>
//             <div className="c3-element2">
//               <p> Quality Furnishing</p>
//               <i class="bi bi-file-fill" style={{ fontSize: "3rem" }}></i>
//             </div>
//             <div className="c3-element3">
//               <p> Fully Equipped Conference room</p>
//               <i className="bi bi-laptop" style={{ fontSize: "3rem" }}></i>
//             </div>
//           </div>
//           <div className="grid2">
//             <div className="c4-element1">
//               <p> High Speed and secured internet service</p>
//               <i className="bi bi-wifi" style={{ fontSize: "3rem" }}></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-5">
//         <p>
//           <h3> OUR PRICE RANGE </h3>
//         </p>
//       </div>

//       <div className="container">
//         <table class="table table-bordered">
//           <thead className="change">
//             <tr className="letter">
//               <th scope="col" style={{ width: 500 }}></th>
//               <th scope="col">PRIVATE OFFICES</th>
//               <th scope="col">CONFERENCE ROOM</th>
//               <th scope="col">TRAINING ROOM</th>
//               <th scope="col">DEDICATED DESK</th>
//               <th scope="col">HOT DESK</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Access to Common Areas</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pinish">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Access to Exhibition floor</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Private Locker</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Projector</p>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Marker Boards</p>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Power</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pinish">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Meeting room (1hr Free Per Month)</p>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Up to 30 seats</p>
//               </td>
//               <td className="Pin"> </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Kitchenette</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pinish">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//             </tr>
//             <tr className="Pinner">
//               <td className="finish">
//                 <p>Features speakers</p>
//               </td>
//               <td className="Pin">
//                 <i class="bi bi-check-circle"></i>
//               </td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pin"></td>
//               <td className="Pinish"></td>
//             </tr>
//             <tr>
//               <td className="finish">Amount</td>
//               <td className="Pin">₦10,000</td>
//               <td className="Pin">₦10,000</td>
//               <td className="Pin">₦10,000</td>
//               <td className="Pin">₦35,000</td>
//               <td className="Pinish">₦3,000</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <br></br>
//       <br></br>

//       <div className="pink">
//         <div className="short">
//           <h2>FROM OUR USERS</h2>
//         </div>
//         <div>
//           <CoworkingTestimonial />
//         </div>
//       </div>

//       <br></br>
//       {/* <div className="purple">
//         <div className="firstsall">
//           <div className=" text-center mt-5 Alarm">
//             <i className="bi bi-alarm"></i>
//             <h6> 24/7 Access </h6>
//           </div>
//         </div>

//         <div className="line1">
//           <div className="text-center CoffeeandTea">
//             <i className="bi bi-cup-hot"></i>
//             <h6>Available Coffee and Tea Bar</h6>
//           </div>
//           <div className="text-center mt-5 communityacess">
//             <i className="bi bi-globe"></i>
//             <h6>Community Access to 8thGear Venture Studio</h6>
//           </div>
//           <div className="text-center mt-5 LoungeArea">
//             <h6>Community and Lounge Area</h6>
//             <i className="bi bi-cup-straw"></i>
//           </div>
//         </div>
//         <div>
//           <div className="text-center mt-5 DemoDay">
//             <h6> Demo Day and Founder's Gathering Event</h6>
//             <i className="bi bi-journal-text"></i>
//           </div>
//           <div className="text-center mt-5 QualityFurnishing">
//             <h6> Quality Furnishing</h6>
//             <i className="las la-couch"></i>
//           </div>
//           <div className="text-center mt-5 Conferenceroom">
//             <h6> Fully Equipped Conference room</h6>
//             <i className="bi bi-laptop"></i>
//           </div>
//         </div>

//         <div className="div">
//           <div className="text-center mt-5 InternetService">
//             <h6> High Speed and secured internet service</h6>
//             <i className="bi bi-wifi"></i>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };
// export default CoWorking;
