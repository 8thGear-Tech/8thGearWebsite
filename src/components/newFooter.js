//images
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

export const NewFooter = () => {
  return (
    <>
      <div className="container-fluid px-lg-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-4 border-bottom">
          {/* <div></div> */}
          <div className="d-flex col-lg-4">
            {" "}
            <Link to="/">
              {" "}
              <img className="" src={logo} width={60} height={70} alt="" />
            </Link>
            {/* <p class=" col-md-6 mb-0 text-muted">&copy; 2022 Company, Inc</p> */}
          </div>
          <div className="d-lg-flex justify-content-end col-lg-8 col-md-12">
            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/our-model"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    OUR MODEL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    BLOG
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/events"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    EVENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/team"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    8THGEARIANS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/coWorking"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    COWORKING
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          {/* <div></div> */}
          {/* <div className="d-flex col-lg-4">
            {" "}
            <p className=" col-md-6 mb-0 text-muted">&copy; 2022 Company, Inc</p>
          </div> */}
          <div className="d-lg-flex justify-content-end col-lg-12 col-md-12">
            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <Link
                    to="/growth-as-a-service"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    GROWTH AS A SERVICE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/project-delivery"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    PROJECT DELIVERY
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    MANAGED SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    8THGEAR HUB, LAGOS, NIGERIA
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="">
              {" "}
              <ul className="nav">
                {/* <li class="nav-item">
                  <a
                    href="#"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    PROJECT DELIVERY
                  </a>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="/managed-services"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    MANAGED SERVICES
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a
                    href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                    target="_blank"
                    className="addressText d-block text-fluid3"
                  >
                    8THGEAR HUB, LAGOS, NIGERIA
                  </a> */}
                  <a
                    href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                    className="nav-link px-2 footerText text-decoration-underline"
                    style={{ fontSize: "0.8rem", color: "#821e6b" }}
                  >
                    <b>8THGEAR HUB, LAGOS, NIGERIA</b>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    COWORKING
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-lg-flex justify-content-end col-lg-12 col-md-12">
            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <a
                    href="/privacy-policy"
                    className="nav-link px-2 footerText internalLink"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="mailto:info@8thgearpartners.com"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    info@8thgearpartners.com
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="tel:2348094818883"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    080 9481 8883
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="tel:23408094818882"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    080 9481 8883
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/8thgearhub"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-facebook text-dark footer__icons"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/8thgearhub/"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-instagram text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/company/8thgearhub/"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-linkedin text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-twitter text-dark"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-lg-flex justify-content-end col-lg-12 col-md-12">
            <div className="">
              {" "}
              <ul className="nav">
                {/* <li className="nav-item">
                  <a
                    href="/privacy-policy"
                    className="nav-link px-2 footerText internalLink"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Privacy Policy
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="">
              {" "}
              <ul className="nav">
                {/* <li className="nav-item">
                  <a
                    href="https://www.facebook.com/8thgearhub"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-facebook text-dark footer__icons"></i>
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    href="https://www.instagram.com/8thgearhub/"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-instagram text-dark"></i>
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/company/8thgearhub/"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-linkedin text-dark"></i>
                  </a>
                </li> */}
                <li className="nav-item">
                  {/* <a
                    href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-twitter text-dark"></i>
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* <footer className="d-flex flex-wrap justify-content-end align-items-center">

          <ul className="nav col-md-8 justify-content-end">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                GROWTH AS A SERVICE
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                PROJECT DELIVERY
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                MANAGED SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                8THGEAR HUB, LAGOS, NIGERIA
              </a>
            </li>
          </ul>
        </footer> */}
        {/* <footer className="d-flex flex-wrap justify-content-end py-2 align-items-center">
          <ul className="nav col-md-8 justify-content-end">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                info@8thgearpartners.com
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                080 9481 8883
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                080 9481 8882
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                <i className="bi bi-facebook text-dark footer__icons"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                <i className="bi bi-instagram text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                <i className="bi bi-linkedin text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                <i className="bi bi-twitter text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                <i className="bi bi-at text-dark"></i>
              </a>
            </li>
          </ul>
        </footer> */}
      </div>
    </>
  );
};
