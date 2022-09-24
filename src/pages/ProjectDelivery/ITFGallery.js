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
      <div className="row justify-content-center m-4 p-5">
        {galleryITFData.galleryITF.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleITFGalleryCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default ITFGalleryPage;
