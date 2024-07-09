import React, { useState } from "react";
import "./eventsNew.css";
import { Link } from "react-router-dom";
import eventsData from "../../data/events.json"

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
        <button className={`button1 ${showFutureEvents ? 'active' : 'inactive'}`} onClick={toggleEvent2}> Upcoming Events </button>
        <button className={`button2 ${showPastEvents ? 'active' : 'inactive'}`} onClick={toggleEvent}> Past Events </button>
      </div>
      {/* Future Events  */}
      {showFutureEvents && (
        <div className={`my-3 mx-3 mx-md-5 no-flex`}>
          <div className="table-container" style={{ overflowX: "auto" }}>
            {eventsData.newFutureEvents.map((event) => (
                <div key={event.id}>
                  <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>{event.date}</h3>
                    <h3>{event.event}</h3>
                    <div>
                      <a href={event.link} target="_blank" rel="noreferrer">Register Now</a>
                    </div>
                  </div>
                  <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                    <h3 className="">{event.time}</h3>
                    <a target="_blank" href={event.calendarLink} rel="noreferrer" className="text-decoration-none"> <h3 className="add-to-calendar">Add to Google Calendar</h3> </a>
                    <h3>{event.format}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {showPastEvents  && (
        <div className={`my-3 mx-3 mx-md-5 no-flex ${showPastEvents}`}>
          <div className="table-container" style={{ overflowX: "auto" }}>
          {eventsData.pastEvents.map((event) => (
                <div key={event.index}>
                  <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>{event.date}</h3>
                    <h3>{event.event}</h3>
                    <div>
                      <Link to={event.link}>Gallery</Link>
                    </div>
                  </div>
                  <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                    <h3>{event.time}</h3>
                    <h3>...</h3>
                    <h3>{event.format}</h3>
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
