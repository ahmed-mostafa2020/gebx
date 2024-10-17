import Link from "next/link";
import Image from "next/image";

import LowerBar from "./LowerBar";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import footerBgImage from "@assets/footer-bg.png";
import logoSmall from "@assets/logoSmall.png";

const Footer = () => {
  // About Us
  const aboutList = [
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Our Values",
      link: "/values",
    },
    {
      name: "Our Team",
      link: "/team",
    },
    {
      name: "Our Commitment",
      link: "/commitment",
    },
    {
      name: "GebX Academia",
      link: "/academia",
    },
  ];
  const renderedAboutList = aboutList.map((link) => (
    <Link
      href={link.link}
      key={link.name}
      className="w-fit border-b border-transparent hover:border-white transition-all duration-200 ease-linear text-sm capitalize"
    >
      {link.name}
    </Link>
  ));

  // Actions
  const actionList = [
    {
      name: "Our Partners",
      link: "/partners",
    },
    {
      name: "Our Products",
      link: "/products",
    },
    {
      name: "Our Solutions",
      link: "/solutions",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];
  const renderedActionList = actionList.map((link) => (
    <Link
      href={link.link}
      key={link.name}
      className="w-fit border-b border-transparent hover:border-white transition-all duration-200 ease-linear text-sm capitalize"
    >
      {link.name}
    </Link>
  ));

  // Media
  const mediaList = [
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Social Media",
      link: "/social-media",
    },
  ];
  const renderedMediaList = mediaList.map((link) => (
    <Link
      href={link.link}
      key={link.name}
      className="w-fit border-b border-transparent hover:border-white transition-all duration-200 ease-linear text-sm capitalize"
    >
      {link.name}
    </Link>
  ));

  // Contact Us
  const contactUSList = [
    {
      title: "Tel:",
      subtitle: "+971 25830888",
    },
    {
      title: "Fax:",
      subtitle: "+971 25830888",
    },
  ];

  const renderedContactUSList = contactUSList.map((contact) => (
    <div className="flex items-center" key={contact.title}>
      <p className="text-sm">{contact.title} </p>{" "}
      <span className="text-sm  ps-2"> {contact.subtitle} </span>
    </div>
  ));

  const socialMedia = [
    {
      name: "x",
      link: "/",
      icon: <XIcon />,
    },
    {
      name: "Facebook",
      link: "/",
      icon: <FacebookIcon />,
    },
    {
      name: "linkedin",
      link: "/",
      icon: <LinkedInIcon />,
    },
    {
      name: "youtube",
      link: "/",
      icon: <YouTubeIcon />,
    },
  ];

  const renderedSocialMedia = socialMedia.map((el) => (
    <Link
      href={el.link}
      title={el.name}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${el.name} page`}
      key={el.name}
    >
      {el.icon}
    </Link>
  ));

  return (
    <footer className="relative font-inter">
      <Image
        src={footerBgImage}
        alt="footerBackground"
        className="object-fill absolute w-full h-full"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, sm: 6, lg: 4.5 }}
            className="flex gap-10 flex-col"
          >
            <Link href="/" className="w-fit">
              <Image src={logoSmall} alt="logo" />
            </Link>

            <p className="leading-7 text-sm  w-[60%]">
              GebX HQ, PO Box, 783, Corniche Road West , Abu Dhabi, UAE.
            </p>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 2 }} className="flex flex-col gap-3">
            <h6 className="uppercase text-lg font-medium">About Us</h6>
            <div className="flex flex-col gap-6">{renderedAboutList}</div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 2 }} className="flex flex-col gap-3">
            <h6 className=" text-lg font-medium">GebX IN ACTION</h6>
            <div className="flex flex-col gap-6">{renderedActionList}</div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, lg: 1.5 }}
            className="flex flex-col gap-3"
          >
            <h6 className="uppercase text-lg font-medium">MEDIA</h6>
            <div className="flex flex-col gap-6">{renderedMediaList}</div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 2 }} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h6 className="uppercase text-lg font-medium">Contact Us</h6>
              {renderedContactUSList}
            </div>

            <div className="flex gap-4">{renderedSocialMedia}</div>
          </Grid>
        </Grid>

        <LowerBar />
      </Container>
    </footer>
  );
};

export default Footer;
