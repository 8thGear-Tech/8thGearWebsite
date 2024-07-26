// import React from "react";
// import "./About.css";
// import Team1 from "./img/photohead.png";
// import { BsArrowRight } from "react-icons/bs";

// const teamMembers = [
//   {
//     id: "team-member-1",
//     imgSrc: Team1,
//     name: "Uche Tosin",
//     title: "CHAIRMAN",
//     link: "#",
//   },
//   {
//     id: "team-member-2",
//     imgSrc: Team1,
//     name: "Jane Doe",
//     title: "CEO",
//     link: "#",
//   },
//   {
//     id: "team-member-3",
//     imgSrc: Team1,
//     name: "John Smith",
//     title: "CTO",
//     link: "#",
//   },
//   {
//     id: "team-member-4",
//     imgSrc: Team1,
//     name: "Emily White",
//     title: "CFO",
//     link: "#",
//   },
// ];

// const CoreTeam = () => {
//   return (
//     <div className="row">
//       <div className="container mt-5 justify-content-center">
//         <h2 className="text-center mt-5 text-uppercase font-weight-bold">
//           Our Core Team
//         </h2>
//         <div className="teamMembersCard mb-4">
//           {teamMembers.map((member) => (
//             <div key={member.id}>
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
//                   <a
//                     href={member.link}
//                     className="d-flex text-center  justify-content-center align-items-center text-decoration-none"
//                   >
//                     View Bio <BsArrowRight className="ms-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreTeam;
