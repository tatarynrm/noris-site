import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ігнорувати ESLint помилки під час збірки
  },
};

export default nextConfig;
