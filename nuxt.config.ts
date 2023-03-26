import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Yi Zhao',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
