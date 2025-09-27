"use client";

import { useTranslations, useLocale } from 'next-intl';

export default function TestPage() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page</h1>
      <p>Current locale: {locale}</p>
      <p>Translation test: {t('home')}</p>
      <p>If you can see this, the basic i18n setup is working!</p>
    </div>
  );
}
