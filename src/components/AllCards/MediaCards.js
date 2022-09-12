//GalleryCard

import galleryData from "../../data/galleryS4P.json";
import gallerypictures from "../../data/galleryGIZ.json";
import galleryusadfData from "../../data/galleryusadf.json";
import galleryfutaData from "../../data/galleryfuta.json";
import gallerylsetfvisitData from "../../data/gallerylsetfvisit.json";
import gallerylsetfData from "../../data/gallerylsetf.json";
import galleryfounderData from "../../data/galleryFoundermeetup.json";
import galleryprojectData from "../../data/projectdelivery.json";
import gallerydemodayData from "../../data/gallerydemoday.json";

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

export const SingleUsadfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const UsadfCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {galleryusadfData.galleryusadf.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleUsadfCards {...items} />
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

export const SingleFutaCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const FutaCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {galleryfutaData.galleryfuta.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleFutaCards {...items} />
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

export const SingleLsetfvisitCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const LsetfvisitCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {gallerylsetfvisitData.gallerylseftvisit.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleLsetfvisitCards {...items} />
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

export const SingleLsetfCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const LsetfCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {gallerylsetfData.gallerylseft.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleLsetfCards {...items} />
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

export const SingleGalleryFounderCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const FounderCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {galleryfounderData.galleryFoundermeetup.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleGalleryFounderCards {...items} />
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

export const SingleProjectCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const ProjectCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {galleryprojectData.projectdelivery.map((items) => {
            return (
              <>
                <div className="d-flex justify-content-between" key={items.id}>
                  <SingleProjectCards {...items} />
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

export const SingleDemodayCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img className="" style={{ width: 358.8 }} src={image} alt={id} />
    </>
  );
};

export const DemodayCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {gallerydemodayData.gallerydemoday.map((items) => {
            return (
              <>
                <div
                  className="row d-flex justify-content-between col-md-4 "
                  key={items.id}
                >
                  <SingleDemodayCards {...items} />
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

// //GalleryMediaCards
// //AllPortfoliosLogoCard
// //ProjectDeliveryManagedServicesCard
