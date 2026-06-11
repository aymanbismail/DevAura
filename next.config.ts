import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote image patterns for avatar providers.
    // [DISABLED] devapi.enjezly.com — backend API domain (not needed in portfolio mode).
    // [DISABLED] localhost:8000 — local backend dev server.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
