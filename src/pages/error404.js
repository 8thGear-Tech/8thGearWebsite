// External import
import React from "react";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
import { TwitterIcon } from "../components/Icons";
import { HomeBtn } from "../components/Buttons/ContactBtn";
// import { ContactBtn } from "../components/Buttons/ContactBtn";
import { Link } from "react-router-dom";

// Images
import img404 from "../assets/images/404.png";

const Error404 = () => {
  return (
    <div className="row g-0">
      <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 g-4">
        <div className="card-body  col-md-6 col-lg-6 col-sm-6 col-xs-12 g-4 m-auto d-flex justify-content-center d-sm-none">
          <h3 className="">
            <strong>UH OH! Page Not Found</strong>
          </h3>
        </div>
        <img className="card-img-top" src={img404} alt="error_page" />
      </div>

      <div className="card-body  container col-md-6 col-lg-6 col-sm-6 col-xs-12 g-2 m-auto p-3">
        <h3 className=" d-none d-sm-block">
          <strong>UH OH! Page Not Found</strong>
        </h3>
        <p className="d-flex justify-content-center">
          The page you are looking for does not exist. Please click on the
          buttons below to either go back to the homepage or contact us
        </p>

        <div className=" d-block justify-content-start my-4">
          <div className=" d-flex justify-content-start mb-4 d-block">
            <Link to="/">
              <HomeBtn />
            </Link>
            <a href="mailto:info@8thgearpartners.com">
              <div className="ms-3">
                {/* <ContactBtn /> */}
              </div>
            </a>
          </div>

          {/* <div className="d-flex justify-content-start  herotextColored ">
            <a
              href="https://www.facebook.com/8thgearpartners"
              className="herotextColored d-flex justify-content-end px-2 pb-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/8thgearpartners/"
              className="herotextColored d-flex justify-content-end px-2 pb-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/8thgearpartners/"
              className="herotextColored d-flex justify-content-end px-2 pb-3"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
              className="herotextColored d-flex justify-content-end px-2 pb-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <TwitterIcon />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Error404;
