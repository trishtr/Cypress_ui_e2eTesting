class HeaderMenu {
  clickOnMenu(desiredMenu) {
    cy.get(".top-menu li a").each(($text) => {
      if ($text.text().trim().toLowerCase() === desiredMenu) {
        cy.wrap($text).click();
      }
    });
  }
}

export default HeaderMenu;
