import { Navbar27 } from "../../../components/Navbar";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
// import { DemodayHero } from "../../components/Hero/ImageandTextHero";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import { GearUpExposeBtn } from "../../../components/Buttons/EventsBtn";

const GearUpShowcasePage = () => {
  return (
    <>
      <Navbar27 />
      {/* <DemodayHero /> */}
      {/* <FoundersMeetupHero /> */}

      <GearUpExpose />
    </>
  );
};

const GearUpExpose = () => {
  return (
    <div className="container pt-5 px-4">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <p className="">Greetings, Business Leaders and Innovative Minds!</p>
      <p className="">
        <b>Join us for a remarkable opportunity – the GearUp Showcase!</b>
      </p>
      <p>
        GearUp Showcase is an inclusive event where a business in our venture
        studio intimates leaders and members of the community about their
        business to gain necessary exposure which is critical for most
        businesses to thrive.
        <p className="my-3">
          GearUp Expose stands as an inclusive program, equipping entrepreneurs
          with the indispensable skills and wisdom imperative for business
          expansion.
        </p>
        <p className="">Discover the specifics of the event below:</p>
      </p>
      <ul className="list-font-weight">
        <li className="list-font-weight">FREQUENCY : Monthly</li>
        <li className="list-font-weight">
          VENTURE IN FOCUS :{" "}
          <a href="https://trulance.io/" target="_blank">
            Trulance
          </a>{" "}
        </li>
        <li>PLATFORM: Virtual </li>
        <li>TIME: 4:00 PM - 5:00 PM</li>
        <li>DATE: Friday, October 27th, 2023.</li>
        <li>ADMISSION FEE: Free</li>
      </ul>
      <p>
        Trulance is a global marketplace that provides credible technology
        solutions to businesses and startups.
      </p>
      <p>
        We have an exciting lineup of innovative products that are ready to be
        showcased!
      </p>
      <p>
        Attendance is free but registration is compulsory. Kindly click the{" "}
        <a
          href="https://us06web.zoom.us/meeting/register/tZcrde-rpj0iGdJB4yZ75Srgw5Ba3-9D2Slq"
          target="_blank"
          className="textLinkColor"
        >
          link
        </a>{" "}
        to confirm your participation.
      </p>
      <p className="my-3">
        Don’t miss this incredible opportunity to be a part of the next big wave
        of innovation.
        <br /> Reserve your spot today and secure your seat!
      </p>
      <p className="my-3">
        Thank you. <br /> <br />
        Warm Regards.
      </p>
      {/* <p className="">Best Regards,</p>
      <p className="">Titilayo Ekundayo</p>
      <p className="">Head, Venture Studio.</p> */}
      <GearUpExposeBtn />
    </div>
  );
};

export default GearUpShowcasePage;
