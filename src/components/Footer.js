import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="px-4">
      {/* on a large screen */}
      <section className="d-none d-md-block d-lg-block d-xl-block">
        {/* <div className="my-3">
          <hr />
        </div> */}
        <div className="row container-fluid g-0">
          <div className="col-md-3 mb-5 ">
            <img className="w-25 my-4" src={logo} alt="" />
            <h6 className="text-fluid">SIGN UP FOR NEWSLETTER</h6>
            <footerModal />

            <hr className="newsLetterUnderline " />
          </div>

          <div className="col-md-9">
            <div className="row text-end">
              {/* <i className="bi bi-arrow-up-square " id="iconsize"></i> */}
            </div>
            <div className="row mt-5">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">
                  <Link
                    to="/"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="mx-4  text-fluid">
                  <Link
                    to="ourmodel"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    OUR MODEL
                  </Link>
                </li>
                <li className="mx-4 text-fluid">
                  <Link
                    to="/portfolios"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li className="mx-4 text-fluid">
                  <Link
                    to="/projectdelivery"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    PROJECT DELIVERY
                  </Link>
                </li>
                <li className="mx-4 text-fluid">
                  <Link
                    to="/managedservices"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    MANAGED SERVICES
                  </Link>
                </li>
              </ul>
              <hr className="" style={{ width: "" }}></hr>
            </div>
            <div className=" row ">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">COWORKING</li>
                <li className="mx-4 text-center text-fluid text-nowrap">
                  <Link
                    to="/growth-as-a-service"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    GROWTH-AS-A-SERVICE
                  </Link>
                </li>
                <li className="mx-4 text-fluid">ABOUT</li>
                <li className="mx-4 text-fluid">8THGEARIANS</li>
                <li className="mx-4 text-fluid">BLOG</li>
                <li className="mx-4 text-fluid">FAQ</li>
                <li className="mx-4 text-fluid">
                  <Link
                    to="/events"
                    // className="text-reset"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    EVENTS
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" row ">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">info@8thgearpartners.com</li>
                <li className="mx-4 text-fluid text-nowrap  ">
                  <i class="bi bi-facebook mx-2 text-fluid"></i>
                  <i class="bi bi-instagram mx-2 text-fluid"></i>
                  <i class="bi bi-linkedin mx-2 text-fluid"></i>
                  <i class="bi bi-twitter mx-2 text-fluid"></i>
                  <i class="bi bi-at mx-2 text-fluid1"></i>
                </li>
                <li className="mx-4 text-fluid text-nowrap">
                  080 9481 8883 | 080 9481 8882
                </li>
                <li className="mx-4 text-fluid text-nowrap">8thGear Hub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Display on a smaller screen  */}

      <main className="container-fluid d-md-none d-lg-none d-sm-block d-xs-block">
        <div className="row my-3">
          <hr />
        </div>
        <div className="row ">
          <ul className="text-end">
            <li>
              {" "}
              {/* <i
                className="bi bi-arrow-up-square  "
                style={{ fontSize: 22 }}
                id="iconsize"
              ></i> */}
            </li>
          </ul>
          <ul className="mobile-icon text-center">
            <li className="mx-4  text-nowrap">
              <i class="bi bi-facebook mx-2 "></i>
              <i class="bi bi-instagram mx-2 "></i>
              <i class="bi bi-linkedin mx-2 "></i>
              <i class="bi bi-twitter mx-2 "></i>
              <i class="bi bi-at mx-2 " style={{ fontSize: 22 }}></i>
            </li>
          </ul>

          {/* modal start*/}
          <>
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              {" "}
              <h6 className="text-center">SIGN UP FOR NEWSLETTER</h6>
              <div className="">
                <div className="d-flex justify-content-center">
                  <hr className="" style={{ width: 260 }} />
                </div>
              </div>
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog ">
                <div className="modal-content ">
                  <div className="modal-header">
                    <img src={logo} width={25} id="staticBackdropLabel" />
                    <button
                      type="button"
                      className="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="d-flex justify-content-end mx-4 my-2"></div>
                  <div className="row d-flex justify-content-center">
                    <SubscribeForm />
                  </div>
                </div>
              </div>
            </div>
          </>
          {/* modal end */}
        </div>

        <div className="row d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <ul className="text-start ul_for_footer">
                <p className="my-3">COWORKING</p>
                <p className="my-3 text-nowrap">GROWTH AS A SERVICE</p>

                <p className="my-3 text-nowrap">PROJECT DELIVERY</p>
                <p className="my-3 text-nowrap">MANAGED SERVICES</p>
                <p className="my-3 text-nowrap">info@8thgearpartners.com</p>
                <p className="my-3 text-nowrap">
                  080 9481 8883 <br></br> 080 9481 8882
                </p>
              </ul>
            </div>
            <div className="col-4">
              <ul className="text-end ul_for_footer">
                <p className="my-3">HOME</p>
                <p className="my-3">ABOUT</p>
                <p className="my-3">BLOG</p>
                <p className="my-3">FAQ</p>
                <p className="my-3">EVENT</p>
                <p className="my-3">OUR MODEL</p>
                <p className="my-3">PORTFOLIO</p>
              </ul>
            </div>

            <div className="col-5"></div>
          </div>
          <div className="row">
            <div className="col text-center">
              <img className="" src={logo} alt="" style={{ width: 60 }} />
              <p className="my-3">
                <b>8THGEAR HUB</b>
              </p>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const person = { email };
      console.log(person);
      setPeople((people) => {
        return [...people, email];
      });
      setEmail("");
    } else {
      alert("please enter your email address ");
    }
  };
  return (
    <>
      <form className="form  w-75 text-center " onSubmit={handleSubmit}>
        <article className="form-control my-2 text-start g-3">
          <label htmlFor="email"> </label>
          <input
            style={({ fontSize: 14 }, { width: 300 })}
            className="border-0 "
            type="text"
            placeholder="EMAIL ADDRESS"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </article>

        <div className="text-center">
          <button className="btn ">Subscribe</button>
        </div>
      </form>
    </>
  );
};

export function footerModal(params) {
  return (
    <>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {" "}
        <h6 className="text-center">SIGN UP FOR NEWSLETTER</h6>
        <div className="">
          <div className="d-flex justify-content-center">
            <hr className="" style={{ width: 260 }} />
          </div>
        </div>
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header">
              <img src={logo} width={25} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-flex justify-content-end mx-4 my-2"></div>
            <div className="row d-flex justify-content-center">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
