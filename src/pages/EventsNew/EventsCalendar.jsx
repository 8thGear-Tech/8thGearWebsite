import React, { useState } from "react";
import "./eventsNew.css";
import { Link } from "react-router-dom";

const EventsCalendar = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [showFutureEvents, setShowFutureEvents] = useState(true);

  const toggleEvent = (e) => {
    e.preventDefault();
    setShowPastEvents(true);
    setShowFutureEvents(false);
  };

  const toggleEvent2 = (e) => {
    e.preventDefault();
    setShowPastEvents(false);
    setShowFutureEvents(true);
  };

  return (
    <div className="eventsCalendar d-flex flex-column">
      <div className="eventsHead d-flex justify-content-center align-items-center">
        <h3 className="fw-semibold py-4">Events Calendar</h3>
      </div>
      <div className={`d-flex justify-content-center align-items-center`}>
        <button className="button1" onClick={toggleEvent2}> Upcoming Events </button>
        <button className="button2" onClick={toggleEvent}> Past Events </button>
      </div>
      {/* Future Events  */}
      {showFutureEvents && (
        <div className={`my-3 mx-3 mx-md-5 no-flex`}>
          <div className="table-container" style={{ overflowX: "auto" }}>
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index}>
                  <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>July 2025</h3>
                    <h3>Founders Future Meetup</h3>
                    <div>
                      <Link to={"#"}>Register Now</Link>
                    </div>
                  </div>
                  <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>4:00pm-6:00pm</h3>
                    <h3>Add to Google Calendar</h3>
                    <h3>Virtual</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {showPastEvents  && (
        <div className={`my-3 mx-3 mx-md-5 no-flex ${showPastEvents}`}>
          <div className="table-container" style={{ overflowX: "auto" }}>
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index}>
                  <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>July 2024</h3>
                    <h3>Founders Meetup</h3>
                    <div>
                      <Link to={"#"}>Register Now</Link>
                    </div>
                  </div>
                  <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>4:00pm-6:00pm</h3>
                    <h3>Add to Google Calendar</h3>
                    <h3>Virtual</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {/* Past Events  */}
    </div>
  );
};

export default EventsCalendar;
