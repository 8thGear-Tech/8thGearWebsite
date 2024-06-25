import "./eventsNew.css"

const EventsCalendar = () => {
  return (
    <div className='eventsCalendar d-flex flex-column'>
        <div className="eventsHead d-flex justify-content-center align-items-center">
            <h3 className="fw-semibold py-4">Events Calendar</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <button className="button1">Event/Training Hall</button>
            <button className="button2">Monthly/Yearly Plan</button>
        </div>
        {/* Table  */}
        <div className="my-3 mx-5">
            <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                <h3>June 2024</h3>
                <h3>Founders Meetup</h3>
                <a href="#">Register Now</a>
            </div>
            <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                <h4>4:00pm-6:00pm</h4>
                <h4>Add to Google Calendar</h4>
                <h4>Virtual </h4>
            </div>
            <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                <h3>June 2024</h3>
                <h3>Founders Meetup</h3>
                <a href="#">Register Now</a>
            </div>
            <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                <h4>4:00pm-6:00pm</h4>
                <h4>Add to Google Calendar</h4>
                <h4>Virtual </h4>
            </div>
            <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                <h3>June 2024</h3>
                <h3>Founders Meetup</h3>
                <a href="#">Register Now</a>
            </div>
            <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                <h4>4:00pm-6:00pm</h4>
                <h4>Add to Google Calendar</h4>
                <h4>Virtual </h4>
            </div>
            <div className="events1 d-flex flex-row justify-content-between py-3 px-3">
                <h3>June 2024</h3>
                <h3>Founders Meetup</h3>
                <a href="#">Register Now</a>
            </div>
            <div className="events2 d-flex flex-row justify-content-between py-3 px-3">
                <h4>4:00pm-6:00pm</h4>
                <h4>Add to Google Calendar</h4>
                <h4>Virtual </h4>
            </div>
        </div>
    </div>
  )
}

export default EventsCalendar
