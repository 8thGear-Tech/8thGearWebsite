//JoinTheTeamForm
//JoinTheStudioForm
//SuggestAnEventForm

import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { LetUsKnowBtn } from "../Buttons/EventsBtn";
import { SubmitFormBtn } from "../Buttons/ContactBtn";
import { JointheStudioBtn } from "../Buttons/ContactBtn";
import { JointheTeamBtn } from "../Buttons/ContactBtn";

export const JoinTheStudioForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (name && email && phoneNumber && message) {
      const person = { name, email, phoneNumber, message };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setPeople("");
    } else {
      alert("empty values");
    }
  };

  return (
    <>
      <JointheStudioBtn />
      {/* <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Join The Studio
      </button> */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header m-2">
              <img
                src={logo}
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
            <div className="modal-body">
              <form onSubmit={Handle}>
                <div className="background">
                  <h4 className=" request mb-4">Join The Studio</h4>

                  <div className="mb-3 ">
                    <label for="InputName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputName"
                      aria-describedby="titleHelp"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
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
                      placeholder="Email"
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
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Send a message"
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
                        Click to Suscribe to our Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="text-center">
                    <SubmitFormBtn />
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

//SuggestAnEventform
const SuggestAnEventForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    idea: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: " + formData.email);
    console.log("phoneNumber: " + formData.phoneNumber);
    console.log("name: " + formData.name);
    console.log("Idea: " + formData.idea);
  };

  return (
    <>
      {/* <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Suggest an Event
      </button> */}
      <LetUsKnowBtn />
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header m-2">
              <img
                src={logo}
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
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="background">
                  <h6 className=" request mb-4">
                    The 8thGear Hub - Suggest an Event Form{" "}
                  </h6>

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

                  <div className="Vessel mb-3">
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      value={formData.phoneNumber}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="myInput form-control"
                      placeholder="Phone Number"
                    ></input>
                  </div>

                  <div className="Vessel mb-3">
                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      value={formData.name}
                      type="text"
                      name="name"
                      id="name"
                      className="myInput form-control"
                      placeholder="Name"
                    ></input>
                  </div>

                  <div className=" Vessel mb-3">
                    <label for="idea" className="form-label"></label>
                    <textarea
                      className="myInput form-control"
                      id="idea"
                      rows="3"
                      onChange={(e) =>
                        setFormData({ ...formData, idea: e.target.value })
                      }
                      value={formData.idea}
                      type="text"
                      name="idea"
                      placeholder="Please let us know about your idea for an event"
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
                        Click to subscribe to our Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="sub">
                    <input type="submit" className="submit" />
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
/*
export const JoinTheTeamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + formData.name);
    console.log("Email: " + formData.email);
    console.log("phoneNumber: " + formData.phoneNumber);
    console.log("message: " + formData.message);
  };

  return (
    <>
      <JointheTeamBtn />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header m-2">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="background">
                  <h4 className=" contactUsTitle mb-4">Contact Us</h4>

                  <div className="Vessel mb-3">
                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      value={formData.name}
                      type="text"
                      name="name"
                      id="name"
                      className="myInput form-control"
                      placeholder="Name"
                    ></input>
                  </div>

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

                  <div className="Vessel">
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      value={formData.phoneNumber}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="myInput form-control"
                      placeholder="Phone Number"
                    ></input>
                  </div>

                  <div className=" Vessel mb-3">
                    <label for="message" className="form-label"></label>
                    <textarea
                      className="myInput form-control"
                      id="message"
                      rows="3"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      value={formData.message}
                      type="text"
                      name="message"
                      placeholder="Send a message"
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
                        Click to subscribe to our Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="sub">
                    <input type="Submit" className="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};*/

// old one
export const JoinTheTeamForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [LinkedInUrl, setLinkedInUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [nameOfBusiness, setNameOfBusiness] = useState("");
  const [addressOfUser, setaddressOfUser] = useState("");
  const [optionalAddOnsPlan, setoptionalAddOnsPlan] = useState("");

  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      fullName &&
      email &&
      LinkedInUrl &&
      phoneNumber &&
      // nameOfBusiness &&
      addressOfUser &&
      optionalAddOnsPlan
    ) {
      const person = {
        fullName,
        email,
        LinkedInUrl,
        phoneNumber,
        // nameOfBusiness,
        addressOfUser,
        optionalAddOnsPlan,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFullName("");
      setEmail("");
      setLinkedInUrl("");
      setPhoneNumber("");
      // setNameOfBusiness("");
      setaddressOfUser("");
      setoptionalAddOnsPlan("");
      setPeople("");
    } else {
      alert("empty values");
    }
  };

  return (
    <>
      {/* <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        co-working space
      </button> */}
      <JointheTeamBtn />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header m-2">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={Handle}>
                <div>
                  <h4 className="contactUsTitle request mb-3 ">Contact Us</h4>

                  <div className="mb-3 ">
                    <label for="InputFullName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputFullName"
                      aria-describedby="titleHelp"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
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
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      for="InputserviceOfInterest"
                      className="form-label"
                    ></label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputLinkedInUrl"
                      aria-describedby="titleHelp"
                      value={LinkedInUrl}
                      onChange={(e) => setLinkedInUrl(e.target.value)}
                      placeholder="LinkedIn Url"
                    />
                  </div>

                  <div className="mb-3 ">
                    <label for="" className="mb-2">
                      I'm interested in
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Enterpreneurs in Residence
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Talent
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Investors
                      </label>
                    </div>
                    {/* <label
                      for="InputPhoneNumber"
                      className="form-label"
                    ></label>
                    <input
                      type="phone number"
                      className="form-control border-primary"
                      id="InputPhoneNumber"
                      aria-describedby="titleHelp"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                    /> */}
                  </div>
                  <div>
                    <label for="" className="mb-3">
                      If Talent, Select role
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose</option>
                      <option value="1">Leadership</option>
                      <option value="2">Tech</option>
                      <option value="3">Operations</option>
                      <option value="4">Sales </option>
                      <option value="5">Marketing</option>
                      <option value="6">Design</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label for="formFile" class="form-label">
                      Upload CV *
                    </label>
                    <input
                      className="form-control dame"
                      type="file"
                      id="formFile"
                    />
                  </div>

                  <div className="mt-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Brief Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="mb-3 ">
                    <label for="" className="mb-2 mt-3">
                      How did you hear about us ?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        LinkedIn
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Instagram
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        WhatsApp
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Facebook
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Twitter
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Tiktok
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Friends and Family
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Others
                      </label>
                    </div>
                  </div>

                  {/* <div className="mb-3 ">
                    <label
                      for="InputaddressOfUser"
                      className="form-label"
                    ></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputaddressOfUser"
                      aria-describedby="titleHelp"
                      value={addressOfUser}
                      onChange={(e) => setaddressOfUser(e.target.value)}
                      placeholder="Address Of User"
                    />
                  </div> */}

                  {/* <div className="mb-3 ">
                    <label
                      for="InputoptionalAddOnsPlan"
                      className="form-label"
                    ></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputoptionalAddOnsPlan"
                      aria-describedby="titleHelp"
                      value={optionalAddOnsPlan}
                      onChange={(e) => setoptionalAddOnsPlan(e.target.value)}
                      placeholder="Optional Add-Ons Plan"
                    />
                  </div> */}

                  <div className="col-12 mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Click to Suscribe to our Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="text-center">
                    <SubmitFormBtn />
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

export default SuggestAnEventForm;
