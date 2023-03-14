/// <reference types="cypress" />

context('Booking Vehicle', () => {
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
    })

    it('Do Booking Body Paint', () =>{
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Body-Paint
        cy.get(':nth-child(13) > .categoryContainer').click()

        // Click Button 'Pilih Kendaraan' at Page Body-paint
        cy.get('.wrapper-button-add > .btn-primary-white').click()

        // Chose Car to Body-Paint
        cy.get(':nth-child(3) > .wrapper-add-vehicle-list-to > .g-col > .btn-primary-white').click()

        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()
        cy.get(':nth-child(1) > .g-col-12 > .custom-checkbox > .checkmark').click()

        // Click Dropdown 'Perusahaan Asuransi' 
        cy.get('#body-paint-insurance-button').click()
        cy.get('#body-paint-insurance-menu').contains('ASURANSI ASTRA BUANA').click()
        
        // Checkbox 'SPK Tersedia'
        cy.get(':nth-child(3) > .g-col-12 > .custom-checkbox > .checkmark').click()

        // Type Field 'Jenis Service'
        cy.get('#service-required').type('body depan penyok')

        // Click Button 'Berikutnya'
        cy.get('.body-paint-step1 > .btn-primary-white').click()

        // Click Dropdown 'Pilih Waktu/Cabang'
        // Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains('Jakarta Selatan').click()
        // Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains('Auto2000 Ciledug B&P').click()
        // Tanggal
        cy.get(':nth-child(4) > :nth-child(6) > .ui-state-default').click()
        // Waktu
        cy.get('#preferredSlot-button').click()
        cy.get('#preferredSlot-menu').contains('09:00').click()

        // Checkbox Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Submit
        cy.get('.submit-bp').click()
        cy.wait(4000)
    })
})