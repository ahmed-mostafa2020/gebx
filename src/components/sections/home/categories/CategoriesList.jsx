"use client";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Category from "./Category";

const CategoriesList = ({ categoriesList }) => {
  const renderedCategories = categoriesList.map((category) => (
    <SwiperSlide key={category.id}>
      <Category
        image={category.image}
        link={category.link}
        title={category.title}
        subCategories={category.subCategories}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {renderedCategories}
    </Swiper>
  );
};
export default CategoriesList;

