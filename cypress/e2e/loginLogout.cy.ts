describe("login logout, add operation", () => {
  it("visit local host and login and log out", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[id="username"]').type("user2");
    cy.get('input[id="password"]').type("password2");
    cy.get("button").click();
    cy.get("button.rounded-full").click();
    cy.get("#dropDown").click();
  });

  it("Execute add operation", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[id="username"]').type("user2");
    cy.get('input[id="password"]').type("password2");
    cy.get("button").click();
    cy.get("#addRecord").click();
    //select addition
    cy.get('input[id="addition"]').click();
    cy.get('input[name="number1"]').type("77");
    cy.get('input[name="number2"]').type("3");
    cy.get("#submit").click();
  });
});
