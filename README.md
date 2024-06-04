# Welcome to our open-source repository!

We've developed a full-fledged web application using the latest technologies and tools. Our project is built with **TypeScript**, **Vite**, **Vue 3**, **Vue Router**, **Pinia**, **Cypress**, **Vitest**, **ESLint** and **Prettier**.

**TypeScript** brings static typing to JavaScript, making it more robust and maintainable. We've leveraged **Vite** to ensure fast development and quick builds, making it easier for developers to work on the project. **Vue 3**, **Vue Router**, and **Pinia** have been used together to create an efficient and responsive frontend framework, along with a robust state management solution.

We've used **Cypress** and **Vitest** to perform automated end-to-end testing, ensuring the quality of our application. We've also used **ESLint** and **Prettier** to ensure our code adheres to industry-standard practices, making it more consistent, reliable, and maintainable.

The repository is built with the latest technology and best practices to deliver a highly scalable and maintainable web application. The code is clean, robust, and efficient, ensuring the highest quality and performance. If you're interested in contributing, please feel free to check out the repository!

## Tech

| Logo                                                                                                                       | Name       | Link                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript) |
| <img height="70" src="https://vitejs.dev/logo.svg" alt="Vite logo">                                                        | Vite       | [https://github.com/vitejs/vite](https://github.com/vitejs/vite)                   |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3 logo">             | Vue 3      | [https://github.com/vuejs/core](https://github.com/vuejs/core)                     |
| <img height="70" src="https://vitest.dev/logo.svg" alt="Vitest logo">                                                      | Vitest     | [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)       |
| <img height="70" src="https://www.cypress.io/images/layouts/navbar-brand.svg" alt="Cypress logo">                          | Cypress    | [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)     |
| <img height="70" src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo">                                                  | Pinia      | [https://github.com/vuejs/pinia](https://github.com/vuejs/pinia)                   |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint     | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)               |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier   | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)       |

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
├── README.md
├── cypress
│   ├── e2e
│   │   └── home.cy.ts
│   ├── fixtures
│   │   └── data.json
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
├── src
│   ├── App.vue
│   ├── components
│   │   ├── ChannelControl.vue
│   │   └── __tests__
│   │       └── ChannelControl.ts
│   ├── components.d.ts
│   ├── main.ts
│   ├── plugins
│   │   └── router.ts
│   ├── router
│   │   ├── routes
│   │   │   ├── homeRoute.ts
│   │   │   ├── index.ts
│   │   │   └── notFound.ts
│   │   └── routes.enum.ts
│   ├── shims-vue.d.ts
│   ├── styles
│   │   ├── _default.scss
│   │   ├── _remedy.scss
│   │   └── boot.scss
│   └── views
│       ├── 404.vue
│       └── HomeView.vue
├── tsconfig.json
└── vite.config.ts
</pre>
