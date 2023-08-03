class PageBody {
  getProductTitle() {
    return cy.get(".page-body .product-title");
  }

  getProductActualPrice() {
    return cy.get(".page-body .actual-price");
  }

  getAddCartBtn() {
    return cy.get(".page-body .buttons input");
  }
  getAddCartBtnOnOverViewPage() {
    return cy.get('.add-to-cart input[value="Add to cart"]');
  }

  getQualityInput() {
    return cy.get(".add-to-cart .qty-input");
  }

  navigateToProductOverView(productTitle) {
    this.getProductTitle().each(($ele) => {
      if ($ele.text().trim().startsWith(productTitle)) {
        cy.wrap($ele).click();
      }
    });
  }

  changeProductQuality(quality) {
    this.getQualityInput().clear().type(quality);
  }

  addProductToCart() {
    this.getAddCartBtnOnOverViewPage().click();
  }
}

export default PageBody;
