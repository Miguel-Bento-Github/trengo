# Welcome to the list!

## Tech

| Logo                                                                                                                       | Name       | Link                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript) |
| <img height="70" src="https://vitejs.dev/logo.svg" alt="Vite logo">                                                        | Vite       | [https://github.com/vitejs/vite](https://github.com/vitejs/vite)                   |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3 logo">             | Vue 3      | [https://github.com/vuejs/core](https://github.com/vuejs/core)                     |
| <img height="70" src="https://vitest.dev/logo.svg" alt="Vitest logo">                                                      | Vitest     | [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)       |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" alt="Cypress logo">                 | Cypress    | [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)     |
| <img height="70" src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo">                                                  | Pinia      | [https://github.com/vuejs/pinia](https://github.com/vuejs/pinia)                   |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint     | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)               |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier   | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)       |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind logo">      | Tailwind   | [https://tailwindcss.com/](https://tailwindcss.com/)                               |

| Script         | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `build`        | Compiles TypeScript files and builds the production-ready application with Vite. |
| `build:watch`  | Builds the application in watch mode, with minification disabled.                |
| `cy:e2e`       | Starts the development server and runs Cypress end-to-end tests.                 |
| `cy:component` | Opens Cypress for component testing.                                             |
| `test:unit`    | Runs unit tests with Vitest.                                                     |
| `lint`         | Runs ESLint on all relevant files, fixing errors and caching results.            |
| `dev`          | Starts the development server.                                                   |
| `prod:preview` | Previews the production build on port 8261.                                      |

<pre>
.
├── cypress
│   ├── e2e
│   │   └── home.cy.ts
│   ├── fixtures
│   │   └── channels.json
│   ├── support
│   │   ├── commands.ts
│   │   ├── component-index.html
│   │   ├── component.ts
│   │   └── e2e.ts
│   └── tsconfig.json
├── cypress.config.ts
├── cypress.d.ts
├── env.d.ts
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── src
│   ├── App.vue
│   ├── components
│   │   ├── atoms
│   │   │   ├── ChannelItem.vue
│   │   │   ├── CrossButton.vue
│   │   │   ├── ListButton.vue
│   │   │   ├── ListItem.vue
│   │   │   ├── MainButton.vue
│   │   │   ├── PopupButton.vue
│   │   │   ├── PopupInput.vue
│   │   │   └── __tests__
│   │   │       ├── ChannelItem.cy.ts
│   │   │       └── PopupInput.cy.ts
│   │   └── molecules
│   │       ├── FavoriteListControls.vue
│   │       ├── FavoriteList.vue
│   │       ├── FormFieldset.vue
│   │       └── __tests__
│   │           └── FavoriteList.cy.ts
│   ├── components.d.ts
│   ├── const
│   │   └── icon-list.ts
│   ├── main.ts
│   ├── plugins
│   │   ├── fontawesome.ts
│   │   └── router.ts
│   ├── router
│   │   ├── routes
│   │   │   ├── homeRoute.ts
│   │   │   ├── index.ts
│   │   │   └── notFound.ts
│   │   └── routes.enum.ts
│   ├── shims-vue.d.ts
│   ├── stores
│   │   └── useChannelStore.ts
│   ├── styles
│   │   ├── boot.css
│   │   ├── default.css
│   │   ├── remedy.css
│   │   └── slide.css
│   ├── types
│   │   └── ChannelItem.ts
│   ├── util
│   │   └── get-random-item-in-array
│   │       ├── index.ts
│   │       └── __test__
│   │           └── get-random-item-in-array.test.ts
│   └── views
│       ├── 404.vue
│       └── HomeView.vue
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

</pre>
