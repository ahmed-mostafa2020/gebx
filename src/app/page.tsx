// import Image from "next/image";

import HeroSection from "@components/sections/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/News";
import CategoriesSection from "@components/sections/CategoriesSection";
import PartnersSection from "@components/sections/PartnersSection";

import { StaticImageData } from "next/image";
import image1 from "@assets/Rectangle 601.png";
import image2 from "@assets/Rectangle 602.png";
import image3 from "@assets/Rectangle 603.png";
import image4 from "@assets/Rectangle 604.png";
import image5 from "@assets/Rectangle 605.png";
import image6 from "@assets/Rectangle 606.png";
import image7 from "@assets/Rectangle 607.png";
import CommitmentsSection from "../components/sections/CommitmentsSection";

export default function Home() {
  const logos: StaticImageData[] = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <>
      <HeroSection />

      <CommitmentsSection />

      <GlobalImpact />

      <SocialResponsibility />

      <News />

      <CategoriesSection />

      <PartnersSection logos={logos} />
    </>
  );
}
