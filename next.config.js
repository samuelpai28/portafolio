/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimizaciones para producción
  swcMinify: true,
  // Configuración para Vercel
  output: 'standalone',
  // Asegurar que los componentes del cliente se rendericen correctamente
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig

