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

import FullScreenLoading from "@feedback/FullScreenLoading";

const fetchedData = async () => {
  const response = await axios.get(`${END_POINTS.BASE}${END_POINTS.HOME}`, {
    headers: {
      Authorization: "5rkYT26RQeYJC2vd4PPS",
    },
  });
  return response.data.data;
};

type HerosItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string | null;
};

type CommitmentItem = {
  id: number;
  image: string;
  description: string;
  slug: string;
  date?: string;
};

type GlobalItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type SocialResponsibilitiesItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
};

type NewsItem = {
  id: number;
  image: string;
  date: string;
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

  const heroData: HerosItem[] = data?.slider;

  const commitmentsData: CommitmentItem[] = data?.commitment;

  const socialResponsibilitiesData: SocialResponsibilitiesItem =
    data?.social_responsibility;

  const globalData: GlobalItem[] = data?.global_impact;

  const newsData: NewsItem[] = data?.news;

  const partnersData: PartnerItem[] = data?.partners;
  console.log(newsData);

  return (
    <>
      {isLoading || isFetching ? (
        <div className="centered w-full min-h-screen">
          <FullScreenLoading status="pending" />
        </div>
      ) : (
        <>
          <HeroSection heroData={heroData} />

          <CommitmentsSection commitmentsData={commitmentsData} />

          <GlobalImpact globalData={globalData} />

          <SocialResponsibility
            socialResponsibilitiesData={socialResponsibilitiesData}
          />

          <News newsData={newsData} />

          <CategoriesSection />

          <PartnersSection partnersData={partnersData} />
        </>
      )}
      {error && <p>error</p>}
    </>
  );
}
