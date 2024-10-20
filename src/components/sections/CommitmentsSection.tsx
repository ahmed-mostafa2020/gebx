import Image, { StaticImageData } from "next/image";
import CommitmentsList from "../commitments/CommitmentsList";
import SectionTemplate from "../common/reusable/SectionTemplate";

import shapes from "@assets/shapes.png";
import commitmentBg from "@assets/commitmentBg.png";
import commitment1 from "@assets/commitment1.png";
import commitment2 from "@assets/commitment2.png";

type CommitmentItem = {
  id: number;
  image: StaticImageData;
  description: string;
  link: string;
};

const CommitmentsSection = () => {
  const commitmentsList: CommitmentItem[] = [
    {
      id: 1,
      image: commitment2,
      description:
        "Imagine a world where every business decision leads to a greener planet, where technology and sustainability work hand in hand to shape a future where resources are preserved, communities thrive, and industries innovate responsibly. At GebX, we believe in this world. Our mission is to drive this transformation by building and integrating digital solutions that not only meet the needs of today but also pave the way for a sustainable tomorrow. Through our specialised AIoT technologies and eco-friendly innovations, we’re building the foundation for a world where economic growth and environmental responsibility are one and the same.",
      link: "/1",
    },
    {
      id: 2,
      image: commitment1,
      description:
        "Imagine a world where every business decision leads to a greener planet, where technology and sustainability work hand in hand to shape a future where resources are preserved, communities thrive, and industries innovate responsibly",
      link: "/2",
    },
    {
      id: 3,
      image: commitment2,
      description:
        "Seamlessly Uniting Data Using AIOT For Proactive Sustainability Strategy & Realtime Reporting",
      link: "/3",
    },
  ];

  return (
    <section className="relative">
      <Image
        src={commitmentBg}
        alt="background"
        className="absolute w-full h-[-webkit-fill-available] object-cover z-[1]"
      />
      <SectionTemplate
        image={shapes}
        title="Imagine a Sustainable World -"
        span="Our Commitment"
        backgroundColor="bg-[#023047]"
      >
        <CommitmentsList commitmentsList={commitmentsList} />
      </SectionTemplate>
    </section>
  );
};

export default CommitmentsSection;
