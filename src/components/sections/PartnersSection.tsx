"use client";
import { Container } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface AutoScrollSliderProps {
  logos: StaticImageData[];
}

const PartnersSection = ({ logos }: AutoScrollSliderProps) => {
  const extendedLogos = [...logos, ...logos];

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

  if (logos.length === 0) {
    return <div>No logos to display</div>;
  }

  return (
    <section className="bg-[#F5F5F5] pb-32 overflow-hidden flex flex-col gap-10 border-b-4 border-secColor">
      <Container maxWidth="lg" className="relative pt-20 ">
        <h2 className="pt-6 border-t-2 border-secColor w-full text-center font-bold text-[28px] text-[#065750]">
          Our partners of impact
        </h2>
      </Container>

      <div className="partner-slider">
        <Slider {...settings}>
          {extendedLogos.map((logo, index) => (
            <div className="border-none " key={index}>
              <Image
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={170}
                height={128}
                className="inline-block w-44 h-32 grayscale"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSection;
