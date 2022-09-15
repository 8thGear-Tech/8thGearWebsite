//SuggestAnEventBtn
//LetUsKnowBtn
//EventsViewMoreBtn
//GetYourTicketBtn
import React from "react";

export const SuggestAnEventBtn = () => {
  return (
    <button className="SuggestAnEventBtn" type="sumbit">
      <div className="textbutton">SUBMIT</div>
    </button>
  );
};
export default SuggestAnEventBtn;

export const LetUsKnowBtn = () => {
  return (
    <button className="LetUsKnowBtn" type="sumbit">
      <div className="textbutton">Let Us Know</div>
    </button>
  );
};

export const EventsViewMoreBtn = () => {
  return (
    <button className="EventViewMoreBtn" type="sumbit">
      <div className="textbutton">view more</div>
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
