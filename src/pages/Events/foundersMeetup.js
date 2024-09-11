import {Navbar15, HomepageNav} from "../../components/Navbar";
// import { FoundersMeetupHero } from "../../components/Hero/BGColorandTextHero";
import {DemodayHero} from "../../components/Hero/ImageandTextHero";
import {FoundersMeetupHero} from "../../components/Hero/BGColorandTextHero";
import {EventsRegisterBtn} from "../../components/Buttons/EventsBtn";
import {Image} from "react-bootstrap";
// import heropic from "../../assets/images/founder'sMeetup/heropic.jpg";
// import herosquare from "../../assets/images/founder'sMeetup/herosquare bg.png";
import herocircle from "../../assets/images/founder'sMeetup/herocircle.png";
import heropicSM from "../../assets/images/founder'sMeetup/heropicsm.jpg";
import {Calendar, Clock, Linkedin} from "react-bootstrap-icons";
import locationPin from "../../assets/images/founder'sMeetup/locationIcon.png";
import clockIcon from "../../assets/images/founder'sMeetup/clockicon.svg";
import CalendarIcon from "../../assets/images/founder'sMeetup/calenderIcon.svg";
import speaker1 from "../../assets/images/founder'sMeetup/speaker1.png";
import heroPic1 from "../../assets/images/founder'sMeetup/heropic1.jpg";
import heroPic2 from "../../assets/images/founder'sMeetup/heropic2.jpg";

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
        <div className="px-md-3 px-lg-5 py-md-3 py-lg-2 container-fluid heroSection d-flex justify-content-between align-items-center w-100 overflow-hidden">
            {/* LEFT SECTION */}
            <div className="align-content-start mt-0 Left-section-text justify-content-sm-start py-sm-0">
                <div className=" w-100 d-flex flex-column align-content-center px-2 py-2 mt-0">
                    <p className="hero-pill rounded-pill py-2 px-1 text-center fw-bolder">IN-PERSON EVENT</p>
                    <h1 className="hero-caption">
                        Founder's Meet up: FIND CO-FOUNDERS, MEET POTENTIAL CLIENTS, MAKE NEW FRIENDS.
                    </h1>
                    <p className="hero-subcaption fs-5 pt-4">Network with with local entrepreneurs.</p>
                </div>
                {/* Invite Card */}
                <div className="hero-card px-2">
                    <div className="d-flex flex-row gap-0 justify-content-between">
                        {/* Date */}
                        <div className="dateicon p-2 details">
                            <Image src={CalendarIcon} alt="Calender" className="event-icon" />{" "}
                            <span className="event-detail">Date: </span>
                            <p>Aug 2nd,2024</p>
                        </div>
                        {/* Time */}
                        <div className="clockicon p-2">
                            {/* The "details" was not added here so it's custom styles were placed in it's own class */}
                            <Image src={clockIcon} className="event-icon" />{" "}
                            <span className="event-detail">Time: </span>
                            <p>11:00 am - 12:00 pm</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="py-2 details locationicon">
                        <Image src={locationPin} alt="icon" className="event-icon" />
                        <span className="p-1 event-detail">Location: </span>
                        <p>8thGear Hub, CMD Road ,Magodo Secetariat, Lagos State.</p>
                    </div>
                </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="w-50 sm:none">
                <Image src={heroPic1} alt="Hero-Pic1" className="img-fluid hero-pic1" />
                <Image src={herocircle} alt="Hero-Circle" className="hero-circle img-fluid shadow-1" />
                <Image src={heroPic2} alt="Hero-Pic2" className="img-fluid hero-pic2" />
            </div>
            {/* Imgage for small device */}
            <div className="d-none d-sm-block d-md-none small-hero">
                <Image src={heropicSM} alt="HeroPIc" className="small-hero-pic" fluid />
            </div>
            <div className="smRegisterLink d-none d-sm-block d-md-none rounded-pill my-3 px-3 py-2">
                <a href="#registration-panel">#View registration link</a>
            </div>
        </div>
    );
};

