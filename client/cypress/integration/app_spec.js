describe("My First Test", () => {
  it("Renders Title", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Productivity Pro");
  });
});
