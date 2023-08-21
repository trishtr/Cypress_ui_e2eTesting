/// <reference types = 'cypress'/>
import Utility from "../../support/utility";
describe("Validate Login function", () => {
  const utility = new Utility();
  const url = utility.getBaseUrl();

  before(function () {
    cy.fixture("loginData.json")
      .as("user")
      .then(function (data) {
        globalThis.data = data;
      });
  });

  it("Valid username, password", () => {
    // cy.visit(Cypress.env("healthcare"));
    cy.visit(url);
    cy.get("#btn-make-appointment").click();
    cy.user_login(data.valid_username, data.valid_pwd);
    cy.url().should("include", "appointment");
  });

  it("invalid username, invalid pwd", () => {
    // cy.visit(Cypress.env("healthcare"));
    cy.visit(url);
    cy.get("#btn-make-appointment").click();
    cy.user_login(data.invalid_username, data.invalid_pwd);
    cy.get("p[class= 'lead text-danger']").should("exist");
  });
});
