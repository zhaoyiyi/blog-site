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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Nunito:wght@400;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  routeRules: {
    '*': { static: true },
  },
})
