import Image, { StaticImageData } from "next/image";

type HerosItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const Hero = ({ image, link, title, description }: HerosItem) => {
  return (
    <div>
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover"
      />
      <div className="absolute inset-0 bg-[#023047] opacity-20"></div>
    </div>
  );
};

export default Hero;
