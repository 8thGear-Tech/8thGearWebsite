import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../assets/images/logo.png";
import { FacebookIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { LinkedInIcon } from "./Icons";
import { TwitterIcon } from "./Icons";
import { MailIcon } from "./Icons";

export const Footer = () => {
  return (
    <>
      <footer className="px-1 mx-2 px-2">
        <section className="d-none  d-lg-block d-xl-block ">
          <div className="my-5">
            <hr />
          </div>
          <div className="row text-end ">
            <i className="bi bi-arrow-up-square my-2 " id="iconsize2"></i>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <div className="ms-4 ps-4">
                <img className="footerLogo my-1  " src={logo} alt="" />
              </div>
              <div className="row d-flex justify-content-start">
                <FooterModal />
                <hr className="ms-5 hrForBigScreen"></hr>
              </div>
            </div>

            <div className="col-md-9">
              <div className=" row">
                <div className="col-lg-3"></div>
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText text-nowrap" to="/">
                      OUR MODEL
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      PROJECT DELIVERY
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      MANAGED SERVICES
                    </Link>
                  </li>
                </ul>
                <hr className=""></hr>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      COWORKING
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid text-nowrap">
                    <Link className=" footerText" to="/">
                      GROWTH AS A SERVICE
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      ABOUT
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      8THGEARIANS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      BLOG
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      FAQ
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/">
                      EVENTS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-1 text-fluid">
                    <Link className=" footerText" to="/">
                      info@8thgearpartners.com
                    </Link>
                  </li>

                  <FooterIcon />

                  <li className="mx-2 text-fluid text-nowrap">
                    <b>080 9481 8883 | 080 9481 8882</b>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText text-nowrap" to="/">
                      8THGEAR HUB
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-9 col-lg-9">
              <div className="row text-end">
                <div className="col-lg-2 col-md-2">
                  <Link className=" footerText" to="/">
                    HOME
                  </Link>
                </div>
                <div className="col-lg-2 col-md-3">
                  <Link className=" footerText" to="/">
                    OUR MODEL
                  </Link>
                </div>
                <div className="col-lg-2 col-md-3">
                  <Link className=" footerText" to="/">
                    PORTFOLIOS
                  </Link>
                </div>{" "}
                <div className="col-lg-3 col-md-4">
                  <Link className=" footerText" to="/">
                    PROJECT DELIVERY
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4">
                  <Link className=" footerText" to="/">
                    MANAGED SERVICES
                  </Link>
                </div>
                <div className="col-lg-2 col-md-2 me-2">
                  <Link className=" footerText" to="/">
                    COWORKING
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4">
                  <Link className=" footerText text-nowrap" to="/">
                    GROWTH-AS-A-SERVICE
                  </Link>
                </div>
                <div className="col-lg-1 col-md-1 ">
                  <Link className=" footerText text-nowrap" to="/">
                    ABOUT
                  </Link>
                </div>
                <div className="col-lg-3 col-md-3">
                  <Link className=" footerText text-nowrap" to="/">
                    8THGEARIANS
                  </Link>
                </div>
                <div className="col-lg-1 col-md-1">
                  <Link className=" footerText text-nowrap" to="/">
                    BLOG
                  </Link>
                </div>
                <div className="col-lg-1 col-md-1">
                  <Link className=" footerText text-nowrap" to="/">
                    FAQ
                  </Link>
                </div>
                <div className="col-lg-1 col-md-2 me-5">
                  <Link className=" footerText " to="/">
                    EVENTS
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 ">
                  <Link className=" footerText " to="/">
                    info@8thgearpartners.com
                  </Link>
                </div>
                <div className="col-lg-4 col-md-5 ">
                  <Link className=" footerText text-nowrap" to="/">
                    <b>080 9481 8883 | 080 9481 8882</b>
                  </Link>
                </div>
                <div className="col-lg-2 col-md-4 text-nowrap mx-1">
                  <Link className=" footerText " to="/">
                    8THGEAR HUB
                  </Link>
                </div>
                <div className="col-lg-2 col-md-4">
                  <Link className=" footerText " to="/">
                    <FooterIcon />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* medium screenstart */}
        <section className="d-none d-md-block d-lg-none">
          <div className="my-5">
            <hr />
          </div>
          <div className="row text-end ">
            <i className="bi bi-arrow-up-square my-2 " id="iconsize2"></i>
          </div>
          <div className="row">
            <div className="col-md-3 mb-5 ">
              <img className="footerLogo2 my-2" src={logo} alt="" />
              {/* <div className="d-none d-md-block">
                <FooterModal />
                <hr className="ms-5 hrForBigScreen"></hr>
              </div> */}
              <div className="row d-flex justify-content-start">
                <FooterModal />
                <hr className="ms-5 hrForBigScreen"></hr>
              </div>
            </div>

            <div className="col-md-9">
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText text-nowrap" to="/">
                      OUR MODEL
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      PROJECT DELIVERY
                    </Link>
                  </li>
                </ul>
                <hr className=""></hr>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      MANAGED SERVICES
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      COWORKING
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText text-nowrap" to="/">
                      GROWTH AS A SERVICE
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      ABOUT
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      8THGEARIANS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      BLOG
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      FAQ
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      EVENTS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="/">
                      8THGEAR HUB
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-1 text-fluid2">
                    <Link className=" footerText" to="/">
                      info@8thgearpartners.com
                    </Link>
                  </li>

                  <li className="mx-1 text-fluid2 text-nowrap">
                    <b>080 9481 8883 | 080 9481 8882</b>
                  </li>
                  <li className="mx-1">
                    <FooterIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* medium screen ends*/}

        {/* Display on a smaller screen starts  */}

        <main className="container-fluid    d-md-none d-lg-none d-sm-block d-xs-block">
          <div className="row">
            <ul className="text-end pe-5 footerIcon">
              <li>
                <i
                  className="bi bi-arrow-up-square px-1 "
                  style={{ fontSize: 22 }}
                  id="iconsize"
                ></i>
              </li>
            </ul>

            <h6 className="text-center">
              <FooterIcon />
            </h6>
            {/* modal start for smallScreen */}
            <div className="">
              <FooterModal />
            </div>
            <hr className=" "></hr>
            {/* modal ends for smallScreen */}
          </div>
          <div className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-4  col-xs-12 pe-5 ">
                <ul className=" ul_for_footer text-center">
                  <p className="my-3"></p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      GROWTH AS A SERVICE
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      PROJECT DELIVERY
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      MANAGED SERVICES
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      info@8thgearpartners.com
                    </Link>
                  </p>
                  <p className="my-3 text-nowrap">
                    <b> 080 9481 8883</b> <br></br> <b>080 9481 8882</b>
                  </p>
                </ul>
              </div>
              <div className="col-sm-4  col-xs-12 ps-5">
                <ul className=" ul_for_footer text-center pe-5 footerIcon ">
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      HOME
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      ABOUT
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      BLOG
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      FAQ
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      EVENT
                    </Link>
                  </p>
                  <p className="my-3 text-nowrap">
                    <Link className=" footerText" to="/">
                      OUR MODEL
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText" to="/">
                      PORTFOLIO
                    </Link>
                  </p>
                </ul>
              </div>
              <div className="col-5"></div>
            </div>
            <div className="row">
              <div className="col text-center">
                <img className="" src={logo} alt="" style={{ width: 60 }} />
                <p className="my-3">
                  <Link className=" footerText" to="/">
                    8THGEAR HUB
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* small screen ends */}
      </footer>
    </>
  );
};

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);
  // import logo from "./../assets/images/logo.png";

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
            style={({ fontSize: 14 }, { width: 250 })}
            className="border-0  footerFormField"
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
{
  /* <hr className="newsLetterUnderline " />
           </div> */
}

