//SuggestAnEventBtn
//LetUsKnowBtn
//EventsViewMoreBtn
//GetYourTicketBtn
import React from "react";

export const SuggestAnEventBtn = () => {
  return (
    <button className="SuggestAnEventBtn" type="sumbit">
      Suggest An Event
    </button>
  );
};
// export default SuggestAnEventBtn;

export const LetUsKnowBtn = () => {
  return (
    <a href="#" rel="noreferrer">
      <button type="button" class="LetUsKnowBtn">
        Let Us Know
      </button>
    </a>
    // <button className="LetUsKnowBtn" type="sumbit">
    //   Let us Know
    // </button>
  );
};

export const EventsViewMoreBtn = () => {
  return (
    <button className="EventViewMoreBtn" type="sumbit">
      View More
    </button>
  );
};

export const GetYourTicketBtn = () => {
  return (
    <button className="GetYourTicketBtn" type="sumbit">
      Get Your Ticket
    </button>
  );
};
