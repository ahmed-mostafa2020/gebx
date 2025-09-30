"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";

import { Container } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";
import LanguageSwitcher from "../LanguageSwitcher";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocale();
  const t = useTranslations("common");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t("about"), link: `/${locale}/about-us` },
    { name: t("products"), link: `/${locale}/products` },
    { name: "Industries", link: `/${locale}/industries` },
    { name: "Services", link: `/${locale}/services` },
    { name: t("news"), link: `/${locale}/news` },
    { name: "Careers", link: `/${locale}/careers` },
    { name: t("contact"), link: `/${locale}/contact-us` },
  ];

  const renderedNavLinks = navLinks.map((navLink) => (
    <Link
      href={navLink.link}
      key={navLink.name}
      className={`capitalize text-lg border-b border-solid border-transparent font-medium hover:border-white transition-all duration-200 ease-linear 
        ${isScrolled ? "" : ""}`}
    >
      {navLink.name}
    </Link>
  ));

  return (
    <header
      className={`bg-[#00000075] z-20 transition-all duration-300 ease-in-out 
        ${isScrolled ? "fixed top-0 left-0 right-0 " : "relative"}`}
    >
      <Container maxWidth="lg" className="flex justify-between items-center">
        <Link href={`/${locale}`} className="w-fit select-none">
          <Image
            src={logo}
            alt="logo"
            height={90}
            width={200}
            className="object-contain"
            priority={true}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {renderedNavLinks}
          <LanguageSwitcher />
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <TemporaryDrawer />
        </div>
      </Container>
    </header>
  );
};

export default Header;
