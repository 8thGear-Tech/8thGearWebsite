import galleryITFData from "../../data/galleryITF.json";
import { SingleITFGalleryCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const ITFGalleryPage = () => {
  return (
    <>
      <Navbar17 />
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
