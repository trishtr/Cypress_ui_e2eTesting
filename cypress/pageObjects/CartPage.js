class CartPage {
  getProductName() {
    return cy.get(".product-name");
  }
  getProductUnitPrice() {
    return cy.get(".product-unit-price");
  }

  getProductQty() {
    return cy.get(".qty input");
  }

  getSubTotal() {
    return cy.get(".product-subtotal");
  }

  getSubTotalLst() {
    const subTotalLst = new Array();
    this.getSubTotal().each(($total) => {
      subTotalLst.push(parseInt($total.text()));
    });
    return subTotalLst;
  }
  getProductAttributes() {
    return cy.get(".cart-item-row .product").find(".attributes");
  }

  getUpdateShoppingCartBtn() {
    return cy.get(".update-cart-button");
  }

  getContinueShoppingCartBtn() {
    return cy.get(".continue-shopping-button");
  }

  selectCountryInput(country) {
    cy.get(".country-input").select(country);
  }

  selectStateInput(state) {
    cy.get(".state-input").select(state);
  }

  clickEstimateShippingBtn() {
    cy.get(".estimate-shipping-button").click();
  }

  getShippingResutls() {
    return cy.get(".shipping-results");
  }

  clickCheckoutBtn() {
    cy.get("#checkout").click();
  }
  agreeOnTerms() {
    cy.get("#termsofservice").check();
  }
}
export default CartPage;
