"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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

  return (
    <div className="flex flex-col items-center gap-10 relative z-[2]">
      <h2 className="text-xl text-[#f5f5f5] h-[150px]">
        {commitmentsList[activeIndex].description}
      </h2>
      <div className="flex justify-center items-center">
        {commitmentsList.map((commitment, index) => {
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
        })}
      </div>

      <div className="mt-4">
        <button
          onClick={handlePrev}
          className="mx-2 p-2 bg-gray-600 text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="mx-2 p-2 bg-gray-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CommitmentsList;
