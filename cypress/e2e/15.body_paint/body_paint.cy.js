/// <reference types="cypress" />

context('Body Paint', () => {
    // data akun user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }
    const layananServiceData = {
        "jenis_layanan" : "Kepemilikan Asuransi"  // Kepemilikan Asuransi atau SPK Tersedia
    }
    const bookWaktuCabangData = {
        "provinsi_cabang" : "Jawa Barat",
        "kota_cabang" : "Bandung",
        "nama_cabang" : "Auto2000 Cibiru B&P",
        "tanggal_booking" : ":nth-child(4) > :nth-child(4) > .ui-state-default",
        "jam_booking" : "08:30"
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

        // Login
        cy.get('#login-email').type(userData.email)
        cy.get('#login-password').type(userData.password)
        cy.get('#btn-login').click()
        cy.wait(4000)
    })

    it('Do Booking Body Paint', () =>{
        // To Page Body-Paint
        cy.get(':nth-child(13) > .categoryContainer').click()
        cy.wait(4000)

        // Click Button 'Pilih Kendaraan' at Page Body-paint
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Choose Car
        cy.get('.service-booking-tile').then($service_booking_tile =>{
            if($service_booking_tile.find('.g-col > .btn-primary-white').length){
                cy.get('.g-col > .btn-primary-white').click()
            }else{

            }
        })

        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()

        // Pilih Layanan Service
        cy.get(':nth-child(1) > .g-col-12 > .custom-checkbox > .checkmark').click()
        cy.get('#body-paint-insurance-button').click()
        cy.get('#body-paint-insurance-menu').contains('ASURANSI ASTRA BUANA').click()
        cy.get(':nth-child(3) > .g-col-12 > .custom-checkbox > .checkmark').click()
        cy.get('#service-required').type('body depan penyok')
        
        // Click Button 'Berikutnya'
        cy.get('.body-paint-step1 > .btn-primary-white').click()
        cy.wait(4000)

        // Pilih Waktu/Cabang
        // Provinsi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains(bookWaktuCabangData.provinsi_cabang).click()
        // Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains(bookWaktuCabangData.kota_cabang).click()
        // Nama Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains(bookWaktuCabangData.nama_cabang).click()
        // Tanggal
        cy.get(bookWaktuCabangData.tanggal_booking).click()
        cy.wait(4000)
        // Jam Booking
        cy.get('#preferredSlot-button').click()
        cy.get('#preferredSlot-menu').contains(bookWaktuCabangData.jam_booking).click()
        
        // Term & Condition
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