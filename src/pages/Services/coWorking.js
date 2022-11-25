// import * as React from "react";
import React, { useState } from "react";
import { Navbar8 } from "../../components/Navbar";
// // import ProjectDeliveryPageHer
import { CoworkingTestimonial } from "../../components/AllCards/TestimonialCards";
// import Image from "../../assets/images/Rectangle4344.png";
import { CoworkingHero } from "../../components/Hero/ImageandTextHero";
// import Photo from "../../assets/images/Group .png";
import { BookNowBtn } from "../../components/Buttons/ServicesBtn";

const CoWorking = () => {
  const [active, setActive] = useState("firstButton");
  return (
    <>
      <Navbar8 />
      <CoworkingHero />
      {/* <ProjectDeliveryPageHero /> */}

      <div className="text-center mt-5">
        <p>
          <h3> GET TO KNOW US </h3>
        </p>
      </div>

      <div className="purple">
        <div className="gearBox justify-content-end">
          <h4 className="Gear">The Gears You Require</h4>
          <div>
            <BookNowBtn />
          </div>
        </div>
        <div className="all w-75">
          <div className="grid1 mt-5">
            <div className="c1-element1">
              <i className="bi bi-alarm" style={{ fontSize: "3rem" }}></i>
              <p> Monday-Friday (9am-5pm) </p>
            </div>

            <div className="c2-element1">
              <i className="bi bi-cup-hot" style={{ fontSize: "3rem" }}></i>
              <p>Kichenttee</p>
            </div>

            <div className="c2-element2">
              <i className="bi bi-globe" style={{ fontSize: "3rem" }}></i>
              <p>Access to advisory services</p>
            </div>
            <div className="c2-element3">
              <h6>Serene Environment</h6>
              <i className="bi bi-cup-straw" style={{ fontSize: "3rem" }}></i>
            </div>
            <div className="c3-element1">
              <p> Ecosystem Event</p>
              <i
                className="bi bi-journal-text"
                style={{ fontSize: "3rem" }}
              ></i>
            </div>
            <div className="c3-element2">
              <p> Lagos Innovate partnered</p>
              <i class="bi bi-file-fill" style={{ fontSize: "3rem" }}></i>
            </div>
            <div className="c3-element3">
              <p> Fully Equipped Conference room.</p>
              <i className="bi bi-laptop" style={{ fontSize: "3rem" }}></i>
            </div>
          </div>
          <div className="grid2">
            <div className="c4-element1">
              <p> High Speed and secured internet service.</p>
              <i className="bi bi-wifi" style={{ fontSize: "3rem" }}></i>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3> OUR PRICE RANGE </h3>
        <nav>
          <button className="Hunt" onClick={() => setActive("firstButton")}>
            Daily and Weekend Bundle
          </button>
          <button className="Hint" onClick={() => setActive("secondButton")}>
            Meeting Room Bundle
          </button>
        </nav>
      </div>
      <div className="text-center mt-5">
        {active === "firstButton" && (
          <div class="container">
            <table class="table table-bordered">
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
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin"></td>
                  <td className="Pinish"></td>
                </tr>
                <tr className="Pinner">
                  <td className="finish">
                    <p>Kitchnette</p>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin"></td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
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
                    <i class="bi bi-check-circle"></i>
                  </td>
                </tr>
                <tr>
                  <td className="finish">Amount</td>
                  <td className="Pin">₦3,000</td>
                  <td className="Pin"> ₦10,000 (PER WEEK)</td>
                  <td className="Pin">₦60,000 (6 months)</td>
                  <td className="Pin"> ₦35,000 (PER MONTH)</td>
                  <td className="Pin"> ₦10,000(WEEKEND ONLY)</td>
                  <td className="Pinish">₦150,000 (PER MONTH)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active === "secondButton" && (
          <div class="container">
            <table class="table table-bordered">
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
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>

                  <td className="Pinish">
                    <i class="bi bi-check-circle"></i>
                  </td>
                </tr>
                <tr className="Pinner">
                  <td className="finish">
                    <p>Projector</p>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pinish">
                    <i class="bi bi-check-circle"></i>
                  </td>
                </tr>
                <tr className="Pinner">
                  <td className="finish">
                    <p>Marker Boards</p>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pin">
                    <i class="bi bi-check-circle"></i>
                  </td>
                  <td className="Pinish">
                    <i class="bi bi-check-circle"></i>
                  </td>
                </tr>
                <tr>
                  <td className="finish">Amount</td>
                  <td className="Pin"> ₦5,000(1 HOUR)</td>
                  <td className="Pin"> ₦20,000(5 HOURS)</td>
                  <td className="Pin"> ₦25,000(8 HOURS)</td>
                  <td className="Pin">₦55,000(20 HOURS)</td>
                  <td className="Pinish"> ₦90,000(90 HOURS)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="pink">
        <div className="short">
          <h2>FROM OUR USERS</h2>
        </div>
        <div>
          <CoworkingTestimonial />
        </div>
      </div>

      <br></br>
    </>
  );
};
export default CoWorking;
