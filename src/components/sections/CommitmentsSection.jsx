"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';

import SectionTemplate from "@components/common/reusable/SectionTemplate";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import shapes from "@assets/shapes.png";

const CommitmentsSection = ({ commitmentsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + commitmentsData?.length) % commitmentsData?.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % commitmentsData?.length);
  };

  const imagesList = commitmentsData?.map((commitment, index) => {
    const isActive = index === activeIndex;
    const isBefore =
      index ===
      (activeIndex - 1 + commitmentsData?.length) % commitmentsData?.length;
    const isAfter = index === (activeIndex + 1) % commitmentsData?.length;

    return (
      <div
        key={commitment?.id}
        className={`transition-transform duration-500 ease-in-out mx-[-20px] ${
          isActive ? "scale-125 z-30" : ""
        }`}
      >
        {/* Your component content goes here */}
      </div>
    );
  });

  return (
    <section className="relative">
      <Image
        width={100}
        height={100}
        src={commitmentsData && commitmentsData[activeIndex]?.image}
        alt="background"
        className="absolute w-full h-[-webkit-fill-available] object-cover z-[1] opacity-[.14]"
      />

      <SectionTemplate
        image={shapes}
        title={t('commitments')}
        backgroundColor="bg-[#023047]"
      >
        <div className="flex flex-col items-center gap-16 relative z-[2] w-full">
          <h2 className="text-sm text-[#f5f5f5] h-[100px]">
            {commitmentsData && commitmentsData[activeIndex]?.description}
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
            href={
              commitmentsData ? `/${locale}/${commitmentsData[activeIndex]?.slug}` : `/${locale}`
            }
            className="border text-center w-[280px]  capitalize  py-2 border-white rounded-md hover-black transition-all duration-300 ease-in-out"
          >
            {tCommon('discoverMore')}
          </Link>
        </div>
      </SectionTemplate>
    </section>
  );
};

export default CommitmentsSection;
