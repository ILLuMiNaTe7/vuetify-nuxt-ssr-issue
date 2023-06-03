import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  hooks: {
    'vite:extendConfig': (config: any) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve('./assets/css/settings.scss') }
        })
      )
    }
  },
  build: {
    transpile: ['vuetify']
  },
  sourcemap: {
    server: false,
    client: false
  }
})
