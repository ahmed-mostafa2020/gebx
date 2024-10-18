"use client";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Category from "./Category";

type SubCategory = {
  id: number;
  link: string;
  title: string;
  description: string;
};

type CategoriesItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  link: string;
  subCategories: SubCategory[];
};

interface CategoriesListProps {
  categoriesList: CategoriesItem[];
}

const CategoriesList = ({ categoriesList }: CategoriesListProps) => {
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
