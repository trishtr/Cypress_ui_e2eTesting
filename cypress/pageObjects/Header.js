class Header {
  visitHomePage() {
    cy.visit(Cypress.env("ecommerce"));
  }
  getHeaderLogo() {
    return cy.get(".header-logo");
  }

  getCartQtyInShoppingCart() {
    return cy.get(".cart-qty");
  }

  getQtyInText() {
    cy.get(".cart-qty").then(($qty) => {
      return $qty.text();
    });
  }

  clickOnHeaderLinks(desiredText) {
    cy.get(".header-links ul li a").each(($el) => {
      if ($el.text().startsWith(desiredText)) {
        cy.wrap($el).click();
      }
      if ($el.children("span").text().startsWith(desiredText)) {
        cy.wrap($el).click();
      }
    });
  }

  clickHeaderLinksAndValiateUrl(desiredText, partialLinkText) {
    cy.get(".header-links ul li a").each(($el) => {
      if ($el.text().startsWith(desiredText)) {
        cy.wrap($el).click();
        cy.url().should("include", partialLinkText);
      }
      if ($el.children("span").text().startsWith(desiredText)) {
        cy.wrap($el).click();
        cy.url().should("include", partialLinkText);
      }
    });
  }

  getHeaderSearchInput() {
    return cy.get(".search-box form input[type='text']");
  }

  getHeaderSearchBtn() {
    return cy.get(".search-box form input[type='submit']");
  }

  searchProduct(productTitle) {
    this.getHeaderSearchInput().type(productTitle);
    this.getHeaderSearchBtn().click();
  }
}

export default Header;
