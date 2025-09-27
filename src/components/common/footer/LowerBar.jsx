"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';

const LowerBar = () => {
  const locale = useLocale();
  
  return (
    <div className="py-6 mt-10 text-sm flex gap-4 justify-between items-center border-t border-white">
      <p>© 2024 GebX</p>

      <div className="flex items-center gap-3">
        <Link
          href={`/${locale}/privacy`}
          className="border-b border-transparent hover-white transition-all ease-linear duration-200"
        >
          Privacy Policy
        </Link>

        <span>|</span>

        <Link
          href={`/${locale}/terms`}
          className="border-b border-transparent hover-white transition-all ease-linear duration-200"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default LowerBar;

