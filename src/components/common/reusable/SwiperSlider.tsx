"use client";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@mui/material";

import "swiper/swiper-bundle.css"; // Import Swiper styles

type ChildrenProps = {
  children: React.ReactNode;
};

const SwiperSlider = ({ children }: ChildrenProps) => {
  const settings = {
    spaceBetween: 10,
    slidesPerView: 1, // Default to 1 slide
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1, // Show 1 slide
      },
      1024: {
        slidesPerView: 2, // Show 2 slides
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <Swiper
        {...settings}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {children}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </Container>
  );
};

export default SwiperSlider;
