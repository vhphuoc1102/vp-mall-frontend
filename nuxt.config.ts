// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  css: [
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "normalize.css/normalize.css",
  ],
});
