import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";
import { JointheStudioBtn } from "./Buttons/ContactBtn";

const NavBar = () => {
  return (
    <>
      <section className="  NavBar">
        <div className="containter-fluid">
          <div className="d-flex">
            <img
              src={logos}
              alt=""
              width={70}
              height={80}
              className="d-inline-block align-text-top mx-5"
            />
            <h1 className="h5 mt-4">8th Gear Venture Studio</h1>
            <div className="ms-auto mb-2 mb-lg-0 mx-5 mt-4">
              <a
                className=" bg-dark  navbar-toggler-icon  "
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="hamburger"
                aria-controls="offcanvasExample"
              ></a>
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
          {/* <Link to="/">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Home
            </h5>
          </Link> */}
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
          <div>
            {/* Some text as placeholder. In real life you can have the elements you */}
            {/* have chosen. Like, text, images, lists, etc. */}
          </div>
          <div className="dropdown">
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
          <div className="dropdown">
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

          <div className="dropdown">
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
          <div className="dropdown">
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
          {/* <a
            class="nav-link dropdown-toggle mx-3"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/"
            style="color: rgb(0, 0, 0);"
          >
            Upskill
          </a> */}
          <JointheStudioBtn />
          {/* <div class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              Dropdown trigger
            </a>
            <ul class="dropdown-menu ">
              <l1>
                <a className="dropdown-item" href="#">
                  meutyarn
                </a>
              </l1>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Navbar
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">
          Home
        </a>
        <a class="nav-link" href="#">
          Features
        </a>
        <a class="nav-link" href="#">
          Pricing
        </a>
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </div>
    </div>
  </div>
</nav>;
