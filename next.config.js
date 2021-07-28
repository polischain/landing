const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    sw: '/sw.js'
  },
  images: {
    domains: ['polis.tech'],
  },
})
