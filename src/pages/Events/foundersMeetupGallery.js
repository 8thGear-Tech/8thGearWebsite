import galleryfoundersData from "../../data/galleryFoundermeetup.json";
import { SingleGalleryFounderCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const FoundersMeetupGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <FoundersPictureCards />
      <FoundersVideoCards />
    </>
  );
};
const FoundersPictureCards = () => {
  return (
    <div className="row justify-content-center m-5 p-4">
      {galleryfoundersData.galleryFoundermeetup.map((items) => {
        return (
          <>
            <div className="col-md-4" key={items.id}>
              <SingleGalleryFounderCards {...items} />
            </div>
          </>
        );
      })}
    </div>
  );
};
const FoundersVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryfoundersData.galleryvideocards.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SinglegalleryVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FoundersMeetupGalleryPage;
