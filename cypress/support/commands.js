// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("user_login", (username, password) => {
  cy.get("#txt-username").type(username);
  cy.get("#txt-password").type(password);
  cy.get("#btn-login").invoke("removeAttr", "target").click();
  // cy.url().then(($url) => {
  //   $url.includes(pathParam);
  // });
});

Cypress.Commands.add("handling_date_picker", (desiredMonth) => {
  Cypress.Commands.add("clickNextArrow", () => {
    return cy.get(".datepicker-days .next").click();
  });
  Cypress.Commands.add("getCurrentMonth", () => {
    return cy.get(".datepicker-switch").invoke("text");
  });

  cy.getCurrentMonth().then((currentMonth) => {
    if (currentMonth !== desiredMonth) {
      cy.clickNextArrow();
      cy.getCurrentMonth().then((newCurrentMonth) => {
        currentMonth = newCurrentMonth;
      });
    }
  });
});

Cypress.Commands.add("selectDesiredDate", (desiredDate) => {
  return cy
    .get(".datepicker-days .day")
    .not(".old")
    .contains(desiredDate)
    .click();
});
