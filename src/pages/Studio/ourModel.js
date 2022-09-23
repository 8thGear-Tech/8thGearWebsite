import { Link } from "react-router-dom";
import { WhatWeDoIcon } from "../../components/Icons";
import steponeicon from "../../assets/images/steponeicon.png";
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
      <div className="row d-flex justify-content-center ">
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
              <p className="card-text">Data Science</p>
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
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding. The Venture Studio model
                for entrepreneurship, combining comapny building with venture
                funding.The Venture Studio model for entrepreneurship, combining
                comapny building with venture funding.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center my-4 mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <img src={steponeicon} className="img-fluid" alt="" loading="" />
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
        <div className="row align-items-center justify-content-center my-4 mx-3">
          {" "}
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">02- Validation</h4>
            <h3 className="">
              Speaking with potential customers from the beginning to confirm
              assumptions.
            </h3>
            <p>
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining comapny building with venture
              funding.The Venture Studio model for entrepreneurship,
            </p>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <img src={steponeicon} className="img-fluid" alt="" loading="" />
          </div>
        </div>
        <div className="row align-items-center justify-content-center my-4 mx-3">
          {" "}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <img src={steponeicon} className="img-fluid" alt="" loading="" />
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
        <div className="row align-items-center justify-content-center my-4 mx-3">
          {" "}
          <div className="col-lg-6 col-md-7 col-sm-10">
            <h4 className="">Step 4</h4>
            <h3 className="">Taking real-time market lessons</h3>
            <p>
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining comapny building with venture
              funding.The Venture Studio model for entrepreneurship,
            </p>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
            <img src={steponeicon} className="img-fluid" alt="" loading="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModelPage;
