<!--
- Name: Nuxt3 Paystack
- Package name: nuxt3-paystack
- Description: Paystack gateway implementation in Nuxt3
-->

# Nuxt3 Paystack

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt3-paystack?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://modules.ceeless.com/nuxt3-paystack) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Paystack Integration
- 🚠 &nbsp;Online Card Payment

## Quick Setup

1. Add `nuxt3-paystack` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt3-paystack

# Using yarn
yarn add --dev nuxt3-paystack

# Using npm
npm install --save-dev nuxt3-paystack
```

2. Add `nuxt3-paystack` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt3-paystack'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt3-paystack/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt3-paystack

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt3-paystack.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt3-paystack

[license-src]: https://img.shields.io/npm/l/nuxt3-paystack.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt3-paystack

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
