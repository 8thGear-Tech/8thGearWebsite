//JoinTheTeamForm
//JoinTheStudioForm
//SuggestAnEventForm

import { useState } from "react";
import logo from "../../assets/images/logo.png";

const SuggestAnEventForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    emailAddress: "",
    idea: "",
    aboutUs: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fullname: " + formData.fullName);
    console.log("businesname: " + formData.businessName);
    console.log("emailaddress: " + formData.emailAddress);
    console.log("idea: " + formData.idea);
    console.log("aboutus: " + formData.aboutUs);
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
                {/* <div className="background"> */}
                <h6 class=" request mb-4">
                  The 8thGear Hub - Suggest an Event Form{" "}
                </h6>
                <div className="Vessel mb-3">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    value={formData.fullName}
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="myInput form-control"
                    placeholder="Full Name"
                  ></input>
                </div>
                <div className="Vessel mb-3">
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessName: e.target.value,
                      })
                    }
                    value={formData.businessName}
                    type="text"
                    name="businessname"
                    id="businessname"
                    className="myInput form-control"
                    placeholder="Business Name"
                  ></input>
                </div>
                <div className="Vessel mb-3">
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emailAddress: e.target.value,
                      })
                    }
                    value={formData.emailAddress}
                    type="text"
                    name="emailAddress"
                    id="emailAddress"
                    className="myInput form-control"
                    placeholder="Email Address"
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
                <div className=" Vessel mb-3">
                  <label for="aboutUs" className="form-label"></label>
                  <h5
                    // class="myInput form-control"
                    // id="aboutus"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutUs: e.target.value,
                      })
                    }
                    value={formData.aboutUs}
                    // type="text"
                    name="aboutUs"
                    placeholder="How did you hear about us ?"
                  ></h5>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      LinkedIn
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Instagram
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios3">
                      WhatsApp
                    </label>
                  </div>
                  {/* <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios4"
                        value="option4"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios4">
                        Facebook
                      </label>
                    </div>
                    <div class="form-check disabled">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios5"
                        value="option5"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios5">
                        Twitter
                      </label>
                    </div>
                  </div>
                    <div class="form-check disabled">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios6"
                        value="option6"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios6">
                        TikTok
                      </label>
                    </div>
                    <div class="form-check disabled">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios7"
                        value="option7"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios7">
                        Friends and Family
                      </label>
                    </div>
                    <div class="form-check disabled">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios8"
                        value="option8"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios8">
                          Others
                      </label>
                    </div>
                  </div> */}

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
