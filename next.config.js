const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {
  env: {
    gaId: 'UA-',
    baiduToken: ''
  }
}

module.exports = withBundleAnalyzer(config)
