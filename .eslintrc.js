module.exports = {

  root: true,

  env: {
    node: true
  },

  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],

  rules: {
    'comma-dangle': 2,
    camelcase: 0,
    'no-unused-vars': 'off'
  },

  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }]

}
