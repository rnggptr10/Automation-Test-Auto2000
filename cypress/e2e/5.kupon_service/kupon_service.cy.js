/// <reference types="cypress" />

context('Kupon Service', () => {
    // data User
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    } 

    beforeEach('',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)

        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/login')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        // Login
        cy.get('#login-email').type(userData.email)
        cy.get('#login-password').type(userData.password)
        cy.get('#btn-login').click()
        cy.wait(4000)
    })
    
    it('Do Search', () => {
        // To Page Kupon Service
        cy.get(':nth-child(3) > .categoryContainer').click()

        // Search
        cy.get('.product-list-search-bar > .search-form > #js-site-search-input').type('COUPONTESTUAT17' + '{enter}')

        // Check Result
        cy.get('.accessories-tile').contains('COUPONTESTUAT17')
        cy.wait(400)
    })  

    it('Do Search By Filter', () => {
        // To Page Kupon Service
        cy.get(':nth-child(3) > .categoryContainer').click()
    
        // Model Mobil
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains('AGYA').click()

        // Tipe Mobil
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains('AGYA 1.0 E A/T').click()
    })  
    
    it('Do See Detail Kupon Service & Back To Landing Page Kupon Service', () => {
        // To Page Kupon Service
        cy.get(':nth-child(3) > .categoryContainer').click()
    
        // See Detail Kupon Service
        cy.get(':nth-child(3) > .accessories-tile > .accs-tile-hover > .accessories-details').click()
        cy.get('.arrow-back > a').click()

        // Banyak List Aksesoris
        cy.get('.product-list-result-count').contains('29 hasil')
    })  


    // it('Do Add Kupon Service & Checkout', () => {
    //     // To Page Kupon Service
    //     cy.get(':nth-child(3) > .categoryContainer').click()
    // })  

})