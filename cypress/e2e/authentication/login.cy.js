/// <reference types="cypress" />

context('Fitur Login', () => {
    // data testing
    const userData = [
        {
            "email" : "rangga20004@mail.unpad.ac.id",
            "password" : "hahahihi123"
        },
        {
            "email": "",
            "password":""
        },
        {
            "email":"ranggaputra103@gmail.com",
            "password":"hahahihihehe"
        },
        {
            "email":"rangga20004@mail.ac.id",
            "password":"hahahihi123"
        },
        {
            "email":"ranggaputra103",
            "password":"sayangkamu8"
        }
    ]

    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)
        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    userData.forEach((data) =>{
        it('Action Login', () =>{
            cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
            cy.wait(400)

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