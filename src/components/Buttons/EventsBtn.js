//SuggestAnEventBtn
//LetUsKnowBtn
//EventsViewMoreBtn
//GetYourTicketBtn
import React from "react";
import { Link } from "react-router-dom";
// export const SuggestAnEventBtn = () => {
//   return (
//     // <button className="SuggestAnEventBtn" type="sumbit" >
//     //   <div className="textbutton">SUBMIT</div>
//     // </button>
//     <button
//         type="button"
//         className="prop SuggestAnEventBtn"

//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop"
//       >
//         Suggest an Event
//       </button>

//   );
// };
// export default SuggestAnEventBtn;

export const LetUsKnowBtn = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/149SdikrUqPTgtdQL5lOBKYdF9L5ZAQ4TF1Xj9y1vBIk/edit"
      rel="noreferrer"
      target="_blank"
    >
      <button
        // type="button"
        className="SuggestAnEventBtn"
        // data-bs-toggle="modal"
        // data-bs-target="#staticBackdrop"
      >
        Let Us Know
      </button>
    </a>
    // <a href="#" rel="noreferrer">
    //   <button type="button" className="LetUsKnowBtn">
    //     Let Us Know
    //   </button>
    // </a>
    // <button className="LetUsKnowBtn" type="submit">
    //   Let us Know
    // </button>
  );
};

export const EventsViewMoreBtn = () => {
  return (
    <button className="EventViewMoreBtn" type="submit">
      <Link to="/events-gallery" className="textbutton">
        {" "}
        <div className="textbutton">view more</div>
      </Link>
    </button>
  );
};

export const GetYourTicketBtn = () => {
  return (
    <button className="GetYourTicketBtn" type="submit">
      <div className="textbtn">GET YOUR TICKET</div>
    </button>
  );
};

export const FoundersMeetupReadMoreBtn = () => {
  return (
    <Link to="/founders-meetup">
      <button className="BlogReadMoreBtn" type="submit">
        Read More
      </button>
    </Link>
  );
};
export const DemoDayReadMoreBtn = () => {
  return (
    <Link to="/demo-day">
      <button className="BlogReadMoreBtn" type="submit">
        Read More
      </button>
    </Link>
  );
};
export const GearUpReadMoreBtn = () => {
  return (
    <Link to="/gear-up-expose">
      <button className="BlogReadMoreBtn" type="submit">
        Read More
      </button>
    </Link>
  );
};
export const EventsRegisterBtn = () => {
  return (
    <a href="https://bit.ly/8thGearfoundersmeetup2022" target="_blank">
      <button className="EventsRegisterBtn" type="submit">
        Register Now
      </button>
    </a>
  );
};
export const DemoDayRegisterBtn = () => {
  return (
    <a href="https://forms.gle/RyxYFMPtVsXuw33NA" target="_blank">
      <button className="EventsRegisterBtn" type="submit">
        Register Now
      </button>
    </a>
  );
};

export const GearUpExposeBtn = () => {
  return (
    <a
      href="https://us06web.zoom.us/meeting/register/tZcrde-rpj0iGdJB4yZ75Srgw5Ba3-9D2Slq"
      target="_blank"
    >
      <button className="EventsRegisterBtn" type="submit">
        Register Now
      </button>
    </a>
  );
};
