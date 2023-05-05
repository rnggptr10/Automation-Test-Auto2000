/// <reference types="cypress" />

context('Tracking Order', () => {
    // data akun user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }

    // Nomor Booking
    const idOrderData = {
        "id":"T257SFG23000003",
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

    it('Do Check Status Booking Service If Found', () =>{
        // To Page Tracking Order
        cy.get(':nth-child(11) > .categoryContainer').click()

        // Type ID Booking
        cy.get('#pkb-no-input').type(idOrderData.id)

        // Button Cek Status
        cy.get('.btn-check-status-service').click()
        cy.wait(6000)
    })

    // it('Do Check Status Booking Service If Not Found')
})