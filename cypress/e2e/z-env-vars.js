describe("Environment Varibale Demo", () => {


    it("Demo_brokenImages", () => {
        cy.visit("https://demoqa.com/broken");
         //testing uploading pictures from fixture file to the website
        cy.get("div > img[src='/images/Toolsqa_1.jpg']")
        .should("be.visible")
        .should(([img]) => {
            expect(img.complete).to.be.true;
        })
        .then(([img]) =>{
            cy.fixture("img.jpg").then(content =>{
                let fixtureImage = new Image();
                fixtureImage.src = "data:image/jpef,${content}";
                return new Promise(resolve =>{
                fixtureImage.onload = () =>{
                    expect(img.naturalWidth).to.equal(fixtureImage.naturalWidth);
                    expect(img.naturalHeight).to.equal(fixtureImage.naturalHeight)
                    resolve();
                }
            })
            })
        })
    })






})
