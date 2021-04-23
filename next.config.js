const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {
  future: {
    webpack5: true
  },
  env: {
    gaId: 'UA-',
  }
}

module.exports = withBundleAnalyzer(config)
