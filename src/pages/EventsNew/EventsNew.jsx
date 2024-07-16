import React from 'react';
import Hero from './Hero';
import EventsCalendar from './EventsCalendar';
import EventsPortfolio from './EventsPortfolio';
import EventGallery from './EventGallery';
import "./eventsNew.css";

// import { Events } from '../Events/events';


const EventsNew = () => {
    return (
        <div>
            <Hero />
            <EventsCalendar />
            <EventsPortfolio />
            <EventGallery />
            {/* <Events /> */}
        </div>
    );
}

export default EventsNew;
