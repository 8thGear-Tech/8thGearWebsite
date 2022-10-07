import GalleryPictureCard from "../../data/gallerycards.json";
import GalleryVideoCard from "../../data/gallerycards.json";
import { SinglegalleryCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideoCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const ProjectDeliveryGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <GalleryPictureCards />
      <GalleryVideoCards />
    </>
  );
};
const GalleryPictureCards = () => {
  return (
    <>
      <div className="container-fluid ">
        {" "}
        <div className="row justify-content-center m-5 p-5 ">
          {GalleryPictureCard.projectDeliveryPictures.map((items) => {
            return (
              <>
                <div className="col-md-4 my-4" key={items.id}>
                  <SinglegalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const GalleryVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-3 p-4">
        {GalleryVideoCard.projectDeliveryVideos.map((items) => {
          return (
            <>
              <div className="col-md-4 my-6" key={items.id}>
                <SinglegalleryVideoCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProjectDeliveryGalleryPage;
