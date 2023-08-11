class SearchPage {
  getSearchResultWarning() {
    return cy.get(".search-results .warning");
  }
  getSearchResultMessage() {
    return cy.get(".search-results .result");
  }
  getSearchResultItemBox() {
    return cy.get(".search-results .item-box");
  }
  getProductTitle() {
    return cy.get(".search-results .item-box .product-title");
  }

  getProductActualPrice() {
    return cy.get(".search-results .item-box .add-info .actual-price");
  }
  searchAndNavigateToOverview(title) {
    cy.get(".product-title a").each(($ele) => {
      if ($ele.text().startsWith(title)) {
        cy.wrap($ele).click();
      }
    });
  }
}
export default SearchPage;
