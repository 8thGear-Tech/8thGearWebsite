import galleryData from "../../data/gallerypiggerytraining.json";
import { SinglePiggeryTrainingCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const PiggeryTrainingPage = () => {
  return (
    <>
      <Navbar17 />
      <PiggeryTrainingCards />
    </>
  );
};
export const PiggeryTrainingCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryData.gallerypiggery.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SinglePiggeryTrainingCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PiggeryTrainingPage;
