/// <reference types="cypress" />

context('Fitur Login', () => {
    // data testing berdasarkan testcase yang berada di spreedsheet
    const userData = [
        {
            "email" : "",
            "password" : ""
        },
        {
            "email": "nurinafasya@gmail.com",
            "password":"hahahaha"
        },
        {
            "email": "nurinafasya111@gmail.com",
            "password":"hahahihi123"
        },
        {
            "email":"nurinafasya@gmail.com",
            "password":"hahahihi123"
        }
    ]

    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)
        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/login')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    userData.forEach((data) =>{
        it('Action Login', () =>{
            if(data.email != "" && data.password != ""){
                cy.get('#login-email').type(data.email)
                cy.wait(400)
                cy.get('#login-password').type(data.password)
                cy.wait(400)
                cy.get('#btn-login').click()
                cy.wait(4000)
            }else{
                cy.get('#btn-login').should('be.visible')
            }
        })
    })

})   