"use client";

import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../common/reusable/SwiperSlider";
import NewsCard from "./NewsCard";

type NewsItem = {
  id: number;
  image: string;
  date: string;
  description: string;
  slug: string;
};
interface NewsProps {
  newsData: NewsItem[];
}

const NewsList = ({ newsData }: NewsProps) => {
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
