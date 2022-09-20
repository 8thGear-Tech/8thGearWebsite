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
    <a href="#" rel="noreferrer">
      <button
        type="button"
        className="SuggestAnEventBtn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Let Us Know
      </button>
    </a>
    // <a href="#" rel="noreferrer">
    //   <button type="button" class="LetUsKnowBtn">
    //     Let Us Know
    //   </button>
    // </a>
    // <button className="LetUsKnowBtn" type="sumbit">
    //   Let us Know
    // </button>
  );
};

export const EventsViewMoreBtn = () => {
  return (
    <button className="EventViewMoreBtn" type="sumbit">
      <Link to="/events-gallery" className="textbutton">
        {" "}
        <div className="textbutton">view more</div>
      </Link>
    </button>
  );
};

export const GetYourTicketBtn = () => {
  return (
    <button className="GetYourTicketBtn" type="sumbit">
      <div className="textbtn">GET YOUR TICKET</div>
    </button>
  );
};

export const FoundersMeetupReadMoreBtn = () => {
  return (
    <Link to="/founders-meetup">
      <button className="BlogReadMoreBtn" type="sumbit">
        Read More
      </button>
    </Link>
  );
};
export const DemoDayReadMoreBtn = () => {
  return (
    <Link to="/demo-day">
      <button className="BlogReadMoreBtn" type="sumbit">
        Read More
      </button>
    </Link>
  );
};
