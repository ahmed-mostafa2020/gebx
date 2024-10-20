"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Container } from "@mui/material";
import { useState } from "react";

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

const Category = ({ image, link, title, subCategories }: CategoriesItem) => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };
  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const renderedSubCategories = subCategories.map((subCategory, index) => (
    <div
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      key={subCategory.id}
      className={`h-[700px] bg-transparent border-secColor flex items-end justify-end 
        ${index !== 0 && "border-s-2"}`}
    >
      <Accordion
        expanded={expandedIndex === index}
        className="px-10 accordion-upward centered flex-col py-14"
      >
        <AccordionSummary
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          className="text-secColor text-lg font-semibold uppercase w-full"
        >
          <Link href={subCategory.link}>{subCategory.title}</Link>
        </AccordionSummary>
        <AccordionDetails className="text-white leading-6 text-sm border-b-4 border-secColor pt-6 h-[330px] mb-12 font-extralight text-pretty">
          {subCategory.description}
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  return (
    <div className="relative text-center bg-[#BD9C6B40]">
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <Container maxWidth="lg" className="relative pt-20">
        <div className="pt-10 pb-20 border-t-2 border-secColor flex justify-center flex-col gap-10 items-center">
          <Link href={link} className="font-bold text-2xl">
            {title}
          </Link>
        </div>
      </Container>
      <div className="flex">{renderedSubCategories}</div>
    </div>
  );
};

export default Category;
