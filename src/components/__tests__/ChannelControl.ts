import { createPinia } from "pinia";
import ChannelControl from "../ChannelControl.vue";

describe("Channel Changes", () => {
  it("Should change channel", () => {
    cy.mount(ChannelControl, {
      extensions: { use: [createPinia()] },
    });

    cy.get("html").should("have.value", "en");
  });
});
