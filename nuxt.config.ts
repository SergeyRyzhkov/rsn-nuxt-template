import { NuxtConfig } from '@nuxt/types'

// const ROOT_DIR: NuxtConfig['rootDir'] = resolve(__dirname)
const SRC_DIR: NuxtConfig['srcDir'] = 'src/'

const nuxtConfig: NuxtConfig = {
  modern: true,
  srcDir: SRC_DIR,
  components: true,

  loading: {
    color: '#ac1315'
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
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
        name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    ],


    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ],

  },

  css: [
    '~assets/scss/index.scss'
  ],

  plugins: [
    {
      src: '@/plugins/initializeApp'
    },
    {
      src: '@/plugins/vue-lazyload'
    }
  ],

  router: {
    prefetchLinks: false,
    middleware: ['requiresAuthorize']
  },

  buildModules: [
    'nuxt-purgecss',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    [
      '@nuxt/typescript-build', {
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

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },

    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },

    filenames: {
      css: ({
        isDev
      }) => isDev ? '[name].css' : '[contenthash].css',
    }
  },

  render: {
    compressor: false,
    resourceHints: false,
    etag: false
  },


  purgeCSS: {
    mode: 'postcss'
    // whitelistPatterns: [/brc.*?$/, /vgt.*?$/, /vue.*?$/, /ql.*?$/, /theme.*?$/],
    // whitelist: ['label', 'field-label']
  },

  webfontloader: {
    google: {
      families: ['Montserrat:400,500,600,700:cyrillic&display=swap']
    }
  },

  styleResources: {
    scss: ['~assets/scss/_variables.scss']
  },

  server: {
    port: 8010,
    host: 'localhost'
  }
}

export default nuxtConfig