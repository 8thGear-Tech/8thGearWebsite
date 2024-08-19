import galleryData from "../../data/FMU_Q3.json";
import { SingleDemodayCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const FMU_Q3 = () => {
  return (
    <>
      <Navbar17 />
      <DemoDayPictureCards />
    </>
  );
};

const DemoDayPictureCards = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mx-5 pt-5">
        {galleryData.foundersMeetup24Q2.map((items) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 col-sm-10 my-4" key={items.id}>
                <SingleDemodayCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FMU_Q3;
