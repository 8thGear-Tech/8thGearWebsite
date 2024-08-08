import {Navbar15, HomepageNav} from "../../components/Navbar";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import {DemodayHero} from "../../components/Hero/ImageandTextHero";
import {FoundersMeetupHero} from "../../components/Hero/BGColorandTextHero";
import {EventsRegisterBtn} from "../../components/Buttons/EventsBtn";
import {Image} from "react-bootstrap";
import heropic from "../../assets/images/founder'sMeetup/heropic.jpg";
import herosquare from "../../assets/images/founder'sMeetup/herosquare bg.png";
import herocircle from "../../assets/images/founder'sMeetup/herocircle.png";
import heropicSM from "../../assets/images/founder'sMeetup/heropicsm.jpg";
import {Calendar, Clock, Linkedin, PinAngle} from "react-bootstrap-icons";
import locationPin from "../../assets/images/founder'sMeetup/locationIcon.png";
import speaker1 from "../../assets/images/founder'sMeetup/speaker1.png";
import {FaLocationArrow} from "react-icons/fa";
import "../../sassfiles/pages/_foundersMeet.scss";

const FounderMeetupPage = () => {
    return (
        <>
            {/* <Navbar15 /> */}
            <HomepageNav />
            {/* <DemodayHero /> */}
            <FounderMeetupHero />
            {/* <FoundersMeetupHero /> */}
            {/* <AboutFounderMeetup /> */}
            <EventsWriteUp />
        </>
    );
};

// HERO SECTION
const FounderMeetupHero = () => {
    return (
        <div className="px-4 container-fluid heroSection d-flex justify-content-between align-items-center pt-1 pb-2">
            {/* LEFT SECTION */}
            <div className="align-content-center mt-0 Left-section-text justify-content-sm-start py-sm-0">
                <div className="d-flex flex-column align-content-center px-4 py-2 mt-0">
                    <p className="hero-pill rounded-pill py-2 px-1 text-center fw-bolder">IN-PERSON EVENT</p>
                    <h1 className="hero-caption">
                        Founder's Meet up: FIND CO-FOUNDERS, MEET POTENTIAL CLIENTS, MAKE NEW FRIENDS.
                    </h1>
                    <p className="hero-subcaption fs-5 pt-4">Network with with local entrepreneurs.</p>
                </div>
                {/* Invite Card */}
                <div className="hero-card px-2 shadow rounded-2">
                    <div className="d-flex flex-row gap-0 justify-content-between">
                        {/* Date */}
                        <div className="dateicon p-2">
                            <Calendar /> <span>Date</span>
                            <p>Aug 2nd,2024</p>
                        </div>
                        {/* Time */}
                        <div className="clockicon p-2">
                            <Clock /> <span>Time</span>
                            <p>11:00 am - 12:00 pm</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="p-3">
                        <Image src={locationPin} alt="icon" className="location-icon" />
                        <span>Location</span>
                        <p>8thGear Hub, CMD Road ,Magodo Secetariat, Lagos State.</p>
                    </div>
                </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="w-50 sm:none">
                <Image src={heropic} alt="Hero-Pic" className="hero-pic img-fluid" />
                <Image src={herocircle} alt="Hero-Circle" className="hero-circle" />
                <Image src={herosquare} alt="Hero-sqaure" className="hero-square" />
            </div>
            {/* Imgage for small device */}
            <div className="d-none d-sm-block d-md-none small-hero">
                <Image src={heropicSM} alt="HeroPIc" className="small-hero-pic" fluid />
            </div>
            {/* REGISTER  */}
            <div className="registerpanel shadow p-4 w-25">
                <h2 className="py-1">REGISTER</h2>
                <div className="registercontent">
                    <p className="m-0">Enroll for this event here: </p>
                    <p className="m-0">Event link..</p>
                </div>
            </div>
        </div>
    );
};

