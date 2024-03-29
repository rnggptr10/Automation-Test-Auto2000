/// <reference types="cypress" />

context('Fitur Login', () => {
    // Data Testing berdasarkan testcase yang berada di spreedsheet
    const userData = 
    {
        "email" : "nurinafasya@gmail.com",
        "password" : "hahahihi123"
    }
    


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


    it('Logout', () =>{

        // Log In   
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.url().should('eq', 'https://uat.auto2000.co.id/login')
        cy.get('#login-email').type(userData.email)
        cy.get('#login-password').type(userData.password)
        cy.get('#btn-login').click()
        cy.url().should('eq', 'https://uat.auto2000.co.id/')
        cy.wait(500)

        // Log Out
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.get('.modal-close').click()
        cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        cy.get('.my-profile-logout-btn').click()
    })
  
})   