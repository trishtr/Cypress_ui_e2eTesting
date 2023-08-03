class ProductionSelectors {
  selectSortBy(sortedTxt) {
    cy.get("#products-orderby").select(sortedTxt);
  }

  extractProductTitle() {
    const productTitle = new Array();
    cy.get(".product-title a").each(($el, index, list) => {
      productTitle.push($el.text().trim());
    });
    return productTitle;
  }

  filterProductsByPrice(desiredRange, priceLow, priceHigh) {
    cy.get(".price-range-selector a").contains(desiredRange).click();

    cy.get(".prices .actual-price").each(($el) => {
      expect(parseInt($el.text())).to.be.within(priceLow, priceHigh);
    });
  }

  removeFilter() {
    cy.get(".remove-filter a").click();
  }

  displayProducts(size) {
    cy.get("#products-pagesize").select(size);
  }

  viewProducts(viewmode) {
    cy.get("#products-viewmode").select(viewmode);
  }

  switchPager() {
    cy.get(".pager li a").each(($el) => {
      if ($el.text() === "Next") {
        return false;
      }
      cy.wrap($el).click();
      cy.get(".item-box").should("exist");
    });
  }
}

export default ProductionSelectors;
