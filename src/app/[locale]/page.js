"use client";

import { useQuery } from "@tanstack/react-query";
import { useLocale } from 'next-intl';
import axios from "axios";
import { END_POINTS } from "@utils/APIs";

import FullScreenLoading from "@feedback/FullScreenLoading";
import HeroSection from "@components/sections/home/hero/HeroSection";
import GlobalImpact from "@components/sections/GlobalImpact";
import LeadingSection from "@components/sections/home/leading/LeadingSection";
import SocialResponsibility from "@components/sections/SocialResponsibility";
import News from "@components/sections/home/news/News";
import CategoriesSection from "@components/sections/home/categories/CategoriesSection";
import CommitmentsSection from "@components/sections/CommitmentsSection";
import PartnersSection from "@components/sections/PartnersSection";
import ImpactPillarsSection from "@components/sections/home/impactPillars";

const fetchedData = async (locale) => {
  try {
    const response = await axios.get(`${END_POINTS.MAIN}/${END_POINTS.HOME}?lang=${locale}`, {
      headers: {
        Authorization: "5rkYT26RQeYJC2vd4PPS",
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export default function Home() {
  const locale = useLocale();
  
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["fetchedData", locale],
    queryFn: () => fetchedData(locale),
    staleTime: 300000, // 5 minutes
    retry: 1,
  });

  if (isLoading || isFetching) {
    return (
      <div className="centered w-full min-h-screen">
        <FullScreenLoading status="pending" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', minHeight: '100vh', color: 'red' }}>
        <h1>API Error</h1>
        <p>Error: {error.message}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }
  
  const heroData = data?.slider;
  const commitmentsData = data?.commitment;
  const leadingData = data?.leading;
  const impactPillarsData = data?.impact_pillars;
  const socialResponsibilitiesData = data?.social_responsibility;
  const globalData = data?.global_impact;
  const newsData = data?.news;
  const partnersData = data?.partners;

  return (
    <>
      <HeroSection heroData={heroData} />
      <CommitmentsSection commitmentsData={commitmentsData} />
      <GlobalImpact globalData={globalData} />
      <LeadingSection leadingData={leadingData} />
      <ImpactPillarsSection impactPillarsData={impactPillarsData} />
      <News newsData={newsData} />
      <SocialResponsibility socialResponsibilitiesData={socialResponsibilitiesData} />
      <CategoriesSection />
      <PartnersSection partnersData={partnersData} />
    </>
  );
}
