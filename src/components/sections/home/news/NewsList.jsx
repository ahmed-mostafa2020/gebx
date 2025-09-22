"use client";

import { SwiperSlide } from "swiper/react";
import SwiperSlider from "@components/common/reusable/SwiperSlider";
import NewsCard from "./NewsCard";

const NewsList = ({ newsData }) => {
  const renderedNewsList = newsData?.map((newsCard) => (
    <SwiperSlide key={newsCard.id}>
      <NewsCard
        image={newsCard.image}
        date={newsCard.date}
        description={newsCard.description}
        slug={newsCard.slug}
      />
    </SwiperSlide>
  ));

  return <SwiperSlider>{renderedNewsList}</SwiperSlider>;
};

export default NewsList;
