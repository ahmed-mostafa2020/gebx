import Image from "next/image";
import Link from "next/link";

import SectionTemplate from "../common/reusable/SectionTemplate";
import Grid from "@mui/material/Grid2";

import globalBg from "@assets/globalBg.png";
import company from "@assets/united-arab-emirates 1.png";
import reach from "@assets/world-map 1.png";
import expertise from "@assets/expertise 1.png";
import service from "@assets/solution 1.png";
import logo from "@assets/logoMed.png";

const GlobalImpact = () => {
  const list = [
    {
      id: 1,
      image: company,
      title: "100%",
      subTitle: "Emirati Company",
      description:
        "Pioneering Green Industry 4.0 revolution with Eco-AIoT solutions from the UAE to the world.",
    },
    {
      id: 2,
      image: reach,
      title: "Global",
      subTitle: "Reach",
      description:
        "Headquarter: Abu-Dhabi Excellence Center: Ras-Al-Khaimah African Hub:  Cairo- Egypt",
    },
    {
      id: 3,
      image: expertise,
      title: "Proven",
      subTitle: "Expertise",
      description:
        "We are a next-gen startup with a clear vision to become the UAE's next unicorn.",
    },
    {
      id: 4,
      image: service,
      title: "Thorough",
      subTitle: "Service",
      description:
        "Providing laser-focused technologies for sustainable development.",
    },
  ];

  const renderedList = list.map((item) => (
    <Grid
      size={{ xs: 12, sm: 6, lg: 6 }}
      key={item.id}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex gap-6 mb-5 pb-4 border-b-2 border-secColor">
        <Image src={item.image} alt={item.title} width={100} height={100} />

        <div className="flex flex-col justify-end items-end">
          <h3 className="text-secColor font-bold text-4xl italic ">
            {item.title}
          </h3>
          <h4 className="items-end font-medium text-lg">{item.subTitle}</h4>
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
