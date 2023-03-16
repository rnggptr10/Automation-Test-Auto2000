/// <reference types="cypress" />

context('Testing Subscribe Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://uat.auto2000.co.id/')
        cy.get('.close > img').click({force:true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Subscribe Digiroom Auto2000', () => {
        cy.get('#footer').scrollIntoView()
        cy.wait(500)

        //Isi Email
        cy.get('#input-email-subcr').type('farellaldi29@gmail.com')
        cy.wait(200)

        cy.get('#footer-subcribe').click()
        cy.wait(200)

        //Validasi
        cy.get('.form-subcribe-footer').contains('Anda sudah berlangganan')
    })

})