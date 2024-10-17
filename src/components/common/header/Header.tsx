"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";

import { Container } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    { name: "About Us", link: "/about-us" },
    { name: "Products", link: "/products/" },
    { name: "Industries", link: "/industries" },
    { name: "Services", link: "/services" },
    { name: "News", link: "/news" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
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
      className={`border-b border-white z-10 mx-10 transition-all duration-300 ease-in-out 
        ${
          isScrolled
            ? "bg-headerBg fixed top-0 left-0 right-0 "
            : "bg-transparent "
        }`}
    >
      <Container maxWidth="lg" className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={90}
            width={200}
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex  gap-8">{renderedNavLinks}</div>

        <div className="lg:hidden">
          <TemporaryDrawer />
        </div>
      </Container>
    </header>
  );
};

export default Header;
