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

  getQtyLst() {
    const qtyLst = new Array();
    this.getProductQty()
      .each((qty) => {
        qtyLst.push(cy.get(qty).invoke("attr", "value"));
      })
      .then(() => {
        return qtyLst;
      });
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
}
export default CartPage;
