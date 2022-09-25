import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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
          {/* <div className="row text-end iconsize2">
            <i
              className="bi bi-arrow-up-square my-2"
              // id="iconsize2"
            ></i>
          </div> */}
          <div className="row">
            <div className="col-md-3 ">
              <div className="">
                <img className="footerLogo my-1  " src={logo} alt="" />
              </div>
              <div className="row d-flex justify-content-start">
                <Example />
                <hr className="ms-2 hrForBigScreen"></hr>
              </div>
            </div>

            <div className="col-md-9">
              <div className=" row">
                <div className="col-lg-3"></div>
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./">
                      HOME
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText text-nowrap" to="./our-model">
                      OUR MODEL
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./portfolio">
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./project-delivery">
                      PROJECT DELIVERY
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./managed-services">
                      MANAGED SERVICES
                    </Link>
                  </li>
                </ul>
                <hr className=""></hr>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./coWorking">
                      COWORKING
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid text-nowrap">
                    <Link className=" footerText" to="./growth-as-a-service">
                      GROWTH AS A SERVICE
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./about">
                      ABOUT
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./team ">
                      8THGEARIANS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./blog">
                      BLOG
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid">
                    <Link className=" footerText" to="./events">
                      EVENTS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <a
                    href="mailto:info@8thgearpartners.com"
                    className="mx-1 text-fluid  emailLink"
                  >
                    info@8thgearpartners.com
                  </a>

                  <FooterIcon />

                  <li className="mx-2 text-fluid text-nowrap">
                    <a
                      href="tel:2348094818883"
                      className="footerTextDecoration"
                    >
                      {" "}
                      080 9481 8883
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:23408094818882"
                      className="footerTextDecoration"
                    >
                      080 9481 8882
                    </a>
                  </li>
                  <li className="mx-4 text-fluid">
                    {/* <Link
                      className=" footerText text-nowrap"
                      to="./8thgear-hub"
                    > */}
                    8THGEAR HUB
                    {/* </Link> */}
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
          {/* <div className="row text-end ">
            <i className="bi bi-arrow-up-square my-2 " id="iconsize2"></i>
          </div> */}
          <div className="row">
            <div className="col-md-3 mb-5 ">
              <img className="footerLogo2 my-2" src={logo} alt="" />
              {/* <div className="d-none d-md-block">
                <FooterModal />
                <hr className="ms-5 hrForBigScreen"></hr>
              </div> */}
              <div className="row d-flex justify-content-start">
                <Example />
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
                    <Link className=" footerText text-nowrap" to="./our-model">
                      OUR MODEL
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./portfolio">
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./project-delivery">
                      PROJECT DELIVERY
                    </Link>
                  </li>
                </ul>
                <hr className=""></hr>
              </div>
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./managed-service">
                      MANAGED SERVICES
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./coWorking">
                      COWORKING
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link
                      className=" footerText text-nowrap"
                      to="./growth-as-a-service"
                    >
                      GROWTH AS A SERVICE
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./about">
                      ABOUT
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./team">
                      8THGEARIANS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./blog">
                      BLOG
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    <Link className=" footerText" to="./events">
                      EVENTS
                    </Link>
                  </li>
                  <li className="mx-4 text-fluid2">
                    {/* <Link className=" footerText" to="./8thgear-hub"> */}
                    8THGEAR HUB
                    {/* </Link> */}
                  </li>
                </ul>
              </div>

              <div className=" row">
                <ul className="ul_top_hypers text-end ">
                  <a
                    href="mailto:info@8thgearpartners.com"
                    className="mx-1 text-fluid2  emailLink"
                  >
                    info@8thgearpartners.com
                  </a>

                  <li className="mx-1 text-fluid2 text-nowrap">
                    <a
                      href="tel:2348094818883"
                      className="footerTextDecoration"
                    >
                      {" "}
                      080 9481 8883
                    </a>
                    |{" "}
                    <a
                      href="tel:23408094818882"
                      className="footerTextDecoration"
                    >
                      080 9481 8882
                    </a>
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
              {/* <li className="iconsize">
                <i
                  className="bi bi-arrow-up-square px-1  iconsize "
                  style={{ fontSize: 22 }}
                  id="iconsize"
                ></i>
              </li> */}
            </ul>
            <h6 className="text-start pe-5">
              <FooterIcon />
            </h6>
            <h6 className="text-center">
              <Example />
            </h6>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-4  col-xs-12 ps-5">
                <ul className=" ul_for_footer text-start pe-5 footerIcon  ">
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="/">
                      HOME
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="./about">
                      ABOUT
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="./blog">
                      BLOG
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="./faq">
                      FAQ
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="./events">
                      EVENT
                    </Link>
                  </p>
                  <p className="my-3 text-nowrap">
                    <Link className=" footerText text-fluid3" to="./our-model">
                      OUR MODEL
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link className=" footerText  text-fluid3" to="./portfolio">
                      PORTFOLIO
                    </Link>
                  </p>
                </ul>
              </div>
              <div className="col-sm-4  col-xs-12 pe-5 ">
                <ul className=" ul_for_footer text-start">
                  <p className="my-3"></p>
                  <p className="my-3">
                    <Link className=" footerText text-fluid3" to="./team">
                      GROWTH AS A SERVICE
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link
                      className=" footerText text-fluid3"
                      to="./project-delivery"
                    >
                      PROJECT DELIVERY
                    </Link>
                  </p>
                  <p className="my-3">
                    <Link
                      className=" footerText text-fluid3"
                      to="./managed-service"
                    >
                      MANAGED SERVICES
                    </Link>
                  </p>

                  <a
                    href="mailto:info@8thgearpartners.com"
                    className="my-3  text-nowrap  emailLink text-fluid3"
                  >
                    info@8thgearpartners.com
                  </a>
                  <p className="my-3 text-nowrap text-fluid3">
                    <a
                      href="tel:2348094818883"
                      className="footerTextDecoration"
                    >
                      {" "}
                      080 9481 8883
                    </a>
                    <br></br>{" "}
                    <a
                      href="tel:23408094818882"
                      className="footerTextDecoration"
                    >
                      080 9481 8882
                    </a>
                  </p>
                </ul>
              </div>

              <div className="col-5"></div>
            </div>
            <div className="row">
              <div className="col text-center">
                <img className="" src={logo} alt="" style={{ width: 60 }} />
                <p className="my-3">
                  {/* <Link className=" footerText text-fluid3" to="/"> */}
                  8THGEAR HUB
                  {/* </Link> */}
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
      <form className="form  w-100 text-start " onSubmit={handleSubmit}>
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

