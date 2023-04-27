/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data akun user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }
   
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

        // Login
        cy.get('#login-email').type(userData.email)
        cy.get('#login-password').type(userData.password)
        cy.get('#btn-login').click()
        cy.wait(4000)
    })

    it('Do Search Car', () =>{
        // To Page Bandingkan Mobil
        cy.get(':nth-child(12) > .categoryContainer').click()

        // Input Search
        cy.get('#js-site-search-input').type('Avanza{enter}')

        // Check Result
        cy.get('.plp-name').contains('AVANZA')
        cy.wait(400)
    })

    // it('Do Search By Filter', () =>{
        
    // })

    // it('Do Compare Car', () =>{
        
    // })
})