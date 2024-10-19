import { StaticImageData } from "next/image";

type HerosItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const Hero = ({ image, link, title, description }: HerosItem) => {
  return <div>Slide 1</div>;
};

export default Hero;
