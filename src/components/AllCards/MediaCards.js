//GalleryCard

import galleryData from "../../data/galleryS4.json";
import gallerypictures from "../../data/galleryGIZ.json";
import galleryusadf from "../../data/galleryusadf.json";

export const SingleMediaCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const MediaCards = () => {
  return (
    <>
      <div className="row d-flex justify-content-between col-md-4 ">
        {galleryData.gallerypictures.map((items) => {
          return (
            <>
              <div className="col" key={items.id}>
                <SingleMediaCards {...items} />
              </div>
              ;
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleGalleryGizCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const GalleryGizCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {gallerypictures.galleryGIZ.map((items) => {
            return (
              <>
                <div className="" key={items.id}>
                  <SingleGalleryGizCards {...items} />
                </div>
                ;
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export const SingleUsadfCards = (props) => {
// //   const { image, id } = props;
// //   return (
// //     <>
// //       <img className="" style={{ width: 358.8 }} src={image} alt={id} />
// //     </>
// //   );
// // };

// // export const UsadfCards = () => {
// //   return (
// //     <>
// //       <div className="row">
// //         <div className="col-md-4">
// //           {galleryData.gallerypictures.map((items) => {
// //             return (
// //               <>
// //                 <div className="d-flex justify-content-between" key={items.id}>
// //                   <SingleUsadfCards {...items} />
// //                 </div>
// //                 ;
// //               </>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// //GalleryMediaCards
// //AllPortfoliosLogoCard
// //ProjectDeliveryManagedServicesCard
