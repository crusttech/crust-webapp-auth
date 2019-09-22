const buildVueConfig = require('corteza-webapp-auth/vue.config-builder')

module.exports = buildVueConfig({
  appFlavour: 'Crust',
  appName: 'auth',
  appLabel: 'Crust Auth',
  theme: 'crust-base',
  packageAlias: 'crust-webapp-auth',
})
