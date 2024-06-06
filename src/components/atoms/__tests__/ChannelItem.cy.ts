import { createPinia } from "pinia";
import ChannelItem from "../ChannelItem.vue";

describe("ChannelItem", () => {
  it("Should have an icon and a text", () => {
    cy.mount(ChannelItem, {
      extensions: { use: [createPinia()] },
      attrs: {
        item: {
          name: "test",
          icon: "vials",
        },
      },
    });

    cy.dataCy("channel-item-icon").should("exist");
    cy.dataCy("channel-item-text").should("have.text", "test");
  });

  it("Should have a text and no icon", () => {
    cy.mount(ChannelItem, {
      extensions: { use: [createPinia()] },
      attrs: {
        item: {
          name: "test",
        },
      },
    });

    cy.dataCy("channel-item-icon").should("not.exist");
    cy.dataCy("channel-item-text").should("have.text", "test");
  });
});
