import { createPinia } from "pinia";
import Home from "@/views/HomeView.vue";

describe("Homepage", () => {
  it("Should have title", () => {
    cy.mount(Home, {
      extensions: { use: [createPinia()] },
    });

    cy.dataCy("home-title").should("have.value", "Channels");
  });
});
