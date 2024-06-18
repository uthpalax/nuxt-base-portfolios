// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [["github:uthpalax/nuxt-base-layer#main", { install: true }]],
});
