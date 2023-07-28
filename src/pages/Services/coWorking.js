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

//spaces
import EightGearHub from "../../assets/images/coworking/EightGearHub.png";

const CoWorking = () => {
  return (
    <>
      <Navbar8 />
      <CoworkingHero />
      <OurSpaces />
      <TestimonialSection />
      <WorkSpaceGrant />
      <Offers />
      <OurOffers />
      <PricingTable />
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
                <p className="m-0 p-0"> Monday-Friday (9am-5pm) </p>
                <p className="m-0 p-0"> Saturdays (10am-5pm) </p>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-12 coworkingGridDark text-center py-5"
                style={{ height: "200px" }}
              >
                <i className="bi bi-cup-hot" style={{ fontSize: "3rem" }}></i>
                <p>Kitchenette</p>
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
                <p className="mt-2">Serene Environment</p>
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
                <p> Ecosystem Events</p>
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
            Monthly/Yearly Plan
          </button>

          <button
            onClick={() => setActive("secondButton")}
            className="MeetingRoomBundleBtn mx-2 mt-3"
          >
            {" "}
            Flexi Plan
          </button>
          <button
            onClick={() => setActive("thirdButton")}
            className="MeetingRoomBundleBtn mx-2 mt-3"
          >
            {" "}
            Event/Training Hall
          </button>
        </div>
      </div>{" "}
      <div className="text-center mt-3">
        {active === "firstButton" && (
          <div className="container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="change">
                  <tr className="letter">
                    <th scope="col" style={{ width: 500 }}></th>
                    {/* <th scope="col">DAILY PLAN</th> */}
                    <th scope="col">VIRTUAL OFFICE</th>
                    <th scope="col">DEDICATED DESK</th>{" "}
                    {/* <th scope="col">MEETING ROOM(up to 8 persons)</th> */}
                    {/* <th scope="col" style={{ width: 90 }}>
                      EVENT/TRAINING HALL
                    </th> */}
                    <th scope="col">PRIVATE OFFICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Corporate Address</p>
                    </td>
                    {/* <td className="Pin"></td> */}
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                    {/* <td className="Pin"></td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish"></td>
                  </tr>
                  {/* <tr className="Pinner">
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
                  </tr> */}
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Kitchenette</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Lounge Area</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin">
                     
                    </td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Community Events</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Signage Space</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin"></td>
                    <td className="Pin"> </td>
                    {/* <td className="Pin"></td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Meeting Room(free per month)</p>
                    </td>

                    {/* <td className="Pin"></td> */}
                    <td className="Pin">1 hour</td>
                    <td className="Pin">2 hours</td>
                    {/* <td className="Pin"></td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">5 hours</td>
                  </tr>
                  {/* <tr className="Pinner">
                    <td className="finish">
                      <p>Meeting Room(3hours free per month)</p>
                    </td>

                    
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"></td>
                 
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Meeting Room(5hours free per month)</p>
                    </td>

                  
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                   
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr> */}
                  <tr className="Pinner">
                    <td className="finish">
                      {/* <p>Mail Handling (10% discount on team applies) </p> */}
                      <p>Mail Handling </p>
                    </td>
                    {/* <td className="Pin"></td> */}
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pin"> </td>
                    {/* <td className="Pin">
                     
                    </td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish"></td>
                  </tr>
                  {/* <tr className="Pinner">
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
                  </tr> */}
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Uninterrupted Power Supply</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    {/* <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  {/* <tr className="Pinner">
                    <td className="finish">
                      <p>Projector</p>
                    </td>
                    
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish"></td>
                  </tr> */}
                  <tr className="Pinner">
                    <td className="finish">
                      <p>5% Discount on Hub Services</p>
                    </td>
                    {/* <td className="Pin"></td> */}
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin"></td> */}
                    {/* <td className="Pin"> </td> */}
                    <td className="Pinish"></td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>10% Discount on Hub Services</p>
                    </td>
                    {/* <td className="Pin"></td> */}
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    {/* <td className="Pin"></td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  {/* <tr className="Pinner">
                    <td className="finish">
                      <p>Good Sound System</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    <td className="Pinish"></td>
                  </tr> */}
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Internet Access</p>
                    </td>
                    {/* <td className="Pin">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    <td className="Pin"></td>
                    <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                    {/* <td className="Pin">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                    {/* <td className="Pin"></td> */}
                    <td className="Pinish">
                      {" "}
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  {/* <tr className="Pinner">
                    <td className="finish">
                      <p> 30 Seat room space</p>
                    </td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pin"></td>
                    <td className="Pinish"></td>
                  </tr> */}
                  {/* <tr className="Pinner">
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
                  </tr> */}
                  <tr>
                    <td className="finish">Amount</td>
                    {/* <td className="Pin">₦3,500</td> */}
                    <td className="Pin">₦150,000(Per Year)</td>
                    <td className="Pin">₦50,000 (Per Month)</td>
                    {/* <td className="Pin"> ₦5,000 (Per Hour)</td> */}
                    {/* <td className="Pin"> ₦100,000(Per Day)</td> */}
                    <td className="Pinish">₦200,000(Per Month)</td>
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
                  {/* <tr className="letter">
                    <th scope="col" style={{ width: 500 }}></th>
                    <th scope="col" colSpan="3">
                      WEEKDAYS (9am - 5pm)
                    </th>
                   
                    <th scope="col">SATURDAYS (10am - 5pm) </th>
                    <th scope="col">MEETING ROOM(up to 8 persons)</th>
                  </tr> */}
                </thead>
                <tbody>
                  <tr className="letter">
                    <td scope="col" style={{ width: 500 }}></td>
                    <td
                      scope="col"
                      colSpan="3"
                      style={{ verticalAlign: "middle" }}
                    >
                      {" "}
                      WEEKDAYS (9am - 5pm)
                    </td>
                    <td
                      scope="col"
                      rowSpan="2"
                      className="mt-3"
                      style={{ verticalAlign: "middle" }}
                    >
                      SATURDAYS (10am - 5pm){" "}
                    </td>
                    <td
                      scope="col"
                      rowSpan="2"
                      style={{ verticalAlign: "middle" }}
                    >
                      MEETING ROOM(up to 8 persons)
                    </td>
                    {/* <td scope="col">DELUXE</td>
                    <td scope="col">SATURDAYS</td>
                    <td scope="col">MEETING ROOM</td> */}
                  </tr>
                  <tr className="letter">
                    <td scope="col"></td>
                    <td scope="col">REGULAR </td>
                    <td scope="col">CLASSIC</td>
                    <td scope="col">DELUXE</td>
                    {/* <td scope="col">SATURDAYS</td> */}
                    {/* <td scope="col">MEETING ROOM</td> */}
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Internet Access</p>
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
                      <p>Uninterrupted Power Supply</p>
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
                      <p>Community Events</p>
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
                    {/* <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Kitchenette</p>
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
                    {/* <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td> */}
                  </tr>
                  <tr>
                    <td className="finish">Amount</td>
                    <td className="Pin"> ₦3,000(1 Day)</td>
                    <td className="Pin"> ₦13,500(5 Days)</td>
                    <td className="Pin"> ₦26,000(10 Days)</td>
                    <td className="Pin">₦3,500</td>
                    <td className="Pinish">₦5,000 (Per Hour)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {active === "thirdButton" && (
          <div className="container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="change">
                  <tr className="letter">
                    <th scope="col"></th>
                    <th scope="col">REGULAR</th>
                    <th scope="col"> CLASSIC (9am - 1pm)/(1pm - 5pm)</th>
                    <th scope="col">DELUXE (9am - 5pm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Uninterrupted Power Supply</p>
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
                    <td className="Pinish">
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="Pinner">
                    <td className="finish">
                      <p>Good Sound System</p>
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
                      <p>Sits up to 50 persons</p>
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
                    <td className="finish">Amount</td>{" "}
                    <td className="Pin"> ₦20,000(Per Hour)</td>
                    <td className="Pin"> ₦50,000(Half Day)</td>
                    <td className="Pinish"> ₦100,000(1 Day)</td>
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
const OurSpaces = () => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center pt-5">OUR CO-WORKING SPACES</h3>
        <p className="text-center">
          Three locations, same excellent customer service
        </p>
        <div className="container pb-5 px-4 ">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="spaceImg my-3 d-flex align-items-end">
                <div className="card spaceImgCard mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      8thGear Hub, CMD Road, Lagos
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="hubOneImg my-3 d-flex align-items-end">
                <div className="card spaceImgCard mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      HubOne, Yaba
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="innkeeperHackerSpaceImg my-3 d-flex align-items-end">
                <div className="card spaceImgCard mt-auto w-75">
                  <div className="card-body">
                    <h6 className="card-title text-center spaceTitle my-auto">
                      Innkeeper Hacker’s Space, Magodo
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const WorkSpaceGrant = () => {
  return (
    <>
      <div className="container-fluid BGG">
        <h3 className="text-center pt-5">
          LAGOS INNOVATES: FREE WORKSPACE VOUCHER
        </h3>
        <p className="text-center">
          Redeem your workspace voucher
          <a
            href="https://forms.gle/pjR1os5hN6WnbzFa9"
            target="_blank"
            style={{ color: "#821e6b" }}
          >
            {" "}
            here
          </a>
          . To apply for your workspace grant, click
          <a
            href="https://www.lagosinnovates.ng/programs/startups-enterprises/workspace-vouchers"
            target="_blank"
            style={{ color: "#821e6b" }}
          >
            {" "}
            here
          </a>
          .
        </p>
        <div className="container pb-5 px-4">
          <div className="d-flex justify-content-center">
            {" "}
            <iframe
              src="https://www.youtube.com/embed/roWmniP_NUc"
              width="600"
              height="400"
              //   frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              //   allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoWorking;
