import { NuxtConfig } from '@nuxt/types'
import { NuxtWebpackEnv } from '@nuxt/types/config/build'

// const ROOT_DIR: NuxtConfig['rootDir'] = resolve(__dirname)
const SRC_DIR: NuxtConfig['srcDir'] = 'src/'

const nuxtConfig: NuxtConfig = {
  mode: 'universal',
  modern: true,
  srcDir: SRC_DIR,
  components: true,

  pageTransition: {
    css: false
  },

  loading: {
    color: '#ac1315'
  },


  bodyAttrs: {
    itemscope: '',
    itemtype: 'https://schema.org/WebPage'
  },

  head: {
    htmlAttrs: {
      prefix: 'og:http://ogp.me/ns#',
      lang: 'ru'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  },

  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }
  ],

  css: [
  ],

  script: [
    {
    }
  ],

  plugins: [
    {
      src: '@/plugins/initializeApp'
    }
  ],

  router: {
    middleware: ['requiresAuthorize']
  },

  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true,
      eslint: true
    }]
  ],

  modules: [
    ['@nuxtjs/router', {
      path: 'src/routers',
      fileName: 'index.ts'
    }]
  ],

  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extend: (config, ctx: NuxtWebpackEnv) => {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },

  render: {
    compressor: false,
    resourceHints: true,
    etag: false
  },


  purgeCSS: {
    mode: 'postcss'
    // whitelistPatterns: [/brc.*?$/, /vgt.*?$/, /vue.*?$/, /ql.*?$/, /theme.*?$/],
    // whitelist: ['label', 'field-label']
  },

  server: {
    port: 8010,
    host: 'localhost'
  }
}

export default nuxtConfig