"use client";
import { Container } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface AutoScrollSliderProps {
  logos: StaticImageData[];
}

const PartnersSection: React.FC<AutoScrollSliderProps> = ({ logos = [] }) => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (logos.length === 0) return; // Don't start animation if there are no logos

    const scrollSpeed = 2; // Adjust this value to change scroll speed
    const containerWidth = logos.length * 160; // Assuming each logo is 200px wide

    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition <= -containerWidth / 2) {
          return 0;
        }
        return prevPosition - scrollSpeed;
      });
    };

    const animationId = setInterval(animate, 16); // roughly 60 fps

    return () => clearInterval(animationId);
  }, [logos]);

  if (logos.length === 0) {
    return <div>No logos to display</div>;
  }

  return (
    <section className="bg-[#F5F5F5] pb-32 flex flex-col gap-10 border-b-4 border-secColor">
      <Container maxWidth="lg" className="relative pt-20 ">
        <h2 className="pt-6 border-t-2 border-secColor w-full text-center font-bold text-2xl text-[#065750]">
          Our partners of impact
        </h2>
      </Container>

      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-block"
          style={{ transform: `translateX(${position}px)` }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={160}
              height={128}
              className="inline-block w-40 h-32 mx-2 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
