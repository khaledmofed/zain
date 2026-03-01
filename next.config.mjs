import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zain.ivadso.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "admin.zainom.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
