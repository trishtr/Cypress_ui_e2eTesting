class Categories {
  navigateToDesiredSection(desiredCatergories) {
    cy.get(".block-category-navigation a").each(($ele) => {
      if ($ele.text().startsWith(desiredCatergories)) {
        cy.wrap($ele).click();
      }
    });
  }

  navigateToSubList(subCatergories) {
    cy.get(".listbox .sublist li a").each(($ele) => {
      if ($ele.text().trim() === subCatergories) {
        cy.wrap($ele).click({ force: true });
      }
    });
  }

  clickOnCatergoriesAndValidatePath(desiredCatergories, xpathTxt) {
    this.navigateToDesiredSection(desiredCatergories);
    cy.url().should("include", xpathTxt);
  }
}
export default Categories;
