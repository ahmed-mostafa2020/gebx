"use client";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { END_POINTS } from "@constants/APIs";

import HeroSection from "@components/sections/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/News";
import CategoriesSection from "@components/sections/CategoriesSection";
import CommitmentsSection from "@components/sections/CommitmentsSection";
import PartnersSection from "@components/sections/PartnersSection";

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
      {(isLoading || isFetching) && "loading..."}
      {error && <p>error</p>}

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
