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
        <div className="d-flex justify-content-center col-sm-7col-md-7 mt-5">
          <h3 className="backsoon"> WE'LL BE BACK SOON</h3>
        </div>
        <article className="container-fluid">
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
        </article>
      </div>

      <div className=" mt-3">
        <div className=" d-flex justify-content-center">
          <h5>info@8thgearpartners.com</h5>
        </div>
        <div className=" d-flex justify-content-center">
          <h5>080 9481 8883 | 080 9481 8882 </h5>
        </div>
      </div>
    </>
  );
};
export default MainPage;
