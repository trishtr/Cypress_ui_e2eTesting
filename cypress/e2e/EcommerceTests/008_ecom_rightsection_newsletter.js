/// <reference types = 'Cypress'/>

describe("validate sign up feature", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
  });
  it("validate users can sign up using valid emails", () => {
    cy.generateEmail().then((randomemail) => {
      cy.get("input#newsletter-email").clear().type(randomemail);
      cy.get("#newsletter-subscribe-button").click();
      cy.get("#newsletter-result-block")
        .invoke("text")
        .should("include", "Thank you for signing up");
    });
  });
});
