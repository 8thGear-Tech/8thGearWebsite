import { Navbar27 } from "../../../components/Navbar";
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
      <p className="">Greetings, Business Leaders & Great Minds!</p>
      <p className="">
        <b>Join us for a remarkable opportunity – the GearUp Showcase!</b>
      </p>
      <p>
        GearUp Showcase is an inclusive event where a business in our venture
        studio intimates leaders and members of the community about their
        business to gain necessary exposure which is critical for most
        businesses to thrive.
      </p>{" "}
      <p className="">Discover the specifics of the event below:</p>
      <ul className="list-font-weight">
        <li className="list-font-weight">FREQUENCY : Monthly</li>
        <li className="list-font-weight">
          VENTURE IN FOCUS :{" "}
          {/* <a href="https://www.mindafrik.com/" target="_blank"> */}
          MindAfrik
          {/* </a>{" "} */}
        </li>
        <li>PLATFORM: Virtual </li>
        <li>TIME: 4:00 PM - 5:00 PM</li>
        <li>DATE: Friday, November 24th, 2023.</li>
        <li>ADMISSION FEE: Free</li>
      </ul>
      <p>
        MindAfrik's purpose and drive is to educate, recaliberate and support
        minds for productive and positive living.
      </p>
      <p>
        Attendance is free but registration is compulsory. Kindly click the{" "}
        <a
          href="https://us06web.zoom.us/meeting/register/tZ0ld-mvqzMjH9SL9l0ht3S5KRsXy6ePioaJ "
          target="_blank"
          rel="noopener noreferrer"
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
