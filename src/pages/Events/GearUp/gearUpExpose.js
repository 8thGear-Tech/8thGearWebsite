import { Navbar25 } from "../../../components/Navbar";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
// import { DemodayHero } from "../../components/Hero/ImageandTextHero";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import { GearUpExposeBtn } from "../../../components/Buttons/EventsBtn";

const GearUpExposePage = () => {
  return (
    <>
      <Navbar25 />
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
      <p className="">Greetings, Visionary Business Minds,</p>
      <p className="">
        <b>Join us for a remarkable opportunity - GearUp Expose!</b>
      </p>
      <p>
        Embracing the path of an entrepreneur can indeed be challenging. Kudos
        to your choice – your determination paves the way for a brighter Africa.
        Keep forging ahead; your efforts will soon converge with celestial
        success. GearUp Expose has been meticulously designed with you in mind.
        A timeless African adage resonates deeply: "To journey swiftly, venture
        alone; to journey far, venture together."
        <p className="my-3">
          GearUp Expose stands as an inclusive program, equipping entrepreneurs
          with the indispensable skills and wisdom imperative for business
          expansion.
        </p>
        <p className="">Discover the specifics of the event below:</p>
      </p>
      <ul className="list-font-weight">
        <li className="list-font-weight">FREQUENCY : Monthly</li>
        <li>ADMISSION FEE: Free</li>
        <li>TIME: 4:00 PM - 5:00 PM</li>
        <li>PLATFORM: Virtual </li>
        <li>DATE: August 23rd, 2023</li>
      </ul>
      <p>
        Attendance is free but registration is compulsory. Kindly click the{" "}
        <a
          href="https://us06web.zoom.us/meeting/register/tZIvcOCprzsiE9wh14Jlf0CSGgFKZd9V6T4L"
          target="_blank"
          rel="noopener noreferrer"
          className="textLinkColor"
        >
          link
        </a>{" "}
        to confirm your participation.
      </p>
      <p className="my-3">
        Eagerly anticipating the chance to connect.
        <br /> Wishing you a day brimming with accomplishment.
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

export default GearUpExposePage;
