const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {
  swcMinify: true,
  env: {
    gaId: 'UA-',
  },
  webpack (config) {
    return config
  }
}

module.exports = withBundleAnalyzer(config)
