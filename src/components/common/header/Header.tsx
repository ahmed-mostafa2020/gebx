import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";

import { Container } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

const Header = () => {
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
      className="capitalize border-b border-solid border-transparent font-medium text-lg  hover:border-white transition-all duration-200 ease-linear"
    >
      {navLink.name}
    </Link>
  ));

  return (
    <header className="mx-10 mb-32 border-b border-white ">
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
