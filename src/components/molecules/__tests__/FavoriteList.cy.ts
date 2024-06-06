import { createPinia } from "pinia";
import FavoriteList from "../FavoriteList.vue";
import { defaultFavorites } from "@/stores/useChannelStore";

describe("ChannelItem", () => {
  it("Should have a list of items", () => {
    cy.mount(FavoriteList, {
      extensions: { use: [createPinia()] },
      attrs: {},
    });

    cy.dataCy("favorite-list-item").should(
      "have.length",
      defaultFavorites.length
    );
  });

  it("Should be able to remove an item from the list", () => {
    cy.mount(FavoriteList, {
      extensions: { use: [createPinia()] },
      attrs: {},
    });

    cy.dataCy("favorite-list-item")
      .should("have.length", defaultFavorites.length)
      .get("button")
      .last()
      .click();

    cy.dataCy("favorite-list-item").should(
      "have.length",
      defaultFavorites.length - 1
    );
  });
});
