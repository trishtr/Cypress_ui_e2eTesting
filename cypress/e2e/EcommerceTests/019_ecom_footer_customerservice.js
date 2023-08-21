/// <reference types = "Cypress"/>

import Footer from "../../pageObjects/Footer";

describe("Validate Customer Service Footer", () => {
  const footer = new Footer();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("Validate customer section links", () => {
    footer.navigateToSubCustomerServiceSection("Search", "search");
    footer.navigateToSubCustomerServiceSection("New products", "newproducts");
    footer.navigateToSubCustomerServiceSection(
      "Recently viewed products",
      "recentlyviewedproducts"
    );
  });
});
