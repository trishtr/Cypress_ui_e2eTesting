/// <reference types = "Cypress"/>

import Header from "../../pageObjects/Header";
import Utility from "../../support/utility";

describe("Validate Header Element", () => {
  const header = new Header();
  const utility = new Utility();
  const url = utility.getBaseUrl();

  before(function () {
    cy.fixture("headerLinkText").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("Validate header links", () => {
    header.clickHeaderLinksAndValiateUrl(data.reg, data.reg_linktxt);
    header.clickHeaderLinksAndValiateUrl(data.shoppingCart, data.cart_linktxt);
    header.clickHeaderLinksAndValiateUrl(data.login, data.login_linktxt);
    header.clickHeaderLinksAndValiateUrl(data.wishlist, data.wishlist_txt);
  });
});
