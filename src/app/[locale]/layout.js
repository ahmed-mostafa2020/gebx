import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import "../globals.css";
import QueryProvider from "@components/libraries/QueryProvider";
import Header from "@components/common/header/Header";
import Footer from "@components/common/footer/Footer";

import { locales } from '../../../i18n.config.js';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  return {
    title: locale === 'ar' ? 'جيب إكس | الرئيسية' : 'GebX | Home',
    description: locale === 'ar' ? 'جيب إكس لحلول التكنولوجيا' : 'GebX for technology solutions',
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="text-white">
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
