/// <reference types = 'Cypress'/>
import CartPage from "../pageObjects/CartPage";
import Header from "../pageObjects/Header";
import Categories from "../pageObjects/Categories";
import ProductDetailPage from "../pageObjects/ProductDetailPage";

describe("validate shoppingcart footer", () => {
  const cartPage = new CartPage();
  const header = new Header();
  const categories = new Categories();
  const productDetail = new ProductDetailPage();

  before(() => {
    cy.fixture("orderInfo.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    categories.navigateToDesiredSection(data.product_1.section);
    categories.navigateToSubList(data.product_1.subsection);
    productDetail.navigateToProductOverView(data.product_1.name);
    productDetail.changeProductQuality(data.product_1.quality);
    productDetail.addProductToCart();
    header.clickOnHeaderLinks("Shopping cart");
  });

  it("validate users can use estimate shipping feature", () => {
    cartPage.selectCountryInput("United States");
    cartPage.selectStateInput("3");
    cartPage.clickEstimateShippingBtn();
    cartPage.getShippingResutls().should("exist");
  });

  it("validate subtotal without shipping, tax is correctly calculated", () => {
    cartPage.getSubTotal().each(($total) => {
      let actualSub = 0;
      actualSub += parseInt($total.text());
      cy.log(actualSub);
      cy.get(".cart-total-left")
        .eq(0)
        .nextUntil(".product-price")
        .then(($expectedSub) => {
          expect(parseInt($expectedSub.text())).to.be.eq(actualSub);
        });
    });
  });

  it("validate users can click checkout btn after agreeing on terms", () => {
    cartPage.agreeOnTerms();
    cartPage.clickCheckoutBtn();
    cy.url().should("include", "checkout");
  });

  it.only("validate users cannot click on checkout btn without agreeing on terms", () => {
    cartPage.clickCheckoutBtn();
    cy.get("#terms-of-service-warning-box p")
      .invoke("text")
      .should(
        "include",
        "Please accept the terms of service before the next step."
      );
  });
});
