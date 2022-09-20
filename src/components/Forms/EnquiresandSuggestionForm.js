import { useState } from "react";

//JoinTheTeamForm
//JoinTheStudioForm
//SuggestAnEventForm

// const JoinTheTeamForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("name: " + formData.name);
//     console.log("Email: " + formData.email);
//     console.log("phoneNumber: " + formData.phoneNumber);
//     console.log("message: " + formData.message);
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="prop"
//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop"
//       >
//         Join The Team
//       </button>

//       <div
//         className="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabIndex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-sm">
//           <div className="modal-content">
//             <div className="modal-header m-2">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="background">
//                   <h4 className=" contactUsTitle mb-4">Contact Us</h4>

//                   <div className="Vessel mb-3">
//                     <input
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       value={formData.name}
//                       type="text"
//                       name="name"
//                       id="name"
//                       className="myInput form-control"
//                       placeholder="Name"
//                     ></input>
//                   </div>

//                   <div className="Vessel mb-3">
//                     <input
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       value={formData.email}
//                       type="text"
//                       name="email"
//                       id="email"
//                       className="myInput form-control"
//                       placeholder="Email"
//                     ></input>
//                   </div>

//                   <div className="Vessel">
//                     <input
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           phoneNumber: e.target.value,
//                         })
//                       }
//                       value={formData.phoneNumber}
//                       type="text"
//                       name="phoneNumber"
//                       id="phoneNumber"
//                       className="myInput form-control"
//                       placeholder="Phone Number"
//                     ></input>
//                   </div>

//                   <div className=" Vessel mb-3">
//                     <label for="message" className="form-label"></label>
//                     <textarea
//                       className="myInput form-control"
//                       id="message"
//                       rows="3"
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       value={formData.message}
//                       type="text"
//                       name="message"
//                       placeholder="Send a message"
//                     ></textarea>
//                   </div>
//                   <div className="col-12 mb-3">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="gridCheck"
//                       />
//                       <label className="form-check-label" for="gridCheck">
//                         Click to subscribe to our Newsletter
//                       </label>
//                     </div>
//                   </div>
//                   <div className="sub">
//                     <input type="Submit" className="submit" />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JoinTheTeamForm;
