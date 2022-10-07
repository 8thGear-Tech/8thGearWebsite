import galleryData from "../../data/galleryS4P.json";
import { SingleS4PCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const S4PPage = () => {
  return (
    <>
      <Navbar17 />
      <S4PCards />
    </>
  );
};
export const S4PCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryData.gallerys4p.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleS4PCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default S4PPage;
