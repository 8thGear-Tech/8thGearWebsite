import React from "react";
import { EventsViewMoreBtn } from "../components/Buttons/EventsBtn";
import { SuggestAnEventBtn } from "../components/Buttons/EventsBtn";
import { LetUsKnowBtn } from "../components/Buttons/EventsBtn";
import { GetYourTicketBtn } from "../components/Buttons/EventsBtn";

const Events = () => {
  return (
    <div>
      <SuggestAnEventBtn />
      <EventsViewMoreBtn />
      <LetUsKnowBtn />
      <GetYourTicketBtn />
    </div>
  );
};

export default Events;
