///<reference types = "Cypress"/>

import Categories from "../pageObjects/Categories";
import Utility from "../support/utility";
describe("Validate Categories Links", () => {
  const categories = new Categories();
  const utility = new Utility();
  const url = utility.getBaseUrl();

  beforeEach(() => {
    cy.visit(url);
  });
  it("validate categories links navigate to correct page", () => {
    categories.clickOnCatergoriesAndValidatePath("Books", "books");
    categories.clickOnCatergoriesAndValidatePath("Computers", "computers");
    categories.clickOnCatergoriesAndValidatePath("Electronics", "electronics");
    categories.clickOnCatergoriesAndValidatePath("Jewelry", "jewelry");
  });
});
