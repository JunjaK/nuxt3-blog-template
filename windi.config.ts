import { defineConfig } from 'windicss/helpers'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import aspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  plugins: [
    scrollSnapPlugin,
    aspectRatio
    // ...
  ],
})