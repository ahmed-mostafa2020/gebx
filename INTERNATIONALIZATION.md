# Internationalization Setup

This project now supports Arabic and English languages using next-intl.

## Features

- ✅ **Locale-based routing**: `/en/` and `/ar/`
- ✅ **RTL support**: Automatic direction switching for Arabic
- ✅ **Language switcher**: Button in header to toggle between languages
- ✅ **Translated components**: Key sections now support translations
- ✅ **Mobile support**: Mobile menu also supports translations

## File Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-based pages
│   │   ├── layout.js      # Main layout with i18n
│   │   ├── page.js        # Home page
│   │   └── products/      # Other pages
│   ├── layout.js          # Root layout (redirects)
│   └── page.js            # Root page (redirects to /en)
├── messages/
│   ├── en.json           # English translations
│   └── ar.json           # Arabic translations
├── components/
│   └── common/
│       └── LanguageSwitcher.jsx  # Language toggle button
├── i18n.js               # i18n configuration
└── middleware.js         # Locale routing middleware
```

## Usage

### Adding New Translations

1. Add new keys to `src/messages/en.json` and `src/messages/ar.json`
2. Use in components:

```jsx
import { useTranslations } from 'next-intl';

const MyComponent = () => {
  const t = useTranslations('common');
  return <h1>{t('myKey')}</h1>;
};
```

### Creating New Pages

Create pages inside `src/app/[locale]/` directory:

```
src/app/[locale]/about/page.js
src/app/[locale]/contact/page.js
```

### Language Switcher

The language switcher is automatically included in the header and works on both desktop and mobile.

## URLs

- English: `http://localhost:3000/en`
- Arabic: `http://localhost:3000/ar`

The root URL (`/`) automatically redirects to `/en`.

## RTL Support

Arabic pages automatically get `dir="rtl"` attribute and proper styling.
