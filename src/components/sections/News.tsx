import SectionTemplate from "../common/reusable/SectionTemplate";
import NewsList from "../news/NewsList";

import news from "@assets/news.png";

type NewsItem = {
  id: number;
  image: string;
  date: string;
  description: string;
  slug: string;
};

interface NewsProps {
  newsData: NewsItem[];
}

const News = ({ newsData }: NewsProps) => {
  return (
    <SectionTemplate
      image={news}
      title="News & Insights"
      backgroundColor="bg-gradient-to-r from-[#347376] via-[#347376] to-[#40A9A6]"
    >
      <NewsList newsData={newsData} />
    </SectionTemplate>
  );
};

export default News;
