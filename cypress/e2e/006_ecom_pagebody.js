/// <reference types = 'Cypress'/>
import Categories from "../pageObjects/Categories";
import PageBody from "../pageObjects/PageBody";
import HomePage from "../pageObjects/HomePage";

describe("Validate Buying flow", () => {
  const categories = new Categories();
  const pageBody = new PageBody();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    categories.navigateToDesiredSection("Computers");
  });
  it("Validate customer could add item to the shopping cart", () => {
    categories.navigateToSubList("Desktops");
    pageBody.navigateToProductOverView("Build your own cheap");
    pageBody.changeProductQuality("2");
    pageBody.addProductToCart();
    homePage.clickHeaderLinksAndValiateUrl("Shopping cart", "cart");
    homePage.getCartQtyInShoppingCart().contains("2");
  });
});
