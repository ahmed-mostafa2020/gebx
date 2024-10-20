"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CommitmentItem = {
  id?: number;
  image: StaticImageData;
  description: string;
  link: string;
};

interface CommitmentListProps {
  commitmentsList: CommitmentItem[];
}

const CommitmentsList = ({ commitmentsList }: CommitmentListProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first commitment

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
            ? "scale-125 z-10"
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
    <div className="flex flex-col items-center gap-10 relative z-[2] w-full">
      <h2 className="text-sm text-[#f5f5f5] h-[150px]">
        {commitmentsList[activeIndex].description}
      </h2>

      <div className="flex justify-evenly items-center w-full">
        <button onClick={handlePrev} className="">
          <ArrowBackIosIcon fontSize="large" />
        </button>

        <div className="centered">{imagesList} </div>

        <button onClick={handleNext} className="">
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>

      <div className="mt-4"></div>
    </div>
  );
};

export default CommitmentsList;
