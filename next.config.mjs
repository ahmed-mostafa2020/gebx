import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gebx.amrbdr.com"],
  },
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
