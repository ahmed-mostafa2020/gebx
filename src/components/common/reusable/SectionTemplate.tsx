import { Container } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type SectionData = {
  image: StaticImageData;
  backgroundColor?: string;
  title: string;
  children?: React.ReactNode;
};

const SectionTemplate = ({
  image,
  backgroundColor,
  title,
  children,
}: SectionData) => {
  return (
    <section className={`relative text-center pb-10 ${backgroundColor}`}>
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <div className="pt-10 border-t-2 border-secColor flex justify-center flex-col gap-10 items-center">
          <h2 className="font-bold text-2xl">{title}</h2>

          <div className="flex flex-col items-center">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTemplate;