// THE BODY
const EventsWriteUp = () => {
    return (
        <div className="body-container">
            <div className="container-fluid d-flex mt-5 w-100 mt-sm-1 mx-sm-0 flex-column flex-wrap event-content">
                <section className="w-50 mx-lg-5 m-md-3 mx-sm-0 px-sm-2 event-section">
                    {/* FIRST SECTION */}
                    <div className="seection-one mt-5">
                        <p>
                            Founders Meetup is all about bringing Entrepreneurs, and those curious about Startups,
                            together to share ideas while learning from each other! Some sessions have guest speakers
                            and others have a topic of discussion the attendees focus on. (Also, pizza!)
                        </p>
                    </div>
                    {/* WHO SHOULD ATTEND */}
                    <div className="section-two mt-5 mb-3">
                        <h3>WHO TO ATTEND ?</h3>
                        <ul>
                            <li>
                                <p className="no-list">Startup founders</p>
                            </li>
                            <li>
                                <p className="no-list">Business owners</p>
                            </li>
                            <li>
                                <p className="no-list">
                                    Freelancers & service providers (digital marketers, web developers, designers, etc.)
                                </p>
                            </li>
                            <li>
                                <p className="no-list">Solo founders looking for founding team members</p>
                            </li>
                            <li>
                                <p className="no-list">
                                    Aspiring entrepreneurs who are either looking for one or more co-founders Anyone who
                                    wishes to
                                </p>
                            </li>
                            <li>
                                <p className="no-list">expand their business network</p>
                            </li>
                        </ul>
                        <div>
                            <p>
                                This event is free to attend. Join us for a fun evening! For more free startup events,
                                visit https://8thgearpartners.com/events{" "}
                            </p>
                            Feel free to invite other founders to join us as we meet every quarter!
                        </div>
                    </div>
                    {/* REGISSTRATION PANEL FOR SM */}
                    <div
                        className="registerpanelsm shadow p-2 w-25 d-block m-auto d-lg-none my-sm-2"
                        id="registration-panel"
                    >
                        <h2 className="py-1">REGISTER</h2>
                        <div className="registercontent">
                            <p className="m-0">Enroll for this event here: </p>
                            <p className="m-0">Event link..</p>
                        </div>
                    </div>
                    {/* SPEAKERS */}
                    <div className="speaker my-5 mx-lg-0 ">
                        <h2 className="mb-3 text-center purple-text align-content-center">SPEAKERS</h2>
                        <div className="flex-wrap container-fluid col-lg-12">
                            {/* 1st row */}
                            <div className=" row1">
                                {/* Speaker 1 */}
                                <div className="speaker-detail p-1 col-lg-6">
                                    <Image
                                        src={speaker1}
                                        alt="speaker1"
                                        className="speaker-img rounded-circle img-fluid"
                                    />
                                    <div className="speaker-info">
                                        <h3>Damilola Obidairo</h3>
                                        <p>Co founder and partner</p>
                                        <p>8th Gear Venture studio.</p>
                                        {/* LinkedIn link */}
                                        <a href="#">
                                            <Linkedin />
                                        </a>
                                    </div>
                                </div>
                                {/* Speaker 2 */}
                                <div className="speaker-detail p-3 col-lg-6">
                                    <Image
                                        src={speaker1}
                                        alt="speaker2"
                                        className="speaker-img rounded-circle img-fluid"
                                    />
                                    <div className="speaker-info">
                                        <h3>Damilola Obidairo</h3>
                                        <p>Co founder and partner</p>
                                        <p>8th Gear Venture studio.</p>
                                        {/* LinkedIn link */}
                                        <a href="#">
                                            <Linkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd row */}
                            <div className="row2">
                                {/* Speaker 4 */}
                                <div className="speaker-detail p-3 col-lg-6">
                                    <Image
                                        src={speaker1}
                                        alt="speaker3"
                                        className="speaker-img rounded-circle img-fluid"
                                    />
                                    <div className="speaker-info">
                                        <h3>Damilola Obidairo</h3>
                                        <p>Co founder and partner</p>
                                        <p>8th Gear Venture studio.</p>
                                        {/* LinkedIn link */}
                                        <a href="#">
                                            <Linkedin />
                                        </a>
                                    </div>
                                </div>
                                {/* Speaker 5 */}
                                <div className="speaker-detail p-3 col-lg-6">
                                    <Image
                                        src={speaker1}
                                        alt="speaker4"
                                        className="speaker-img rounded-circle img-fluid"
                                    />
                                    <div className="speaker-info">
                                        <h3>Damilola Obidairo</h3>
                                        <p>Co founder and partner</p>
                                        <p>8th Gear Venture studio.</p>
                                        {/* LinkedIn link */}
                                        <a href="#">
                                            <Linkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* REGISTER  */}
            <div className="registerContainer d-none d-lg-block">
                <div className="registerpanel shadow p-3 w-25 d-none d-xxl-block d-lg-block d-md-block">
                    <h2 className="py-1">REGISTER</h2>
                    <div className="registercontent">
                        <p className="m-0">Enroll for this event here: </p>
                        <p className="m-0">Event link..</p>
                    </div>
                </div>
            </div>
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
