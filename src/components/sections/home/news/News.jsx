"use client";

import { useTranslations } from 'next-intl';
import SectionTemplate from "@components/common/reusable/SectionTemplate";
import NewsList from "./NewsList";

import news from "@assets/news.png";

const News = ({ newsData }) => {
  const t = useTranslations('home');
  
  return (
    <SectionTemplate
      image={news}
      title={t('newsInsights')}
      backgroundColor="bg-gradient-to-r from-[#347376] via-[#347376] to-[#40A9A6]"
    >
      <NewsList newsData={newsData} />
    </SectionTemplate>
  );
};

export default News;
