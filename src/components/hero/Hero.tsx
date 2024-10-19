import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type HerosItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const Hero = ({ image, link, title, description }: HerosItem) => {
  return (
    <div className="h-[830px] relative">
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover"
      />
      <div className="absolute inset-0 bg-[#023047] opacity-20"></div>

      <div className="mx-10 mb-10 pt-[86px] relative h-[-webkit-fill-available]">
        <div className="h-[140px]"></div>

        <div className="flex flex-col gap-10 ps-20">
          <h1 className="uppercase font-bold text-4xl">{title}</h1>

          <p className="capitalize w-[420px]">{description}</p>

          <Link
            href={link}
            className="border w-[270px] capitalize text-center py-2 border-white rounded-md hover:bg-black transition-all duration-300 ease-in-out"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
