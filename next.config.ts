import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Serve /public files as-is. Do not run them through the Image Optimization service.
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/cylinders/flexible-packaging-rollers",
        destination: "/cylinders/rotogravure-cylinders",
        permanent: true,
      },
      { source: "/cylinders/wooden-texture-rollers", destination: "/cylinders", permanent: true },
      { source: "/cylinders/marble-grain-rollers", destination: "/cylinders", permanent: true },
      { source: "/cylinders/heat-transfer-rollers", destination: "/cylinders", permanent: true },
      { source: "/cylinders/ceramic-rollers", destination: "/cylinders", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
