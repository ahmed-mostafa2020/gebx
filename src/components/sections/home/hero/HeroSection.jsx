"use client";

import HerosList from "./HerosList";

const HeroSection = ({ heroData }) => {
  return (
    <section className="hero-section relative mt-[-86px] overflow-hidden">
      <div className="absolute pointer-events-none w-full z-[2] h-full mt-[86px] px-10">
        <div className="h-[140px] border-t-2 border-white"></div>

        <div className="h-[210px] border-s-2 border-white"></div>

        <div className="h-[355px] flex justify-end border-b-2 border-x-2 border-white">
          <div className="w-24 border-t-2 border-white"></div>
        </div>
      </div>

      <HerosList heroData={heroData} />
    </section>
  );
};

export default HeroSection;
