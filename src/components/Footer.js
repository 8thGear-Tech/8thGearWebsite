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

// export const Footer = () => {
//   return (
//     <>
//       <footer className="px-1 mx-2 px-2">
//         <section className="d-none  d-lg-block d-xl-block ">
//           <div className="my-5">
//             <hr />
//           </div>
//           {/* <div className="row text-end iconsize2">
//             <i
//               className="bi bi-arrow-up-square my-2"
//               // id="iconsize2"
//             ></i>
//           </div> */}
//           <div className="row">
//             <div className="col-md-3 ">
//               <div className="">
//                 <Link to="/">
//                   <img className="footerLogo my-1  " src={logo} alt="" />
//                 </Link>
//               </div>
//               <div className="row d-flex justify-content-start">
//                 <Popupmodal />
//                 <hr className="ms-2 hrForBigScreen"></hr>
//               </div>
//             </div>

//             <div className="col-md-9">
//               <div className=" row">
//                 <div className="col-lg-3"></div>
//                 <ul className="ul_top_hypers text-end ">
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./">
//                       HOME
//                     </Link>
//                     <GoToTop />
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText text-nowrap" to="./our-model">
//                       OUR MODEL
//                     </Link>
//                     <GoToTop />
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./portfolio">
//                       PORTFOLIO
//                     </Link>
//                     <GoToTop />
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./project-delivery">
//                       PROJECT DELIVERY
//                     </Link>
//                     <GoToTop />
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./managed-services">
//                       MANAGED SERVICES
//                     </Link>
//                     <GoToTop />
//                   </li>
//                 </ul>
//                 <hr className=""></hr>
//               </div>
//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   {/* <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./coWorking">
//                       COWORKING
//                     </Link>
//                   </li> */}
//                   <li className="mx-4 text-fluid text-nowrap">
//                     <Link className=" footerText" to="./growth-as-a-service">
//                       GROWTH AS A SERVICE
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./about">
//                       ABOUT
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./team ">
//                       8THGEARIANS
//                     </Link>
//                   </li>
//                   {/* <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./blog">
//                       BLOG
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./faq">
//                       FAQ
//                     </Link>
//                   </li> */}
//                   <li className="mx-4 text-fluid">
//                     <Link className=" footerText" to="./events">
//                       EVENTS
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   <Link
//                     to="/privacy-policy"
//                     className="mx-2 text-fluid text-nowrap "
//                     style={{ fontSize: "0.8rem" }}
//                   >
//                     Privacy Policy
//                   </Link>
//                   <a
//                     href="mailto:info@8thgearpartners.com"
//                     className="mx-1 text-fluid  emailLink"
//                   >
//                     info@8thgearpartners.com
//                   </a>

//                   <FooterIcon />

//                   <li className="mx-2 text-fluid text-nowrap">
//                     <a
//                       href="tel:2348094818883"
//                       className="footerTextDecoration"
//                     >
//                       {" "}
//                       080 9481 8883
//                     </a>{" "}
//                     |{" "}
//                     <a
//                       href="tel:23408094818882"
//                       className="footerTextDecoration"
//                     >
//                       080 9481 8882
//                     </a>
//                   </li>
//                   <li className="mx-2 text-fluid">
//                     {/* <Link
//                       className=" footerText text-nowrap"
//                       to="./8thgear-hub"
//                     > */}
//                     <a
//                       href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
//                       target="_blank"
//                       className="addressText"
//                     >
//                       8THGEAR HUB, LAGOS, NIGERIA
//                     </a>

