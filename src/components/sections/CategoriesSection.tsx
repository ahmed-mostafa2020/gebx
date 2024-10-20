import { StaticImageData } from "next/image";
import CategoriesList from "../categories/CategoriesList";

import categoryImage1 from "@assets/category1.png";

type SubCategory = {
  id: number;
  link: string;
  title: string;
  description: string;
};

type CategoriesItem = {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
  subCategories: SubCategory[];
};

const CategoriesSection = () => {
  const categoriesList: CategoriesItem[] = [
    {
      id: 1,
      image: categoryImage1,
      title: "Category 1",
      link: "/",
      subCategories: [
        {
          id: 1,
          link: "/",
          title: "Lorem Ipsum is simply",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 2,
          link: "/",
          title: "Lorem Ipsum is simply2",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 3,
          link: "/",
          title: "Lorem Ipsum is simply3",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 4,
          link: "/",
          title: "Lorem Ipsum is simply4",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
      ],
    },
    {
      id: 2,
      image: categoryImage1,
      title: "Category 2",
      link: "/",
      subCategories: [
        {
          id: 1,
          link: "/",
          title: "Lorem Ipsum is simply",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 2,
          link: "/",
          title: "Lorem Ipsum is simply2",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 3,
          link: "/",
          title: "Lorem Ipsum is simply3",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
        {
          id: 4,
          link: "/",
          title: "Lorem Ipsum is simply4",
          description:
            "GebX Signs First Long-Term LNG Heads of Agreement from Ruwais Low-Carbon LNG. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin euismod porta. Sed vel laoreet nibh. Aenean a sem ut est tristique efficitur et sed ante. Sed nec est feugiat, tempus dui vitae, hendrerit lectus.",
        },
      ],
    },
  ];

  return (
    <section className="multiCategories">
      <CategoriesList categoriesList={categoriesList} />
    </section>
  );
};

export default CategoriesSection;
