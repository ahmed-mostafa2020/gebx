import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import QueryProvider from "@components/libraries/QueryProvider";
import Header from "@components/common/header/Header";
import Footer from "@components/common/footer/Footer";

// Load the Manifold CF font
// const manifoldCF = localFont({
//   src: "./fonts/ManifoldCF.woff2", // Adjust the path and format as necessary
//   variable: "--font-manifold-cf",
//   display: 'swap',
//   weight: "100 900", // Adjust based on the weights you need
// });

// const inter = localFont({
//   src: './fonts/Inter.woff2', // Adjust the path as necessary
//   variable: '--font-inter',
//   weight: '100 900', // Adjust based on the weights you need
// });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Gbex | Home",
  description: "Gebx for technologies solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white`}>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