export const FooterIcon = () => {
  return (
    <>
      {/* icons */}

      <ul className=" ">
        <li className="mx-3 d-flex justify-content-center footerIcon">
          <li className="mx-2">
            <Link className="" to="/">
              <i className="bi bi-facebook "></i>
            </Link>
          </li>

          <li className="mx-2 ">
            <Link className="" to="/">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>

          <li className="mx-2 ">
            <Link className="" to="/">
              <i className="bi bi-linkedin"></i>
            </Link>
          </li>

          <li className="mx-2 ">
            <Link className="" to="/">
              <i className="bi bi-twitter"></i>
            </Link>
          </li>

          <li className="mx-2">
            <Link className="" to="/">
              <i className="bi bi-at "></i>
            </Link>
          </li>
        </li>
      </ul>
    </>
  );
};

export const FooterModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <button
        className="openModalBtn btn "
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <h6 className="text-start text-nowrap firstSignUp d-none d-lg-block d-xl-block">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap secondSignUp  d-none  d-md-block  d-md-lg-none  d-sm-none d-lg-none ">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap   d-md-none  d-md-lg-none  d-md-sm-block     ">
          SIGN UP FOR NEWSLETTER
        </h6>
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export function Modal({ closeModal }) {
  return (
    <>
      <div className="container  text-start" style={{ width: 400 }}>
        <div className="d-flex justify-content-around">
          <img
            className="mt-2"
            src={logo}
            width={28}
            height={33}
            id="staticBackdropLabel"
          />
          <button
            className=" px-5 btn  btn-primary"
            onClick={() => closeModal(false)}
          >
            {/* <i class="bi bi-x-square" style={{ fontSize: 25 }}></i> */}
            Close
          </button>
        </div>
        <div className="title">
          <div className="row d-flex justify-content-center ">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </>
  );
}
