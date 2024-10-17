import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NewsItem = {
  id: number;
  image: StaticImageData;
  date: string;
  description: string;
  link: string;
};
interface NewsListProps {
  newsList: NewsItem[];
}

const NewsCard = ({ newsList }: NewsListProps) => {
  const renderedNewsList = newsList.map((newsCard) => (
    <div
      key={newsCard.id}
      className="centered flex-col gap-4 w-[450px] bg-[#02304755] rounded-2xl py-14 px-10"
    >
      <Image
        src={newsCard.image}
        alt="news"
        width={240}
        height={240}
        className="rounded-full"
      />

      <div className="w-full flex">
        <h3 className="text-secColor my-6 pb-2 text-sm w-[50%] text-start font-medium border-b-2 border-secColor">
          {newsCard.date}
        </h3>
      </div>

      <article className="leading-8 text-pretty font-extralight">
        {newsCard.description}
      </article>

      <Link
        href={newsCard.link}
        className="border w-[235px] text-center py-2  border-white rounded-md hover:bg-black transition-all duration-300 ease-in-out"
      >
        Read More..
      </Link>
    </div>
  ));
  return <div className="flex gap-12">{renderedNewsList}</div>;
};

export default NewsCard;
