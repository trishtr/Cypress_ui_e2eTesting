/// <reference types = 'Cypress'/>

import HeaderMenu from "../../pageObjects/HeaderMenu";
describe("validate header-menu", () => {
  const headerMenu = new HeaderMenu();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });
  it("Validate users can navigate to the correct menu after click on desired menu", () => {
    headerMenu.clickOnMenu("books");
    cy.url().should("include", "books");
  });
});
