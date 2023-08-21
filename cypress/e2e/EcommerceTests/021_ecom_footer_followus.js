/// <reference types = "Cypress"/>

import Footer from "../../pageObjects/Footer";

describe("Validate Follow us Footer", () => {
  const footer = new Footer();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("Validate follow us section Facebook link", () => {
    footer.navigateToSubFollowUsSection("Facebook", "facebook");
  });

  it("Validate follow us section Youtube link", () => {
    footer.navigateToSubFollowUsSection("YouTube", "youtube");
  });

  it("Validate follow us section Twitter link", () => {
    footer.navigateToSubFollowUsSection("Twitter", "twitter");
  });
});
