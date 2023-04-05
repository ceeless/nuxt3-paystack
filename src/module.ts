import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-paystack',
    configKey: 'nuxt3Paystack'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  // setup (options, nuxt) {
  setup () {
    const resolver = createResolver(import.meta.url)
    // load the script
    addComponent({
      name: 'NuxtPaystack',
      export: 'NuxtPaystack',
      filePath: resolver.resolve('runtime/components/paystack.vue')
    })
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
