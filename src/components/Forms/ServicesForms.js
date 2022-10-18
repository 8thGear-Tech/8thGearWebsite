import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { SubmitFormBtn } from "../Buttons/ContactBtn";

// //ManagedServicesRequestForm
// //ProjectDeliveryRequestForm
// //CoworkingSpaceForm

const CoworkingSpaceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressOfUser, setAddressOfUser] = useState("");
  const [nameOfBusiness, setNameOfBusiness] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [durationQuantity, setDurationQuantity] = useState("");
  const [servicesOfInterest, setServicesOfInterest] = useState("");
  const [requiredDurationUnit, setRequiredDurationUnit] = useState("");
  const [optionalAddOnServices, setOptionalAddOnServices] = useState("");
  const [howDidYouHearAboutUs, setHowDidYouHearAboutUs] = useState("");
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
      servicesOfInterest &&
      requiredDurationUnit &&
      date &&
      optionalAddOnServices &&
      howDidYouHearAboutUs
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
        servicesOfInterest,
        requiredDurationUnit,
        optionalAddOnServices,
        howDidYouHearAboutUs,
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
      setServicesOfInterest("");
      setRequiredDurationUnit("");
      setOptionalAddOnServices("");
      setHowDidYouHearAboutUs("");
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
                <div>
                  <h4 class=" pink request mb-3 ">
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

                  <div class="input-group mb-3 mt-5">
                    <label class="input-group-text" for="inputGroupSelect">
                      Services of interest
                    </label>
                    <select
                      class="form-select"
                      id="inputGroupSelect"
                      value={servicesOfInterest}
                      onChange={(e) => setServicesOfInterest(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option
                        value="1Dedicated Desk(per month) - 35,000[10% discount for
                        every additional team member]"
                      >
                        Dedicated Desk(per month) - 35,000[10% discount for
                        every additional team member]
                      </option>
                      <option value="Training Room(20 persons)(per hour) - N10,000">
                        Training Room(20 persons)(per hour) - N10,000
                      </option>
                      <option value="Virtual office plus(per month) - N20,0002">
                        Virtual office plus(per month) - N20,000
                      </option>
                      <option value="Hotdesk(per week) - N12,000">
                        Hotdesk(per week) - N12,000
                      </option>
                      <option value="Hotdesk(per day) - N3,000">
                        Hotdesk(per day) - N3,000
                      </option>
                      <option value="Other">Other : </option>
                    </select>
                  </div>

                  <div className="mb-3 mt-5 ">
                    <label for="InputdurationQuantity" className="form-label">
                      Required Duration:how many hours,days,weeks or months?
                    </label>

                    <input
                      type="text"
                      className="form-control border-primary"
                      id="InputdurationQuantity"
                      value={durationQuantity}
                      onChange={(e) => setDurationQuantity(e.target.value)}
                    />
                  </div>

                  <div class="input-group mb-3 mt-5">
                    <label class="input-group-text" for="inputGroupSelect">
                      Required Duration Unit
                    </label>

                    <select
                      class="form-select"
                      id="inputGroupSelect"
                      value={requiredDurationUnit}
                      onChange={(e) => setRequiredDurationUnit(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="Hours">Hours</option>
                      <option value="Weeks">Weeks</option>
                      <option value="Months">Months</option>
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

                  <div class="input-group mb-3 mt-5">
                    <label class="input-group-text" for="inputGroupSelect01">
                      Optional Add-on services
                    </label>
                    <select
                      class="form-select"
                      id="inputGroupSelect01"
                      value={optionalAddOnServices}
                      onChange={(e) => setOptionalAddOnServices(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="Growth strategy & execution">
                        Growth strategy & execution
                      </option>
                      <option value="Recruitment support service">
                        Recruitment support service
                      </option>
                      <option value="Voice-overs,photography & videography">
                        Voice-overs,photography & videography
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Online Marketing Support">
                        Online Marketing Support
                      </option>
                      <option value="Business Advisory services(incubation)">
                        Business Advisory services(incubation)
                      </option>
                      <option value="Virtual receptionist/customer service set-up management">
                        Virtual receptionist/customer service set-up management
                      </option>
                      <option value="others">others</option>
                    </select>
                  </div>

                  <div class="input-group mb-3 mt-5">
                    <label class="input-group-text" for="inputGroupSelect01">
                      How did you hear about us?
                    </label>
                    <select
                      class="form-select"
                      id="inputGroupSelect01"
                      value={howDidYouHearAboutUs}
                      onChange={(e) => setHowDidYouHearAboutUs(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="Linked in">Linked in</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Tik-tok">Tik tok</option>
                      <option value="Friends and family">
                        Friends and family
                      </option>
                      <option value="others">others</option>
                    </select>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Terms And Conditions
                      </label>
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
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
