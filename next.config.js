/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    // instrumentationHook removed as it's no longer needed
    allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.0.49']
  },
  // Allow cross-origin requests during development
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 