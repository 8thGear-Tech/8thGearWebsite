import React from 'react';
import Hero from './Hero';
import EventsCalendar from './EventsCalendar';
import EventsPortfolio from './EventsPortfolio';
import EventGallery from './EventGallery';
import "./eventsNew.css";

const EventsNew = () => {
    return (
        <div>
            <Hero />
            <EventsCalendar />
            <EventsPortfolio />
            <EventGallery />
        </div>
    );
}

export default EventsNew;
