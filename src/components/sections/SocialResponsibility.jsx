"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// import responsibilityBg from "@assets/ourSocialResponsibility.png";
import logoSmall from "@assets/logoSmall.png";
import group from "@assets/G.png";

import { Container } from "@mui/material";

const SocialResponsibility = ({ socialResponsibilitiesData }) => {
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <section className="relative pb-28 bg-textDark">
      {/* <Image
        src={socialResponsibilitiesData?.image}
        width={100}
        height={100}
        alt="footerBackground"
        className="h-[1015px] md-[820px] lg-[790px] object-bottom absolute w-full object-cover"
      /> */}

      <Container maxWidth="lg" className="relative pt-20">
        <h2 className="font-bold text-2xl w-fit border-b-2 border-secColor">
          {socialResponsibilitiesData?.title}
        </h2>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 mt-6">
            <article className=" leading-8 text-pretty font-light font-inter">
              {socialResponsibilitiesData?.description}
            </article>

            <Link
              href={`/${locale}/${socialResponsibilitiesData?.slug}`}
              className="border text-center capitalize  py-2 border-white rounded-md hover-black transition-all duration-300 ease-in-out"
            >
              {tCommon("discoverMore")}
            </Link>
          </div>

          <div className="flex flex-col gap-8 mt-10 items-end">
            <div className="flex">
              <div className=" flex justify-end items-end flex-col gap-2 pe-8 me-8 border-e border-white">
                <Link href="/" className="w-fit select-none">
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialResponsibility;
