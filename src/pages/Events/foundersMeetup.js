import { Navbar15 } from "../../components/Navbar";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import { DemodayHero } from "../../components/Hero/ImageandTextHero";
import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import { EventsRegisterBtn } from "../../components/Buttons/EventsBtn";

const FounderMeetupPage = () => {
  return (
    <>
      <Navbar15 />
      <DemodayHero />
      {/* <FoundersMeetupHero /> */}

      <AboutFounderMeetup />
    </>
  );
};

const AboutFounderMeetup = () => {
  return (
    <div className="container pt-5 px-4">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <p className="">Dear Founders,</p>
      <p className="">
        <b>INVITATION TO FOUNDERS MEETUP</b>
      </p>
      <p>
        We realize how difficult it can be to be an entrepreneur. Bravo, we are
        very proud of you for choosing this route; Africa will be better for it.
        Continue to move and push, and the stars will align sooner than you
        expect. 8thGear’s Founders Meetup was specially curated for you, we
        couldnt agree more with the African proverb “If you want to go fast, go
        alone. If you want to go far, go together”.
        <p className="my-3">
          This is an event focused on fostering a blossoming relationship
          amongst entrepreneurs so the law of synergy can be enacted to learn,
          to grow, to connect. The event consists of two parts. The first
          section focuses on taking important lessons from others who have
          already achieved success, while the second section is all about
          networking and games.
        </p>
        <p className="">Please find below the meeting details</p>
      </p>
      <ul className="list-font-weight">
        <li className="list-font-weight">FREQUENCY : Quarterly</li>
        <li>GATE FEE: Free</li>
        <li>TIME: 2-3 Hours Max</li>
        <li>VENUE : 8thGear Hub </li>
        <li>DATE: To be communicated</li>
      </ul>
      <p>
        Attendance is free but registration is compulsory. Do click{" "}
        <a
          href="https://bit.ly/8thGearfoundersmeetup2022"
          target="_blank"
          className="textLinkColor"
        >
          here
        </a>{" "}
        to indicate your interest.
      </p>
      <p className="my-3">
        We are looking forward to getting to know you at the hangout.
        <br /> Do have a productive day.
      </p>
      <p className="my-3">
        Thank you. <br />
        Best Regards, <br /> Titilayo Ekundayo. <br /> Head,Venture Studio.
      </p>
      {/* <p className="">Best Regards,</p>
      <p className="">Titilayo Ekundayo</p>
      <p className="">Head, Venture Studio.</p> */}
      <EventsRegisterBtn />
    </div>
  );
};

export default FounderMeetupPage;
