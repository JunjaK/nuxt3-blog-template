import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxt/content'
  ],
  buildModules: [
    'nuxt-windicss',
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
  vite: {}
})
