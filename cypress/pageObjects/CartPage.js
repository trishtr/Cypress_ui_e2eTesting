class CartPage {
  getProductName() {
    return cy.get(".product-name");
  }
  getProductUnitPrice() {
    return cy.get("product-unit-price");
  }
}
export default CartPage;
