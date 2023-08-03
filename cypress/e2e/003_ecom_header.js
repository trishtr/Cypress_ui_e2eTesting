/// <reference types = "Cypress"/>

import HomePage from "../pageObjects/HomePage";
import Utility from "../support/utility";

describe("Validate Header Element", () => {
  const homePage = new HomePage();
  const utility = new Utility();
  const url = utility.getBaseUrl();

  before(function () {
    cy.fixture("headerLinkText").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit(url);
  });

  it("Validate header links", () => {
    homePage.clickHeaderLinksAndValiateUrl(data.reg, data.reg_linktxt);
    homePage.clickHeaderLinksAndValiateUrl(
      data.shoppingCart,
      data.cart_linktxt
    );
    homePage.clickHeaderLinksAndValiateUrl(data.login, data.login_linktxt);
    homePage.clickHeaderLinksAndValiateUrl(data.wishlist, data.wishlist_txt);
  });
});
