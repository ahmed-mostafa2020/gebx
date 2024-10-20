"use client";

import { StaticImageData } from "next/image";

import { SwiperSlide } from "swiper/react";
// import SwiperSlider from "../common/reusable/SwiperSlider";
import NewsCard from "./NewsCard";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@mui/material";

import "swiper/swiper-bundle.css"; // Import Swiper styles

type NewsItem = {
  id: number;
  image: StaticImageData;
  date: string;
  description: string;
  link: string;
};
interface NewsListProps {
  newsList: NewsItem[];
}

const NewsList = ({ newsList }: NewsListProps) => {
  const renderedNewsList = newsList.map((newsCard) => (
    <SwiperSlide key={newsCard.id}>
      <NewsCard
        image={newsCard.image}
        date={newsCard.date}
        description={newsCard.description}
        link={newsCard.link}
      />
    </SwiperSlide>
  ));

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
        className="mySwiper "
      >
        {renderedNewsList}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </Container>
  );
};

export default NewsList;
