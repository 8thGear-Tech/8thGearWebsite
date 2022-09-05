import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";

const NavBar = () => {
  return (
    <>
      <section className=" NavBar">
        <div className="containter-fluid">
          <div className="row class">
            <div className="col-sm-12 col-md-12 col-lg-1">
              <img src={logos} alt="" width={40} />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-7">
              <h1 className="h6 mt-3"> FAQ</h1>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 d-flex justify-content-end ">
              <a
                class="btn btn-primary"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="hamburger"
                aria-controls="offcanvasExample"
              >
                {/* Link with href */}
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
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Home
          </h5>
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
          {/* 
          <button className="JointheStudioBtn" type="sumbit">
            Join the Studio
          </button> */}

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
