"use client";
import { Container } from "@mui/material";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const PartnersSection = ({ partnersData }) => {
  const t = useTranslations('home');
  const locale = useLocale();
  const settings = {
    // Corrected properties
    autoplay: true, // Use a boolean value for autoplay
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    infinite: true, // Use a boolean value for infinite looping
    speed: 5000, // A valid property for animation speed
    cssEase: "linear", // Keep as a string
    slidesToShow: partnersData?.length > 7 ? 7 : partnersData?.length,
    slidesToScroll: 1, // Use a numeric value
    responsive: [
      {
        breakpoint: 1024, // Use a numeric breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Use a numeric breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Use a numeric breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // const duplicateImages = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="bg-[#F5F5F5] pb-32 overflow-hidden flex flex-col gap-10 border-b-4 border-secColor">
      <Container maxWidth="lg" className="relative pt-20 ">
        <h2 className="pt-6 border-t-2 border-secColor w-full text-center font-bold text-[28px] text-[#065750]">
          {t('partnersTitle')}
        </h2>
      </Container>

      <div className="partner-slider">
        <Slider {...settings}>
          {partnersData?.map((partner) => (
            <Link
              href={`/${locale}/${partner?.slug}`}
              className="border-none text-black"
              key={partner?.id}
            >
              <Image
                src={partner?.image}
                alt={partner?.title}
                width={170}
                height={128}
                className="inline-block w-44 h-32 grayscale"
              />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSection;
