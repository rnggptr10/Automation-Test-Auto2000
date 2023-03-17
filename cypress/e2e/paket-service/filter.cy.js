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

    it('Do Search By Filter', () =>{ 
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Paket Service
        cy.get(':nth-child(5) > .categoryContainer').click()
        cy.wait(4000)

        // Filter Kendaraan
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains('AGYA').click()
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains('AGYA 1.0 E A/T').click()

        // Click Button 'Cari'
        cy.get('.button-find-sp > .btn-primary-white').click()
        
        // Click Product
        cy.get(':nth-child(2) > .servicePackage-tile').click()

        // Choose Car
        cy.get('.test-slides > .add-car-carousel-item').click()
        
        // Kontak Informasi
        // Provisi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains('DKI Jakarta').click()
        // Kota
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains('Jakarta Barat').click()
        // Kecamatan
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains('Taman Sari').click()
        // Kelurahan
        cy.get('#ui-id-3-button').click()
        cy.get('#ui-id-3-menu').contains('Taman Sari').click()  
        // Alamat
        cy.get('#car-buyer-address').type('SUNterra, Jalan M.H. Thamrin, RT.9/RW.5, Gondangdia, Central Jakarta City, Jakarta, Indonesia')
        // Kode Pos
        cy.get(':nth-child(4) > :nth-child(2) > .form-field-section > .form-field').type('40512')

        // Click Button 'Berikutnya'
        cy.get('#ui-id-11 > .ca-submit > .btn-primary-white').click()
        // Kilometer Mobil
        cy.get(':nth-child(6) > .form-field-section > .form-field').type('12000')
        
        // Click Button 'Berikutnya'
        cy.get('.g-row > .ca-submit > .btn-primary-white').click()

        // Pilih Cabang Auto2000
        // Provinsi
        cy.get('#province-spsp-button').click()
        cy.get('#province-spsp-menu').contains('DKI Jakarta').click()
        // Kota
        cy.get('#city-spsp-button').click()
        cy.get('#city-spsp-menu').contains('Jakarta Barat').click()
        // Cabang
        cy.get('#branch-spsp-button').click()
        cy.get('#branch-spsp-menu').contains('Auto2000 Daan Mogot').click()
    
        // Pilih Tanggal Rencana Service
        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
        // cy.get('#slotTime').contains('08:00').click()
        // Pilih Waktu Jam Rencana Service

        // Click CheckBox Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        // Click Button 'Booking'
        cy.get('#ui-id-15 > .ca-submit > .btn-primary-white').click({force:true})

        // Choose Metode Pembayaran
        cy.get('[for="rbQRIS"]').click()

        // Click Button 'Confirm & Pay'
        cy.get('.payment-confirm-pay').click()
        cy.wait(4000)

        // IF Succes
        cy.contains('QRIS Payment')
    })
})