import React from "react";
import { useState } from "react";

// import footerline2 from "./../assets/images/footerline2.jpg";
import logo from "./../assets/images/logo.png";
import footerLine from "./../assets/images/footerLine.png";

const Footer = () => {
  return (
    <footer>
      <section className="d-none d-md-block d-lg-block d-xl-block">
        <div className="my-3">
          <pr></pr>
          <img src={footerLine} alt="img" className="md-footer-line" />
        </div>
        <div className="row container-fluid ">
          <div className="col-md-3 mb-5 ">
            <img className="w-25 my-4" src={logo} alt="" />
            <h6 className="text-fluid">SIGN UP FOR NEWSLETTER</h6>
            <hr className="newsLetterUnderline " />
          </div>

          <div className="col-md-9">
            <div className="row text-end">
              <i className="bi bi-arrow-up-square " id="iconsize"></i>
            </div>
            <div className=" row">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">HOME</li>
                <li className="mx-4  text-fluid">OUR MODEL</li>
                <li className="mx-4 text-fluid">PORTFOLIO</li>
                <li className="mx-4 text-fluid">PROJECT DELIVERY</li>
                <li className="mx-4 text-fluid">MANAGED SERVICES</li>
              </ul>
              <hr className="" style={{ width: "" }}></hr>
            </div>
            <div className=" row">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">COWORKING</li>
                <li className="mx-4 text-center text-fluid text-nowrap">
                  GROWTH-AS-A-SERVICE
                </li>
                <li className="mx-4 text-fluid">ABOUT</li>
                <li className="mx-4 text-fluid">8THGEARIANS</li>
                <li className="mx-4 text-fluid">BLOG</li>
                <li className="mx-4 text-fluid">FAG</li>
                <li className="mx-4 text-fluid">EVENTS</li>
              </ul>
            </div>
            <div className=" row">
              <ul className="ul_top_hypers text-end ">
                <li className="mx-4 text-fluid">info@8thgearpartners.com</li>
                <li className="mx-4 text-fluid text-nowrap  ">
                  <i class="bi bi-facebook mx-2 text-fluid"></i>
                  <i class="bi bi-instagram mx-2 text-fluid"></i>
                  <i class="bi bi-linkedin mx-2 text-fluid"></i>
                  <i class="bi bi-twitter mx-2 text-fluid"></i>
                  <i class="bi bi-at mx-2 text-fluid1"></i>
                </li>
                <li className="mx-4 text-fluid text-nowrap">
                  080 9481 8883 | 080 9481 8882
                </li>
                <li className="mx-4 text-fluid text-nowrap">8thGear Hub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Display on a smaller screen  */}

      <main className="container-fluid    d-md-none d-lg-none d-sm-block d-xs-block">
        <div className="row my-3">
          <img src={footerLine} alt="" />
        </div>
        <div className="row">
          <ul className="text-end">
            <li>
              {" "}
              <i
                className="bi bi-arrow-up-square  "
                style={{ fontSize: 22 }}
                id="iconsize"
              ></i>
            </li>
          </ul>

          <ul className="mobile-icon text-center">
            <li className="mx-4  text-nowrap">
              <i class="bi bi-facebook mx-2 "></i>
              <i class="bi bi-instagram mx-2 "></i>
              <i class="bi bi-linkedin mx-2 "></i>
              <i class="bi bi-twitter mx-2 "></i>
              <i class="bi bi-at mx-2 " style={{ fontSize: 22 }}></i>
            </li>
          </ul>

          <h6 className="text-center">SIGN UP FOR NEWSLETTER</h6>
        </div>

        <div className="row d-flex justify-content-center">
          <SubscribeForm />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5 text-center ">
            <p>
              The 8thGear Space, 11b Colin Onabule Crescent, Diamond Estate Off
              CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria<br></br>
              <b>
                info@8thgearpartners.com <br></br>080 9481 8883 <br></br>080
                9481 8882
              </b>
            </p>
          </div>
          <div className="row ">
            <ul className="text-center ul_for_footer">
              <p className="my-3">HOME</p>
              <p className="my-3">STUDIO</p>
              <p className="my-3">PROJECT DELIVERY</p>
              <p className="my-3">GROWTH AS A SERVICE</p>
              <p className="my-3">INSIGHT</p>
              <p className="my-3">EVENT</p>
            </ul>
          </div>
          <div className="row">
            <div className="col text-center">
              <img className="" src={logo} alt="" style={{ width: 60 }} />
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
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
      <form className="form  w-50 text-center " onSubmit={handleSubmit}>
        <article className="form-control my-2 text-start g-3">
          <label htmlFor="email"> </label>
          <input
            style={({ fontSize: 14 }, { width: 300 })}
            className="border-0 "
            type="text"
            placeholder="EMAIL ADDRESS"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </article>

        <div className="text-center">
          <button className="btn ">Subscribe</button>
        </div>
      </form>
    </>
  );
};
