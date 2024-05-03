import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./../assets/images/logo.png";
import { FacebookIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { LinkedInIcon } from "./Icons";
import { TwitterIcon } from "./Icons";
import { MailIcon } from "./Icons";
import { GoToTop } from "./Buttons/scrollToTop";

export const Footer = () => {
  return (
    <div className="container-fluid mt-4 mb-4 ">
      <div className="row">
        <div className="col-md-4 col-sm-12 d-none d-md-block d-lg-block">
          <Link to="/">
            <img className="footerLogo" src={logo} alt="" />
          </Link>

          <Popupmodal />
        </div>

        <div className="col-md-8 col-sm-12 text-md-center text-sm-center text-center">
          <div className="col-12 d-md-flex justify-content-md-around  align-items-start ">
            {/* <div className="d-flex justify-content-center justify-content-evenly"> */}{" "}
            <Link className="footerText text-fluid3 d-block " to="/">
              HOME
              <GoToTop />
            </Link>
            <Link className="footerText text-fluid3 d-block " to="./about">
              ABOUT
            </Link>
            <Link className=" footerText text-fluid3 d-block" to="./our-model">
              OUR MODEL
            </Link>
            {/* </div> */}
            <Link className=" footerText text-fluid3 d-block" to="./faq">
              FAQ
            </Link>
            <Link className=" footerText text-fluid3 d-block" to="./blog">
              BLOG
            </Link>
            <Link className=" footerText  text-fluid3 d-block" to="./events">
              EVENTS
            </Link>
            <Link className=" footerText text-fluid3 d-block" to="./team">
              8THGEARIANS
            </Link>
            <Link className=" footerText text-fluid3 d-block" to="./coWorking">
              COWORKING
            </Link>
          </div>

          <hr className=" d-none d-md-block"></hr>
          <div className="d-md-flex justify-content-around align-items-start">
            <Link
              className=" footerText text-fluid3 d-block"
              to="./growth-as-a-service"
            >
              GROWTH AS A SERVICE
            </Link>

            <Link className="  footerText text-fluid3 d-block" to="./portfolio">
              PORTFOLIO
            </Link>

            <Link
              className=" footerText text-fluid3 d-block"
              to="./project-delivery"
            >
              PROJECT DELIVERY
            </Link>
            <Link
              className=" footerText text-fluid3 d-block"
              to="./managed-services"
            >
              MANAGED SERVICES
            </Link>
            <a
              href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
              target="_blank"
              className="addressText d-block text-fluid3"
            >
              8THGEAR HUB, LAGOS, NIGERIA
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-10 offset-md-2 text-sm-center text-xs-center text-center">
          <div className="d-md-flex  justify-content-end  align-items-start   mt-md-3">
            <Link
              to="/privacy-policy"
              className="footerText text-nowrap me-4 "
              style={{ fontSize: "0.8rem" }}
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:info@8thgearpartners.com"
              className="footerText text-fluid3  me-4 emailLink d-block  "
            >
              info@8thgearpartners.com
            </a>

            <a
              href="tel:2348094818883"
              className="footerTextDecoration text-fluid3 me-3 remove__ml"
            >
              080 9481 8883
            </a>
            <a
              href="tel:23408094818882"
              className="footerTextDecoration d-block text-fluid3 me-3 remove__ml"
            >
              080 9481 8882
            </a>
            <div className="footericonsize   d-none d-md-block d-lg-block  ">
              <FooterIcon />
            </div>

            {/* <div className="col-md-4 col-sm-12 d-md-none d-sm-block">
              <Link to="/">
                <img className="footerLogo2 " src={logo} alt="" />
              </Link>
              <Popupmodal />

              <hr className=""></hr>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row text-end"></div>
    </div>
  );
};

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // setMessage(`thank you for subscribing`);
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
      <form className="d-flex mt-3" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="EMAIL ADDRESS"
          aria-label="Search"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="subscribeButton" type="submit">
          Subscribe
        </button>
      </form>
    </>
  );
};

export const Popupmodal = () => {
  const [openForm, setOpenForm] = useState(false);
  const [hideSubscribe, setHideSubscribe] = useState(true);

  return (
    <>
      <div className="">
        {
          (setOpenForm,
          hideSubscribe && (
            <button
              onClick={() => {
                setOpenForm(true);
                setHideSubscribe(false);
              }}
              className="btn"
            >
              {/* <h6 className="text-start text-nowrap firstSignUp d-none d-lg-block d-xl-block"> */}
              {/* <h6 className=" text-nowrap signupText">
                SIGN UP FOR NEWSLETTER
              </h6> */}
            </button>
          ))
        }

        {openForm && <Form closeModal={setOpenForm} />}
      </div>
    </>
  );
};

export function Form({ closeModal }) {
  return (
    <>
      <div className="">{/* <SubscribeForm /> */}</div>
    </>
  );
}

export const FooterIcon = () => {
  return (
    <>
      <nav className="footer__icons remove__ml listStyling d-flex justify-content-md-center justify-content-sm-start">
        <a href="https://www.facebook.com/8thgearhub" target="_blank">
          <i className="bi bi-facebook me-2 text-dark footer__icons"></i>
        </a>

        <a href="https://www.instagram.com/8thgearhub/" target="_blank">
          <i className="bi bi-instagram me-2 text-dark"></i>
        </a>

        <a href="https://www.linkedin.com/company/8thgearhub/" target="_blank">
          <i className="bi bi-linkedin me-2 text-dark"></i>
        </a>

        <a
          href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
          target="_blank"
        >
          <i className="bi bi-twitter me-2 text-dark"></i>
        </a>

        <a href="mailto:info@8thgearpartners.com" target="_blank">
          <i className="bi bi-at text-dark"></i>
        </a>
      </nav>
    </>
  );
};
