//ManagedServicesRequestForm
//ProjectDeliveryRequestForm
//CoworkingSpaceForm

import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { RequestForProposalBtn } from "../Buttons/ProjectDeliveryBtn";
import { ManagedServicesRequestBtn } from "../Buttons/ServicesBtn";
import { SubmitFormBtn } from "../Buttons/ContactBtn";
import { useForm } from "react-hook-form";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Form } from "../Footer";

const ProjectDeliveryRequestForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    debrief: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: " + formData.email);
    console.log("password: " + formData.password);
    console.log("Debrief: " + formData.debrief);
  };

  return (
    <>
      <RequestForProposalBtn />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header m-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <h4 className=" request mb-4">Request Form</h4>

                <div className="Vessel mb-3">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    value={formData.email}
                    type="text"
                    name="email"
                    id="email"
                    className="myInput form-control"
                    placeholder="Email"
                  ></input>
                </div>

                {/* <div className="Vessel">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    value={formData.password}
                    type="password"
                    name="password"
                    id="password"
                    className="myInput form-control"
                    placeholder="Password"
                  ></input>
                </div> */}

                <div className=" Vessel mb-3">
                  <label for="debrief" className="form-label"></label>
                  <textarea
                    className="myInput form-control"
                    id="debrief"
                    rows="3"
                    onChange={(e) =>
                      setFormData({ ...formData, debrief: e.target.value })
                    }
                    value={formData.debrief}
                    type="text"
                    name="debrief"
                    placeholder="Debrief"
                  ></textarea>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Click to join our Newsletter
                    </label>
                  </div>
                </div>
                <div className="sub">
                  <input type="submit" className="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDeliveryRequestForm;

export const ManagedServicesRequestForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [person, setPerson] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    nameOfBiz: "",
    socialHandle: "",
    companysWebsite: "",
    describeProject: "",
    natureOfBiznex: "",
    serviceOfInterest: "",
    meansOfComm: "",
    hearAboutUS: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      person.fullName &&
      person.phoneNumber &&
      person.email &&
      person.nameOfBiz
    ) {
      console.log(person);
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      setPerson({
        fullName: "",
        phoneNumber: "",
        email: "",
        nameOfBiz: "",
        socialHandle: "",
        companysWebsite: "",
        describeProject: "",
      });
    }
  };

  return (
    <>
      <div class="container mt-3">
        <ManagedServicesRequestBtn />

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <img src={logo} height={35} width={30}></img>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <div className="row">
                  <div className="ManagedServicesRequestForm-Container col-lg-10 col-md-10 col-sm-10 col-10">
                    <form onSubmit={handleSubmit}>
                      <div className="center">
                        <h3 className="ManagedServicesRequestForm-Text mb-4">
                          Managed Services
                        </h3>

                        <MDBValidationItem
                          className="form-group my-4"
                          feedback="Please provide your FullName."
                          invalid
                        >
                          <MDBInput
                            value={person.fullName}
                            name="fullName"
                            onChange={handleChange}
                            id="validationCustom01"
                            required
                            placeholder="Enter fullName"
                          />
                        </MDBValidationItem>

                        <MDBValidationItem
                          className="form-group my-4"
                          feedback="Please provide your PhoneNumber."
                          invalid
                        >
                          <MDBInput
                            value={person.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            id="validationCustom02"
                            required
                            placeholder="Phone Number"
                          />
                        </MDBValidationItem>

                        <MDBValidationItem
                          className="form-group my-4"
                          feedback="Please provide your email address."
                          invalid
                        >
                          <MDBInput
                            value={person.email}
                            name="email"
                            onChange={handleChange}
                            id="validationCustom03"
                            required
                            placeholder="Enter email"
                          />
                        </MDBValidationItem>

                        <MDBValidationItem
                          className="form-group my-4"
                          feedback="Please provide your business Name"
                          invalid
                        >
                          <MDBInput
                            value={person.nameOfBiz}
                            name="nameOfBiz"
                            onChange={handleChange}
                            id="validationCustom04"
                            required
                            placeholder="Name Of Business"
                          />
                        </MDBValidationItem>

                        <div className="form-group my-4">
                          <input
                            type="text"
                            className="form-control"
                            id="socialHandle"
                            name="socialHandle"
                            onChange={handleChange}
                            value={person.socialHandle}
                            placeholder="Social Media Handle"
                          ></input>
                        </div>
                        <div className="form-group my-4">
                          <input
                            type="text"
                            className="form-control"
                            id="companysWebsite"
                            name="companysWebsite"
                            onChange={handleChange}
                            value={person.companysWebsite}
                            placeholder="Company's Website"
                          ></input>
                        </div>
                        <div className="my-4">
                          <select
                            type="text"
                            className="form-select input-group selectoptionform"
                            id="natureOfBiznex"
                            name="natureOfBiznex"
                            onChange={handleChange}
                            value={person.natureOfBiznex}
                          >
                            <option selected> Nature of Business</option>
                            <option className="dropdownFont" value="Healthcare">
                              Healthcare
                            </option>
                            <option className="dropdownFont" value="Finance">
                              Finance
                            </option>
                            <option className="dropdownFont" value="IT">
                              IT
                            </option>
                            <option
                              className="dropdownFont"
                              value="Agriculture"
                            >
                              Agriculture
                            </option>
                            <option className="dropdownFont" value="Education">
                              Education
                            </option>
                            <option className="dropdownFont" value="Logistics">
                              Logistics
                            </option>
                            <option
                              className="dropdownFont"
                              value="Hospitality"
                            >
                              Hospitality
                            </option>
                            <option className="dropdownFont" value="Fashion">
                              Fashion
                            </option>
                            <option
                              className="dropdownFont"
                              value="Manufaturing"
                            >
                              Manufaturing
                            </option>
                          </select>
                        </div>
                        <div className="my-4">
                          <select
                            type="text"
                            className="form-select input-group"
                            id="serviceOfInterest"
                            name="serviceOfInterest"
                            onChange={handleChange}
                            value={person.serviceOfInterest}
                          >
                            <option selected>Service of Interest</option>
                            <option
                              className="dropdownFont"
                              value=" Product Development"
                            >
                              Product Development
                            </option>
                            <option
                              className="dropdownFont"
                              value="Digital Marketing Support"
                            >
                              Digital Marketing Support
                            </option>
                            <option
                              className="dropdownFont"
                              value=" Accounting/Bookkeeping Support"
                            >
                              Accounting/Bookkeeping Support
                            </option>
                            <option
                              className="dropdownFont"
                              value="Talent Acquisition Support"
                            >
                              Talent Acquisition Support
                            </option>
                            <option className="dropdownFont" value="Others">
                              Others
                            </option>
                          </select>
                        </div>
                        <div className="form-group my-4">
                          <input
                            type="text"
                            className="form-control  "
                            id="describeProject"
                            name="describeProject"
                            onChange={handleChange}
                            value={person.describeProject}
                            placeholder="Describe your project?"
                          ></input>
                        </div>
                        <div className="my-4">
                          <select
                            type="text"
                            className="form-select input-group"
                            id="meansOfComm"
                            name="meansOfComm"
                            onChange={handleChange}
                            value={person.meansOfComm}
                          >
                            <option selected>
                              Preferred Means of Communication
                            </option>
                            <option className="dropdownFont" value="Call">
                              Call
                            </option>
                            <option className="dropdownFont" value="Email">
                              Email
                            </option>
                            <option
                              className="dropdownFont"
                              value="Social Media"
                            >
                              Social Media
                            </option>
                          </select>
                        </div>
                        <div className="my-4">
                          <select
                            type="text"
                            className="form-select input-group"
                            id="hearAboutUS"
                            name="hearAboutUS"
                            onChange={handleChange}
                            value={person.hearAboutUS}
                          >
                            <option selected>How did you hear about us</option>
                            <option className="dropdownFont" value="LinkedIn">
                              LinkedIn
                            </option>
                            <option className="dropdownFont" value="Whatsapp">
                              Whatsapp
                            </option>
                            <option className="dropdownFont" value="Facebook">
                              Facebook
                            </option>
                            <option className="dropdownFont" value="Instagram">
                              Instagram
                            </option>
                            <option className="dropdownFont" value="Twitter">
                              Twitter
                            </option>
                            <option className="dropdownFont" value="Tiktok">
                              Tiktok
                            </option>
                            <option
                              className="dropdownFont"
                              value="Friends and Family"
                            >
                              Friends and Family
                            </option>
                            <option className="dropdownFont" value="Others">
                              Others
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="custom-control custom-checkbox my-3 mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input text-left"
                        ></input>
                        <label className="custom-control-label mx-1">
                          Click to subscribe to our News Letter
                        </label>
                      </div>

                      {/* </div> */}

                      <div className="center">
                        <SubmitFormBtn />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article>
        {people.map((person) => {
          const {
            id,
            phoneNumber,
            email,
            fullName,
            nameOfBiz,
            socialHandle,
            companysWebsite,
            describeProject,
            natureOfBiznex,
            serviceOfInterest,
          } = person;
          return (
            <div key={id} className="item">
              <h4>{phoneNumber}</h4>
              <p>{email}</p>
              <p>{fullName}</p>
              <p>{nameOfBiz}</p>
              <p>{socialHandle}</p>
              <p>{companysWebsite}</p>
              <p>{companysWebsite}</p>
              <p>{describeProject}</p>
              <p>{natureOfBiznex}</p>
              <p>{serviceOfInterest}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};
