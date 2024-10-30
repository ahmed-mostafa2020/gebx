"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import { END_POINTS } from "@constants/APIs";

import HeroSection from "@components/sections/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/News";
import CategoriesSection from "@components/sections/CategoriesSection";
import CommitmentsSection from "@components/sections/CommitmentsSection";
import PartnersSection from "@components/sections/PartnersSection";

import { StaticImageData } from "next/image";
import image1 from "@assets/Rectangle 601.png";
import image2 from "@assets/Rectangle 602.png";
import image3 from "@assets/Rectangle 603.png";
import image4 from "@assets/Rectangle 604.png";
import image5 from "@assets/Rectangle 605.png";
import image6 from "@assets/Rectangle 606.png";
import image7 from "@assets/Rectangle 607.png";

const fetchedData = async () => {
  const response = await axios.get(`${END_POINTS.BASE}${END_POINTS.HOME}`, {
    headers: {
      Authorization: "5rkYT26RQeYJC2vd4PPS",
    },
  });
  return response.data.data;
};

type SocialResponsibilitiesItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
};

type PartnerItem = {
  id: number;
  image: string;
  title: string;
  slug: string;
};

export default function Home() {
  // const logos: StaticImageData[] = [
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5,
  //   image6,
  //   image7,
  // ];

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["fetchedData"],
    queryFn: fetchedData,
    cacheTime: 600000, // 10 minutes
    staleTime: 300000, // 5 minutes
  });

  const socialResponsibilitiesData: SocialResponsibilitiesItem =
    data?.social_responsibility;

  const partnersData: PartnerItem[] = data?.partners;
  console.log(partnersData);

  return (
    <>
      <HeroSection />

      <CommitmentsSection />

      <GlobalImpact />

      <SocialResponsibility
        socialResponsibilitiesData={socialResponsibilitiesData}
      />

      <News />

      <CategoriesSection />

      <PartnersSection partnersData={partnersData} />
    </>
  );
}
