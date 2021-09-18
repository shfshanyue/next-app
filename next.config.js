const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {
  env: {
    gaId: 'UA-',
  }
}

module.exports = withBundleAnalyzer(config)
