"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "@utils/APIs";

import HeroSection from "@components/sections/home/hero/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import LeadingSection from "@components/sections/home/leading/LeadingSection";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/home/news/News";
import CategoriesSection from "@components/sections/home/categories/CategoriesSection";
import CommitmentsSection from "@components/sections/CommitmentsSection";
import PartnersSection from "@components/sections/PartnersSection";

import FullScreenLoading from "@feedback/FullScreenLoading";
import { useLocale } from 'next-intl';

const fetchedData = async (locale) => {
  try {
    console.log("Fetching data from:", `${END_POINTS.MAIN}/${END_POINTS.HOME}?lang=${locale}`);
    const response = await axios.get(`${END_POINTS.MAIN}/${END_POINTS.HOME}?lang=${locale}`, {
      headers: {
        Authorization: "5rkYT26RQeYJC2vd4PPS",
      },
    });
    console.log("API Response success:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export default function Home() {
  const locale = useLocale();
  console.log(locale);
  
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["fetchedData", locale],
    queryFn: () => fetchedData(locale),
    cacheTime: 600000, // 10 minutes
    staleTime: 300000, // 5 minutes
    retry: 1,
  });

  const heroData = data?.slider;

  const commitmentsData = data?.commitment;

  const leadingData = data?.leading;

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

          <LeadingSection leadingData={leadingData} />

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
