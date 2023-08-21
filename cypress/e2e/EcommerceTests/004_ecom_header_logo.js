/// <reference types = 'Cypress'/>

describe("Validate logo renders", () => {
  it("validate logo fully loaded", () => {
    cy.visit(Cypress.env("ecommerce"));
    cy.get(".header-logo img").should("be.visible");
  });
});
//test for broken img
//cy.get("div > img[src='/images/Toolsqa_1.jpg']")
// .should("be.visible")
// .should(([img]) => {
//     expect(img.complete).to.be.true;
// })
// .then(([img]) =>{
//     cy.fixture("img.jpg").then(content =>{
//         let fixtureImage = new Image();
//         fixtureImage.src = "data:image/jpef,${content}";
//         return new Promise(resolve =>{
//         fixtureImage.onload = () =>{
//             expect(img.naturalWidth).to.equal(fixtureImage.naturalWidth);
//             expect(img.naturalHeight).to.equal(fixtureImage.naturalHeight)
//             resolve();
