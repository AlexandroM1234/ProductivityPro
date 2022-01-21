describe("The Home Page", () => {
  it("Renders the Title", () => {
    cy.visit("/");
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

  it("Color Mode Toggle Works", () => {
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.get("#colorModeToggle").click();
    cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)");
  });
});
