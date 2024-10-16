import Link from "next/link";
import Image from "next/image";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

import footerBgImage from "@assets/footer-bg.png";
import logoSmall from "@assets/logoSmall.png";
import LowerBar from "./LowerBar";

const Footer = () => {
  return (
    <footer className="relative">
      <Image
        src={footerBgImage}
        alt="footerBackground"
        className="absolute w-full"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <Grid container spacing={4}>
          <Grid size={5} className="flex gap-10 flex-col">
            <Link href="/">
              <Image src={logoSmall} alt="logo" />
            </Link>

            <p className="leading-7 text-sm font-inter w-[60%]">
              GebX HQ, PO Box, 783, Corniche Road West , Abu Dhabi, UAE.
            </p>
          </Grid>

          <Grid size={2}>hi</Grid>

          <Grid size={1.5}>hi</Grid>

          <Grid size={1.5}>hi</Grid>

          <Grid size={2}>hi</Grid>
        </Grid>

        <LowerBar />
      </Container>
    </footer>
  );
};

export default Footer;
