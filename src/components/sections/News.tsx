import { StaticImageData } from "next/image";

import SectionTemplate from "../common/reusable/SectionTemplate";
import NewsList from "../news/NewsList";

import news from "@assets/news.png";
import news1 from "@assets/news1.png";
import news2 from "@assets/news2.png";

type NewsItem = {
  id: number;
  image: StaticImageData;
  date: string;
  description: string;
  link: string;
};

const News = () => {
  const newsList: NewsItem[] = [
    {
      id: 1,
      image: news1,
      date: "28th April 2024",
      description:
        "How Mustadeem AI will streamline your sustainability strategy in 2025. Phasellus quis lorem sed turpis mollis iaculis sit amet id ex. Fusce condimentum fermentum lacus, et vestibulum ante lobortis id.",
      link: "/",
    },
    {
      id: 2,
      image: news2,
      date: "28th April 2024",
      description:
        "How Mustadeem AI will streamline your sustainability strategy in 2025. Phasellus quis lorem sed turpis mollis iaculis sit amet id ex. Fusce condimentum fermentum lacus, et vestibulum ante lobortis id.",
      link: "/",
    },
    {
      id: 3,
      image: news1,
      date: "28th April 2024",
      description:
        "How Mustadeem AI will streamline your sustainability strategy in 2025. Phasellus quis lorem sed turpis mollis iaculis sit amet id ex. Fusce condimentum fermentum lacus, et vestibulum ante lobortis id.",
      link: "/",
    },
    {
      id: 4,
      image: news2,
      date: "28th April 2024",
      description:
        "How Mustadeem AI will streamline your sustainability strategy in 2025. Phasellus quis lorem sed turpis mollis iaculis sit amet id ex. Fusce condimentum fermentum lacus, et vestibulum ante lobortis id.",
      link: "/",
    },
  ];

  return (
    <SectionTemplate
      image={news}
      title="News & Insights"
      backgroundColor="bg-gradient-to-r from-[#347376] via-[#347376] to-[#40A9A6]"
    >
      <NewsList newsList={newsList} />
    </SectionTemplate>
  );
};

export default News;
