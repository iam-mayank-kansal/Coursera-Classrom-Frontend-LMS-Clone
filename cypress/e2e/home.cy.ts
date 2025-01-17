describe("Home Page", () => {
  it("should load the home page and display the correct title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Hello,");
  });
});
