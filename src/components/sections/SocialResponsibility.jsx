import Image from "next/image";
import Link from "next/link";

// import responsibilityBg from "@assets/ourSocialResponsibility.png";
import logoSmall from "@assets/logoSmall.png";
import group from "@assets/G.png";

import { Container } from "@mui/material";

const SocialResponsibility = ({
  socialResponsibilitiesData,
}) => {
  return (
    <section className="relative pb-28 bg-[#023047]">
      <Image
        src={socialResponsibilitiesData?.image}
        width={100}
        height={100}
        alt="footerBackground"
        className="h-[1015px] md-[820px] lg-[790px] object-bottom absolute w-full object-cover"
      />

      <Container maxWidth="lg" className="relative pt-20">
        <div className="pt-10 border-t-2 border-secColor flex justify-center flex-col gap-16 items-center">
          <h2 className="font-bold text-2xl">
            {socialResponsibilitiesData?.title}
          </h2>

          <article className="text-center leading-8 text-pretty font-light font-inter">
            {socialResponsibilitiesData?.description}
          </article>

          <div className="flex flex-col gap-8 mt-10">
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

            <Link
              href={`/${socialResponsibilitiesData?.slug}`}
              className="border text-center capitalize  py-2 border-white rounded-md hover-black transition-all duration-300 ease-in-out"
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

