import { nextAuthOptions } from './auth'
import { withGoogleAnalytics } from 'next-google-analytics'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  optimization: {
    minimize: isProd,
    splitChunks: {
      chunks: 'all'
}
},
  // Additional optimizations and settings can be added here
}

export default withGoogleAnalytics('YOUR_GA_TRACKING_ID', nextConfig)