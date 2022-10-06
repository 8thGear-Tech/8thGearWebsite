// import React from "react";
// import { EventsViewMoreBtn } from "../../components/Buttons/EventsBtn";
// import { SuggestAnEventBtn } from "../../components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "../../components/Buttons/EventsBtn";
// import { EventsViewMoreBtn } from "../components/Buttons/EventsBtn";
import { SuggestAnEventBtn } from "../../components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "../components/Buttons/EventsBtn";
// import EventPageHero from "../../components/Hero/CarouselHero";

import { BlogReadMoreBtn } from "../../components/Buttons/BlogBtn";
import { FoundersMeetupReadMoreBtn } from "../../components/Buttons/EventsBtn";
import { DemoDayReadMoreBtn } from "../../components/Buttons/EventsBtn";
import { LetUsKnowBtn } from "../../components/Buttons/EventsBtn";
import demoday from "../../assets/images/events/demoday.JPG";
import foundersmeetup from "../../assets/images/events/foundersmeetup.jpg";
import { Navbar14 } from "../../components/Navbar";
import { SinglegalleryCards } from "../../components/AllCards/MediaCards";
import eventsGallery from "../../data/gallerycards.json";
import { EventsViewMoreBtn } from "../../components/Buttons/EventsBtn";
import SuggestAnEventForm from "../../components/Forms/EnquiresandSuggestionForm";
import { EventPageHero } from "../../components/Hero/CarouselHero";
import { EventsPageHero } from "../../components/Hero/ImageandTextHero";

const EventsPage = () => {
  return (
    <>
      <Navbar14 />
      <EventsPageHero />
      <Events />
      <SuggestAnEvent />
      <EventsGallery />
    </>
  );
};
const Events = () => {
  return (
    <div className="container-fluid text-center p-5 sectionOneBg">
      {" "}
      <h3 className="">Exclusive to the portfolio</h3>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-6 col-sm-12 px-lg-5 d-flex align-items-stretch">
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
              <p className="card-text mx-3  mt-2 mb-4">
                {" "}
                It is important to travel the lonely path of entrepreneurship
                with like-minded individuals. Synergy is created when founders
                collaborate, and individuals are inspired, motivated, and
                challenged to pursue their dreams.
              </p>
              <FoundersMeetupReadMoreBtn />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 px-lg-5 d-flex align-items-stretch">
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
              <p className="card-text mx-3 mt-2 mb-4">
                {" "}
                A value-packed day where every member of the ecosystem is
                represented with the sole objective of witnessing the beauty of
                the creative mind and hearing great ideas that can scale being
                pitched. It is a quarterly event where businesses are admitted
                into the 8thGear Venture studio
              </p>
              <DemoDayReadMoreBtn />
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
    <div className="container-fluid text-center px-5 py-2">
      {" "}
      <h4 className="mt-5">Suggest an event or speaker</h4>
      <p>
        If you have a suggestion for an event or potential speaker, we would
        love to hear from you.
      </p>
      <div className="py-2">
        {" "}
        {/* <LetUsKnowBtn /> */}
        <SuggestAnEventForm />
      </div>
    </div>
  );
};

const EventsGallery = () => {
  return (
    <>
      <div className="container-fluid successStoryBg">
        {" "}
        <div className="row justify-content-center mt-5 mb-2 py-5 mx-lg-5 px-3">
          <h4 className="text-center">Gallery</h4>
          {eventsGallery.eventsGallerySection.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-10 my-4 d-flex align-items-stretch "
                  key={items.id}
                >
                  <SinglegalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="d-flex justify-content-center pb-4">
          <EventsViewMoreBtn />
        </div> */}
      </div>
    </>
  );
};
// const Events = () => {
//   return (
//     <>
//       {/* <SuggestAnEventForm /> */}
//       <CoWorkingPageHero />
//       {/* <EventPageHero /> */}
//       {/* <SuggestAnEventBtn /> */}
//     </>
//   );
// };

export default EventsPage;
