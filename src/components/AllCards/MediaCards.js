//GalleryCard

import galleryData from "../../data/gallerypiggerytraining.json";
import gallerypictures from "../../data/galleryEmployabilityGIZ.json";
import galleryusadfData from "../../data/galleryusadf.json";
import galleryinnkeeperData from "../../data/galleryinnkeeperhackathon.json";
import gallerylsetfvisitData from "../../data/gallerylsetfvisit.json";
import gallerylsetfData from "../../data/gallerylsetf.json";
import galleryfounderData from "../../data/galleryFoundermeetup.json";
import galleryprojectData from "../../data/projectdelivery.json";
import gallerydemodayData from "../../data/gallerydemoday.json";
import gallerycardsData from "../../data/gallerycards.json";
import { Link } from "react-router-dom";
// import Record from "../../data/blog.json"
// //GalleryMediaCards
// //AllPortfoliosLogoCard
// //ProjectDeliveryManagedServicesCard

export const AllPortfoliosLogoCard = (props) => {
  const { logo } = props;
  return (
    <div className="align-items-center">
      <img
        className="my-5"
        src={logo}
        alt="Logos"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        // height={150}
      />
    </div>
  );
};

export const ProjectDeliveryManagedServicesCard = (props) => {
  const { image, text, id } = props;
  return (
    <div
      key={id}
      className="col-lg-3 col-md-6 col-sm-12"
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: "url(" + image + ")",
      }}
    >
      <p className="ProjectDeliveryManagedServicesCardText TextAlignCenter ">
        {text}
      </p>
    </div>
  );
};

// export const SingleMediaCards = (props) => {
//   const { image, id } = props;
//   return (
//     <>
//       <img
//         className="my-4 px-6 img-fluid"
//         style={{ width: 358.8 }}
//         src={image}
//         alt={id}
//       />
//     </>
//   );
// };

// export const MediaCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center p-5 m-3">
//         {galleryData.gallerypictures.map((items) => {
//           return (
//             <>
//               <div className="col-md-4" key={items.id}>
//                 <SingleMediaCards {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export const AllPortfoliosLogoCard = (props) =>{
//     const image = props.image;
//     return(
//         <div className="container-fluid">
//         <div style={{borderTop: "1px solid #dee2e6",borderLeft: "1px solid #dee2e6",}} className="row TextAlignCenter border-bottom-0">
//             {

//             Record && Record.map(record => {
//                 return(
//                     <div style={{borderRight: "1px solid #dee2e6",borderBottom: "1px solid #dee2e6",paddingLeft: "20px", paddingRight: "20px",}} className="col-lg-3 col-md-4 col-sm-6 col-6 px-4" key={record.id}>
//                         <img className="my-5" src={ image } alt="Logos" style={{maxWidth: "100%", maxHeigt: "40%",}} height={70}/>
//                     </div>
//                 )
//             })
// }
// </div>
//       </div>
//     )
// };

//Project Delivery

export const SingleGalleryGizCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="img-fluid"
        // style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};
// export const SingleProjectCards = (props) => {
//   const { image, id, text } = props;
//   return (
//     <>
//       <div className="card" style={{ width: 250 }}>
//         <img src={image} className="card-img-top projectCardsimg" alt="..." />
//         <div className="card-body ">
//           <p className="card-text">{text}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export const ProjectCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-3 p-5">
//         {galleryprojectData.projectdelivery.map((items) => {
//           return (
//             <>
//               <div className="col-lg-4 col-md-4 my-3" key={items.id}>
//                 <SingleProjectCards {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export const SingleInnkeeperHackathonGalleryCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SingleITFGalleryCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SinglePiggeryTrainingCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="img-fluid w-100"
        // style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const SingleLsetfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

//Events

export const SingleUsadfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

// export const UsadfCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-5 p-4">
//         {galleryusadfData.galleryusadf.map((items) => {
//           return (
//             <>
//               <div className="col-md-4" key={items.id}>
//                 <SingleUsadfCards {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export const SingleLsetfvisitCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const SingleGalleryFounderCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const SingleDemodayCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="img-fluid" src={image} alt={id} />
    </>
  );
};

export const SinglegalleryCards = (props) => {
  const { image, link, text } = props;
  return (
    <>
      <div className="card successStoryCardBg">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={link} className="text-decoration-none text-black">
            {" "}
            <p className="card-text">{text}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

// export const GalleryCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-5 p-5">
//         {gallerycardsData.gallerycards.map((items) => {
//           return (
//             <>
//               <div className="col-md-4 my-4" key={items.id}>
//                 <SinglegalleryCards {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export const SinglegalleryVideoCards = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card ">
        <iframe src={video} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

// export const GalleryVideoCards = () => {
//   return (
//     <>
//       <div className="row justify-content-center m-3 p-4">
//         {gallerycardsData.galleryvideocards.map((items) => {
//           return (
//             <>
//               <div className="col-md-4 my-6" key={items.id}>
//                 <SinglegalleryVideoCards {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export const SinglegalleryVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe src={video} className="" alt="..." />
      </div>
    </>
  );
};
