import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '172.26.176.1',
    '192.168.0.124',
    '192.168.0.109',
    '192.168.1.9',
  ],
};

export default nextConfig;
