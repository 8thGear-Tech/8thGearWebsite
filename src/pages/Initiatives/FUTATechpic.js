import { Navbar22 } from "../../components/Navbar";
import { FUTATechpicHero } from "../../components/Hero/ImageandTextHero";

//images
import linkedinoptimization from "../../assets/images/initiatives/futatechpic/linkedinoptimization.png";
import cvwriting from "../../assets/images/initiatives/futatechpic/cvwriting.png";
import interviewacing from "../../assets/images/initiatives/futatechpic/interviewacing.png";

import { RegisterBtn } from "../../components/Buttons/ProjectDeliveryBtn";

const FUTATechpic = () => {
  return (
    <>
      <Navbar22 />
      <FUTATechpicHero />
      <AboutFUTATechpic />
      <CVWriting />
      <LinkedInOptimization />
      <InterviewAcing />
    </>
  );
};

const AboutFUTATechpic = () => {
  return (
    <div className="container pt-5 px-4">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <p className="">
        A graduate with little or no employability skills is like putting a
        brand-new engine into a rickety old car. According to the India skills
        report 2021, one out of two graduates is not ready for the job market
        due to the lack of required employability skills. Training holds the
        first three Saturdays in Feb by 10 am.
      </p>
      <ul className="">
        <li className="list-font-weight fontFamily">
          Date : 4th | 11th | 18th Feb. 2023
        </li>
        <li className="fontFamily">Mode: Virtual</li>
        <li className="fontFamily">
          Inquiries:{" "}
          <ul>
            <li>
              <div className="d-flex">
                {" "}
                <p className="m-0 p-0 fontFamily"> Email:</p>
                <a
                  href="mailto:techpic.futa@8thgearpartners.com"
                  className="footerText text-decoration-underline fontWeight mx-1 fontFamily"
                >
                  techpic.futa@8thgearpartners.com
                </a>
              </div>
            </li>
            <li className="">
              <div className="d-flex">
                <p className="m-0 p-0 fontFamily"> Phone Number: </p>
                <a
                  href="tel:2348085081566"
                  className="footerText text-decoration-underline fontWeight mx-1 fontFamily"
                >
                  08085081566
                </a>
                <p>or</p>
                <a
                  href="tel:2348131621902"
                  className="footerText text-decoration-underline fontWeight mx-1"
                >
                  08131621902
                </a>
              </div>

              {/* <a href="tel:2348085081566" className="nav-link">
                08085081566
              </a> */}
            </li>
          </ul>
        </li>
        {/* <li>Inquiries: techpic.futa@8thgearpartners.com</li> */}
      </ul>
      {/* <p>
        Attendance is free but registration is compulsory. Do click{" "}
        <a
          href="https://bit.ly/8thGearfoundersmeetup2022"
          target="_blank"
          className="textLinkColor"
        >
          here
        </a>{" "}
        to indicate your interest.
      </p> */}
      <p className="my-3"></p>
    </div>
  );
};
const CVWriting = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4 pt-4">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <img
            src={cvwriting}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            {/* <SalesPageSignInButton /> */}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 pt-lg-3 pt-md-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            CV Writing
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            CV Writing
            <br />
          </h3>
          <p className="p-0 m-0 ">
            {" "}
            Write a professional CV that stands you out
          </p>
          <p className="p-0 m-0 ">
            <b>Date: </b>Feb 4th
          </p>
          <p className="p-0 m-0 ">
            <b>Time:</b> 10 am - 11:30 am
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            {/* <SalesPageSignInButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
const LinkedInOptimization = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4 pt-5">
        <div className="col-lg-6 col-md-7 col-sm-12 py-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            LinkedIn Optimisation
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            LinkedIn Optimisation
            <br />
          </h3>
          <p className="p-0 m-0">
            Optimize your LinkedIn page for recruiters to easily find you
          </p>
          <p className="p-0 m-0">
            {" "}
            <b>Date: </b> Feb 11th
          </p>
          <p className="p-0 m-0">
            {" "}
            <b>Time:</b> 10 am - 11:30 am
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={linkedinoptimization}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            {/* <SalesPageSignInButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const InterviewAcing = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center d-flex justify-content-center justify-content-evenly px-4 py-5">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <img
            src={interviewacing}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            {/* <SalesPageSignInButton /> */}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 pt-lg-3 pt-md-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Interview Acing
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Interview Acing
            <br />
          </h3>
          <p className="p-0 m-0">
            <b>Date: </b>Feb 18th
          </p>
          <p className="p-0 m-0">
            {" "}
            <b>Time:</b> 10 am - 11:30 am
          </p>
        </div>{" "}
        {/* <div className="mt-5 text-center">
          <RegisterBtn />
        </div> */}
      </div>
    </div>
  );
};

export default FUTATechpic;
