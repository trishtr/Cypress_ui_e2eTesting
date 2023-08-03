/// <reference types = "cypress" />

describe.skip("Click and Class and Background Validation", ()=>{
    beforeEach(()=>
    {
        cy.visit("http://uitestingplayground.com/click")

    });
    
    it("class assertion ", ()=>{
        cy.get("#badButton").should('have.class', "btn btn-primary");
        
        

    })



    it("background assertion ", ()=>{
        cy.get("#badButton").click().then(()=>{
            cy.get("#badButton").should('have.class', 'btn btn-success');
            cy.get("#badButton").should('have.css', "background-color",  "rgb(40, 167, 69)")
        })
        
        
    })
})

describe("hover challenge", ()=>{

    beforeEach(()=>{
        cy.visit("http://uitestingplayground.com/mouseover")
    })
    it("hover with cypress workaround", ()=>{
        cy.get('.text-primary').trigger('mouseover')
    })

    //real action mouse over, using cypress real events plugins
    it("hover with real action ", ()=>{
        cy.get('.text-primary').realHover()
    })
        
        
})

describe("Dynamic table challenge", ()=>{

    beforeEach(()=>{
        cy.visit("http://uitestingplayground.com/dynamictable")
    })
    it("Chrome CPU test", ()=>{
        cy.get("div[role='row'] span").each(($el, index, list)=>{

            if($el.text().includes('Chrome')){
                cy.log($el.text())
            
            let chromeRowValue = []
            chromeRowValue.push($el.next().text())
            chromeRowValue.push($el.next().next().text())
            chromeRowValue.push($el.next().next().next().text())
            chromeRowValue.push($el.next().next().next().next().text())

            chromeRowValue.forEach((chromeRowValue) =>{
                //cy.log(chromeRowValue)
                if(chromeRowValue.includes("%")){
                    cy.log(chromeRowValue)

                    cy.get('.bg-warning').should('have.text', 'Chrome CPU: ' + chromeRowValue)
                }
            })


            }
        })
    })   
        
})

