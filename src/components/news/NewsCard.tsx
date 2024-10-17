"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NewsItem = {
  image: StaticImageData;
  date: string;
  description: string;
  link: string;
};

const NewsCard = ({ image, date, description, link }: NewsItem) => {
  return (
    <div className="centered mx-auto flex-col gap-6 w-[440px] bg-[#02304755] rounded-2xl py-14 px-10">
      <Image
        src={image}
        alt="news"
        width={240}
        height={240}
        className="rounded-full"
      />

      <div className="w-full flex">
        <h3 className="text-secColor my-6 pb-2 text-sm w-[50%] text-start font-medium border-b-2 border-secColor">
          {date}
        </h3>
      </div>

      <article className=" text-sm  leading-8 text-pretty font-extralight">
        {description}
      </article>

      <Link
        href={link}
        className="centered border mt-2 text-sm w-[235px] h-[50px] text-center border-white rounded-md hover:bg-black transition-all duration-300 ease-in-out"
      >
        Read More..
      </Link>
    </div>
  );
};

export default NewsCard;
