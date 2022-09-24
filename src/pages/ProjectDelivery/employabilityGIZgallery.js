import gallerypictures from "../../data/galleryEmployabilityGIZ.json";
import { SingleGalleryGizCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const GIZPage = () => {
  return (
    <>
      <Navbar17 />
      <GizPictureCards />
      {/* <GIZVideoCards /> */}
    </>
  );
};

const GizPictureCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mx-5 pt-5">
          {gallerypictures.galleryGIZ.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={items.id}
                >
                  <SingleGalleryGizCards {...items} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
// const GIZVideoCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-4 p-5">
//         {gallerypictures.GIZVideo.map((items) => {
//           return (
//             <>
//               <div className="col-md-4" key={items.id}>
//                 <SinglegalleryVideo {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default GIZPage;
