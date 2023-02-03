//internal import
import allresources from "../../data/resources.json";

//external import
import { useState } from "react";

//image
// import resourceimageone from "../../assets/images/resources/resourceimageone.png";

import { ResourcesTitleBtn } from "../Buttons/PortfolioBtn";
import { ResourcesReadMoreLink } from "../Buttons/PortfolioBtn";
import { Paragraph } from "react-bootstrap-icons";

const ResourcesCards = (props) => {
  const { image, articletype, title, paragraphtext, buttonlink } = props;
  return (
    <>
      {" "}
      {/* <div className="container my-4"> */}
      <div class="my-4">
        <iframe src={image} title="YouTube video"></iframe>
        <div className="d-flex justify-content-between py-2">
          <ResourcesTitleBtn />
          <p class="card-text" style={{ fontSize: "0.8rem" }}>
            {articletype}
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text my-2">{paragraphtext}</p>
          {/* <ResourcesReadMoreLink> {props.buttonlink}</ResourcesReadMoreLink> */}
          <a href={buttonlink} style={{ color: "#000" }}>
            <ResourcesReadMoreLink />
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export const ResourcesCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container-fluid px-5 pt-5 pb-3 ">
      <div class="input-group mb-3 justify-content-end">
        {/* <span class="input-group-text" id="basic-addon1">
          @
        </span> */}
        <input
          type="text"
          // class="form-control"
          placeholder="Search"
          // aria-label="Username"
          // aria-describedby="basic-addon1"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Knowledge center
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Starting your business
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Growing your business
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-manageyourbusiness-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-manageyourbusiness"
            type="button"
            role="tab"
            aria-controls="pills-manageyourbusiness"
            aria-selected="false"
          >
            Managing your business
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-professionaldevelopment-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-professionaldevelopment"
            type="button"
            role="tab"
            aria-controls="pills-professionaldevelopment"
            aria-selected="false"
          >
            Scaling your business
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="row justify-content-evenly">
            {allresources.allresources
              .filter((resources) => {
                if (searchTerm == "") {
                  return resources;
                } else if (
                  resources.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                  return resources;
              })
              .map((resources) => {
                return (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                      key={resources.id}
                    >
                      <ResourcesCards {...resources} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div className="row justify-content-evenly">
            {allresources.allresources.map((resources) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                    key={resources.id}
                  >
                    <ResourcesCards {...resources} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          <div className="row justify-content-evenly">
            {allresources.allresources.map((resources) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                    key={resources.id}
                  >
                    <ResourcesCards {...resources} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-manageyourbusiness"
          role="tabpanel"
          aria-labelledby="pills-manageyourbusiness-tab"
          tabindex="0"
        >
          <div className="row justify-content-evenly">
            {allresources.allresources.map((resources) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                    key={resources.id}
                  >
                    <ResourcesCards {...resources} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-professionaldevelopment"
          role="tabpanel"
          aria-labelledby="pills-professionaldevelopment-tab"
          tabindex="0"
        >
          <div className="row justify-content-evenly">
            {allresources.allresources.map((resources) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                    key={resources.id}
                  >
                    <ResourcesCards {...resources} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div
          class="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabindex="0"
        >
          ...
        </div> */}
      </div>
      {/* <div className="row justify-content-evenly">
        {allresources.allresources.map((resources) => {
          return (
            <>
              <div
                className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5"
                key={resources.id}
              >
                <ResourcesCards {...resources} />
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
};
