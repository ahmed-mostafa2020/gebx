"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

// import CommitmentsList from "../commitments/CommitmentsList";
import SectionTemplate from "../common/reusable/SectionTemplate";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import shapes from "@assets/shapes.png";
// import commitmentBg from "@assets/commitmentBg.png";
import commitment1 from "@assets/commitment1.png";
import commitment2 from "@assets/commitment2.png";

type CommitmentItem = {
  id: number;
  image: StaticImageData;
  description: string;
  link: string;
};

const CommitmentsSection = () => {
  const commitmentsList: CommitmentItem[] = [
    {
      id: 1,
      image: commitment2,
      description:
        "Imagine a world where every business decision leads to a greener planet, where technology and sustainability work hand in hand to shape a future where resources are preserved, communities thrive, and industries innovate responsibly. At GebX, we believe in this world. Our mission is to drive this transformation by building and integrating digital solutions that not only meet the needs of today but also pave the way for a sustainable tomorrow. Through our specialised AIoT technologies and eco-friendly innovations, we’re building the foundation for a world where economic growth and environmental responsibility are one and the same.",
      link: "/1",
    },
    {
      id: 2,
      image: commitment1,
      description:
        "Imagine a world where every business decision leads to a greener planet, where technology and sustainability work hand in hand to shape a future where resources are preserved, communities thrive, and industries innovate responsibly",
      link: "/2",
    },
    {
      id: 3,
      image: commitment2,
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + commitmentsList.length) % commitmentsList.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % commitmentsList.length);
  };

  const imagesList = commitmentsList.map((commitment, index) => {
    const isActive = index === activeIndex;
    const isBefore =
      index ===
      (activeIndex - 1 + commitmentsList.length) % commitmentsList.length;
    const isAfter = index === (activeIndex + 1) % commitmentsList.length;

    return (
      <div
        key={commitment.id}
        className={`transition-transform duration-500 ease-in-out mx-[-20px] ${
          isActive
            ? "scale-125 z-3"
            : isBefore || isAfter
            ? "scale-90"
            : "scale-75"
        }`}
      >
        <Image
          width={200}
          height={200}
          src={commitment.image.src}
          alt={commitment.description}
          className="rounded-full object-cover"
        />
      </div>
    );
  });

  return (
    <section className="relative">
      <Image
        // src={commitmentBg}
        src={commitmentsList[activeIndex].image}
        alt="background"
        className="absolute w-full h-[-webkit-fill-available] object-cover z-[1] opacity-[.14]"
      />

      <SectionTemplate
        image={shapes}
        title="Imagine a Sustainable World -"
        span="Our Commitment"
        backgroundColor="bg-[#023047]"
      >
        <div className="flex flex-col items-center gap-16 relative z-[2] w-full">
          <h2 className="text-sm text-[#f5f5f5] h-[100px]">
            {commitmentsList[activeIndex].description}
          </h2>

          <div className="flex justify-evenly items-center w-full">
            <button onClick={handlePrev} className="relative z-[4]">
              <ArrowBackIosIcon fontSize="large" />
            </button>

            <div className="centered">{imagesList} </div>

            <button onClick={handleNext} className="relative z-[4]">
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          </div>

          <Link
            href={commitmentsList[activeIndex].link}
            className="border text-center w-[280px]  capitalize  py-2 border-white rounded-md hover:bg-black transition-all duration-300 ease-in-out"
          >
            Discover More
          </Link>
        </div>
      </SectionTemplate>
    </section>
  );
};

export default CommitmentsSection;
