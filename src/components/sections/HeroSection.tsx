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
  ];

  return (
    <section className="hero-section mt-[-86px] h-[848px]">
      <HerosList herosList={herosList} />
    </section>
  );
};

export default HeroSection;
