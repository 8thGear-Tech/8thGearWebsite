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
import gallerycardsData from "../../data/gallerycards.json";
import data from "../../data/galleryFoundermeetup.json";
import futaData from "../../data/galleryfuta.json";
import LsetfVideo from "../../data/gallerylsetf.json";
import LsetfvisitVideo from "../../data/gallerylsetfvisit.json";
import Demodata from "../../data/gallerydemoday.json";
import UsadfData from "../../data/galleryusadf.json";
import S4pData from "../../data/galleryS4P.json";
import Projectdata from "../../data/projectdelivery.json";
import GIZData from "../../data/galleryGIZ.json";

export const SingleMediaCards = (props) => {
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

export const MediaCards = () => {
  return (
    <>
      <div className="row justify-content-center p-5 m-3">
        {galleryData.gallerypictures.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleMediaCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleS4PVideo = (props) => {
  const { video, id } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="350"
          height="200"
          src={video}
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="card-body"></div>
      </div>
    </>
  );
};
export const S4pVideo = () => {
  return (
    <>
      <div className="row justify-content m-4 p-4">
        {S4pData.S4pVideo.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items}>
                <SingleS4PVideo {...items} />
              </div>
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
      <img
        className="my-4 px-6 img-fluid"
        style={{ width: 358.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const GalleryGizCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5">
        {gallerypictures.galleryGIZ.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleGalleryGizCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleGizVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const GIZVideo = () => {
  return (
    <>
      <div className="row justify-content m-4 p-4">
        {GIZData.GIZVideo.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items}>
                <SingleGizVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

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

export const UsadfCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5 p-4">
        {galleryusadfData.galleryusadf.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleUsadfCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleUsadfVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const UsadfVideo = () => {
  return (
    <>
      <div className="row justify-content m-4 p-4">
        {UsadfData.UsadfVideo.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items}>
                <SingleUsadfVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleFutaCards = (props) => {
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

export const FutaCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-5">
        {galleryfutaData.galleryfuta.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleFutaCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleFutaVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const FutaVideo = () => {
  return (
    <>
      <div className="row justify-content m-4 p-4">
        {futaData.futaVideo.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items}>
                <SingleFutaVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

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

export const LsetfvisitCards = () => {
  return (
    <>
      <div className="row justify-content-center m-2 p-5">
        {gallerylsetfvisitData.gallerylseftvisit.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleLsetfvisitCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export const SingleVideoLsetfvisit = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const VideoLsetfvisit = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4 ">
        {LsetfvisitVideo.Lsetfvisit.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleVideoLsetfvisit {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleLsetfCards = (props) => {
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

export const LsetfCards = () => {
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
export const SingleVideoLsetf = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const VideoLsetf = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4 ">
        {LsetfVideo.galleryvideocards.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleVideoLsetf {...items} />
              </div>
            </>
          );
        })}
      </div>
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

export const FounderCards = () => {
  return (
    <div className="row justify-content-center m-5 p-4">
      {galleryfounderData.galleryFoundermeetup.map((items) => {
        return (
          <>
            <div className="col-md-4" key={items.id}>
              <SingleGalleryFounderCards {...items} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export const SingleVideoCards = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};
export const VideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4 ">
        {data.galleryvideocards.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleVideoCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const SingleProjectCards = (props) => {
  const { image, id, text } = props;
  return (
    <>
      <div className="card" style={{ width: 250 }}>
        <img src={image} className="card-img-top projectCardsimg" alt="..." />
        <div className="card-body ">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};
export default SingleProjectCards;

export const ProjectCards = () => {
  return (
    <>
      <div className="row justify-content-center m-3 p-5">
        {galleryprojectData.projectdelivery.map((items) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 my-3" key={items.id}>
                <SingleProjectCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleProjectVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="200"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};

export const ProjectVideo = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4">
        {Projectdata.ProjectVideo.map((items) => {
          return (
            <>
              <div className="col-md-4 my-3" key={items.id}>
                <SingleProjectVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleDemodayCards = (props) => {
  const { image, id } = props;
  return (
    <>
      <img
        className="my-3 px-5 img-fluid"
        style={{ width: 368.8 }}
        src={image}
        alt={id}
      />
    </>
  );
};

export const DemodayCards = () => {
  return (
    <>
      <div className="container-fluid row justify-content-center p-5 m-6">
        {gallerydemodayData.gallerydemoday.map((items) => {
          return (
            <>
              <div className="col-md-4" key={items.id}>
                <SingleDemodayCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SingleDemoVideo = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="200"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};

export const DemoVideo = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4">
        {Demodata.Demovideo.map((items) => {
          return (
            <>
              <div className="col-md-4 my-3" key={items.id}>
                <SingleDemoVideo {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SinglegalleryCards = (props) => {
  const { image, id, text } = props;
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export const GalleryCards = () => {
  return (
    <>
      <div className="row justify-content-center m-5 p-5">
        {gallerycardsData.gallerycards.map((items) => {
          return (
            <>
              <div className="col-md-4 my-4" key={items.id}>
                <SinglegalleryCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const SinglegalleryVideoCards = (props) => {
  const { video, id, text } = props;
  return (
    <>
      <div className="card">
        <iframe
          width="560"
          height="200"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-body">
          <p className="card-text">{text} </p>
        </div>
      </div>
    </>
  );
};

export const GalleryVideoCards = () => {
  return (
    <>
      <div className="row justify-content-center m-4 p-4">
        {gallerycardsData.galleryvideocards.map((items) => {
          return (
            <>
              <div className="col-md-4 my-3" key={items.id}>
                <SinglegalleryVideoCards {...items} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

// //GalleryMediaCards
// //AllPortfoliosLogoCard
// //ProjectDeliveryManagedServicesCard
