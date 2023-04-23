/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data testing untuk akun user
    const userData = {
        "email": "ranggaputra103@gmail.com",
        "password": "sayangkamu8"
    }

    beforeEach('Open Web', () => {
        // For Set Size Desktop
        cy.viewport(1280, 720)

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

    it('Do Booking Vehicle Based On Waktu yang diinginkan', () => {
        // To Page Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        /*************************************
         * Personal Informasi & Detail Mobil
         ************************************/
        // Button Pilih kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Chose Vehicle
        cy.get('.g-col > .btn-primary-white').click()
        cy.wait(4000)

        // Click button 'Berikutnya'
        cy.get('.wss-services > .accordian-step-button').click()

        /*************************************
         *  Informasi Data Diri Pelanggan
         ************************************/
        // Click button 'Berikutnya'
        cy.get('#ui-id-35 > .accordian-step-button').click()

        /*************************************
         *      Pilih Layanan Service
         ************************************/
        // Click Check Box 'Service Berkala'
        cy.get('#ui-id-36 > :nth-child(2) > :nth-child(1) > .custom-checkbox > .checkmark').click()

        // Choose Item from Dropdown 'Pilih jarak tempuh Anda?'
        cy.get('#selectedPeriodicService-button').click()
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click()

        // Click button 'Berikutnya'
        cy.get('#ws-step23-button').click()

        /*************************************
         *       Pilih Waktu Cabang
         ************************************/
        // Click CheckBox Pilih Waktu/Cabang - Berdasarkan Waktu Yang Diinginkan Oleh User
        cy.get('#ui-id-37 > :nth-child(1) > .g-col-12 > :nth-child(1) > label').click({ force: true })
        // Click Dropdown 'Province'
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains('Bali').click()
        // Click Dropdown 'City'
        cy.get('#city-button').click()
        cy.get('#city-menu').contains('Denpasar').click()
        // Click Date From Calender
        cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click({ force: true })
        // Click & Choose Time 
        cy.get('#preferredTime-button').click()
        cy.get('#preferredTime-menu').contains('10:00').click()

        if (cy.get('#branch-error').should('not.be.visible')) {
            cy.wait(4000)
            cy.get(':nth-child(1) > .pick-available-branches-item').click()
            cy.get('.terms-container > .custom-checkbox > .checkmark').click()
            cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        }
        cy.get('#wsStep2').click()
        cy.wait(4000)

        // 
        cy.get('confirmation-number')
    })

    it('Do Booking Workshop Service Based On Cabang yang diinginkan', () => {
        // To Page Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        /*************************************
         * Personal Informasi & Detail Mobil
         ************************************/
        // Button Pilih kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Chose Vehicle
        cy.get('.g-col > .btn-primary-white').click()
        cy.wait(4000)

        // Click button 'Berikutnya'
        cy.get('.wss-services > .accordian-step-button').click()

        /*************************************
         *  Informasi Data Diri Pelanggan
         ************************************/
        // Click button 'Berikutnya'
        cy.get('#ui-id-35 > .accordian-step-button').click()

        /*************************************
         *      Pilih Layanan Service
         ************************************/
        // Click Check Box 'Service Berkala'
        cy.get('#ui-id-36 > :nth-child(2) > :nth-child(1) > .custom-checkbox > .checkmark').click()

        // Choose Item from Dropdown 'Pilih jarak tempuh Anda?'
        cy.get('#selectedPeriodicService-button').click()
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click()

        // Click button 'Berikutnya'
        cy.get('#ws-step23-button').click()

        /*************************************
         *       Pilih Waktu/Cabang
         ************************************/
        // Click CheckBox Pilih Waktu/Cabang - Berdasarkan Cabang yang diinginkan 
        cy.get(':nth-child(2) > label').click()
        // Click Dropdown 'Province'
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains('DKI Jakarta').click()
        // Click Dropdown 'City'
        cy.get('#city-button').click()
        cy.get('#city-menu').contains('Jakarta Barat').click()
        // Click Dropdown 'Cabang'
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains('Auto2000 Kapuk').click()
        // Click Date From Calender
        cy.get(':nth-child(5) > :nth-child(6) > .ui-state-default').dblclick({ force: true })
        cy.wait(400)
        // Click & Choose Time 
        cy.get('#preferredTime-button').click()
        cy.wait(1000)
        cy.get('#preferredTime-menu').contains('10:00').click()
        
        if (cy.get('#branch-error').should('not.be.visible')) {
            cy.wait(4000)
            cy.get('.terms-container > .custom-checkbox > .checkmark').click()
            cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        }

        // Button Book Sekarang
        cy.get('#wsStep2').click()
        cy.wait(1000)
    })

})