// THE BODY
const EventsWriteUp = () => {
    return (
        <div className="container-fluid d-flex mt-5 mx-5 flex-column flex-wrap">
            <section className="w-75 m-5">
                {/* FIRST SECTION */}
                <div className="seection-one">
                    <p>
                        Founders Meetup is all about bringing Entrepreneurs, and those curious about Startups, together
                        to share ideas while learning from each other! Some sessions have guest speakers and others have
                        a topic of discussion the attendees focus on. (Also, pizza!)
                    </p>
                </div>
                {/* WHO SHOULD ATTEND */}
                <div className="section-two mt-5">
                    <h3>WHO TO ATTEND ?</h3>
                    <ul>
                        <li>Startup founders</li>
                        <li>Business owners</li>
                        <li>Freelancers & service providers (digital marketers, web developers, designers, etc.)</li>
                        <li>Solo founders looking for founding team members</li>
                        <li>
                            Aspiring entrepreneurs who are either looking for one or more co-founders Anyone who wishes
                            to
                        </li>
                        <li>expand their business network</li>
                    </ul>
                    <div>
                        <p>
                            This event is free to attend. Join us for a fun evening! For more free startup events,
                            visit https://8thgearpartners.com/events{" "}
                        </p>
                        Feel free to invite other founders to join us as we meet every quarter!
                    </div>
                </div>
                {/* SPEAKERS */}
                <div className="speaker my-5 flex-wrap container-fluid flex-lg-row">
                    <h2 className="mb-3 text-center">SPEAKERS</h2>
                    {/* Speaker 1 */}
                    <div className="speaker-detail p-3">
                        <Image src={speaker1} alt="speaker1" className="speaker-img rounded-circle" />
                        <div className="speaker-info">
                            <h3>Damilola Obidairo</h3>
                            <p>Co founder and partner</p>
                            <p>8th Gear Venture studio.</p>
                            {/* LinkedIn link */}
                            <a>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                    {/* Speaker 2 */}
                    <div className="speaker-detail p-3">
                        <Image src={speaker1} alt="speaker1" className="speaker-img rounded-circle" />
                        <div className="speaker-info">
                            <h3>Damilola Obidairo</h3>
                            <p>Co founder and partner</p>
                            <p>8th Gear Venture studio.</p>
                            {/* LinkedIn link */}
                            <a>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                    {/* Speaker 3 */}
                    <div className="speaker-detail p-3">
                        <Image src={speaker1} alt="speaker1" className="speaker-img rounded-circle" />
                        <div className="speaker-info">
                            <h3>Damilola Obidairo</h3>
                            <p>Co founder and partner</p>
                            <p>8th Gear Venture studio.</p>
                            {/* LinkedIn link */}
                            <a>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                    {/* Speaker 4 */}
                    <div className="speaker-detail p-3">
                        <Image src={speaker1} alt="speaker1" className="speaker-img rounded-circle" />
                        <div className="speaker-info">
                            <h3>Damilola Obidairo</h3>
                            <p>Co founder and partner</p>
                            <p>8th Gear Venture studio.</p>
                            {/* LinkedIn link */}
                            <a>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SPEEAKER SECTION */}
        </div>
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
                We realize how difficult it can be to be an entrepreneur. Bravo, we are very proud of you for choosing
                this route; Africa will be better for it. Continue to move and push, and the stars will align sooner
                than you expect. 8thGear’s Founders Meetup was specially curated for you, we couldnt agree more with the
                African proverb “If you want to go fast, go alone. If you want to go far, go together”.
                <p className="my-3">
                    This is an event focused on fostering a blossoming relationship amongst entrepreneurs so the law of
                    synergy can be enacted to learn, to grow, to connect. The event consists of two parts. The first
                    section focuses on taking important lessons from others who have already achieved success, while the
                    second section is all about networking and games.
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
                <a href="https://bit.ly/8thGearfoundersmeetup2022" target="_blank" className="textLinkColor">
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
