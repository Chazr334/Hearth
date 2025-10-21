/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "class-variance-authority",
      "tailwind-merge"
    ]
  }
};

export default nextConfig;