//                     {/* </Link> */}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* <div className="col-md-9 col-lg-9">
//               <div className="row text-end">
//                 <div className="col-lg-2 col-md-2">
//                   <Link className=" footerText" to="/">
//                     HOME
//                   </Link>
//                 </div>
//                 <div className="col-lg-2 col-md-3">
//                   <Link className=" footerText" to="/">
//                     OUR MODEL
//                   </Link>
//                 </div>
//                 <div className="col-lg-2 col-md-3">
//                   <Link className=" footerText" to="/">
//                     PORTFOLIOS
//                   </Link>
//                 </div>{" "}
//                 <div className="col-lg-3 col-md-4">
//                   <Link className=" footerText" to="/">
//                     PROJECT DELIVERY
//                   </Link>
//                 </div>
//                 <div className="col-lg-3 col-md-4">
//                   <Link className=" footerText" to="/">
//                     MANAGED SERVICES
//                   </Link>
//                 </div>
//                 <div className="col-lg-2 col-md-2 me-2">
//                   <Link className=" footerText" to="/">
//                     COWORKING
//                   </Link>
//                 </div>
//                 <div className="col-lg-3 col-md-4">
//                   <Link className=" footerText text-nowrap" to="/">
//                     GROWTH-AS-A-SERVICE
//                   </Link>
//                 </div>
//                 <div className="col-lg-1 col-md-1 ">
//                   <Link className=" footerText text-nowrap" to="/">
//                     ABOUT
//                   </Link>
//                 </div>
//                 <div className="col-lg-3 col-md-3">
//                   <Link className=" footerText text-nowrap" to="/">
//                     8THGEARIANS
//                   </Link>
//                 </div>
//                 <div className="col-lg-1 col-md-1">
//                   <Link className=" footerText text-nowrap" to="/">
//                     BLOG
//                   </Link>
//                 </div>
//                 <div className="col-lg-1 col-md-1">
//                   <Link className=" footerText text-nowrap" to="/">
//                     FAQ
//                   </Link>
//                 </div>
//                 <div className="col-lg-1 col-md-2 me-5">
//                   <Link className=" footerText " to="/">
//                     EVENTS
//                   </Link>
//                 </div>
//                 <div className="col-lg-4 col-md-4 ">
//                   <Link className=" footerText " to="/">
//                     info@8thgearpartners.com
//                   </Link>
//                 </div>
//                 <div className="col-lg-4 col-md-5 ">
//                   <Link className=" footerText text-nowrap" to="/">
//                     <b>080 9481 8883 | 080 9481 8882</b>
//                   </Link>
//                 </div>
//                 <div className="col-lg-2 col-md-4 text-nowrap mx-1">
//                   <Link className=" footerText " to="/">
//                     8THGEAR HUB
//                   </Link>
//                 </div>
//                 <div className="col-lg-2 col-md-4">
//                   <Link className=" footerText " to="/">
//                     <FooterIcon />
//                   </Link>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </section>

//         {/* MEDIUM SCREENSTART */}
//         <section className="d-none d-md-block d-lg-none">
//           <div className="my-5">
//             <hr />
//           </div>
//           {/* <div className="row text-end ">
//             <i className="bi bi-arrow-up-square my-2 " id="iconsize2"></i>
//           </div> */}
//           <div className="row">
//             <div className="col-md-3 mb-5 ">
//               <Link to="/">
//                 <img className="footerLogo2 my-2" src={logo} alt="" />
//               </Link>

//               {/* <div className="d-none d-md-block">
//                 <FooterModal />
//                 <hr className="ms-5 hrForBigScreen"></hr>
//               </div> */}
//               <div className="d-flex flex-column justify-content-start">
//                 <Popupmodal />
//                 {/* <hr className="ms-5 hrForBigScreen"></hr> */}
//               </div>
//             </div>

//             <div className="col-md-9">
//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="/">
//                       HOME
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText text-nowrap" to="./our-model">
//                       OUR MODEL
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./portfolio">
//                       PORTFOLIO
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./project-delivery">
//                       PROJECT DELIVERY
//                     </Link>
//                   </li>
//                 </ul>
//                 <hr className=""></hr>
//               </div>
//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./managed-service">
//                       MANAGED SERVICES
//                     </Link>
//                   </li>
//                   {/* <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./coWorking">
//                       COWORKING
//                     </Link>
//                   </li> */}
//                   <li className="mx-4 text-fluid2">
//                     <Link
//                       className=" footerText text-nowrap"
//                       to="./growth-as-a-service"
//                     >
//                       GROWTH AS A SERVICE
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./about">
//                       ABOUT
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               {/*  */}
//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./team">
//                       8THGEARIANS
//                     </Link>
//                   </li>
//                   {/* <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./blog">
//                       BLOG
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./faq">
//                       FAQ
//                     </Link>
//                   </li> */}
//                   <li className="mx-4 text-fluid2">
//                     <Link className=" footerText" to="./events">
//                       EVENTS
//                     </Link>
//                   </li>
//                   <li className="mx-4 text-fluid2">
//                     {/* <Link className=" footerText" to="./8thgear-hub"> */}
//                     <a
//                       href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
//                       target="_blank"
//                       className="addressText"
//                     >
//                       8THGEAR HUB, LAGOS, NIGERIA
//                     </a>
//                     {/* </Link> */}
//                   </li>
//                 </ul>
//               </div>

//               <div className=" row">
//                 <ul className="ul_top_hypers text-end ">
//                   <Link
//                     to="/privacy-policy"
//                     className="mx-2 text-fluid text-nowrap "
//                     style={{ fontSize: "0.8rem" }}
//                   >
//                     Privacy Policy
//                   </Link>
//                   <a
//                     href="mailto:info@8thgearpartners.com"
//                     className="mx-1 text-fluid2  emailLink"
//                   >
//                     info@8thgearpartners.com
//                   </a>

