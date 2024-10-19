"use client";

import { StaticImageData } from "next/image";

import HerosList from "../hero/HerosList";

import heroImage from "@assets/hero1.png";

type HerosItem = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const HeroSection = () => {
  const herosList: HerosItem[] = [
    {
      id: 1,
      image: heroImage,
      title: "ONE SUSTAINABILITY",
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/",
    },
    {
      id: 2,
      image: heroImage,
      title: "ONE SUSTAINABILITY",
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/",
    },
    {
      id: 3,
      image: heroImage,
      title: "ONE SUSTAINABILITY",
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/",
    },
    {
      id: 4,
      image: heroImage,
      title: "ONE SUSTAINABILITY",
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/",
    },
  ];

  return (
    <section className="hero-section relative mt-[-86px] overflow-hidden">
      <div className="absolute w-full z-[2] h-full mt-[86px] px-10">
        <div className="h-[140px] border-t-2 border-white"></div>

        <div className="h-[210px] border-s-2 border-white"></div>

        <div className="h-[355px] flex justify-end border-b-2 border-x-2 border-white">
          <div className="w-24 border-t-2 border-white"></div>
        </div>
      </div>

      <HerosList herosList={herosList} />
    </section>
  );
};

export default HeroSection;
