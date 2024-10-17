import Image from "next/image";
import Link from "next/link";

import responsibilityBg from "@assets/pexels-nextvoyage-1470502 1.png";
import logoSmall from "@assets/logoSmall.png";
import group from "@assets/G.png";

import { Container } from "@mui/material";
const SocialResponsibility = () => {
  return (
    <section className="relative pb-28">
      <Image
        src={responsibilityBg}
        alt="footerBackground"
        className="h-[900px] object-bottom absolute w-full object-cover"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <div className="pt-10 border-t border-secColor flex justify-center flex-col gap-16 items-center">
          <h2 className="font-bold text-2xl">Our social responsibility</h2>

          <article className="text-center leading-8 text-pretty font-light font-inter">
            Since our establishment, GebX has embraced social responsibility as
            one of its core pillars. We are committed to promoting a circular
            economy and making genuine contributions to society in the Middle
            East and beyond. Rooted in the principles of sustainability and
            enhancing community quality of life, our initiatives focus on
            creating a brighter, more sustainable future for generations to
            come. Guided by the UAE’s vision and responsible resource
            management, we continue to innovate and act with integrity, making a
            tangible difference in improving the world.
          </article>

          <div className="flex flex-col gap-8 mt-10">
            <div className="flex">
              <div className=" flex justify-end items-end flex-col gap-2 pe-8 me-8 border-e border-white">
                <Link href="/">
                  <Image
                    src={logoSmall}
                    alt="logo"
                    height={60}
                    width={120}
                    className="object-contain"
                  />
                </Link>

                <h3 className="font-bold text-4xl">CSR</h3>
              </div>

              <Image src={group} alt="group" />
            </div>

            <Link
              href="/"
              className="border text-center py-2 border-white rounded-md hover:border-secColor transition-all duration-300 ease-in-out"
            >
              Discover More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialResponsibility;
