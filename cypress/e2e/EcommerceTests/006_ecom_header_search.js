///<reference types = 'Cypress'/>
import Header from "../../pageObjects/Header";
import SearchPage from "../../pageObjects/SearchPage";

describe("validate search function in headers", () => {
  const header = new Header();
  const searchPage = new SearchPage();

  beforeEach("navigate to the page", () => {
    cy.visit(Cypress.env("ecommerce"));
  });

  it("validate search function with valid product title", () => {
    header.searchProduct("computer");
    searchPage.getSearchResultItemBox().should("exist");
  });
  it("validate search alert with short input", () => {
    header.searchProduct(".");
    searchPage
      .getSearchResultWarning()
      .contains("Search term minimum length is 3 characters");
  });
  it("validate search alert with invalid input", () => {
    header.searchProduct("abc");
    searchPage.getSearchResultMessage("No products were found");
  });
});
