// import * as React from "react";
import React, { useState } from "react";
import { Navbar8 } from "../../components/Navbar";
// // import ProjectDeliveryPageHer
import { CoworkingTestimonial } from "../../components/AllCards/TestimonialCards";
// import Image from "../../assets/images/Rectangle4344.png";
import { CoworkingHero } from "../../components/Hero/ImageandTextHero";
// import Photo from "../../assets/images/Group .png";
import { BookNowBtn } from "../../components/Buttons/ServicesBtn";
import coworkinglarge from "../../assets/images/coworking/coworkinglarge.png";
import coworkingsmall from "../../assets/images/coworking/coworkingsmall.png";
import { DailyandWeekendBundleBtn } from "../../components/Buttons/ServicesBtn";
import { MeetingRoomBundleBtn } from "../../components/Buttons/ServicesBtn";
import { AdvisoryServicesIcon } from "../../components/Icons";
import { SereneEnvironmentIcon } from "../../components/Icons";
import { EventIcon } from "../../components/Icons";
import { LagosInnovateIcon } from "../../components/Icons";
import { MeetingRoomIcon } from "../../components/Icons";

const CoWorking = () => {
  return (
    <>
      <Navbar8 />
      <CoworkingHero />
      <Offers />
      <OurOffers />
      <PricingTable />
      <TestimonialSection />
    </>
  );
};
const Offers = () => {
  return (
    <>
      {" "}
      <div className="text-center mt-5 mb-4">
        <h3> GET TO KNOW US </h3>
      </div>
    </>
  );
};

const OurOffers = () => {
  return (
    <>
      <div className="">
        {" "}
        {/* <div className="gearBox justify-content-end">
          <h4 className="Gear">The Gears You Require</h4>
          <div>
            <BookNowBtn />
          </div>
        </div>{" "} */}
        <div className="container-fluid CoworkingOffersBg py-5 px-5">
          <div className="container-fluid CoworkingOffersBgg">
            <div className="">
              <h4 className="Gear coworkingBookText d-flex justify-content-end">
                The Gears You Require
              </h4>
              <div className="coworkingBookBtn d-flex text-center justify-content-end mb-3">
                <BookNowBtn />
              </div>
            </div>{" "}
            <div className="row coworkingGrid ">
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridLight text-center align-self-start py-5"
                style={{ height: "200px" }}
              >
                <i className="bi bi-alarm" style={{ fontSize: "3rem" }}></i>
                <p> Monday-Friday (9am-5pm) </p>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridDark text-center py-5"
                style={{ height: "200px" }}
              >
                <i className="bi bi-cup-hot" style={{ fontSize: "3rem" }}></i>
                <p>Kitchenttee</p>
              </div>
            </div>
            <div className="row justify-content-center coworkingGrid ">
              {/* <div className="col-lg-3 col-md-3 col-sm-12 "></div> */}
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridDark  text-center py-5"
                style={{ height: "200px" }}
              >
                <AdvisoryServicesIcon />
                {/* <i className="bi bi-globe" style={{ fontSize: "3rem" }}></i> */}
                <p>Access to Advisory Services</p>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridLight text-center py-5"
                style={{ height: "200px" }}
              >
                {" "}
                <SereneEnvironmentIcon />
                {/* <i className="bi bi-cup-straw" style={{ fontSize: "3rem" }}></i> */}
                <h6 className="mt-2">Serene Environment</h6>
              </div>
            </div>
            <div className="row justify-content-center coworkingGrid">
              {/* <div className="col-lg-3 col-md-3 col-sm-12 "></div> */}
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridLight text-center py-5"
                style={{ height: "200px" }}
              >
                {" "}
                <EventIcon />
                <p> Ecosystem Event</p>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridDark text-center py-5 "
                style={{ height: "200px" }}
              >
                {" "}
                <LagosInnovateIcon />
                <p> Lagos Innovate Partnered</p>
              </div>
            </div>
            <div className="row justify-content-end coworkingGrid">
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridLight text-center py-5"
                style={{ height: "200px" }}
              >
                <MeetingRoomIcon />
                <p> Meeting Room/Training Room</p>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridDark text-center py-5"
                style={{ height: "200px" }}
              >
                <i className="bi bi-wifi" style={{ fontSize: "3rem" }}></i>
                <p> Internet Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PricingTable = () => {
  const [active, setActive] = useState("firstButton");
  return (
    <>
      <div className="text-center mt-5">
        <h3> OUR PRICE RANGE </h3>
        <div className="mx-3">
          <button
            onClick={() => setActive("firstButton")}
            className="DailyandWeekendBundleBtn mx-2 mt-3"
          >
            Daily and Weekend Bundle
          </button>

          {/* </button> */}
          <button
            onClick={() => setActive("secondButton")}
            className="MeetingRoomBundleBtn mx-2 mt-3"
          >
            {" "}
            Meeting Room Bundle
          </button>

          {/* </button> */}
        </div>
      </div>{" "}
      <div className="text-center mt-5">
        {active === "firstButton" && (
          <div className="container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="change">
                  <tr className="letter">
                    <th scope="col" style={{ width: 500 }}></th>
                    <th scope="col">HOT DESK (Daily)</th>
                    <th scope="col">HOT DESK (Weekly)</th>
                    <th scope="col">VIRTUAL OFFICE</th>
                    <th scope="col">DEDICATED DESK</th>
                    <th scope="col" style={{ width: 90 }}>
                      TRAINING ROOM (Weekened)
                    </th>
                    <th scope="col">PRIVATE OFFICES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Corporate Address</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Hot Desk</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Kitchnette</p>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Meeting Room(1hr free per month)</p>
                    </td>

                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Mail Handling (10% discount on team applies) </p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Marker board</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Power</p>
                    </td>
                    <td className="Pin">
                      <i class="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Projector</p>
                    </td>
                    <td className="Pin"> </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Private Locker</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Reception</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p> WIFI</p>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p> 30 Seat room space</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p> Personalized Schedule</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Access to exhibition floor</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p> Featured Speaker</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p> Opening and closing parties</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="finish">Amount</td>
                    <td className="Pin">???3,000</td>
                    <td className="Pin"> ???10,000 (PER WEEK)</td>
                    <td className="Pin">???60,000 (6 months)</td>
                    <td className="Pin"> ???35,000 (PER MONTH)</td>
                    <td className="Pin"> ???10,000(WEEKEND ONLY)</td>
                    <td className="Pinish">???150,000 (PER MONTH)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {active === "secondButton" && (
          <div className="container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="change">
                  <tr className="letter">
                    <th scope="col" style={{ width: 500 }}></th>
                    <th scope="col">REGULAR </th>
                    <th scope="col"> CLASSIC</th>
                    <th scope="col">SILVER</th>
                    <th scope="col">GOLD </th>
                    <th scope="col">PLATINUM </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Up to 30 seats</p>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>

                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Projector</p>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Marker Boards</p>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="finish">Amount</td>
                    <td className="Pin"> ???5,000(1 HOUR)</td>
                    <td className="Pin"> ???20,000(5 HOURS)</td>
                    <td className="Pin"> ???25,000(8 HOURS)</td>
                    <td className="Pin">???55,000(20 HOURS)</td>
                    <td className="Pinish"> ???90,000(90 HOURS)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const TestimonialSection = () => {
  return (
    <>
      <div className="py-5 CoworkingTestmonialBg mt-5">
        <div className="CoworkingTestmonialBgg ">
          <h3 className="text-center" style={{ color: "#fff" }}>
            FROM OUR USERS
          </h3>
          <CoworkingTestimonial />
        </div>
      </div>
    </>
  );
};
export default CoWorking;
