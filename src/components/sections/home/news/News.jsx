import SectionTemplate from "@components/common/reusable/SectionTemplate";
import NewsList from "./NewsList";

import news from "@assets/news.png";

const News = ({ newsData }) => {
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
