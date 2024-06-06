describe("Location", () => {
  it("should be able to navigate home", () => {
    // In a real world scenario data would be fetched and test mocked here
    // cy.intercept("GET", "https://trengo.com/http/200/channels", {
    //   statusCode: 200,
    //   fixture: "../fixtures/channels.json",
    // }).as("data");

    cy.visit("/asd")
      .get("a")
      .click()
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/");
      });
  });
});

describe("Entries", () => {
  it("should add an new entry", () => {
    cy.dataCy("favorite-list-item").should("have.length", 5);

    cy.dataCy("form-fieldset-input")
      .click()
      .type("hello world")
      .type("{enter}");

    cy.dataCy("list-item")
      .last()
      .within(() => {
        cy.get("button").click();
      });

    cy.dataCy("favorite-list-item").should("have.length", 6);
  });

  it("should remove an entry", () => {
    cy.dataCy("favorite-list-item").should("have.length", 6);

    cy.dataCy("channel-item")
      .last()
      .within(() => {
        cy.get("button").click();
      });

    cy.dataCy("favorite-list-item").should("have.length", 5);
  });
});

describe("Changes", () => {
  it("should be able to save", () => {
    cy.dataCy("favorite-list-item").should("have.length", 5);

    cy.dataCy("channel-item")
      .eq(2)
      .within(() => {
        cy.get("button").click();
      });

    cy.dataCy("apply-button").click();

    cy.dataCy("favorite-list-item").should("have.length", 4);
  });

  it("should be able to cancel", () => {
    cy.dataCy("favorite-list-item").should("have.length", 4);

    cy.dataCy("channel-item")
      .eq(2)
      .within(() => {
        cy.get("button").click();
      });

    cy.dataCy("cancel-button").click();

    cy.dataCy("favorite-list-item").should("have.length", 4);
  });
});
