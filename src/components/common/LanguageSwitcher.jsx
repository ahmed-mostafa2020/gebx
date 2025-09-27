"use client";

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <Button
      onClick={switchLanguage}
      variant="outlined"
      startIcon={<LanguageIcon />}
      sx={{
        color: 'white',
        borderColor: 'white',
        '&:hover': {
          borderColor: '#FFC000',
          backgroundColor: 'rgba(255, 192, 0, 0.1)',
        },
        minWidth: '120px',
        textTransform: 'none',
        fontSize: '14px'
      }}
    >
      {t('switchLanguage')}
    </Button>
  );
};

export default LanguageSwitcher;
