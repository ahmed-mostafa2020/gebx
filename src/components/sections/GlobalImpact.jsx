import Image from "next/image";

import SectionTemplate from "@components/common/reusable/SectionTemplate";
import Grid from "@mui/material/Grid2";

import globalBg from "@assets/globalBg.png";

const GlobalImpact = ({ globalData }) => {
  const firstOfTitle = (title) => {
    const firstSpace = title.indexOf(" ");
    const percentage = title.substring(0, firstSpace);
    return percentage;
  };
  const lastOfTitle = (title) => {
    const firstSpace = title.indexOf(" ");
    const restOfText = title.substring(firstSpace + 1);
    return restOfText;
  };

  const renderedList = globalData?.map((item) => (
    <Grid
      size={{ xs: 12, sm: 6, lg: 3 }}
      key={item.id}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col mb-5 pb-4 border-b-2 border-secColor">
        <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          className="object-contain mb-4 mx-auto"
        />

        <h3 className="text-secColor font-bold text-4xl italic ">
          {firstOfTitle(item.title)}
        </h3>
        <h4 className="items-end font-medium text-lg">
          {lastOfTitle(item.title)}
        </h4>
      </div>

      <article className="text-center tracking-wider text-sm font-extralight lg-w-[44%] text-pretty">
        {item.description}
      </article>
    </Grid>
  ));

  return (
    <SectionTemplate
      image={globalBg}
      // title="Emirati excellence global impact"
      backgroundColor="bg-[#347376]"
    >
      <Grid container rowSpacing={10} columnSpacing={15}>
        {renderedList}
      </Grid>
    </SectionTemplate>
  );
};

export default GlobalImpact;
