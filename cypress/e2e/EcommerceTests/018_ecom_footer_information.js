/// <reference types = "Cypress"/>

import Footer from "../../pageObjects/Footer";

describe("Validate Information Footer", () => {
  const footer = new Footer();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("Validate information section links", () => {
    footer.navigateToSubInfoSection("Sitemap", "sitemap");
    footer.navigateToSubInfoSection("About us", "about-us");
    footer.navigateToSubInfoSection("Contact us", "contactus");
    footer.navigateToSubInfoSection("Shipping & Returns", "shipping-returns");
  });
});
