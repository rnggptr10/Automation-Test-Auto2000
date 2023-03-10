/// <reference types="cypress" />

context('Fitur Login', () => {
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

    const userData = [
        // Null Values
        {
            "nama": "",
            "nomor_telepon": "",
            "email": "",
            "password": "",
            "confirm_password": "",
        },
        // Correct Values
        {
            "nama": "",
            "nomor_telepon": "",
            "email": "",
            "password": "",
            "confirm_password": "",
        },
        // Wrong Values
    ]




    it('Action Register', () =>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(400)
        cy.get('.create-acc').click()
    })
})   