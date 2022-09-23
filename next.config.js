/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      ...["eth", "blocks", "api-gateway", "txs", "txn", "tx"].map(seg => {
        return {
          source: `/${seg}/:path*`,
          destination: `https://app.blockroma.com/${seg}/:path*`,
          permanent: true,
        };
      })
    ]
  },
}

module.exports = nextConfig
