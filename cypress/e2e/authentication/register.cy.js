/// <reference types="cypress" />

context('Fitur Login', () => {
    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)
        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/register')
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
            "nama": "Fasyess",
            "nomor_telepon": "87720490872",
            "email": "nurinafasya@gmail.com",
            "password": "hahahihi123",
            "confirm_password": "hahahihi123",
        },
        // Wrong Values
    ]

    it('Action Register With Null Value', () =>{
        cy.get('.ca-submit > .btn-primary-white').should('be.disabled')
        cy.wait(4000)
    })

    it('Action Register With Correct Value', () =>{
        // Input
        cy.get('#create-accnt-your-name').type("Fasyess")
        cy.get('#phoneNumber').type("87720490872")
        cy.get('#email').type("nurinafasya@gmail.com")
        cy.get('#cr-password').type("hahahihi123")
        cy.get('#cr-confirm-password').type("hahahihi123")
        
        // Checkbox
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Create Account
        cy.get('.ca-submit > .btn-primary-white').click()
        cy.wait(4000)
    })

    it('Action Register With Wrong Value (Null Name)', () =>{
        // Input
        cy.get('#phoneNumber').type("87720490872")
        cy.get('#email').type("nurinafasya@gmail.com")
        cy.get('#cr-password').type("hahahihi123")
        cy.get('#cr-confirm-password').type("hahahihi123")
        
        // Checkbox
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Create Account
        cy.get('.ca-submit > .btn-primary-white').should('be.visible')
        cy.wait(4000)
    })

    // Phone Number is Not Required
    it('Action Register With Wrong Value (Null Phone Number)', () =>{
        // Input
        cy.get('#create-accnt-your-name').type("Fasyess")
        cy.get('#email').type("nurinafasya@gmail.com")
        cy.get('#cr-password').type("hahahihi123")
        cy.get('#cr-confirm-password').type("hahahihi123")
        
        // Checkbox
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Create Account
        cy.get('.ca-submit > .btn-primary-white').click()
        cy.wait(4000)
    })

    // Email is Required
    it('Action Register With Wrong Value (Null Email)', () =>{
        // Input
        cy.get('#create-accnt-your-name').type("Fasyess")
        cy.get('#phoneNumber').type("87720490872")
        cy.get('#cr-password').type("hahahihi123")
        cy.get('#cr-confirm-password').type("hahahihi123")
        
        // Checkbox
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Create Account
        cy.get('.ca-submit > .btn-primary-white').should('be.disabled')
        cy.wait(4000)
    })

})   