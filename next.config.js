const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {
  swcMinify: true,
  env: {
    gaId: 'UA-',
  }
}

module.exports = withBundleAnalyzer(config)
