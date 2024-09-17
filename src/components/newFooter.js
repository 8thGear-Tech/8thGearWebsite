//images
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../sassfiles/components/_footer.scss";

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
            {/* <p className=" col-md-6 mb-0 text-muted">&copy; 2022 Company, Inc</p> */}
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
                    to="/talent-placement"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    TALENT PLACEMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/coworking"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    COWORKING
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/growth-advisory"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    GROWTH ADVISORY
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link
                    to="/builders-collective"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    BUILDERS COLLECTIVE
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              {" "}
              <ul className="nav">
                <li className="nav-item">
                  <Link
                    to="/projects"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    PROJECTS
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
                    to="/venture-studio"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    VENTURE STUDIO
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
                    to="/events"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    EVENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/resources"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    RESOURCES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/FAQ"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://chat.whatsapp.com/FaFa7y2RJRV0PU6ycOaGNq"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    JOIN THE 8THGEAR COMMUNITY
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
                {/* <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    PROJECT DELIVERY
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    to="/hub-services"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    HUB SERVICES
                  </Link>
                </li> */}
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
                    target="_blank"
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
                    className="nav-link px-2 footerText internalLink"
                    style={{ fontSize: "0.8rem", color: "#821e6b" }}
                  >
                    Copyright &copy; 2023
                  </a>
                </li>
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
                    href="/terms-and-conditions"
                    className="nav-link px-2 footerText internalLink"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/refund-policy"
                    className="nav-link px-2 footerText internalLink"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Refund Policy
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
                    href="tel:2348094818882"
                    className="nav-link px-2 footerText"
                    style={{ fontSize: "0.8rem" }}
                  >
                    080 9481 8882
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
                    target="_blank"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-facebook text-dark footer__icons"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/8thgearhub/"
                    target="_blank"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-instagram text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/company/8thgearhub/"
                    target="_blank"
                    className="nav-link px-2 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i className="bi bi-linkedin text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg"
                    target="_blank"
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

export const FooterNew = () => {
  return (
    <div className="container-fluid mt-0 py-2 ">
      <div className="d-flex flex-column">
        {/* BRAND */}
        <div className="align-items-center py-3 m-auto">
          <Link to="/">
            {" "}
            <img className="" src={logo} width={60} height={70} alt="" />
          </Link>
        </div>
        {/* Nav-links */}
        <div className="m-auto w-75 pt-3 pb-1 d-flex justify-content-center footer-links">
          <ul className="d-flex gap-1 flex-row align-items-center justify-content-evenly flex-wrap w-75 footer-line md:justify-content center sm:px-0 ">
            {/* HOME */}
            <li className="nav-item list-unstyled">
              <Link
                to="/"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                HOME
              </Link>
            </li>
            {/* TALENT PLACEMENT */}
            <li className="nav-item list-unstyled">
              <Link
                to="/talent-placement"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                TALENT PLACEMENT
              </Link>
            </li>
            {/* COWORKING */}
            <li className="nav-item list-unstyled">
              <Link
                to="/coworking"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                CO-WORKING
              </Link>
            </li>
            {/* GROWTH-ADVISORY */}
            <li className="nav-item list-unstyled">
              <Link
                to="/growth-as-a-service"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                GROWTH ADVISORY
              </Link>
            </li>
            {/* YOUR COMMUNITY */}
            <li className="nav-item list-unstyled">
              {/* COMMUNITY PAGE NEEDED */}
              <Link
                to="#"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                YOUR COMMUNITY
              </Link>
            </li>
            {/* PROJECTS */}

            {/* VENTURE STUDIO */}
            <li className="nav-item list-unstyled">
              {/* hub service pagge needed */}
              <Link
                to="/hub-services"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item list-unstyled">
              {/* hub service pagge needed */}
              <Link
                to="/hub-services"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                VENTURE STUDIO
              </Link>
            </li>
            {/* ABOUT US */}
            <li className="nav-item list-unstyled">
              <Link
                to="/about"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                ABOUT US
              </Link>
            </li>
            {/* EVENTS */}
            <li className="nav-item list-unstyled">
              <Link
                to="/events"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                EVENTS
              </Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link
                to="/events"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                RESOURCES
              </Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link
                to="/events"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item list-unstyled">
              <Link
                to="/events"
                className="nav-link px-2 footerText"
                style={{ fontSize: "0.8rem" }}
              >
                YOUR COMMUNITY
              </Link>
            </li>
          </ul>
        </div>
        {/* LAST ROW */}
        <div className="d-flex flex-row flex-wrap gap-2 justify-content-center">
          <p> info@8thgearpartners.com</p>
          {/* Social Links */}
          <div>
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
          <p className="px-1">080 9481 8883 | 080 9481 8882</p>
          <p className="px-1">8thGear Hub</p>
        </div>
      </div>
    </div>
  );
};