//                   <li className="mx-1 text-fluid2 text-nowrap">
//                     <a
//                       href="tel:2348094818883"
//                       className="footerTextDecoration"
//                     >
//                       {" "}
//                       080 9481 8883
//                     </a>
//                     |{" "}
//                     <a
//                       href="tel:23408094818882"
//                       className="footerTextDecoration"
//                     >
//                       080 9481 8882
//                     </a>
//                   </li>
//                   <li className="mx-1">
//                     <FooterIcon />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* medium screen ends*/}

//         {/* Display on a smaller screen starts  */}

//         <main className="container-fluid    d-md-none d-lg-none d-sm-block d-xs-block">
//           <div className="row">
//             <ul className="text-end pe-5 footerIcon">
//               {/* <li className="iconsize">
//                 <i
//                   className="bi bi-arrow-up-square px-1  iconsize "
//                   style={{ fontSize: 22 }}
//                   id="iconsize"
//                 ></i>
//               </li> */}
//             </ul>
//             {/* <h6 className="text-start pe-5">
//               <FooterIcon />
//             </h6>
//             <h6 className="text-center">
// <<<<<<< HEAD
//               <Popupmodal />
//             </h6>
//           </div>
//           <div className="row d-flex justify-content-center">
//             <div className="row d-flex justify-content-center">
//               <div className="col-sm-4  col-xs-12 ">
// =======
//               <Example />
//             </h6> */}
//           </div>
//           <div className="row d-flex justify-content-center">
//             <div className="row d-flex justify-content-center">
//               <div className="col-sm-4  col-xs-12">
//                 <ul className=" ul_for_footer text-start pe-5 footerIcon  ">
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="/">
//                       HOME
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="./about">
//                       ABOUT
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="./blog">
//                       BLOG
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="./faq">
//                       FAQ
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="./events">
//                       EVENTS
//                     </Link>
//                   </p>
//                   <p className="my-3 text-nowrap">
//                     <Link className=" footerText text-fluid3" to="./our-model">
//                       OUR MODEL
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link className=" footerText  text-fluid3" to="./portfolio">
//                       PORTFOLIO
//                     </Link>
//                   </p>
//                 </ul>
//               </div>
//               <div className="col-sm-4  col-xs-12 pe-5 ">
//                 <ul className=" ul_for_footer text-start">
//                   <p className="my-3"></p>
//                   <p className="my-3">
//                     <Link className=" footerText text-fluid3" to="./team">
//                       GROWTH AS A SERVICE
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link
//                       className=" footerText text-fluid3"
//                       to="./project-delivery"
//                     >
//                       PROJECT DELIVERY
//                     </Link>
//                   </p>
//                   <p className="my-3">
//                     <Link
//                       className=" footerText text-fluid3"
//                       to="./managed-service"
//                     >
//                       MANAGED SERVICES
//                     </Link>
//                   </p>
//                   <a
//                     href="mailto:info@8thgearpartners.com"
//                     className="my-3  text-nowrap  emailLink text-fluid3"
//                   >
//                     info@8thgearpartners.com
//                   </a>
//                   <p className="my-3 text-nowrap text-fluid3">
//                     <a
//                       href="tel:2348094818883"
//                       className="footerTextDecoration"
//                     >
//                       {" "}
//                       080 9481 8883
//                     </a>
//                     <br></br>{" "}
//                     <a
//                       href="tel:23408094818882"
//                       className="footerTextDecoration"
//                     >
//                       080 9481 8882
//                     </a>
//                   </p>
//                 </ul>
//               </div>

//               <div className="col-5"></div>
//             </div>
//             <div className="row">
//               <div className="col text-center">
//                 <Link to="/">
//                   <img className="" src={logo} alt="" style={{ width: 60 }} />
//                 </Link>

//                 <p className="my-3">
//                   {/* <Link className=" footerText text-fluid3" to="/"> */}
//                   <a
//                     href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
//                     target="_blank"
//                     className="addressText"
//                   >
//                     8THGEAR HUB, LAGOS, NIGERIA
//                   </a>
//                   {/* </Link> */}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </main>
//         {/* small screen ends */}
//       </footer>
//     </>
//   );
// };

export const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4 col-sm-12 d-none d-md-block d-lg-block">
          <Link to="/">
            <img className="footerLogo" src={logo} alt="" />
          </Link>
          {/* <div className=""> */}
          <Popupmodal />
          {/* <hr className="hrForBigScreen"></hr> */}
          {/* </div> */}
        </div>

        {/* second side of the footer */}

        <div className="col-md-8 col-sm-12  text-md-center ">
          <div className="d-md-flex justify-content-md-around  align-items-start ">
            <Link className=" footerText text-fluid3 d-block " to="/">
              HOME
              <GoToTop />
            </Link>
            <Link className=" footerText text-fluid3 d-block " to="./about">
              ABOUT
            </Link>
            <Link className=" footerText text-fluid3 d-block" to="./our-model">
              OUR MODEL
            </Link>
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
        <div className="col-md-10 offset-md-2">
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
      <form class="d-flex mt-3" role="search" onSubmit={handleSubmit}>
        <input
          class="form-control me-2"
          type="search"
          placeholder="EMAIL ADDRESS"
          aria-label="Search"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button class="btn subscributton" type="submit">
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
              <h6 className=" text-nowrap signupText">
                SIGN UP FOR NEWSLETTER
              </h6>
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
      <div className="">
        <SubscribeForm />
      </div>
    </>
  );
}

