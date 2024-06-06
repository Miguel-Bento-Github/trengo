describe("Test headings", () => {
  it("should have a h1 at home", () => {
    // In a real world scenario data would be fetched and test mocked here
    // cy.intercept("GET", "https://trengo.com/http/200/channels", {
    //   statusCode: 200,
    //   fixture: "../fixtures/channels.json",
    // }).as("data");

    cy.visit("/")
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/");
      });
  });
});
