import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 h-full w-full z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-[2] flex items-center justify-center h-full w-full">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
