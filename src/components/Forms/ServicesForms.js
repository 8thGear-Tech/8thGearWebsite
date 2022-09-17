<<<<<<< HEAD
// //ManagedServicesRequestForm
// //ProjectDeliveryRequestForm
// //CoworkingSpaceForm

// <<<<<<< HEAD
// import logo from "../../assets/images/logo.png";
// import React, { useState } from "react";
// import Record from "../../data/ManagedServicesRequestForm.json";
// export const ManagedServicesRequestForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     phoneNumber: "",
//     nameOfBusiness: "",
//     natureOfBusiness: "",
//     serviceOfInterest: "",
//     addressOfUser: "",
//     optionalAddonsPlan: "",
//   });
// =======
// import logo from "../../assets/images/logo.png"
// import React, { useState } from 'react';
// export const ManagedServicesRequestForm =() =>{
// >>>>>>> 3de49a81ca4151ed22fee430a8a3108892a3b7a0

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email: " + formData.email);
//     console.log("Phone Number: " + formData.phoneNumber);
//     console.log("Name Of Business: " + formData.nameOfBusiness);
//     console.log("Nature Of Business: " + formData.natureOfBusiness);
//     console.log("Service Of Interest: " + formData.addressOfUser);
//     console.log("Address Of User: " + formData.email);
//     console.log("Optional Add-ons Plan: " + formData.optionalAddonsPlan);
//   };

// <<<<<<< HEAD
//   return (
//     <>
//       <div class="container mt-3">
//         <button
//           type="button"
//           class="btn btn-success"
//           data-bs-toggle="modal"
//           data-bs-target="#myModal"
//         >
//           Click Me!
// =======
//       const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("Email: " +  formData.email );
//         console.log("Phone Number: " + formData.phoneNumber );
//         console.log("Name Of Business: " +  formData.nameOfBusiness );
//         console.log("Nature Of Business: " +  formData.natureOfBusiness );
//         console.log("Service Of Interest: " +  formData.serviceOfInterest );
//         console.log("Address Of User: " +  formData.addressOfUser );
//         console.log("Optional Add-ons Plan: " +  formData.optionalAddonsPlan );
//     }

//     return (<>
//         <div class="container mt-3">

//         <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
//             Click Me!
// >>>>>>> 3de49a81ca4151ed22fee430a8a3108892a3b7a0
//         </button>

//         <div class="modal fade" id="myModal">
// <<<<<<< HEAD
//           <div class="modal-dialog modal-lg">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <img src={logo} height={35} width={30}></img>
//                 <button type="button" class="close" data-bs-dismiss="modal">
//                   &times;
//                 </button>
//               </div>

