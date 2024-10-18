import Image, { StaticImageData } from "next/image";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Container } from "@mui/material";

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
  const renderedSubCategories = subCategories.map((subCategory, index) => (
    <div
      key={subCategory.id}
      className={`h-[700px] bg-transparent border-secColor flex items-end justify-end ${
        index !== 0 && "border-s-2"
      }`}
    >
      <Accordion className="accordion-upward centered flex-col bg-[#00000070] py-10">
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-secColor font-semibold uppercase"
        >
          {subCategory.title}
        </AccordionSummary>
        <AccordionDetails className="text-white leading-6 text-sm border-b-4 border-secColor mx-10 pt-6 h-[330px] mb-12 font-extralight text-pretty">
          {subCategory.description}
        </AccordionDetails>
      </Accordion>
    </div>
  ));
  return (
    <section className="relative text-center">
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <div className="pt-10 pb-20 border-t-2 border-secColor flex justify-center flex-col gap-10 items-center">
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
      </Container>
      <div className="flex">{renderedSubCategories}</div>
    </section>
  );
};

export default Category;
