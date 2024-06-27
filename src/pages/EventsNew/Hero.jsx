import React, { useEffect, useState } from 'react'
import "./eventsNew.css"

import { Navbar29 } from "../../components/Navbar";

const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const dynamicText = ["special", "innovative", "insightful", "valuable"];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
                setFade(true); 
            }, 500); 
        }, 3000);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
      <div className="hero text-center position-relative">
            <Navbar29 />
            <div className="d-block w-100" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url(/images/eventsNew/eventHero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    textAlign: 'left',
                }}>
                <h3 className='heroText'>Our events are<span className={`heroTextSpan p-3 ${fade ? 'fade-in' : 'fade-out'}`}> {dynamicText[currentTextIndex]} </span></h3>
                </div>
            {/* <img src="/images/eventsNew/eventsHero.png" alt="" /> */}
        </div>
    </div>
  )
}

export default Hero