//               <div class="modal-body">
//                 <div className="row">
//                   {Record &&
//                     Record.map((record) => {
//                       return (
//                         <div className="ManagedServicesRequestForm-Container col-lg-10 col-md-10 col-sm-10 col-10">
//                           <form onSubmit={handleSubmit}>
//                             <div className="center">
//                               <h1 className="ManagedServicesRequestForm-Text mb-4">
//                                 8thGear Hub -Request Form
//                               </h1>
// =======
//             <div class="modal-dialog modal-md">
//                 <div class="modal-content">

                   
                <div className="form-group my-4">
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} placeholder="Enter email"></input>
                </div>
        <div className="div1 TextAlignCenter" style={{position: "relative"}}>       
                <div className="form-group my-4 input-group">
                    <input type="text" className="form-control" id="phonenumber" name="phoneNumber" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} placeholder="Phone Number"></input>
                </div>
                <div className="form-group my-4 input-group">
                    <input type="text" className="form-control" id="nameOfBusiness" name="nameOfBusiness" onChange={(e) => setFormData({...formData, nameOfBusiness: e.target.value})} value={formData.nameOfBusiness} placeholder="Name Of Business"></input>
                </div>
                <div className="form-group my-4 input-group">
                    <input type="text" className="form-control" id="natureOfBusiness" name="natureOfBusiness" onChange={(e) => setFormData({...formData, natureOfBusiness: e.target.value})} value={formData.natureOfBusiness} placeholder="Nature Of Business"></input>
                </div>
                {/* <div className="input-group">
                    <div className="input-group-prepend col-lg-6 col-md-6 col-sm-5 col-12">
                        <div style={{backgroundColor: "white", borderTopRightRadius: "0px", borderBottomRightRadius:"0px", borderRight: "0px solid black",}} className="input-group-text">Service of Interest:</div>
                    </div>
                    <select style={{borderLeft: "0px solid black",}} type="text" className="form-select" id="serviceOfInterest" name="serviceOfInterest" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest}>
                        <option> </option>
                        <option value="Service1">Service 1</option>
                        <option value="Service2">Service 2</option>
                        <option value="Service3">Service 3</option>
                    </select>
                     
                </div> */}

                <div>
                <select type="text" className="form-select input-group" id="serviceOfInterest" name="serviceOfInterest" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest}>
                        <option selected>Service of Interest...... </option>
                        <option> </option>
                        <option value="Service1">Service 1</option>
                        <option value="Service2">Service 2</option>
                        <option value="Service3">Service 3</option>
                    </select>
                </div>
                <div class="form-group my-4 input-group">
                    <textarea type="text" className="form-control" id="addressOfUser" name="addressOfUser" onChange={(e) => setFormData({...formData, addressOfUser: e.target.value})} value={formData.addressOfUser} placeholder="Address Of User" rows="3"></textarea>
                </div>
        </div> 
                {/* <div className="input-group">
                    <div className="input-group-prepend col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="input-group-text">Optional Add-ons Plan</div>
                    </div>
                    <select type="text" className="form-select" id="optionalAddonsPlan" name="optionalAddonsPlan" onChange={(e) => setFormData({...formData, optionalAddonsPlan: e.target.value})} value={formData.optionalAddonsPlan}>
                        <option> </option>
                        <option value="Optional Addons Plan 1">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 2">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 3">Optional Addons Plan 1</option>
                    </select>
                </div> */}
                <div className="input-group">
                <select type="text" className="form-select" id="optionalAddonsPlan" name="optionalAddonsPlan" onChange={(e) => setFormData({...formData, optionalAddonsPlan: e.target.value})} value={formData.optionalAddonsPlan}>
                        <option selected>Optional Add-ons Plan...... </option>
                        <option> </option>
                        <option value="Optional Addons Plan 1">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 2">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 3">Optional Addons Plan 1</option>
                    </select>
                </div>  

    </div>       
                <div className="custom-control custom-checkbox my-3 mr-sm-2">
                    <input type="checkbox" className="custom-control-input text-left"></input>
                    <label className="custom-control-label mx-1">Click to subscribe to our News Letter</label>
                </div>

//         <div className="ManagedServicesRequestForm-Container col-lg-10 col-md-10 col-sm-10 col-10">
// >>>>>>> 3de49a81ca4151ed22fee430a8a3108892a3b7a0

