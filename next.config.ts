/** @type {import('next').NextConfig} */
const repo = "my-blog";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages publica em /<repo>
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,          // GitHub Pages não suporta otimização do next/image
    qualities: [75, 100],       // remove teu warning do quality={100}
  },
};

module.exports = nextConfig;
