import EventsPictureCard from "../../data/gallerycards.json";
import EventsVideoCard from "../../data/gallerycards.json";
import { SinglegalleryCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideoCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const EventsGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <EventsPictureCards />
      <EventsVideoCards />
    </>
  );
};
const EventsPictureCards = () => {
  return (
    <>
      <div className="container-fluid ">
        {" "}
        <div className="row justify-content-center m-5 p-5 ">
          {EventsPictureCard.eventsGalleryPagePictures.map((items) => {
            return (
              <>
                <div className="col-md-4 my-4" key={items.id}>
                  <SinglegalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const EventsVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-3 p-4">
        {EventsVideoCard.eventsGalleryPageVideos.map((items) => {
          return (
            <>
              <div className="col-md-4 my-6" key={items.id}>
                <SinglegalleryVideoCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default EventsGalleryPage;
