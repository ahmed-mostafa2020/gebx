"use client";

import React, { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@mui/material";

type ChildrenProps = {
  children: React.ReactNode;
};

const SwiperSlider = ({ children }: ChildrenProps) => {
  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 3,
    spaceBetween: 30,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setSwiperParams({
          slidesPerView: 1,
          spaceBetween: 10,
        });
      } else {
        setSwiperParams({
          slidesPerView: 2,
          spaceBetween: 30,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial params

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container maxWidth="lg">
      <Swiper
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        // "@0.75": {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        // "@1.00": {
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        // },
        // "@1.50": {
        //   slidesPerView: 4,
        //   spaceBetween: 50,
        // },
        // }}
        {...swiperParams}
        // direction={direction}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        // className="w-full h-full md:h-96"
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