export const FooterIcon = () => {
  return (
    <>
      <nav className="footer__icons remove__ml listStyling d-flex justify-content-md-center justify-content-sm-start">
        <a href="https://www.facebook.com/8thgearpartners" target="_blank">
          <i className="bi bi-facebook me-2 text-dark footer__icons"></i>
        </a>

        <a href="https://www.instagram.com/8thgearpartners/" target="_blank">
          <i className="bi bi-instagram me-2 text-dark"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/8thgearpartners/"
          target="_blank"
        >
          <i className="bi bi-linkedin me-2 text-dark"></i>
        </a>

        <a
          href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
          target="_blank"
        >
          <i className="bi bi-twitter me-2 text-dark"></i>
        </a>

        <a href="mailto:info@8thgearpartners.com" target="_blank">
          <i class="bi bi-at text-dark"></i>
        </a>
      </nav>
    </>
  );
};

// <main className="container-fluid    d-md-none d-lg-none d-sm-block d-xs-block">
//   <div className="row">
//     <ul className="text-end pe-5 footerIcon">
//       <li className="iconsize">
//         <i
//           className="bi bi-arrow-up-square px-1  iconsize "
//           style={{ fontSize: 22 }}
//           id="iconsize"
//         ></i>
//       </li>
//     </ul>
//      <h6 className="text-start pe-5">
//       <FooterIcon />
//     </h6>
//     <h6 className="text-center">

//       <Popupmodal />
//     </h6>
//   </div>
//   <div className="row d-flex justify-content-center">
//     <div className="row d-flex justify-content-center">
//       <div className="col-sm-4  col-xs-12 ">

//       <Example />
//     </h6>
//   </div>
//   <div className="row d-flex justify-content-center">
//     <div className="row d-flex justify-content-center">
//       <div className="col-sm-4  col-xs-12">
//         <ul className=" ul_for_footer text-start pe-5 footerIcon  ">
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="/">
//               HOME
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="./about">
//               ABOUT
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="./blog">
//               BLOG
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="./faq">
//               FAQ
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="./events">
//               EVENTS
//             </Link>
//           </p>
//           <p className="my-3 text-nowrap">
//             <Link className=" footerText text-fluid3" to="./our-model">
//               OUR MODEL
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link className=" footerText  text-fluid3" to="./portfolio">
//               PORTFOLIO
//             </Link>
//           </p>
//         </ul>
//       </div>
//       <div className="col-sm-4  col-xs-12 pe-5 ">
//         <ul className=" ul_for_footer text-start">
//           <p className="my-3"></p>
//           <p className="my-3">
//             <Link className=" footerText text-fluid3" to="./team">
//               GROWTH AS A SERVICE
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link
//               className=" footerText text-fluid3"
//               to="./project-delivery"
//             >
//               PROJECT DELIVERY
//             </Link>
//           </p>
//           <p className="my-3">
//             <Link
//               className=" footerText text-fluid3"
//               to="./managed-service"
//             >
//               MANAGED SERVICES
//             </Link>
//           </p>
//           <a
//             href="mailto:info@8thgearpartners.com"
//             className="my-3  text-nowrap  emailLink text-fluid3"
//           >
//             info@8thgearpartners.com
//           </a>
//           <p className="my-3 text-nowrap text-fluid3">
//             <a
//               href="tel:2348094818883"
//               className="footerTextDecoration"
//             >

//               080 9481 8883
//             </a>
//             <br></br>
//             <a
//               href="tel:23408094818882"
//               className="footerTextDecoration"
//             >
//               080 9481 8882
//             </a>
//           </p>
//         </ul>
//       </div>

//       <div className="col-5"></div>
//     </div>
//     <div className="row">
//       <div className="col text-center">
//         <Link to="/">
//           <img className="" src={logo} alt="" style={{ width: 60 }} />
//         </Link>

//         <p className="my-3">
//           {/* <Link className=" footerText text-fluid3" to="/"> */}
//           <a
//             href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
//             target="_blank"
//             className="addressText"
//           >
//             8THGEAR HUB, LAGOS, NIGERIA
//           </a>
//           {/* </Link> */}
//         </p>
//       </div>
//     </div>
//   </div>
// </main>