//                               <div className="form-group my-4">
//                                 <input
//                                   type="email"
//                                   className="form-control"
//                                   id="Email"
//                                   name="Email"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       email: e.target.value,
//                                     })
//                                   }
//                                   value={formData.email}
//                                   placeholder="Enter email"
//                                 ></input>
//                               </div>
//                               <div className="form-group my-4">
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="phonenumber"
//                                   name="Phone-Number"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       phoneNumber: e.target.value,
//                                     })
//                                   }
//                                   value={formData.phoneNumber}
//                                   placeholder="Phone Number"
//                                 ></input>
//                               </div>
//                               <div className="form-group my-4">
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="nameOfBusiness"
//                                   name="nameOfBusiness"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       nameOfBusiness: e.target.value,
//                                     })
//                                   }
//                                   value={formData.nameOfBusiness}
//                                   placeholder="Name Of Business"
//                                 ></input>
//                               </div>
//                               <div className="form-group my-4">
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="natureOfBusiness"
//                                   name="natureOfBusiness"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       natureOfBusiness: e.target.value,
//                                     })
//                                   }
//                                   value={formData.natureOfBusiness}
//                                   placeholder="Nature Of Business"
//                                 ></input>
//                               </div>
//                               <div className="input-group">
//                                 <div className="input-group-prepend">
//                                   <div className="input-group-text">
//                                     Service of Interest:
//                                   </div>
//                                 </div>
//                                 <select
//                                   className="form-select"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       serviceOfInterest: e.target.value,
//                                     })
//                                   }
//                                   value={formData.serviceOfInterest}
//                                   type="text"
//                                   name="serviceOfInterest"
//                                   id="serviceOfInterest"
//                                 >
//                                   <option> </option>
//                                   <option value="Service1">Service 1</option>
//                                   <option value="Service2">Service 2</option>
//                                   <option value="Service3">Service 3</option>
//                                 </select>
//                               </div>
//                               <div class="form-group my-4">
//                                 <textarea
//                                   type="text"
//                                   className="form-control"
//                                   id="addressOfUser"
//                                   name="addressOfUser"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       addressOfUser: e.target.value,
//                                     })
//                                   }
//                                   value={formData.addressOfUser}
//                                   placeholder="Address Of User"
//                                   rows="3"
//                                 ></textarea>
//                               </div>
//                               <div className="input-group">
//                                 <div className="input-group-prepend">
//                                   <div className="input-group-text">
//                                     Optional Add-ons Plan
//                                   </div>
//                                 </div>
//                                 <select
//                                   className="form-select"
//                                   onChange={(e) =>
//                                     setFormData({
//                                       ...formData,
//                                       optionalAddonsPlan: e.target.value,
//                                     })
//                                   }
//                                   value={formData.optionalAddonsPlan}
//                                   type="text"
//                                   name="optionalAddonsPlan"
//                                   id="optionalAddonsPlan"
//                                 >
//                                   <option> </option>
//                                   <option value="Optional Addons Plan 1">
//                                     Optional Addons Plan 1
//                                   </option>
//                                   <option value="Optional Addons Plan 2">
//                                     Optional Addons Plan 1
//                                   </option>
//                                   <option value="Optional Addons Plan 3">
//                                     Optional Addons Plan 1
//                                   </option>
//                                 </select>
//                               </div>
//                             </div>
//                             <div class="custom-control custom-checkbox my-1 mr-sm-2">
//                               <input
//                                 type="checkbox"
//                                 className="custom-control-input text-left"
//                               ></input>
//                               <label className="custom-control-label">
//                                 Click to subscribe to our News Letter
//                               </label>
//                             </div>

// <<<<<<< HEAD
//                             {/* <div className="form-group my-4">
// =======

//                 <div className="form-group my-4">
//                     <input type="email" className="form-control" id="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} placeholder="Enter email"></input>
//                 </div>
//         <div style={{backgroundImage: "url("+logo+")", opacity: "50%", backgroundSize: "200px",}}>
//                 <div className="form-group my-4">
//                     <input type="text" className="form-control" id="phonenumber" name="phoneNumber" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} placeholder="Phone Number"></input>
//                 </div>
//                 <div className="form-group my-4">
//                     <input type="text" className="form-control" id="nameOfBusiness" name="nameOfBusiness" onChange={(e) => setFormData({...formData, nameOfBusiness: e.target.value})} value={formData.nameOfBusiness} placeholder="Name Of Business"></input>
//                 </div>
//                 <div className="form-group my-4">
//                     <input type="text" className="form-control" id="natureOfBusiness" name="natureOfBusiness" onChange={(e) => setFormData({...formData, natureOfBusiness: e.target.value})} value={formData.natureOfBusiness} placeholder="Nature Of Business"></input>
//                 </div>
//                 <div className="input-group">
//                     <div className="input-group-prepend col-lg-6 col-md-6 col-sm-5 col-12">
//                         <div className="input-group-text">Service of Interest:</div>
//                     </div>
//                     <select  type="text" className="form-select" id="serviceOfInterest" name="serviceOfInterest" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest}>
//                         <option> </option>
//                         <option value="Service1">Service 1</option>
//                         <option value="Service2">Service 2</option>
//                         <option value="Service3">Service 3</option>
//                     </select>
//         </div>
//                 </div>
//                 <div class="form-group my-4">
//                     <textarea type="text" className="form-control" id="addressOfUser" name="addressOfUser" onChange={(e) => setFormData({...formData, addressOfUser: e.target.value})} value={formData.addressOfUser} placeholder="Address Of User" rows="3"></textarea>
//                 </div>
//                 <div className="input-group">
//                     <div className="input-group-prepend col-lg-6 col-md-6 col-sm-12 col-12">
//                         <div className="input-group-text">Optional Add-ons Plan</div>
//                     </div>
//                     <select type="text" className="form-select" id="optionalAddonsPlan" name="optionalAddonsPlan" onChange={(e) => setFormData({...formData, optionalAddonsPlan: e.target.value})} value={formData.optionalAddonsPlan}>
//                         <option> </option>
//                         <option value="Optional Addons Plan 1">Optional Addons Plan 1</option>
//                         <option value="Optional Addons Plan 2">Optional Addons Plan 1</option>
//                         <option value="Optional Addons Plan 3">Optional Addons Plan 1</option>
//                     </select>
//                 </div>

