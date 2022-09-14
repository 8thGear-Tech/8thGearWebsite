// import React from "react";
// import { EventsViewMoreBtn } from "../../components/Buttons/EventsBtn";
// import { SuggestAnEventBtn } from "../../components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "../../components/Buttons/EventsBtn";
import demoday from "../../assets/images/events/demoday.png";
import foundersmeetup from "../../assets/images/events/foundersmeetup.png";
const EventsPage = () => {
  return (
    <>
      <Events />
      <SuggestAnEvent />
    </>
  );
};
const Events = () => {
  return (
    <div className="container-fluid text-center p-5 sectionOneBg">
      {" "}
      <h4 className="">Exclusive to the portfolio</h4>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
          {" "}
          <div className="mb-5 py-5 eventsCardBg">
            <div className="card-body">
              <h3 className="card-title">Founders Meetup</h3>
              <img
                src={foundersmeetup}
                className="p-3 mx-auto w-75"
                // width="70px"
                // height="70px"
                alt="..."
              />
              <p className="card-text">
                {" "}
                It's business creation. Our collaborative platform has three
                components. It's business creation. It's business creation. Our
                collaborative platform has three components. It's business
                creation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-10 px-5 d-flex align-items-stretch">
          {" "}
          <div className="mb-5 py-5 eventsCardBg">
            <div className="card-body">
              <h3 className="card-title">Demo Day</h3>
              <img
                src={demoday}
                className="p-3 mx-auto w-75"
                // width="70px"
                // height="70px"
                alt="..."
              />
              <p className="card-text">
                {" "}
                It's business creation. Our collaborative platform has three
                components. It's business creation. It's business creation. Our
                collaborative platform has three components. It's business
                creation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <LetUsKnowBtn /> */}
    </div>
  );
};
const SuggestAnEvent = () => {
  return (
    <div className="container-fluid text-center p-5">
      {" "}
      <h4 className="">Suggest an event or speaker</h4>
      <p>
        If you have a suggestion for an event or potential speaker, we would
        love to hear from you.
      </p>
      {/* <LetUsKnowBtn /> */}
    </div>
  );
};

export default EventsPage;
