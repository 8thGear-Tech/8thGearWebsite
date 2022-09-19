import gallerylsetfData from "../../data/gallerylsetf.json";
import { SingleLsetfCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const LSETFPage = () => {
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
    <>
      <div className="row justify-content-center m-5">
        {gallerylsetfData.gallerylseft.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleLsetfCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
const LSETFVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {gallerylsetfData.galleryvideocards.map((items) => {
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

export default LSETFPage;
