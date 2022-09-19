import * as React from "react";
import UnderconstructionNavbar from "../components/AllCards/UnderconstructionNavbar";
// import ConstructionPage from "../assets/images/Constructionpage.png";
import ConstructionPage from "../assets/images/Alternativeconstructionpage.png";
import Timer from "../components/AllCards/Timer";
// import {
//   EventsViewMoreBtn,
//   GetYourTicketBtn,
//   LetUsKnowBtn,
// } from "../components/Buttons/EventsBtn";

const MainPage = () => {
  return (
    <>
      <div className=" constructionpage">
        <UnderconstructionNavbar />
        <Timer />
        <div className="d-flex justify-content-center col-sm-7 col-md-7 mt-5">
          <h3 className="backsoon"> WE'LL BE BACK SOON</h3>
        </div>
        {/* <article className="container-fluid">
          <div className="row d-flex justify-content-center px-5">
            <div className="col-lg-5 col-md-6">
              <h5 className="mt-5 ">
                We are a venture studio with a strong passion for partnering
                with founders to fathom global solutions that assure a better
                future.
              </h5>
            </div>

            <div className="col-lg-7 col-md-6 img-fluid">
              <img src={ConstructionPage} alt="construction" />
            </div>
          </div>
        </article> */}
        <div className="px-4 container-fluid pt-3 pb-4">
          {/* <Navbar /> */}
          <div className="row align-items-center justify-content-center mt-4">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <h5 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
                We are a venture studio with a strong passion for partnering
                with founders to fathom global solutions that assure a better
                future.&nbsp;
              </h5>
              <h5 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none">
                We are a venture studio with a strong passion for partnering
                with founders to fathom global solutions that assure a better
                future.&nbsp;
              </h5>
              {/* <p className="herotextblack d-flex">
                We are a venture studio with a strong passion for partnering
                with founders to fathom global solutions that assure a better
                future.
              </p> */}
              {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
                <GetStartedButton />
              </div> */}
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <img
                src={ConstructionPage}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
              {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
                <GetStartedButton />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-3">
        <div className="d-flex justify-content-center">
          <a href="mailto:info@8thgearpartners.com">
            <p>
              <b>info@8thgearpartners.com</b>
            </p>
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            <b>080 9481 8883 | 080 9481 8882</b>{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default MainPage;
