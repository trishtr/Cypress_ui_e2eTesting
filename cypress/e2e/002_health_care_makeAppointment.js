/// <reference types = 'Cypress'/>
import Utility from "../support/utility";

describe("Validate make appointment feature", () => {
  const utility = new Utility();
  const url = utility.getBaseUrl();

  before(function () {
    cy.fixture("loginData.json")
      .as("user")
      .then(function (data) {
        globalThis.data = data;
      });
  });

  it("validate make appointment feature", () => {
    // cy.visit(url);
    cy.visit(Cypress.env("healthcare"));
    cy.get("#btn-make-appointment").click();
    cy.user_login(data.valid_username, data.valid_pwd);
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").check();
    cy.get("input[value = 'Medicare']").should("be.checked");
    cy.get("input[value = 'None']").check();
    cy.get(".date.input-group").click();
    cy.handling_date_picker("August 2023");
    cy.selectDesiredDate("2");
    cy.get("#txt_comment")
      .click({ force: true })
      .type("For make appoinment testing");
    cy.get("#btn-book-appointment").click();
    cy.get("h2").contains("Appointment Confirmation");
  });
});
