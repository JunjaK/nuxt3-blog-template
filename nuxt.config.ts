import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "#": "/<rootDir>",
  },
  srcDir: 'src/',
  components: {
    dirs: [
      '@/components',
    ]
  },
  css: [
    '@/assets/styles/scss/index.scss'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    navigation: {
      fields: ['navTitle', 'created', 'tags']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true,
    webFonts: {
      provider: 'google',
      fonts: {
        'a-gothic': ['Gothic A1'],
        'nanum-gothic': ['Nanum Gothic'],
        dohyeon: ['Do Hyeon'],
        sans: 'Roboto',
      }
    },

    // core options
    shortcuts: [],
    rules: [],
  },
  vite: {}
})
