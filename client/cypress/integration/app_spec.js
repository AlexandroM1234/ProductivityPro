describe("The Home Page", () => {
  it("Renders Title", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Productivity Pro");
  });

  it("Links work corrrectly", () => {
    const links = ["ToDo", "Timer", "Pomodoro"];
    links.forEach((link) => {
      cy.contains(link).click();
      cy.location("pathname").should("eq", `/${link}`);
      cy.go("back");
    });
  });
});
