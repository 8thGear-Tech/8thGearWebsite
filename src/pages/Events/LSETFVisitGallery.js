import galleryData from "../../data/gallerylsetfvisit.json";
import { SingleLsetfvisitCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const LSETFGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <LSETFPictureCards />
      <LSETFVideoCards />
    </>
  );
};
const LSETFPictureCards = () => {
  return (
    <div className="row justify-content-center m-5 p-4">
      {galleryData.gallerylseftvisit.map((items) => {
        return (
          <>
            <div className="col-md-4" key={items.id}>
              <SingleLsetfvisitCards {...items} />
            </div>
          </>
        );
      })}
    </div>
  );
};

const LSETFVideoCards = () => {
  return (
    <>
      <div className="container-fluid row justify-content-center p-5 m-6">
        {galleryData.Lsetfvisit.map((items) => {
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

export default LSETFGalleryPage;
