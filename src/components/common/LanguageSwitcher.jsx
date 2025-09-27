"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from 'next-intl';
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = () => {
  const pathname = usePathname();

  // Extract current locale from pathname (use pathname as source of truth)
  const currentLocale = pathname.match(/^\/(en|ar)/)?.[1] || 'en';

  const switchLocale = (targetLocale) => {
    // Remove the current locale from the pathname - exact same logic as guestna-b2b
    const newPathname = pathname.replace(/^\/(en|ar)/, "");
    return `/${targetLocale}${newPathname}`;
  };

  const targetLocale = currentLocale === 'en' ? 'ar' : 'en';
  // Show the target language (what you'll switch TO)
  const buttonText = currentLocale === 'en' ? 'العربية' : 'English';
  
  const switchUrl = switchLocale(targetLocale);

  console.log('LanguageSwitcher Debug:', {
    currentPathname: pathname,
    currentLocale,
    targetLocale,
    buttonText,
    switchUrl
  });

  return (
    <Link href={switchUrl} style={{ textDecoration: 'none' }}>
      <Button
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
        {buttonText}
      </Button>
    </Link>
  );
};

export default LanguageSwitcher;
