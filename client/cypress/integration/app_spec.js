describe("The Home Page", () => {
  cy.visit("/");
  it("Renders the Title", () => {
    cy.get("h1").should("have.text", "Productivity Pro");
  });

  it("Links work correctly", () => {
    const links = ["ToDo", "Timer", "Pomodoro"];
    links.forEach((link) => {
      cy.contains(link).click();
      cy.location("pathname").should("eq", `/${link}`);
      cy.go("back");
    });
  });

  it("Color Mode Toggle Works", () => {});
});
