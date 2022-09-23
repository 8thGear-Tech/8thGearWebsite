import galleryData from "../../data/gallerydemoday.json";
import { SingleDemodayCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";
import { DemoDayGalleryHero } from "../../components/Hero/ImageandTextHero";
const DemoDayGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <DemoDayGalleryHero />
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
      <div className="container-fluid ">
        <div className="row d-flex justify-content-center">
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
      </div>
    </>
  );
};

export default DemoDayGalleryPage;
