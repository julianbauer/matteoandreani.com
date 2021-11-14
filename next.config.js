const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['next-slicezone'])
const withSvgr = require('next-svgr')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()
const withNextEnv = nextEnv()

module.exports = withPlugins([withTM, withSvgr, withNextEnv], {
  images: { domains: [] },
})
