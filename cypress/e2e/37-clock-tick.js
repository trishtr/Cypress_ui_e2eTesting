/// <reference types= "cypress" />

describe("Clock example", () => {

    const nowTimeStamp = new Date(Date.UTC(2017, 2, 14)).getTime();

    beforeEach(function () {
        cy.log("date timestamp ", nowTimeStamp)
        cy.clock(nowTimeStamp)
        cy.visit("https://example.cypress.io/commands/spies-stubs-clocks")
    })

    it("clock demo", () => {
        //cy.clock() control the time in the browser
        cy.get('#clock-div').click()
            .should('have.text', '1489449600')
    })

    it("tick demo", () => {
        cy.get('#tick-div').click()
            .should('have.text', '1489449600')
        cy.tick(10000) // 10 seconds passed
        cy.get('#tick-div').click()
            .should('have.text', '1489449610')

    })
})