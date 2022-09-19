import galleryFUTAData from "../../data/galleryfuta.json";
import { SingleFUTACards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const FUTAPage = () => {
  return (
    <>
      <Navbar17 />
      <FUTAPictureCards />
      <FUTAVideoCards />
    </>
  );
};
const FUTAPictureCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryFUTAData.galleryFUTA.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleFUTACards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
const FUTAVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryFUTAData.futaVideo.map((items) => {
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

export default FUTAPage;
