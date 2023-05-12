import { Navbar21 } from "../../components/Navbar";

import Videobackground from "../../assets/images/resources/Videobackground.png";
import { VideoCard } from "../../components/AllCards/ResourceVideoCard";
import ResourceNavBar from "../../components/Hero/VideoCard";
import { DetailsCard } from "../../components/AllCards/ResourceVideoCard";

const VideoDetail = () => {
  return (
    <>
      <Navbar21 />
      <ResourceNavBar />
      <div className="detailBg">
        <DetailsCard />
        <div className="container">
          {/* <div className="container mt-5"> */}
          <h2>Videos In BMC</h2>
          <VideoCard />
        </div>
      </div>
    </>
  );
};
export default VideoDetail;
