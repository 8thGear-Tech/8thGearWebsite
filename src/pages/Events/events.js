import { SuggestAnEventBtn } from "../../components/Buttons/EventsBtn";

import { BlogReadMoreBtn } from "../../components/Buttons/BlogBtn";
import {
  FoundersMeetupReadMoreBtn,
  DemoDayReadMoreBtn,
  GearUpReadMoreBtn,
  GearUpExposeBtn,
} from "../../components/Buttons/EventsBtn";

import { LetUsKnowBtn } from "../../components/Buttons/EventsBtn";
import demoday from "../../assets/images/events/demoday.JPG";
import gearup from "../../assets/images/events/gearup.png";
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
      <EventsCalender />
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
        <div className="col-lg-5 col-md-6 col-sm-12 px-lg-5 d-flex align-items-stretch">
          {" "}
          <div className="mb-5 py-5 eventsCardBg">
            <div className="card-body">
              {" "}
              <h3 className="card-title">GearUp Series</h3>
              <img
                src={gearup}
                className="p-3 mx-auto w-75"
                // width="70px"
                // height="70px"
                alt="..."
              />
              <p className="card-text mx-3 mt-2 mb-4">
                {" "}
                Embracing the path of an entrepreneur can indeed be challenging.
                Kudos to your choice – your determination paves the way for a
                brighter Africa. Keep forging ahead; your efforts will soon
                converge with celestial success.
              </p>
              <GearUpReadMoreBtn />
            </div>
          </div>
        </div>
        {/* <div className="col-lg-5 col-md-6 col-sm-12 px-lg-5 d-flex align-items-stretch">
          {" "}
          <div className="mb-5 py-5 eventsCardBg">
            <div className="card-body">
              <h3 className="card-title">Gear-up </h3>
              <img
                src={demoday}
                className="p-3 mx-auto w-75"
                // width="70px"
                // height="70px"
                alt="..."
              />
              <p className="card-text mx-3 mt-2 mb-4">
                Lorem ipsum dolor sit amet Lorem lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              </p>
              <GearUpReadMoreBtn />
            </div>
          </div>
        </div> */}
      </div>
      {/* <LetUsKnowBtn /> */}
    </div>
  );
};
const EventsCalender = () => {
  return (
    <div className="container-fluid text-center py-2">
      {" "}
      <h4 className="mt-5">Events Calender</h4>
      {/* <p>AUGUST 2023</p> */}
      <div className="py-2 table-responsive">
        <table className="table table-striped ">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <th scope="row">October 27th, 2023</th>
              <td></td>
              <td></td>
              <td>
                {" "}
                <a
                  href="https://us06web.zoom.us/meeting/register/tZcrde-rpj0iGdJB4yZ75Srgw5Ba3-9D2Slq"
                  target="_blank"
                  style={{ color: "#821e6b" }}
                >
                  {/* <button className="EventsRegisterBtn" type="submit"> */}
                  Register Now
                  {/* </button> */}
                </a>
              </td>
              {/* <td style={{ color: "#821e6b" }}>Register Now</td> */}
            </tr>
            <tr>
              <th scope="row">4:00pm - 5:00pm </th>
              <th className="m-0">GearUp Showcase</th>
              <td></td>
              {/* <td>Add to Google Calender</td> */}
              <td>Virtual</td>
            </tr>
            {/* <tr>
              <th scope="row">June 2022</th>
              <td></td>
              <td></td>
              <td>Register Now</td>
            </tr>
            <tr>
              <th scope="row">4:00pm - 6:00pm </th>
              <th className="m-0">Founders Meetup</th>
              <td>Add to Google Calender</td>
              <td>Virtual</td>
            </tr> */}
            {/* <tr>
              <th scope="row">June 2022</th>
              <td></td>
              <td></td>
              <td>Register Now</td>
            </tr>
            <tr>
              <th scope="row">4:00pm - 6:00pm </th>
              <th className="m-0">Founders Meetup</th>
              <td>Add to Google Calender</td>
              <td>Virtual</td>
            </tr>
            <tr>
              <th scope="row">June 2022</th>
              <td></td>
              <td></td>
              <td>Register Now</td>
            </tr>
            <tr>
              <th scope="row">4:00pm - 6:00pm </th>
              <th className="m-0">Founders Meetup</th>
              <td>Add to Google Calender</td>
              <td>Virtual</td>
            </tr> */}
          </tbody>
        </table>
      </div>
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
