///<reference types = 'Cypress'/>

import ProductionSelectors from "../pageObjects/ProductionSelectors";

import Categories from "../pageObjects/Categories";
import Utility from "../support/utility";

describe("Validate Production Selectors section", () => {
  const productionSelector = new ProductionSelectors();
  const categories = new Categories();
  const utility = new Utility();
  const url = utility.getBaseUrl();

  let bookTitle;

  before(() => {
    cy.fixture("books.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    // cy.visit(url);
    categories.navigateToDesiredSection("Books");
  });

  it("validate sort by function", () => {
    productionSelector.selectSortBy("Name: A to Z");
    bookTitle = productionSelector.extractProductTitle();
    // cy.wrap(bookTitle).should("deep.equal", data.bookTitle.sort().reverse());

    cy.wrap(bookTitle).should("deep.equal", data.bookTitle.sort());
    cy.wrap(bookTitle).should("have.length", 6);
  });

  it("validate filter by price function", () => {
    productionSelector.filterProductsByPrice("Under 25.00", 0, 25);
    productionSelector.removeFilter();
    bookTitle = productionSelector.extractProductTitle();
    cy.wrap(bookTitle).should("have.length", 6);
  });

  it("validate display function", () => {
    productionSelector.displayProducts("4");
    productionSelector.extractProductTitle.should("have.length", 4);
  });

  it("validate viewmode function", () => {
    productionSelector.viewProducts("List");
    cy.get(".product-list").should("exist");
    cy.get(".product-grid").should("not.exist");
  });

  it.only("validate pager function", () => {
    productionSelector.displayProducts("4");
    productionSelector.switchPager();
  });
});
