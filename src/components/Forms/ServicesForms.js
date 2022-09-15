//ManagedServicesRequestForm
//ProjectDeliveryRequestForm
//CoworkingSpaceForm

import logo from "../../assets/images/logo.png"
import React, { useState } from 'react';
export const ManagedServicesRequestForm =() =>{

    const [formData, setFormData] = useState({
        email: "",
        phoneNumber: "",
        nameOfBusiness: "",
        natureOfBusiness: "",
        serviceOfInterest: "",
        addressOfUser: "",
        optionalAddonsPlan: "",
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: " +  formData.email );
        console.log("Phone Number: " + formData.phoneNumber );
        console.log("Name Of Business: " +  formData.nameOfBusiness );
        console.log("Nature Of Business: " +  formData.natureOfBusiness );
        console.log("Service Of Interest: " +  formData.serviceOfInterest );
        console.log("Address Of User: " +  formData.addressOfUser );
        console.log("Optional Add-ons Plan: " +  formData.optionalAddonsPlan );
    }

    return (<>
        <div class="container mt-3">
     
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
            Click Me!
        </button>
 
        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
 
                    
                    <div class="modal-header">
                        <img src={ logo } height={35} width={30}></img>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
 
                    
                    <div class="modal-body">
                    <div className="row">


        <div className="ManagedServicesRequestForm-Container col-lg-10 col-md-10 col-sm-10 col-10"> 

                <form onSubmit={handleSubmit}>
    <div className='center'>   
            <h1 className="ManagedServicesRequestForm-Text mb-4">8thGear Hub -Request Form</h1>

                   
                <div className="form-group my-4">
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} placeholder="Enter email"></input>
                </div>
        <div className="div1" style={{position: "relative"}}>       
                <div className="form-group my-4">
                    <input type="text" className="form-control" id="phonenumber" name="phoneNumber" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} placeholder="Phone Number"></input>
                </div>
                <div className="form-group my-4">
                    <input type="text" className="form-control" id="nameOfBusiness" name="nameOfBusiness" onChange={(e) => setFormData({...formData, nameOfBusiness: e.target.value})} value={formData.nameOfBusiness} placeholder="Name Of Business"></input>
                </div>
                <div className="form-group my-4">
                    <input type="text" className="form-control" id="natureOfBusiness" name="natureOfBusiness" onChange={(e) => setFormData({...formData, natureOfBusiness: e.target.value})} value={formData.natureOfBusiness} placeholder="Nature Of Business"></input>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend col-lg-6 col-md-6 col-sm-5 col-12">
                        <div className="input-group-text">Service of Interest:</div>
                    </div>
                    <select  type="text" className="form-select" id="serviceOfInterest" name="serviceOfInterest" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest}>
                        <option> </option>
                        <option value="Service1">Service 1</option>
                        <option value="Service2">Service 2</option>
                        <option value="Service3">Service 3</option>
                    </select>
                     
                </div>
                <div class="form-group my-4">
                    <textarea type="text" className="form-control" id="addressOfUser" name="addressOfUser" onChange={(e) => setFormData({...formData, addressOfUser: e.target.value})} value={formData.addressOfUser} placeholder="Address Of User" rows="3"></textarea>
                </div>
        </div> 
                <div className="input-group">
                    <div className="input-group-prepend col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="input-group-text">Optional Add-ons Plan</div>
                    </div>
                    <select type="text" className="form-select" id="optionalAddonsPlan" name="optionalAddonsPlan" onChange={(e) => setFormData({...formData, optionalAddonsPlan: e.target.value})} value={formData.optionalAddonsPlan}>
                        <option> </option>
                        <option value="Optional Addons Plan 1">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 2">Optional Addons Plan 1</option>
                        <option value="Optional Addons Plan 3">Optional Addons Plan 1</option>
                    </select>
                </div>

    </div>       
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input text-left"></input>
                    <label className="custom-control-label mx-1">Click to subscribe to our News Letter</label>
                </div>

                {/* <div className="form-group my-4">
                <input list='Services' className="form-control" onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})} value={formData.serviceOfInterest} type="text" name="serviceOfInterest" id="serviceOfInterest" placeholder="Service Of Interest" />
                <datalist id="Services">
               <option value="service1"></option>
               <option value="service2"></option>
               <option value="service"></option>
               <option value="service4"></option>
               </datalist>
               <br/> */}
                {/* </div> */}
                
                
                <div className='center'><input type="submit" value="submit"></input></div>

                
            </form>
        </div>

        </div>
                    </div>
 
                    
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                    </div> */}
 
                </div>
            </div>
        </div>
     
    </div>
    </>


    
    )
};

