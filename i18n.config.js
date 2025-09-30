import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default
  };
});
