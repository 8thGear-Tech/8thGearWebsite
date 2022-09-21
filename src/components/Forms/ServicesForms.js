// //ManagedServicesRequestForm
// //ProjectDeliveryRequestForm
// //CoworkingSpaceForm

import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { SubmitFormBtn } from "../Buttons/ContactBtn";

// export const CoworkingSpaceForm = () => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nameOfBusiness, setNameOfBusiness] = useState("");
//   const [serviceOfInterest, setserviceOfInterest] = useState("");
//   const [addressOfUser, setaddressOfUser] = useState("");
//   const [optionalAddOnsPlan, setoptionalAddOnsPlan] = useState("");
//   const [people, setPeople] = useState([]);

//   <svg
//     width="16"
//     height="16"
//     fill="currentColor"
//     class="bi bi-caret-down-fill"
//     viewBox="0 0 16 16"
//   >
//     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
//   </svg>
// );

// const Handle = (e) => {
//   e.preventDefault();
//   if (
//     email &&
//     phoneNumber &&
//     nameOfBusiness &&
//     serviceOfInterest &&
//     addressOfUser &&
//     optionalAddOnsPlan
//   ) {
//     const person = {
//       email,
//       phoneNumber,
//       nameOfBusiness,
//       serviceOfInterest,
//       addressOfUser,
//       optionalAddOnsPlan,
//     };
//     console.log(person);
//     setPeople((people) => {
//       return [...people, person];
//     });
//     setEmail("");
//     setPhoneNumber("");
//     setNameOfBusiness("");
//     setserviceOfInterest("");
//     setaddressOfUser("");
//     setoptionalAddOnsPlan("");
//     setPeople("");
//   } else {
//     alert("empty values");
//   }
// };

// return (
//   <>
//     <button
//       type="button"
//       className="prop"
//       data-bs-toggle="modal"
//       data-bs-target="#staticBackdrop"
//     >
//       Coworking Space Form
//     </button>

//     <div
//       className="modal fade"
//       id="staticBackdrop"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabIndex="-1"
//       aria-labelledby="staticBackdropLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog modal-md">
//         <div className="modal-content">
//           <div className="modal-header m-2">
//             <img
//               src={logo}
//               width={40}
//               className=""
//               id="staticBackdropLabel"
//             />
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">
//             <form className="form" onSubmit={Handle}>
//               <div className="background">
//                 <h4 className=" request mb-4 text-center bookingform">
//                   The 8thGear Hub - Space Booking Form
//                 </h4>
//                 <div className="my-3">
//                   <label for="InputEmail" className="form-label"></label>
//                   <input
//                     type="email"
//                     className="form-control border-primary"
//                     id="InputEmail"
//                     aria-describedby="emailHelp"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className="my-3">
//                   <label
//                     for="InputPhoneNumber"
//                     className="form-label"
//                   ></label>
//                   <input
//                     type="phonenumber"
//                     className="form-control border-primary"
//                     id="InputPhoneNumber"
//                     aria-describedby="phonenumberHelp"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="Phone Number"
//                   />
//                 </div>
//                 <div className="my-3 pb-4">
//                   <label for="InputName" className="form-label"></label>
//                   <input
//                     type="text"
//                     className="form-control border-primary"
//                     id="InputName"
//                     aria-describedby="nameofbusinessHelp"
//                     value={nameOfBusiness}
//                     onChange={(e) => setNameOfBusiness(e.target.value)}
//                     placeholder="Name Of Business"
//                   />
//                 </div>

{
  /* <div className="mb-3 ">
                    <label for="InputName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary "
                      id="InputName"
                      aria-describedby="titleHelp"
                      value={serviceOfInterest}
                      onChange={(e) => setserviceOfInterest(e.target.value)}
                      placeholder="Service Of Interest  "
                    />
                  </div> */
}
//                   <div class="input-group my-3">
//                     <label class="" for="inputGroupSelect01"></label>
//                     <select
//                       class="form-select form-control border-primary"
//                       id="inputGroupSelect01 InputName"
//                     >
//                       <option selected>Service Of Interest</option>
//                       <option value="1"></option>
//                       value= {serviceOfInterest}
//                       onChange={(e) => setserviceOfInterest(e.target.value)}
//                     </select>
//                   </div>

//                   <div className="my-3 ">
//                     <label for="InputName" className="form-label"></label>
//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputName"
//                       aria-describedby="addressofuserHelp"
//                       value={addressOfUser}
//                       onChange={(e) => setaddressOfUser(e.target.value)}
//                       placeholder="Address Of User"
//                     />
//                   </div>

//                   <div class="input-group my-5">
//                     <label class="" for="inputGroupSelect01"></label>
//                     <select
//                       class="form-select form-control border-primary"
//                       id="inputGroupSelect01 InputName"
//                     >
//                       <option selected>Optional Add-Ons Plan</option>
//                       <option value="1"></option>
//                       value={optionalAddOnsPlan}
//                       onChange={(e) => setoptionalAddOnsPlan(e.target.value)}
//                     </select>
//                   </div>
//                   <div className="col-12 mb-3">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="gridCheck"
//                       />
//                       <label className="form-check-label" for="gridCheck">
//                         Click to Subscribe to our Newsletter
//                       </label>
//                     </div>
//                   </div>
//                   <div className="sub text-center submit border-">
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

// export default CoworkingSpaceForm;

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

// JoinTheStudioForm

export const JoinTheStudioForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [message, setMessage] = useState("");
  // const [message, setMessage] = useState("");
  // const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameOfBusiness, setNameOfBusiness] = useState("");
  const [serviceOfInterest, setServiceOfInterest] = useState("");
  const [addressOfUser, setAddressOfUser] = useState("");
  const [optionalAddOnsPlan, setOptionalAddOnsPlan] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      email &&
      phoneNumber &&
      nameOfBusiness &&
      serviceOfInterest &&
      addressOfUser &&
      optionalAddOnsPlan
    ) {
      const person = {
        email,
        phoneNumber,
        nameOfBusiness,
        serviceOfInterest,
        addressOfUser,
        optionalAddOnsPlan,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setEmail("");
      setPhoneNumber("");
      setNameOfBusiness("");
      setServiceOfInterest("");
      setAddressOfUser("");
      setOptionalAddOnsPlan("");
      setPeople("");
    } else {
      window.alert("empty values");
    }
  };

  return (
    <>
      <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Join The Studio
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header m-2">
              <img
                // src={logo}
                width={40}
                className=""
                id="staticBackdropLabel"
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={Handle}>
                <div className="background">
                  <h4 class=" request mb-4">Join The Studio</h4>

                  <div className="mb-3 ">
                    <label for="InputName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputName"
                      aria-describedby="titleHelp"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label for="InputEmail" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputEmail"
                      aria-describedby="titleHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      for="InputPhoneNumber"
                      className="form-label"
                    ></label>
                    <input
                      type="phone number"
                      className="form-control border-primary"
                      id="InputPhoneNumber"
                      aria-describedby="titleHelp"
                      value={nameOfBusiness}
                      onChange={(e) => setNameOfBusiness(e.target.value)}
                      placeholder="Name of bisiness"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputDetail"
                      className="form-label"
                    ></label>
                    <textarea
                      className="form-control border-primary"
                      id="message"
                      rows="3"
                      value={serviceOfInterest}
                      onChange={(e) => setServiceOfInterest(e.target.value)}
                      placeholder="Send a message"
                    ></textarea>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Click to Suscribe to our Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* <SubmitFormBtn /> */}
                    <button>submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