//     </div>
//                 <div className="custom-control custom-checkbox my-1 mr-sm-2">
//                     <input type="checkbox" className="custom-control-input text-left"></input>
//                     <label className="custom-control-label mx-1">Click to subscribe to our News Letter</label>
//                 </div>

//                 {/* <div className="form-group my-4">
// >>>>>>> 3de49a81ca4151ed22fee430a8a3108892a3b7a0
//                 <input list='Services' className="form-control" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest} type="text" name="serviceOfInterest" id="serviceOfInterest" placeholder="Service Of Interest" />
//                 <datalist id="Services">
//                <option value="service1"></option>
//                <option value="service2"></option>
//                <option value="service"></option>
//                <option value="service4"></option>
//                </datalist>
//                <br/> */}
//                             {/* </div> */}

// <<<<<<< HEAD
//                             <div className="center">
//                               <input type="submit" value="submit"></input>
//                             </div>
//                           </form>
//                         </div>
//                       );
//                     })}
//                   ;
// =======

//             </form>
//         </div>

//         </div>
//                     </div>

//                     {/* <div class="modal-footer">
//                         <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
//                     </div> */}

// >>>>>>> 3de49a81ca4151ed22fee430a8a3108892a3b7a0
//                 </div>
//               </div>

//               <div class="modal-footer">
//                 <button
//                   type="button"
//                   class="btn btn-success"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
=======
//ManagedServicesRequestForm
//ProjectDeliveryRequestForm
//CoworkingSpaceForm

import { useState } from "react"
import logo from "../../assets/images/logo.png"


const Request = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        debrief: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        console.log("Email: " + formData.email);
        console.log("password: " + formData.password);
        console.log("Debrief: " + formData.debrief);
    }

    return (
        <>
    <button type="button" className="prop" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Request for a proposal
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm">
    <div className="modal-content">
    <div className="modal-header m-2">
        <img src={logo} width={40} id="staticBackdropLabel"/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>

<h4 className=" request mb-4">Request Form</h4>

<div className="Vessel mb-3">
   <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="text" name="email" id="email" className="myInput form-control" placeholder="Email"></input>
</div>


<div className="Vessel">
   <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="password" name="password" id="password" className="myInput form-control" placeholder="Password"></input>
</div>

<div className=" Vessel mb-3">
    <label for="debrief" className="form-label"></label>
    <textarea className="myInput form-control" id="debrief" rows="3" onChange={(e) => setFormData({...formData, debrief: e.target.value})} value={formData.debrief} type="text" name="debrief" placeholder="Debrief"></textarea>
</div>
<div className="col-12 mb-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      Click to join our  Newsletter
    </label>
    </div>
    </div>
    <div className="sub">
<input type="submit" className="submit" value="Submit"/>
    </div>
</form>


</div>
</div>
</div>
</div>
        </>
    )
}

export default Request
>>>>>>> 666d6667425710cc5612a75c1da201651ed40a41
