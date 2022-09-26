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
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [aboutcompany, setAboutCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      firstname &&
      lastname &&
      companyname &&
      email &&
      website &&
      aboutcompany &&
      phoneNumber &&
      message
    ) {
      const person = {
        firstname,
        lastname,
        companyname,
        email,
        website,
        aboutcompany,
        phoneNumber,
        message,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setEmail("");
      setWebsite("");
      setAboutCompany("");
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
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header m-2">
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
            <div class="modal-body">
              <form onSubmit={Handle}>
                <div className="background">
                  <h4 class=" request mb-4">Join The Studio</h4>

                  <div className="mb-3 ">
                    <label for="InputFirstName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputFirstName"
                      aria-describedby="titleHelp"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3 ">
                    <label for="InputLastName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputLastName"
                      aria-describedby="titleHelp"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-3 ">
                    <label
                      for="InputCompanyName"
                      className="form-label"
                    ></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputCompanyName"
                      aria-describedby="titleHelp"
                      value={companyname}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company Name"
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
                    <label for="InputWebsite" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputWebsite"
                      aria-describedby="titleHelp"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Website"
                    />
                  </div>
                  <div className="mb-3 ">
                    {/* <label for="InputWebsite" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputWebsite"
                      aria-describedby="titleHelp"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Website"
                    /> */}
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
                      value={aboutcompany}
                      onChange={(e) => setAboutCompany(e.target.value)}
                      placeholder="About your company (Brief description of your services)"
                    ></textarea>
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

                  {/* <div class="col-12 mb-3">
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
                  </div> */}
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

// SuggestAnEventform;
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
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header m-2">
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
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="background">
                  <h6 class=" request mb-4">
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
                      class="myInput form-control"
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
                  <div class="col-12 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
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
                  {/* <div className="col-12 mb-3">
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
                  </div> */}
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
};

export default SuggestAnEventForm;
