import gallerypictures from "../../data/galleryGIZ.json";
import { SingleGalleryGizCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const GIZPage = () => {
  return (
    <>
      <Navbar17 />
      <GizPictureCards />
      <GIZVideoCards />
    </>
  );
};
const GizPictureCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5">
        {gallerypictures.galleryGIZ.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleGalleryGizCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
const GIZVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {gallerypictures.GIZVideo.map((items) => {
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

export default GIZPage;
