import galleryITFData from "../../data/galleryITF.json";
import { SingleITFGalleryCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";
import { ITFGalleryHero } from "../../components/Hero/ImageandTextHero";

const ITFGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <ITFGalleryHero />
      <ITFGalleryPictureCards />
      {/* <InnkeeperHackathonGalleryVideoCards /> */}
    </>
  );
};

const ITFGalleryPictureCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mx-5 pt-5">
          {galleryITFData.galleryITF.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={items.id}
                >
                  <SingleITFGalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ITFGalleryPage;
