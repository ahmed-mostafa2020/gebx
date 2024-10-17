"use client";

import { StaticImageData } from "next/image";

import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../common/reusable/SwiperSlider";
import NewsCard from "./NewsCard";

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

  return <SwiperSlider>{renderedNewsList}</SwiperSlider>;
};

export default NewsList;
