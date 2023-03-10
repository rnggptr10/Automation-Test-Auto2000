/// <reference types="cypress" />

context('Booking Vehicle', () => {
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

    it('Do Booking Vehicle Based On The Desired Time (Available Time)', () =>{
        // Login
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // Button Fitur Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        // Button Tambah kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Chose Vehicle
        cy.get(':nth-child(4) > .wrapper-add-vehicle-list-to > .g-col > .btn-primary-white').click()
        // Next
        cy.get('.wss-services > .accordian-step-button').click()
        cy.get('#ui-id-35 > .accordian-step-button').click()

        // Click Check Box
        cy.get('#ui-id-36 > :nth-child(2) > :nth-child(1) > .custom-checkbox > .checkmark').click()
        cy.get('#selectedPeriodicService-button').click()
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click()
        cy.get('#ws-step23-button').click() 

        // Click CheckBox Pilih Waktu/Cabang - Berdasarkan Waktu Yang Diinginkan Oleh User
        cy.get('#ui-id-37 > :nth-child(1) > .g-col-12 > :nth-child(1) > label').click({force:true})
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains('Bali').click()
        cy.get('#city-button').click()
        cy.get('#city-menu').contains('Denpasar').click()
        cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click({force:true})
        cy.get('#preferredTime-button').click()
        cy.get('#preferredTime-menu').contains('10:00').click()

        if(cy.get('#branch-error').should('not.be.visible')){
            cy.wait(4000)
            cy.get(':nth-child(1) > .pick-available-branches-item').click()
            cy.get('.terms-container > .custom-checkbox > .checkmark').click()
            cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        }
        cy.get('#wsStep2').click({force:true})
        cy.wait(4000)
    })

})