export const FooterIcon = () => {
  return (
    <>
      {/* icons */}

      <ul className=" ">
        <li className="mx-3 d-flex justify-content-center footerIcon">
          <div>
            <a href="https://www.facebook.com/8thgearpartners">
              <i className="bi bi-facebook mx-2 text-dark"></i>
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/8thgearpartners/">
              <i className="bi bi-instagram mx-2 text-dark"></i>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/company/8thgearpartners/">
              <i className="bi bi-linkedin mx-2 text-dark"></i>
            </a>
          </div>

          <div>
            <a href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09">
              <i className="bi bi-twitter mx-2 text-dark"></i>
            </a>
          </div>

          <div>
            <a href="mailto:info@8thgearpartners.com">
              <i class="bi bi-at text-dark"></i>
            </a>
          </div>
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
      {openModal && <Modal1 closeModal={setOpenModal} />}
    </div>
  );
};

export function Modal1({ closeModal }) {
  return (
    <>
      <div className="container  text-start" style={{ width: 400 }}>
        <div className="d-flex justify-content-around">
          <button
            className=" px-5 btn  btn-primary"
            onClick={() => closeModal(false)}
          >
            {/* <i class="bi bi-x-square" style={{ fontSize: 25 }}></i> */}
            Close
          </button>
          `{" "}
          <img
            className="mt-2"
            src={logo}
            width={28}
            height={33}
            id="staticBackdropLabel"
          />
          `
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

export function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button onClick={handleShow}>
        <h6 className="text-start text-nowrap firstSignUp d-none d-lg-block d-xl-block">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap secondSignUp  d-none  d-md-block  d-md-lg-none  d-sm-none d-lg-none ">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap   d-md-none  d-md-lg-none  d-md-sm-block     ">
          SIGN UP FOR NEWSLETTER
        </h6>
      </Button> */}
      <button
        className="openModalBtn btn "
        // onClick={() => {
        //   setOpenModal(true);
        // }}
        onClick={handleShow}
      >
        <h6 className="text-start text-nowrap firstSignUp d-none d-lg-block d-xl-block">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap secondSignUp  d-none  d-md-block  d-md-lg-none  d-sm-none d-lg-none ">
          SIGN UP FOR NEWSLETTER
        </h6>
        <h6 className="text-start text-nowrap  thirdSignUp  d-md-none  d-md-lg-none  d-md-sm-block     ">
          SIGN UP FOR NEWSLETTER
        </h6>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
          <img
            className="mt-2"
            src={logo}
            width={28}
            height={33}
            id="staticBackdropLabel"
          />
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <SubscribeForm />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
