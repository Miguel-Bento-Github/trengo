import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "http://localhost:8261",
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        optimizeDeps: {
          include: ["pinia", "vue", "vue-router"],
        },
      },
    },
    specPattern: "src/**/__tests__/*.cy.ts",
  },
});
