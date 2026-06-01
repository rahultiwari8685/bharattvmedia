/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "topheadlinesnews.com",
        pathname: "/wp-content/uploads/**",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "5002",
        pathname: "/uploads/**",
      },
    ],

    // Modern formats
    formats: ["image/webp", "image/avif"],

    // Responsive sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 60,

    dangerouslyAllowSVG: true,

    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
