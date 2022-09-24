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
    <div className="container-fluid">
      <div className="row justify-content-center mx-5 pt-5">
        {galleryData.gallerydemoday.map((items) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 col-sm-10 my-4" key={items.id}>
                <SingleDemodayCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const DemoDayVideoCards = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center mx-5">
          {galleryData.Demovideo.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-10 my-5"
                  key={items.id}
                >
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
