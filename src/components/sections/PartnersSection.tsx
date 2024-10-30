"use client";
import { Container } from "@mui/material";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

type PartnerItem = {
  id: number;
  image: string;
  title: string;
  slug: string;
};
interface PartnerProps {
  partnersData: PartnerItem[];
}

const PartnersSection = ({ partnersData }: PartnerProps) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    slidesToShow: 7, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
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
          Our partners of impact
        </h2>
      </Container>

      <div className="partner-slider">
        <Slider {...settings}>
          {partnersData?.map((partner) => (
            <Link
              href={`/${partner?.slug}`}
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
