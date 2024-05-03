import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { SubmitFormBtn } from "../Buttons/ContactBtn";

const CoworkingSpaceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressOfUser, setAddressOfUser] = useState("");
  const [nameOfBusiness, setNameOfBusiness] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [durationQuantity, setDurationQuantity] = useState("");
  const [date, setdate] = useState("");

  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      name &&
      email &&
      phoneNumber &&
      addressOfUser &&
      nameOfBusiness &&
      natureOfBusiness &&
      website &&
      durationQuantity &&
      date
    ) {
      const person = {
        name,
        email,
        phoneNumber,
        addressOfUser,
        nameOfBusiness,
        natureOfBusiness,
        website,
        durationQuantity,
        date,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddressOfUser("");
      setNameOfBusiness("");
      setNatureOfBusiness("");
      setdate("");
      setWebsite("");
      setDurationQuantity("");
      setPeople("");
    } else {
      alert("empty values");
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
        co-working space
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
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
                <div>
                  <h4 className=" pink request mb-3 ">
                    The 8thGear Hub-Space Booking Form
                  </h4>

                  <div className="mb-3 ">
                    <label for="InputName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputName"
                      aria-describedby="titleHelp"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name ( First name first )"
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

                  <div className="mb-3  ">
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
                      placeholder="Phone Number (Whatsapp)"
                    />
                  </div>

                  <div className="mb-3 ">
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
                      placeholder="Address Of User"
                      onChange={(e) => setAddressOfUser(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      for="InputnameOfBusiness"
                      className="form-label"
                    ></label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputnameOfBusiness"
                      aria-describedby="titleHelp"
                      value={nameOfBusiness}
                      placeholder="Name Of Business"
                      onChange={(e) => setNameOfBusiness(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 ">
                    <label
                      for="InputnatureOfBusiness"
                      className="form-label"
                    ></label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputnatureOfBusiness"
                      aria-describedby="titleHelp"
                      value={natureOfBusiness}
                      placeholder="Nature Of Business"
                      onChange={(e) => setNatureOfBusiness(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 ">
                    <label for="Inputwebsite" className="form-label"></label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="Inputwebsite"
                      aria-describedby="titleHelp"
                      value={website}
                      placeholder="Website and social media handles"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  <div className="input-group mb-3 mt-5">
                    <label className="input-group-text" for="inputGroupSelect">
                      Services of interest
                    </label>
                    <select className="form-select" id="inputGroupSelect">
                      <option selected>Choose...</option>
                      <option value="1">
                        Dedicated Desk(per month) - 35,000[10% discount for
                        every additional team member]
                      </option>
                      <option value="3">
                        Training Room(20 persons)(per hour) - N10,000
                      </option>
                      <option value="2">
                        Virtual office plus(per month) - N20,000
                      </option>
                      <option value="4">Hotdesk(per week) - N12,000</option>
                      <option value="5">Hotdesk(per day) - N3,000</option>
                      <option value="5">Other : </option>
                    </select>
                  </div>

                  <div className="mb-3 ">
                    <label
                      for="InputdurationQuantity"
                      className="form-label"
                    ></label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputdurationQuantity"
                      aria-describedby="titleHelp"
                      value={durationQuantity}
                      placeholder="Required Duration:how many hours,days,weeks or months?"
                      onChange={(e) => setDurationQuantity(e.target.value)}
                    />
                  </div>

                  <div className="input-group mb-3 mt-5">
                    <label className="input-group-text" for="inputGroupSelect">
                      Required Duration Unit
                    </label>
                    <select className="form-select" id="inputGroupSelect">
                      <option selected>Choose...</option>
                      <option value="1">Hours</option>
                      <option value="2">Weeks</option>
                      <option value="3">Months</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label for="Inputdate" className="form-label"></label>

                    <input
                      type="Date"
                      className="form-control border-primary"
                      id="Inputdate"
                      aria-describedby="titleHelp"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                      placeholder="date"
                    />
                  </div>

                  <div className="input-group mb-3 mt-5">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      Optional Add-on services
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">Growth strategy & execution</option>
                      <option value="2">Recruitment support service</option>
                      <option value="3">
                        Voice-overs,photography & videography
                      </option>
                      <option value="4">Website Development</option>
                      <option value="5">Online Marketing Support</option>
                      <option value="6">
                        Business Advisory services(incubation)
                      </option>
                      <option value="7">
                        Virtual receptionist/customer service set-up management
                      </option>
                      <option value="8">others</option>
                    </select>
                  </div>

                  <div className="input-group mb-3 mt-5">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      How did you hear about us?
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">Linked in</option>
                      <option value="2">Instagram</option>
                      <option value="3">Whatsapp</option>
                      <option value="3">Facebook</option>
                      <option value="3">Twitter</option>
                      <option value="3">Tik tok</option>
                      <option value="3">Friends and family</option>
                      <option value="3">others</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Terms And Conditions
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        I Agree
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
export default CoworkingSpaceForm;
