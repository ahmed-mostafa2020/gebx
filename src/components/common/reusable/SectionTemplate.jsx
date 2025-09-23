import Image from "next/image";

import { Container } from "@mui/material";

const SectionTemplate = ({ image, backgroundColor, title, span, children }) => {
  return (
    <section
      className={`relative text-center pb-10 lg:pb-20 ${backgroundColor}`}
    >
      <Image
        src={image}
        alt="backgroundImage"
        className="absolute w-full h-[-webkit-fill-available] object-cover"
      />

      <Container maxWidth="lg" className="relative pt-10 lg:pt-20">
        {title ? (
          <div className="pt-10 border-t-2 border-secColor flex justify-center flex-col gap-10 items-center">
            <h2 className="font-bold text-[28px]">
              {title} {span && <span className="text-secColor">{span}</span>}{" "}
            </h2>

            <div className="flex flex-col items-center w-full">{children}</div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">{children}</div>
        )}
      </Container>
    </section>
  );
};

export default SectionTemplate;
