//internal import
import { Navbar21 } from "../../components/Navbar";
import { VideoResourceHero } from "../../components/Hero/ImageandTextHero";



const VideoReadMore = () => {
  return (
    <>
      <Navbar21 />
      <VideoResourceHero />
      <Video />
    </>
  );
};

const Video = () => {
  return (
    <div className="container py-5 px-4">
      <div className="responsive-iframe d-flex justify-content-center">
        <iframe
          src={"https://www.youtube.com/embed/RH-Sv2J1PCU"}
          width="600"
          height="400"
          //   frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //   allowFullscreen
          title="managed-services"
        ></iframe>
      </div>
      <div className="text-center mt-4">
        <h3>Managed Services</h3>
        <p>Let’s Get You to Our Unlimited Offers on Tech</p>
      </div>
      <div className="float-start float-end">
        {" "}
        <p className="pt-4">
          For entrepreneurship, combining company building with venture funding
          combining company building with venture funding. For entrepreneurship,
          combining company building with venture funding, combining company
          building with venture funding. FFor entrepreneurship, combining
          company building with venture funding combining company building with
          venture funding. For entrepreneurship, combining company building with
          venture funding, combining company building
        </p>
      </div>
      <p className="">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
      <p className="">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
      <p className="pb-5">
        For entrepreneurship, combining company building with venture funding
        combining company building with venture funding. For entrepreneurship,
        combining company building with venture funding, combining company
        building with venture funding. FFor entrepreneurship, combining company
        building with venture funding combining company building with venture
        funding. For entrepreneurship, combining company building with venture
        funding, combining company building
      </p>
    </div>
  );
};

export default VideoReadMore;
