import type { NextConfig } from "next";

// This config allows the curated celestial image assets used by the design.
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] }
};
export default nextConfig;