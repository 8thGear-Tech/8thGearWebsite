import galleryData from "../../data/galleryusadf.json";
import { SingleUsadfCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const USADFGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <USADFPictureCards />
      <USADFVideoCards />
    </>
  );
};
const USADFPictureCards = () => {
  return (
    <div className="row justify-content-center m-5 p-4">
      {galleryData.galleryusadf.map((items) => {
        return (
          <>
            <div className="col-md-4" key={items.id}>
              <SingleUsadfCards {...items} />
            </div>
          </>
        );
      })}
    </div>
  );
};

const USADFVideoCards = () => {
  return (
    <>
      <div className="container-fluid row justify-content-center p-5 m-6">
        {galleryData.UsadfVideo.map((items) => {
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

export default USADFGalleryPage;
