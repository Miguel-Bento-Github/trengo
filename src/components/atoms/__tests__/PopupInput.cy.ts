import { createPinia } from "pinia";
import PopupInput from "../PopupInput.vue";

describe("Input", () => {
  it("Should have a placeholder, description, name", () => {
    const item = {
      placeholder: "test",
      description: "test",
      name: "test",
    };

    cy.mount(PopupInput, {
      extensions: { use: [createPinia()] },
      attrs: {
        ...item,
      },
    });

    cy.dataCy("form-fieldset-input")
      .invoke("attr", "placeholder")
      .should("contain", item.placeholder);

    cy.dataCy("form-fieldset-input")
      .invoke("attr", "name")
      .should("contain", item.name);

    cy.dataCy("form-fieldset-description").should(
      "have.text",
      item.description
    );

    cy.dataCy("form-fieldset-search").should(
      "have.attr",
      "aria-label",
      "search"
    );
  });
});
