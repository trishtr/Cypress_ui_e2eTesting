class Footer {
  getInformationSection() {
    return cy.get(".information a");
  }

  getCustomerSerive() {
    return cy.get(".customer-service a");
  }

  getMyAccount() {
    return cy.get(".my-account a");
  }

  getFollowUs() {
    return cy.get(".follow-us a");
  }

  navigateToSubInfoSection(subinfo, partialLinkText) {
    this.getInformationSection().each(($text, index) => {
      if ($text.text() === subinfo) {
        cy.wrap($text).invoke("removeAttr", "target").click({ force: true });
        cy.url().should("include", partialLinkText);
      }
    });
  }

  navigateToSubCustomerServiceSection(subinfo, partialLinkText) {
    this.getCustomerSerive().each(($text, index) => {
      if ($text.text() === subinfo) {
        cy.wrap($text).invoke("removeAttr", "target").click();
        cy.url().should("include", partialLinkText);
      }
    });
  }
  navigateToSubMyAccountSection(subinfo, partialLinkText) {
    this.getMyAccount().each(($text, index) => {
      if ($text.text() === subinfo) {
        cy.wrap($text).invoke("removeAttr", "target").click();
        cy.url().should("include", partialLinkText);
      }
    });
  }
  navigateToSubFollowUsSection(subinfo, partialLinkText) {
    this.getFollowUs().each(($text, index) => {
      if ($text.text() === subinfo) {
        cy.wrap($text).invoke("removeAttr", "target").click();
        cy.url().should("include", partialLinkText);
      }
    });
  }
}

export default Footer;
