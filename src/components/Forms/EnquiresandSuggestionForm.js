//JoinTheTeamForm
//JoinTheStudioForm
//SuggestAnEventForm

import { useState } from "react";
import logo from "../../assets/images/logo.png";

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
      <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Suggest an Event
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

export default SuggestAnEventForm;
