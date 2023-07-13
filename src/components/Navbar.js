import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";
import { JointheStudioBtn } from "./Buttons/ContactBtn";
import text from "../data/navbar.json";

const NavBar = (props) => {
  const { heading } = props;
  return (
    <>
      <section className="  d-lg-block d-md-block d-sm-block d-xs-none">
        <div className="containter-fluid NavBar">
          <div className="d-flex ">
            <Link to="/">
              <img
                src={logos}
                alt=""
                width={60}
                height={70}
                className=" mx-4 "
              />
            </Link>
            {/* align-text-top */}
            <h5 className="mt-4 ">{heading}</h5>
            <div className="ms-auto mb-2 mb-lg-0 mx-3 mt-1">
              <a
                className=" "
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="hamburger"
                aria-controls="offcanvasExample"
              >
                <div className="">
                  <i
                    className="bi bi-list text-dark"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <a
            data-w-id="4a4302b6-6981-f1fa-9bee-92d7404c033a"
            href="/"
            aria-current="page"
            className="side-nav-link-home w--current text-dark h6 mx-2"
            style={{ textDecoration: "none" }}
          >
            ← Home
          </a>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body h5">
          <div>
            <a
              className=" nav-link dropdown-toggle mx-3"
              type="button"
              id="navbarDarkdropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Venture Studio
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/our-model">
                  Our Model
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <br />
          {/* <div>
            <Link
              className=" nav-link  mx-3"
              type="button"
              aria-expanded="false"
              to="/coworking"
            >
              Coworking
            </Link>
          </div>
          <br />
          <div>
            <Link
              className=" nav-link  mx-3"
              type="button"
              aria-expanded="false"
              to="/"
            >
              Talent Placement
            </Link>
          </div>
          <br />
          <div>
            <Link
              className=" nav-link  mx-3"
              type="button"
              aria-expanded="false"
              to="/"
            >
              Tech Marketplace
            </Link>
          </div> */}
          {/* <br /> */}
          <div>
            <a
              className=" nav-link dropdown-toggle mx-3"
              type="button"
              id="navbarDarkdropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/coworking">
                  Coworking
                </Link>
              </li>
              {/* <li>
                <Link className="dropdown-item" to="/hub-services">
                  Talent Placement
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/growth-as-a-service">
                  Tech Marketplace
                </Link>
              </li> */}
              <li>
                <Link className="dropdown-item" to="/hub-services">
                  Hub Services
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/growth-as-a-service">
                  Growth-as-a-Service
                </Link>
              </li>
            </ul>
          </div>
          <br />{" "}
          <div>
            <Link
              className=" nav-link  mx-3"
              type="button"
              aria-expanded="false"
              to="/project-delivery"
            >
              Project Delivery
            </Link>
          </div>
          <br />
          <div>
            <a
              className=" nav-link dropdown-toggle mx-3"
              type="button"
              id="navbarDarkdropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Initiatives
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/FUTA-techpic">
                  FUTA-techpic
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <div>
            <a
              className=" nav-link dropdown-toggle mx-3"
              type="button"
              id="navbarDarkdropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Who we are
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/team">
                  8thGearians
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <div>
            <Link
              className=" nav-link  mx-3"
              type="button"
              aria-expanded="false"
              to="/events"
            >
              Events
            </Link>
          </div>
          <br />
          <div>
            <a
              className=" nav-link dropdown-toggle mx-3"
              type="button"
              id="navbarDarkdropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Insights
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div className="mx-3">
            <JointheStudioBtn />
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center mt-5 ">
            <div className="">
              <a href="https://www.facebook.com/8thgearhub">
                <i
                  className="bi bi-facebook mx-3 text-dark"
                  style={{ fontSize: "1.875rem" }}
                ></i>
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/8thgearhub/">
                <i
                  className="bi bi-instagram mx-3 text-dark"
                  style={{ fontSize: "1.875rem" }}
                ></i>
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/company/8thgearhub/">
                <i
                  className="bi bi-linkedin mx-3 text-dark"
                  style={{ fontSize: "1.875rem" }}
                ></i>
              </a>
            </div>

            <div>
              <a href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09">
                <i
                  className="bi bi-twitter mx-3 text-dark"
                  style={{ fontSize: "1.875rem" }}
                ></i>
              </a>
            </div>

            <div>
              <a href="mailto:info@8thgearpartners.com">
                <i
                  className="bi bi-at mx-2 text-dark"
                  style={{ fontSize: "1.875rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar0 = () => {
  return (
    <div className="container-fluid mb-1">
      <div className="row">
        {text.landingpage.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar1 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {text.portfolio.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0 "
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar2 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.portfolios.map((navbar) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar3 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.projectdelivery.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar4 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.hubservices.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0 "
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar5 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.digitalmarketing.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar6 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.legal.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar7 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.productdevelopment.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar8 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.coworkingspace.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar9 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.growthasaservices.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar10 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.about.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar11 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.ourteam.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar12 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.blog.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar13 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {text.faq.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar14 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.events.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar15 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.foundermeetup.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar16 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {text.demoday.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar17 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {text.projectdeliverygallery.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Navbar18 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.eventgallery.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Navbar19 = () => {
  return (
    <div className="container-fluid mb-1">
      <div className="row">
        {text.ourmodel.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// export const Navbar20 = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {text.accounting.map((navbar) => {
//           return (
//             <div className="col-sm-12 col-md-12 col-lg-12" key={navbar.id}>
//               <NavBar {...navbar}></NavBar>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const Navbar20 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.accounting.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Navbar21 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.resources.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Navbar22 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.FUTATechpic.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Navbar23 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.Careers.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Navbar24 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.TalentPlacement.map((navbar) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
              key={navbar.id}
            >
              <NavBar {...navbar}></NavBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
