import Image from "next/image";
import Link from "next/link";

import SectionTemplate from "../common/reusable/SectionTemplate";
import Grid from "@mui/material/Grid2";

import globalBg from "@assets/globalBg.png";
import logo from "@assets/logoMed.png";

type GlobalItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};
interface GlobalProps {
  globalData: GlobalItem[];
}
const GlobalImpact = ({ globalData }: GlobalProps) => {
  const firstOfTitle = (title: string): string => {
    const firstSpace = title.indexOf(" ");
    const percentage = title.substring(0, firstSpace);
    return percentage;
  };
  const lastOfTitle = (title: string): string => {
    const firstSpace = title.indexOf(" ");
    const restOfText = title.substring(firstSpace + 1);
    return restOfText;
  };

  const renderedList = globalData?.map((item) => (
    <Grid
      size={{ xs: 12, sm: 6, lg: 6 }}
      key={item.id}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex gap-6 mb-5 pb-4 border-b-2 border-secColor">
        <Image src={item.image} alt={item.title} width={100} height={100} />

        <div className="flex flex-col justify-end items-end">
          <h3 className="text-secColor font-bold text-4xl italic ">
            {firstOfTitle(item.title)}
          </h3>
          <h4 className="items-end font-medium text-lg">
            {lastOfTitle(item.title)}
          </h4>
        </div>
      </div>

      <article className="text-center text-sm font-extralight lg:max-w-[44%] text-pretty">
        {item.description}
      </article>
    </Grid>
  ));

  return (
    <SectionTemplate
      image={globalBg}
      title="Emirati excellence global impact"
      backgroundColor="bg-[#347376]"
    >
      <Grid container rowSpacing={10} columnSpacing={15}>
        {renderedList}
      </Grid>

      <Link href="/" className="w-fit select-none">
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={250}
          className="object-contain"
        />
      </Link>
    </SectionTemplate>
  );
};

export default GlobalImpact;
