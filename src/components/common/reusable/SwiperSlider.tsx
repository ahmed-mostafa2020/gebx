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
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth <= 760 ? "vertical" : "horizontal");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial direction

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container maxWidth="lg">
      <Swiper
        slidesPerView={2}
        direction={direction}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="w-full h-full"
      >
        {children}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </Container>
  );
};

export default SwiperSlider;
