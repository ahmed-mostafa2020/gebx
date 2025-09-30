"use client";
import { memo } from "react";
import { Container } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { pillersBackground } from "@assets/svg";

const ImpactPillarsSection = ({ impactPillarsData }) => {
  const locale = useLocale();
  const t = useTranslations("home.impactPillars");

  const renderImpactPillars = impactPillarsData?.map((item) => (
    <Link
      key={item.id}
      href={`${locale}/${item.slug}`}
      className="px-5 py-5 text-center border-e border-disabled group"
    >
      <div className="flex flex-col items-center">
        <figure className="relative w-full text-center">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="group-hover:scale-110 transition-all duration-300 w-full"
          />
          <span className="group-hover:block hidden absolute top-0 left-0 transition-all duration-300">
            {pillersBackground}
          </span>
        </figure>

        <div className="bg-secColor h-0.5 w-full mt-8 mb-3"></div>

        <h3 className="text-xl font-semibold">{item.title}</h3>
      </div>
    </Link>
  ));

  return (
    <section className="bg-textDark py-8 lg:py-16 font-manifold">
      <Container>
        <div>
          <h2 className="text-3xl text-center md:text-4xl font-semibold pb-4 lg:pb-8">
            {t("title")}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderImpactPillars}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(ImpactPillarsSection);
