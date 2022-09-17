import galleryData from "../../data/gallerydemoday.json";
import { SingleDemodayCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const DemoDayGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <DemoDayPictureCards />
      <DemoDayVideoCards />
    </>
  );
};
const DemoDayPictureCards = () => {
  return (
    <div className="row justify-content-center m-5 p-4">
      {galleryData.gallerydemoday.map((items) => {
        return (
          <>
            <div className="col-md-4" key={items.id}>
              <SingleDemodayCards {...items} />
            </div>
          </>
        );
      })}
    </div>
  );
};

const DemoDayVideoCards = () => {
  return (
    <>
      <div className="container-fluid row justify-content-center p-5 m-6">
        {galleryData.Demovideo.map((items) => {
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

export default DemoDayGalleryPage;
