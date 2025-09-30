import { Button, Container } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

import leadingImage from "@assets/leading.jpg";

const LeadingSection = ({ leadingData }) => {
  const t = useTranslations("home.leading");

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title with yellow underline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t("mainTitle")}
              </h2>
              <div className="w-1/2 my-3 h-1 bg-secColor"></div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 leading-relaxed">{t("subtitle")}</p>

            {/* Numbered Items */}
            <div className="space-y-6">
              {leadingData?.map((item, index) => (
                <div key={item.id} className="flex gap-4">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <span className="text-6xl font-bold text-yellow-500">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 italic">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <Button
                variant="outlined"
                className="!border-gray-800 !text-gray-800 !px-8 !py-2 !rounded-none !normal-case !text-base hover:!bg-gray-800 hover:!text-white !transition-colors"
              >
                {t("buttonText")}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circle border */}
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-full transform translate-x-4 translate-y-4"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                <Image
                  src={leadingImage}
                  alt="Sustainable future"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
