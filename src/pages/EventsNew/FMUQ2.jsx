import galleryData from "../../data/FMU_Q2.json";
import { SingleDemodayCards } from "../../components/AllCards/MediaCards";
// import { SinglegalleryVideo } from "../../components/AllCards/MediaCards";
import { Navbar17 } from "../../components/Navbar";
// import { DemoDayGalleryHero } from "../../components/Hero/ImageandTextHero";

const FMU_Q2 = () => {
  return (
    <>
      <Navbar17 />
      {/* <DemoDayGalleryHero /> */}
      <DemoDayPictureCards />
      {/* <DemoDayVideoCards /> */}
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

// const DemoDayVideoCards = () => {
//   return (
//     <>
//       <div className="container-fluid ">
//         <div className="row justify-content-center mx-5">
//           {galleryData.fourthAnniversaryVideo.map((items) => {
//             return (
//               <>
//                 <div
//                   className="col-lg-4 col-md-6 col-sm-10 my-5"
//                   key={items.id}
//                 >
//                   <SinglegalleryVideo {...items} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

export default FMU_Q2;
