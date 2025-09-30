import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    console.warn(`Invalid locale received: ${locale}, falling back to 'en'`);
    locale = 'en';
  }

  console.log(`Loading messages for locale: ${locale}`);

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default
  };
});
