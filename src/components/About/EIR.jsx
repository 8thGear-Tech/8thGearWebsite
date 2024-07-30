// import React from "react";
// import "./About.css";
// import Team1 from "./img/photohead.png";
// import { FaLinkedin } from "react-icons/fa";

// const eirTeams = [
//   {
//     id: "team-member-1",
//     imgSrc: Team1,
//     name: "Uche Tosin",
//     title: "EIR",
//     linkedin: "#",
//   },
//   {
//     id: "team-member-2",
//     imgSrc: Team1,
//     name: "Jane Doe",
//     title: "EIR",
//     linkedin: "#",
//   },
// ];

// const EIR = () => {
//   return (
//     <div className="row">
//       <div className="container mt-5 justify-content-center">
//         <h2 className="text-center mt-5 text-uppercase font-weight-bold">
//         Entrepreneurs in Residence
//         </h2>
//         <div className="eirTeamsCard mb-4">
//           {eirTeams.map((member) => (
//             <div key={member.id} className="col-md-6">
//               <div className="card mt-5 shadow">
//                 <img
//                   src={member.imgSrc}
//                   className="img-fluid rounded-top-2"
//                   alt={member.name}
//                 />
//                 <div className="card-body text-center bg-white border border-top-0 border-info border-5 rounded-bottom-2">
//                   <h5 className="card-title text-uppercase fs-6">
//                     {member.name}
//                   </h5>
//                   <p className="card-text text-uppercase">{member.title}</p>
//                   <div className="social-links d-flex justify-content-center">
//                     <a href={member.linkedin} className="text-decoration-none">
//                     <FaLinkedin className="w-100 h-100" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EIR;
