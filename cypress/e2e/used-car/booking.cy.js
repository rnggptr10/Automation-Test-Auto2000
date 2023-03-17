/// <reference types="cypress" />

context('Booking Vehicle', () => {
    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)

        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Do Booking Used Car', () =>{
        // Login
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // Button Fitur Workshop Service
        cy.get(':nth-child(6) > .categoryContainer').click()
        cy.wait(4000)

        //Klik Agya
        cy.get('[href="/certified-used-car-toyota/p/agy001b20"][title="TOYOTA AGYA 1.2 G AT 2016"] > .lzy_img').click()
        cy.wait(4000)

        // Test Drive
        
        // Beli
        cy.get('#addToCartFormButtonAGY001B20 > .btn-primary-white').click()

        // Pilih Paket Service
        cy.get('#noNeedServiceUsedCar > .product-carousel-text-section').click()
        
        // Click Button 'Lanjut'
        cy.get('#btnMoveRightTab').click()
        cy.get('#btnMoveRightTab').click()
        cy.get('#btncontpayment').click()

        // Chose Payment Method (Cash with Virtual Account)
        cy.get('#btnNewCarPaymentUrl').click()

        //Upload KTP
        cy.get('input[type=file]').attachFile('../fixtures/img/ktp_rangga.jpg')
        cy.wait(4000)

        // Click Checkbox
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        

    })

})