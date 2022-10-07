import { Link } from "react-router-dom";
import { WhatWeDoIcon } from "../../components/Icons";
import steponeicon from "../../assets/images/steponeicon.png";
import { IdeationIcon } from "../../components/Icons";
import { ValidationIcon } from "../../components/Icons";
import { CreationIcon } from "../../components/Icons";
import { SpinOutIcon } from "../../components/Icons";
import { ScaleUpIcon } from "../../components/Icons";

import { OurModelTractions } from "../../components/Tractions";
import { Navbar19 } from "../../components/Navbar";
import { OurModelHero } from "../../components/Hero/ImageandTextHero";

const OurModelPage = () => {
  return (
    <>
      <Navbar19 />
      <OurModelHero />
      <WhatWeDo />
      <HowWeDoIt />
      <OurModelTractions />
    </>
  );
};
const WhatWeDo = () => {
  return (
    <div className="container-fluid px-4 py-5 WhatWeDoBg">
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 m-auto ">
          {/* <div className="col d-lg-flex d-md-flex"> */}
          {/* <div className="col"> */}
          {/* <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i> */}
          <h3 className="">What We Do</h3>
          <p>
            We firmly believe in creating enterprises with a sustainable
            business strategy at our venture studio. At the beginning of the
            business and throughout its existence, we place a high priority on
            speaking with potential clients. Years of failing fast and failing
            forward to create thriving businesses have helped us identify the
            conditions required to increase the chances of an idea thriving. Our
            in-house team of experts is on standby ready to turn ideas into
            viable businesses.
          </p>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text"> Concept Validation </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Market Research</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Product Management</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Go-To-Market</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Visual & UX Design</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Engineering </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Business Analytics</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Company Formation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text"> Finance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text">Operations</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text"> Legal & HR</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <div className="d-flex align-items-center">
            <WhatWeDoIcon />
            <div className="card-body ms-3">
              <p className="card-text"> Recruiting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HowWeDoIt = () => {
  return (
    <div className="container-fluid px-4 py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex">
            <div className="col">
              <h3 className="">How We Do It</h3>
              <p>
                A business's development is not a simple stroll in the park; it
                requires a great deal of grit, guts, and resources. It is a
                voyage that should not be attempted alone. That is why our team
                of professionals, who have traveled this path before, has
                devised a mechanism that works effectively to help ideas scale.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <IdeationIcon />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">01- Ideation</h4>
            <h3 className="">The idea could be ours or it could be yours.</h3>
            <p>
              When we come across a problem that we think is intriguing and
              significant, we dive right in, looking for long-term solutions.
              The idea could have come from us or from somebody else. However,
              when we sense a huge potential, we immediately get to work.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <ValidationIcon />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">02- Validation</h4>
            <h3 className="">
              Speaking with potential customers from the beginning to confirm
              assumptions.
            </h3>
            <p>
              To confirm that the problem is actually a problem for the
              identified customer segment and to learn how they want it solved,
              assumptions are tested and validated by regularly engaging with
              potential customers.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <CreationIcon />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">03- Creation</h4>
            <h3 className="">Fail fast Fail forward</h3>
            <p>
              We don't spend decades perfecting an MVP; we deploy as soon as
              possible. Taking real-time market lessons and making adjustments
              on the go. We will keep working on the idea, refining and
              adjusting it constantly while keeping the customers at the heart
              of our decisions.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <SpinOutIcon />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">04- Spinout</h4>
            <h3 className="">We spin out once proof of concept is achieved.</h3>
            <p>
              Once we have a small group of raving fans who are willing to pay
              and spread the word through referrals. It is past time to turn
              these concepts into stand-alone enterprises. Our in-house legal,
              branding, and human resources experts get to work right away,
              spinning them off as distinct firms with a strong commercial
              framework.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mx-3 pt-5 pb-5">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <ScaleUpIcon />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">05- Scaleup</h4>
            <h3 className="">Scale the Fundamentals </h3>
            <p>
              We allow founders focus on the core of their value offerings.
              Ensuring that as these businesses grow and scale the team does not
              lose sight of the fundamentals while we make sure everyother part
              of the business is working as it should
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModelPage;
