export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    customRoutes: 'config',
    pages: {
      signin: {
        nl: '/inloggen',
        en: '/signin',
      },
    },
    locales: [
      { code: 'nl', file: 'nl-NL.json' },
      { code: 'en', file: 'en-UK.json' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'nl',
    vueI18n: {
      legacy: false,
      locale: 'nl',
    },
  },
})
