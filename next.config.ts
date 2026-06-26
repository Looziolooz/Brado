import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without it, Next detects the
  // stray C:\Users\loren\package-lock.json and infers the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
