/// <reference types="cypress" />

context('Booking Vehicle', () => {
    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)

        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/c/paketservistoyota')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Do Booking Body Paint', () =>{ 
        cy.get(':nth-child(2) > .servicePackage-tile > .accessories-price').invoke('text').then((nama) => {
            console.log(nama)
        })
    })
})