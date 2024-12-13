// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr : true,
  modules : [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css']
})
