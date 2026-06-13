const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/apoorv-dixit-portfolio" : "",
  assetPrefix: isGitHubPages ? "/apoorv-dixit-portfolio/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
