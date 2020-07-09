const isDev = process.env.NODE_ENV !== 'production'

const config = {
  mode: 'universal',
  modern: true,
  srcDir: 'src/',
  components: true,

  loading: {
    color: '#ac1315'
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
    },
    {
      // rel: 'stylesheet',
      // href: 'https://unpkg.com/buefy/dist/buefy.min.css',
    },
  ],

  css: [
  ],

  script: [
    {
      // async: '',
      // src: '//code-ya.jivosite.com/widget/AMTXfSmabC'
    }
  ],

  bodyAttrs: {
    itemscope: '',
    itemtype: 'https://schema.org/WebPage'
  },

  pageTransition: {
    css: false
  },

  plugins: [
    // {
    //   src: '@/plugins/initialize-app'
    // },
    // {
    //   src: '@/plugins/brc-dialog-plugin', mode: 'client'
    // }
  ],


  router: {
    // middleware: ['needAuthorize', 'baseMiddleware']
  },

  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true,
      eslint: true
    }]
  ],

  modules: [
    // ['@nuxtjs/router', {
    //   path: 'src/routers',
    //   fileName: 'index.ts'
    // }]
  ],

  build: {
    extractCSS: true,
    filenames: {
      css: ({
        isDev
      }) => isDev ? '[name].css' : '[contenthash].css',
    },

    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  },

  render: {
    compressor: false,
    resourceHints: true,
    etag: false,
    crossorigin: true
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

export default config