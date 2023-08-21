/// <reference types = "Cypress"/>

import Footer from "../pageObjects/Footer";

describe("Validate My account Footer", () => {
  const footer = new Footer();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("Validate my account section links", () => {
    footer.navigateToSubMyAccountSection("Shopping cart", "cart");
    footer.navigateToSubMyAccountSection("My account", "login");
    footer.navigateToSubMyAccountSection("Wishlist", "wishlist");
  });
});
