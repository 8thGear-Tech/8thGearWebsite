import galleryData from "../../data/gallerypiggerytraining.json";
import { SinglePiggeryTrainingCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";
import { PiggeryTrainingGalleryHero } from "../../components/Hero/ImageandTextHero";

const PiggeryTrainingPage = () => {
  return (
    <>
      <Navbar17 />
      <PiggeryTrainingGalleryHero />
      <PiggeryTrainingCards />
    </>
  );
};
export const PiggeryTrainingCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mx-5 pt-5">
          {galleryData.gallerypiggery.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={items.id}
                >
                  <SinglePiggeryTrainingCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PiggeryTrainingPage;
