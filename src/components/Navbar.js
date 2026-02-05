import { Link } from "react-router-dom";
import logos from "../assets/images/logos.png";
import React from "react";
import { JointheStudioBtn } from "./Buttons/ContactBtn";
import text from "../data/navbar.json";

import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//Imported Scss to make the navbar transparent
import "bootstrap/dist/css/bootstrap.min.css";
import "../sassfiles/components/_navbar.scss";

import Row from "react-bootstrap/Row";

import "./navbar.css";

const NavBar = (props) => {
  const { heading } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid NavBar tranparentNavbar">
        <div className="d-flex">
          <Link to="/">
            <img
              src={logos}
              alt=""
              width={60}
              height={70}
              className="me-4 mt-2"
            />
          </Link>
          <div className="d-flex align-items-center">
            {" "}
            <h5>{heading}</h5>
          </div>

          <div className="ms-auto mb-2 mb-lg-0 mx-3 mt-1">
            <Nav.Link
              variant="flat"
              className="text-white"
              onClick={handleShow}
              data-bs-theme="light"
            >
              <div className="">
                <i
                  className="bi bi-list text-dark"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
            </Nav.Link>
          </div>

          <Offcanvas
            show={show}
            onHide={handleClose}
            backdrop="static"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="h6 mx-2 text-dark">
                {" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  {" "}
                  ← Home{" "}
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {" "}
              <NavDropdown
                title="Hub Services"
                id="basic-nav-dropdown"
                className="h5 mx-3 mb-4"
              >
                <NavDropdown.Item href="/coworking">Coworking</NavDropdown.Item>
                <NavDropdown.Item href="/talent-placement">
                  Talent Placement
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#">Tech Marketplace</NavDropdown.Item> */}
                <NavDropdown.Item href="/growth-as-a-service">
                  Growth Advisory
                </NavDropdown.Item>
                <NavDropdown.Item href="/tech-marketplace">
                  Tech Marketplace
                </NavDropdown.Item>
              </NavDropdown>{" "}
              <Nav.Link
                href="/initiatives"
                className="mx-3 mb-4"
                style={{ fontSize: "1.2rem", fontWeight: "300" }}
              >
                Initiatives
              </Nav.Link>
              <NavDropdown
                title="Venture Studio"
                id="basic-nav-dropdown"
                className="h5 mx-3 mb-4 mt-2"
              >
                <NavDropdown.Item href="/our-model">
                  {" "}
                  Our Model
                </NavDropdown.Item>
                <NavDropdown.Item href="portfolio">Portfolio</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/about"
                className="h5 mx-3 mb-4"
                style={{ fontSize: "1.2rem", fontWeight: "300" }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/events"
                className="h5 mx-3 mb-4"
                style={{ fontSize: "1.2rem", fontWeight: "300" }}
              >
                Events
              </Nav.Link>
              <NavDropdown
                title="Insights"
                id="basic-nav-dropdown"
                className="h5 mx-3 mb-4"
              >
                <NavDropdown.Item href="/resources">
                  {" "}
                  Resources
                </NavDropdown.Item>
              </NavDropdown>
              <div className="mx-3">
                <JointheStudioBtn />
              </div>
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-center mt-5 ">
                <div className="">
                  <a
                    href="https://www.facebook.com/8thgearhub"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="bi bi-facebook mx-3 text-dark"
                      style={{ fontSize: "1.875rem" }}
                    ></i>
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.instagram.com/8thgearhub/"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="bi bi-instagram mx-3 text-dark"
                      style={{ fontSize: "1.875rem" }}
                    ></i>
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/company/8thgearhub/"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="bi bi-linkedin mx-3 text-dark"
                      style={{ fontSize: "1.875rem" }}
                    ></i>
                  </a>
                </div>

                <div>
                  <a
                    href="https://twitter.com/8thGearPartners?t=yFaw9REm-T7YQu0kxtFlIg&s=09"
                    rel="noopener noreferrer"
                  >
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
            </Offcanvas.Body>
          </Offcanvas>
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
    <div className="container-fluid transparentNavbar">
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
    <div className="container-fluid transparent-navbar">
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
    <div className="container-fluid my-2">
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
export const Navbar25 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.GearUpExpose.map((navbar) => {
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
export const Navbar26 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.DigiPlus.map((navbar) => {
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
export const Navbar27 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {text.GearUpShowcase.map((navbar) => {
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

//TRANSPARENT Cowrking NAVBAR
export const Navbar28 = () => {
  return (
    <div className="container-fluid transparent-navbar">
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

export const Navbar29 = () => {
  return (
    <div className="container-fluid transparent-navbar">
      <div className="row">
        {text.newEvent.map((navbar) => {
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

export const Navbar30 = () => {
  return (
    <div className="container-fluid transparent-navbar">
      <div className="row">
        {text.newAbout.map((navbar) => {
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

export const ProjectNav = () => {
  return (
    <div className="container-fluid transparent-navbar">
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

// HOMPAGE NAVBAR
export const HomepageNav = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-white top-0 m-0">
        <div className="container">
          <Row className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              {/* BRAND */}
              <div>
                <Navbar.Brand className="d-flex align-items-center w-100 ">
                  <Link to="/" className="text-black text-decoration-none">
                    <img
                      src={logos} // Replace with your logo path
                      alt="Company Logo"
                      className="d-inline-block align-top me-4"
                      width={60}
                      height={70}
                    />{" "}
                  </Link>
                  <span className="px-2 d-none d-lg-inline d-md-none d-flex align-items-center">
                    {" "}
                    8thGear Hub
                  </span>
                </Navbar.Brand>
              </div>
              {/* TOOGLE MENU */}
              <div className="d-lg-none d-md-none text-right">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* OFFCANVAS */}
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${"sm"}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="Nav-OffCanvas ">
                      <NavDropdown
                        title="Hub Services"
                        id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                        className="Nav-item w-75"
                      >
                        {/* DROPDOWN MENU */}
                        <div className="Nav-Dropdown rounded-3">
                            <NavDropdown.Item
                            href="/msme-marketplace"
                            className="Nav-Dropdown-Items"
                          >
                            MSME Marketplace
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/growth-advisory"
                            className="Nav-Dropdown-Items"
                          >
                            Growth Advisory
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                            <NavDropdown.Item
                            href="/coworking"
                            className="Nav-Dropdown-Items"
                          >
                            Coworking
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>
                      <Nav.Link href="/initiatives" className="Nav-item">
                        Initiatives
                      </Nav.Link>
                      <NavDropdown
                        title="Programs"
                        id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                        className="Nav-item w-75"
                      >
                        <div className="Nav-Dropdown rounded-3">
                          <NavDropdown.Item
                            href="/DBN"
                            className="Nav-Dropdown-Items"
                          >
                            DBN Workshop & Grants
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/MIREPlus"
                            className="Nav-Dropdown-Items custom-dropdown-item"
                          >
                            MIRE+ (Investment Readiness)
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/GearUp"
                            className="Nav-Dropdown-Items"
                          >
                            GearUp Incubation
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="https://lagosgreen.meristemng.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Nav-Dropdown-Items"
                          >
                            Meristem Lagos Green
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/ESP"
                            className="Nav-Dropdown-Items"
                          >
                            Employability Support Project
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>
                      <NavDropdown
                        title="Venture Studio"
                        id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                        className="Nav-item w-75"
                      >
                        <div className="Nav-Dropdown rounded-3">
                          <NavDropdown.Item
                            href="/portfolio"
                            className="Nav-Dropdown-Items"
                          >
                            Portfolio
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/hub-membership"
                            className="Nav-Dropdown-Items"
                          >
                            Hub Membership
                            <hr className="w-75 m-auto" />
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>

                      <Nav.Link href="/about" className="Nav-item">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="/events" className="Nav-item">
                        Events
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
              {/* NAV-LINKS */}
              <div lg={9} className="d-none d-md-flex">
                <Nav className="ml-auto gap-4">
                  {/*HUB SERVICES */}
                  <NavDropdown
                    title="Hub Services"
                    id="basic-nav-dropdown"
                    className="text-black"
                  >
                    <NavDropdown.Item href="/msme-marketplace">
                     MSME Marketplace
                    </NavDropdown.Item>
                      <NavDropdown.Item href="/growth-advisory">
                      Growth Advisory
                    </NavDropdown.Item>
                       <NavDropdown.Item href="/coworking">
                      Coworking
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/initiatives">Initiatives</Nav.Link>
                  <NavDropdown
                    title="Programs"
                    id="basic-nav-dropdown"
                    className="text-black"
                  >
                    <NavDropdown.Item
                      href="/MIREPlus"
                      className="dropdown-item-separated"
                    >
                      MIRE+ (Investment Readiness)
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item
                      href="https://forms.gle/deVsWi1aGdpeJg7E9"
                      target="_blank"
                      className="dropdown-item-separated"
                    >
                    DSE (Digital Skills for Entrepreneurs)
                    </NavDropdown.Item>
                      <NavDropdown.Item href="/hub-membership">
                      Hub Membership
                    </NavDropdown.Item>
                     <NavDropdown.Item
                      href="/GearUp"
                      className="dropdown-item-separated"
                    >
                      {" "}
                      GearUp Incubation
                    </NavDropdown.Item>

<NavDropdown.Item
                      className="dropdown-item-separated"
                      href="https://lagosgreen.meristemng.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meristem Lagos Green
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/DBN"
                      className="dropdown-item-separated"
                    >
                     DBN/ETP (Workshops & Grants)
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/migrant-advisory-desk"
                      className="dropdown-item-separated"
                    >
                   8thGear Job Center (Advisory Desk)
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item
                      className="dropdown-item-separated"
                      href="/ESP"
                    >
                      Employability Support Project
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      className="dropdown-item-separated"
                      href="/ESP"
                    >
                 DeepTech Upskiling
                    </NavDropdown.Item> */}
                    
                  </NavDropdown>
                  <NavDropdown
                    title="Venture Studio"
                    id="basic-nav-dropdown"
                    className="text-black"
                  >
                    <NavDropdown.Item href="/portfolio">
                      Portfolio
                    </NavDropdown.Item>
                     <NavDropdown.Item href="/hub-membership">
                      Hub Membership
                    </NavDropdown.Item>
                     <NavDropdown.Item href="https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK" target="_blank">
                     Community
                    </NavDropdown.Item>
                   
                  </NavDropdown>

                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/events">Events</Nav.Link>
                </Nav>
              </div>
            </div>
          </Row>
        </div>
      </Navbar>
    </>
  );
};
