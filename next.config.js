/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 添加输出配置以支持 Cloudflare Workers
  output: 'export',
  // 禁用图像优化，因为它需要服务器端支持
  images: {
    unoptimized: true,
  },
  // 确保静态资产正确处理
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

module.exports = nextConfig
