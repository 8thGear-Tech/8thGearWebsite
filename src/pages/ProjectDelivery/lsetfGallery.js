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
      <div className="container-fluid">
        <div className="row justify-content-center mx-5 pt-5">
          {gallerylsetfData.gallerylseft.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={items.id}
                >
                  <SingleLsetfCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
const LSETFVideoCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mx-5">
          {gallerylsetfData.galleryvideocards.map((items) => {
            return (
              <>
                <div className="" key={items.id}>
                  <SinglegalleryVideo {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LSETFPage;
