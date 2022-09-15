import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";
import { JointheStudioBtn } from "./Buttons/ContactBtn";
import text from "../data/navbar.json";
import textone from "../data/navbar.json";
import texttwo from "../data/navbar.json";
import textthree from "../data/navbar.json";
import textfour from "../data/navbar.json";
import textfive from "../data/navbar.json";
import textsix from "../data/navbar.json";
import textseven from "../data/navbar.json";
import texteight from "../data/navbar.json";
import textnine from "../data/navbar.json";
import textten from "../data/navbar.json";
import texteleven from "../data/navbar.json";
import texttwelve from "../data/navbar.json";
import textthirteen from "../data/navbar.json";
import textfourteen from "../data/navbar.json";
import textfifteen from "../data/navbar.json";
import textsixteen from "../data/navbar.json";
import textseventeen from "../data/navbar.json";
import texteighteen from "../data/navbar.json";

const NavBar = (props) => {
  const { heading } = props;
  return (
    <>
      <section className="  NavBar">
        <div className="containter-fluid">
          <div className="d-flex me-auto mb-2 mb-lg-0 mt-4">
            <img src={logos} alt="" width={60} height={70} className="  " />
            <h1 className="h6  mt-4 mx-5">{heading}</h1>
            <div className="ms-auto mb-2 mb-lg-0 mt-4">
              <a
                className=" "
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="hamburger"
                aria-controls="offcanvasExample"
              >
                <h1>
                  {" "}
                  <i className="bi bi-list text-dark"></i>
                </h1>
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

        <div>
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  My Model
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Portfolios
                </a>
              </li>
            </ul>
          </div>

          <br />

          <a className=" nav-link  mx-3" type="button" aria-expanded="false">
            Project Management
          </a>

          <br />

          <div>
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
                  Growth-as-a-services
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div>
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
                  8th Gearians
                </a>
              </li>
            </ul>
          </div>

          <br />
          <div>
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
          </div>

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

export const Navbarone = () => {
  return (
    <div className="container">
      <div className="row">
        {textone.portfolio.map((navbar) => {
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

export const Navbartwo = () => {
  return (
    <div className="container">
      <div className="row">
        {texttwo.portfolios.map((navbar) => {
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

export const Navbarthree = () => {
  return (
    <div className="container">
      <div className="row">
        {textthree.projectdelivery.map((navbar) => {
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

export const Navbarfour = () => {
  return (
    <div className="container">
      <div className="row">
        {textfour.managedservices.map((navbar) => {
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

export const Navbarfive = () => {
  return (
    <div className="container">
      <div className="row">
        {textfive.digitalmarketing.map((navbar) => {
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

export const Navbarsix = () => {
  return (
    <div className="container">
      <div className="row">
        {textsix.legal.map((navbar) => {
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

export const Navbarseven = () => {
  return (
    <div className="container">
      <div className="row">
        {textseven.tech.map((navbar) => {
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

export const Navbareight = () => {
  return (
    <div className="container">
      <div className="row">
        {texteight.coworkingspace.map((navbar) => {
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

export const Navbarnine = () => {
  return (
    <div className="container">
      <div className="row">
        {textnine.growthasaservices.map((navbar) => {
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

export const Navbarten = () => {
  return (
    <div className="container">
      <div className="row">
        {textten.about.map((navbar) => {
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

export const Navbareleven = () => {
  return (
    <div className="container">
      <div className="row">
        {texteleven.ourteam.map((navbar) => {
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

export const Navbartwelve = () => {
  return (
    <div className="container">
      <div className="row">
        {texttwelve.blog.map((navbar) => {
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

export const Navbarthirteen = () => {
  return (
    <div className="container">
      <div className="row">
        {textthirteen.faq.map((navbar) => {
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

export const Navbarfourteen = () => {
  return (
    <div className="container">
      <div className="row">
        {textfourteen.events.map((navbar) => {
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

export const Navbarfifteen = () => {
  return (
    <div className="container">
      <div className="row">
        {textfifteen.foundermeetup.map((navbar) => {
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

export const Navbarsixteen = () => {
  return (
    <div className="container">
      <div className="row">
        {textsixteen.demoday.map((navbar) => {
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

export const Navbarseventeen = () => {
  return (
    <div className="container">
      <div className="row">
        {textseventeen.projectdeliverygallery.map((navbar) => {
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

export const Navbareighteen = () => {
  return (
    <div className="container">
      <div className="row">
        {texteighteen.eventgallery.map((navbar) => {
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
