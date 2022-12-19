// import { useState } from "react";
import React from "react";
// import reactVideo from "../../assets/videos/reactVideo.mp4";

//AnimationVideoHero
//AboutPageHero
/*
export const AboutPageHero = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const [showPlay, setShowPlay] = useState(true);

  return (
    <div className="position-relative">
      <div className=" AboutPageHeroContainer text-center position-absolute">
        <video
          ref={vidRef}
          loop
          autoPlay
          src={reactVideo}
          type="video/mp4"
          className="AboutPageHero"
          controls={false}
          muted
        />
        <div className="centered d-flex justify-content-center align-items-center">
          {showPlay && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="120"
              fill="currentColor"
              className="bi bi-play-circle play-button-centered"
              viewBox="0 0 16 16"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                  setShowPlay(true);
                } else {
                  vidRef.current.play();
                  setShowPlay(false);
                  // console.log(vidRef.current);
                }
              }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}; */

export const AboutPageHero = () => {
  return (
    <div>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/Wu0azG1ect4"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
