import React, { useEffect, useState } from "react";
import { HomepageNav} from "../../components/Navbar";
import "./eventsNew.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const dynamicText = ["informative", "innovative", "insightful", "valuable"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % dynamicText.length
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [dynamicText.length]);

  return (
    <div className="hero text-center position-relative">
      {/* <Navbar29 /> */}
      <HomepageNav />
      <div className="hero-background">
        <h3 className="heroText">
          Our events are
          <span className={`heroTextSpan p-3 ${fade ? "fade-in" : "fade-out"}`}>
            {dynamicText[currentTextIndex]}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
