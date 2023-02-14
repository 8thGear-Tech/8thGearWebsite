//internal import
import allresources from "../../data/resources.json";
import growingyourbusiness from "../../data/resources.json";

//external import
import { useState } from "react";

//image
// import resourceimageone from "../../assets/images/resources/resourceimageone.png";

import { ResourcesTitleBtn } from "../Buttons/PortfolioBtn";
import { ResourcesReadMoreLink } from "../Buttons/PortfolioBtn";
import { Paragraph } from "react-bootstrap-icons";

export const ResourcesCards = (props) => {
  const { image, articletype, title, paragraphtext, buttonlink } = props;
  return (
    <>
      <div className="card mt-4" style={{ border: "none" }}>
        <iframe
          src={image}
          height="280"
          allowFullScreen
          className=""
          alt="..."
        ></iframe>
        <div className="d-flex justify-content-between py-2">
          {/* <ResourcesTitleBtn /> */}
          <p className="card-text" style={{ fontSize: "0.8rem" }}>
            {articletype}
          </p>
        </div>
        <div className="">
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-2">{paragraphtext}</p>
          {/* <ResourcesReadMoreLink> {props.buttonlink}</ResourcesReadMoreLink> */}
          <a href={buttonlink}>
            <ResourcesReadMoreLink />
          </a>
        </div>
      </div>
    </>
  );
};

const ResourcesCar = (props) => {
  const { image, articletype, title, paragraphtext, buttonlink } = props;
  return (
    <>
      {" "}
      {/* <div className="container my-4"> */}
      <div className="my-4">
        {/* <iframe src={image} title="YouTube video"></iframe> */}
        <div className="responsive-iframe">
          <iframe
            src={image}
            // width="350rem"
            height="250"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
        <div className="d-flex justify-content-between py-2">
          {/* <ResourcesTitleBtn /> */}
          <p className="card-text" style={{ fontSize: "0.8rem" }}>
            {articletype}
          </p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-2">{paragraphtext}</p>
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
    <>
      {" "}
      <div className="container-fluid pt-4">
        <div className="input-group mb-3 justify-content-end">
          {/* <span className="input-group-text" id="basic-addon1">
          @
        </span> */}
          <input
            type="text"
            // className="form-control"
            placeholder="Search"
            // aria-label="Username"
            // aria-describedby="basic-addon1"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <ul
          className="nav nav-pills mt-4 mb-3 nav-justified"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item  border-right" role="presentation">
            <a
              href=""
              // className="nav-link active"
              className="text-decoration text-decoration-none text-black active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Knowledge center
            </a>
          </li>
          <li className="nav-item  border-right" role="presentation">
            <a
              href=""
              // className="nav-link"
              className="text-decoration text-decoration-none text-black"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              // type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Starting your business
            </a>
            {/* <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Starting your business
          </button> */}
          </li>
          <li className="nav-item   " role="presentation">
            <a
              href=""
              // className="nav-link"
              className="text-decoration text-decoration-none text-black"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Growing your business
            </a>
          </li>
          {/* <li className="nav-item px-4 border-right" role="presentation">
          <a
            href=""
           
            className="text-decoration text-decoration-none text-black"
            id="pills-manageyourbusiness-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-manageyourbusiness"
            type="button"
            role="tab"
            aria-controls="pills-manageyourbusiness"
            aria-selected="false"
          >
            Managing your business
          </a>
        </li>
        <li className="nav-item px-4" role="presentation">
          <a
            href=""
         
            className="text-decoration text-decoration-none text-black"
            id="pills-professionaldevelopment-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-professionaldevelopment"
            type="button"
            role="tab"
            aria-controls="pills-professionaldevelopment"
            aria-selected="false"
          >
            Scaling your business
          </a>
        </li> */}
        </ul>
      </div>
      <div className="container-fluid px-5">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
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
                  else if (
                    resources.paragraphtext
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                    return resources;
                })
                .map((resources) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-sm-10 px-md-4 px-sm-5"
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
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
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
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabIndex="0"
          >
            <div className="row justify-content-evenly">
              {growingyourbusiness.growingyourbusiness.map((resources) => {
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
            className="tab-pane fade"
            id="pills-manageyourbusiness"
            role="tabpanel"
            aria-labelledby="pills-manageyourbusiness-tab"
            tabIndex="0"
          >
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
          <div
            className="tab-pane fade"
            id="pills-professionaldevelopment"
            role="tabpanel"
            aria-labelledby="pills-professionaldevelopment-tab"
            tabIndex="0"
          >
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
          {/* <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
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
    </>
  );
};
