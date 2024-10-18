import { StaticImageData } from "next/image";

type SubCategory = {
  id: number;
  link: string;
  title: string;
  description: string;
};

type CategoriesItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  link: string;
  subCategories: SubCategory[];
};

const Category = ({ image, link, title, subCategories }: CategoriesItem) => {
  return <div>Category</div>;
};

export default Category;
