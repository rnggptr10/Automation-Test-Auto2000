/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data akun user
    const userData = {
        "email" : "nurinafasya@gmail.com",
        "password" : "hahahihi123"
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
    })

    it('Do Booking Body Paint', () =>{
        // Login
        cy.get('#login-email').type(userData.email)
        cy.get('#login-password').type(userData.password)
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Body-Paint
        cy.get(':nth-child(13) > .categoryContainer').click()
        cy.wait(4000)

        // Click Button 'Pilih Kendaraan' at Page Body-paint
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)
        
        // Chose Car to Body-Paint
        cy.get('.g-col > .btn-primary-white').click()
        // cy.get(':nth-child(3) > .wrapper-add-vehicle-list-to > .g-col > .btn-primary-white').click()
        cy.wait(4000)

        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()
        cy.get(':nth-child(1) > .g-col-12 > .custom-checkbox > .checkmark').click()
        cy.wait(4000)

        // Click Dropdown 'Perusahaan Asuransi' 
        cy.get('#body-paint-insurance-button').click()
        cy.get('#body-paint-insurance-menu').contains('ASURANSI ASTRA BUANA').click()
        cy.wait(4000)

        // Checkbox 'SPK Tersedia'
        cy.get(':nth-child(3) > .g-col-12 > .custom-checkbox > .checkmark').click()
        cy.wait(4000)

        // Type Field 'Jenis Service'
        cy.get('#service-required').type('body depan penyok')
        cy.wait(4000)

        // Click Button 'Berikutnya'
        cy.get('.body-paint-step1 > .btn-primary-white').click()
        cy.wait(4000)

        // Click Dropdown 'Pilih Waktu/Cabang'
        // Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains('Jakarta Selatan').click()
        cy.wait(4000)
        // Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains('Auto2000 Ciledug B&P').click()
        cy.wait(4000)
        // Tanggal
        cy.get(':nth-child(4) > :nth-child(6) > .ui-state-default').click()
        cy.wait(4000)
        // Waktu
        cy.get('#preferredSlot-button').click()
        cy.get('#preferredSlot-menu').contains('09:00').click()
        cy.wait(4000)
        
        // Checkbox Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(4000)

        // Button Submit
        cy.get('.submit-bp').click()
        cy.wait(4000)

        // If Success
        cy.get('.confirmation-description').should('exist')
    })
})