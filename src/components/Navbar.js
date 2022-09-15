import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";
import { JointheStudioBtn } from "./Buttons/ContactBtn";
import text from "../data/navbar.json";

const NavBar = (props) => {
  const { heading } = props;
  return (
    <>
      <section className="">
        <div className="containter-fluid NavBar">
          <div className="d-flex">
            <img
              src={logos}
              alt=""
              width={60}
              height={70}
              className="d-inline-block align-text-top mx-5 "
            />
            <h1 className="h6  mt-4 ">{heading}</h1>
            <div className="ms-auto mb-2 mb-lg-0 mx-5 mt-4">
              <a
                className=" "
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="hamburger"
                aria-controls="offcanvasExample"
              >
                <div className="">
                  {" "}
                  <i
                    className="bi bi-list text-dark"
                    style={{ fontSize: "40px" }}
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <a
            data-w-id="4a4302b6-6981-f1fa-9bee-92d7404c033a"
            href="/"
            aria-current="page"
            class="side-nav-link-home w--current"
          >
            ← Home
          </a>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <a
            className=" nav-link dropdown-toggle mx-3"
            type="button"
            id="navbarDarkdropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Studio
          </a>
          {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Our Model
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Portfolios
              </a>
            </li>
          </ul> */}

          <br />

          <a className=" nav-link  mx-3" type="button" aria-expanded="false">
            Project Delivery
          </a>

          <br />

          <a
            className=" nav-link dropdown-toggle mx-3"
            type="button"
            id="navbarDarkdropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Managed Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Coworking
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Growth-as-a-Service
              </a>
            </li>
          </ul>

          <br />

          <a
            className=" nav-link dropdown-toggle mx-3"
            type="button"
            id="navbarDarkdropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Who we are
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                8thGearians
              </a>
            </li>
          </ul>

          <br />

          <a
            className=" nav-link dropdown-toggle mx-3"
            type="button"
            id="navbarDarkdropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Insights
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                FAQ
              </a>
            </li>
          </ul>

          <br />
          <br />

          <JointheStudioBtn />

          <br />
          <br />
          <br />

          <div>
            <a href=""></a>
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        {text.landingpage.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar1 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.portfolio.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar2 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.portfolios.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar3 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.projectdelivery.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar4 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.managedservices.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar5 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.digitalmarketing.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar6 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.legal.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar7 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.tech.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar8 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.coworkingspace.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar9 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.growthasaservices.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar10 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.about.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar11 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.ourteam.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar12 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.blog.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar13 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.faq.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar14 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.events.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar15 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.foundermeetup.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar16 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.demoday.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar17 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.projectdeliverygallery.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar18 = () => {
  return (
    <div className="container">
      <div className="row">
        {text.eventgallery.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
