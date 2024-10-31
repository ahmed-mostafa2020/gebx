"use client";

import Hero from "./Hero";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

type HerosItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string | null;
};

interface HerosProps {
  heroData: HerosItem[];
}

const HerosList = ({ heroData }: HerosProps) => {
  const renderedHeros = heroData?.map((hero) => (
    <SwiperSlide key={hero.id}>
      <Hero
        image={hero.image}
        title={hero.title}
        description={hero.description}
        link={hero.link}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper h-full w-full"
    >
      {renderedHeros}
    </Swiper>
  );
};

export default HerosList;
