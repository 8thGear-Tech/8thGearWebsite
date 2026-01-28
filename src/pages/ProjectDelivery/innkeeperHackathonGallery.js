import galleryInnkeeperData from "../../data/galleryinnkeeperhackathon.json";
import { SingleInnkeeperHackathonGalleryCards } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";
import { HackathonGalleryHero } from "../../components/Hero/ImageandTextHero";

const InnkeeperHackathonGalleryPage = () => {
  return (
    <>
      <Navbar17 />
      <HackathonGalleryHero />
      <InnkeeperHackathonGalleryPictureCards />
      {/* <InnkeeperHackathonGalleryVideoCards /> */}
    </>
  );
};

const InnkeeperHackathonGalleryPictureCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mx-5 pt-5">
          {galleryInnkeeperData.galleryInnkeeper.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={items.id}
                >
                  <SingleInnkeeperHackathonGalleryCards {...items} />
                </div>
              </>
            );
          })}
        </div>
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
