import React, { useState } from "react";
import { SubmitFormBtn } from "../components/Buttons/ContactBtn";
import logo from "../assets/images/logo.png";

// JoinTheStudioForm

export const JoinTheStudioForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (email && phoneNumber && message) {
      const person = { email, phoneNumber, message };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setEmail("");
      setName("");
      setPhoneNumber("");
      setMessage("");
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
                  <h4 class=" request mb-4">
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
