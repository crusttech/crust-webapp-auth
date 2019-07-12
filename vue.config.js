const buildVueConfig = require('corteza-webapp-auth/vue.config-builder')

module.exports = buildVueConfig({
  appName: 'auth',
  appLabel: 'Crust Auth',
  theme: 'crust-base',
  packageAlias: 'crust-webapp-auth',
})
