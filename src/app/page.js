"use client";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { END_POINTS } from "@utils/APIs";

import HeroSection from "@components/sections/home/hero/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/home/news/News";
import CategoriesSection from "@components/sections/home/categories/CategoriesSection";
import CommitmentsSection from "@components/sections/CommitmentsSection";
import PartnersSection from "@components/sections/PartnersSection";

import FullScreenLoading from "@feedback/FullScreenLoading";


const fetchedData = async () => {
  const response = await axios.get(`${END_POINTS.MAIN}/${END_POINTS.HOME}`, {
    headers: {
      Authorization: "5rkYT26RQeYJC2vd4PPS",
    },
  });
  return response.data.data;
};


export default function Home() {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["fetchedData"],
    queryFn: fetchedData,
    cacheTime: 600000, // 10 minutes
    staleTime: 300000, // 5 minutes
  });

  const heroData = data?.slider;

  const commitmentsData = data?.commitment;

  const socialResponsibilitiesData = data?.social_responsibility;

  const globalData = data?.global_impact;

  const newsData = data?.news;

  const partnersData = data?.partners;
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
