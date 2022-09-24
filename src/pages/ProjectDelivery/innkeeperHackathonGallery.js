import galleryInnkeeperData from "../../data/galleryinnkeeperhackathon.json";
import { SingleInnkeeperHackathonGalleryCards } from "../../components/AllCards/MediaCards";
import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";

const InnkeeperHackathonGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <InnkeeperHackathonGalleryPictureCards />
      {/* <InnkeeperHackathonGalleryVideoCards /> */}
    </>
  );
};
const InnkeeperHackathonGalleryPictureCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryInnkeeperData.galleryInnkeeper.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleInnkeeperHackathonGalleryCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
// const InnkeeperHackathonGalleryVideoCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-4 p-5">
//         {galleryInnkeeperData.innkeeperVideo.map((items) => {
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

export default InnkeeperHackathonGalleryPage;
