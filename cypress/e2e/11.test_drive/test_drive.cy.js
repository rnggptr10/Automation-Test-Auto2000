/// <reference types="cypress" />

context('Testing Test Drive Digiroom Auto2000', () => {
    // user data
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }

    const daerahData = {
        "provinsi" : "DKI Jakarta",
        "kota" : "Jakarta Pusat"
    }

    const bookingData = {
        // waktu
        "cabang" : "Auto2000 Pluit", 
        "tanggal" : ":nth-child(5) > :nth-child(6) > .ui-state-default",
        "jam" : "09:00 - 12:00",
        
        // data diri

    } 

    beforeEach('Test Drive',() => {
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
    
    it('Do Booking Test Drive', () => {

        //To Page Test Drive
        cy.get(':nth-child(9) > .categoryContainer').click()
        cy.wait(400)
        cy.url().should('eq', 'https://uat.auto2000.co.id/c/testdrive-toyota')
        cy.wait(400)

        //Klik Test Drive (Memilih Altis)
        cy.get('[data-product-code="ALTIS"] > .plp-box > .item-align-center > #btn-testDrive-pdpNewCar').click()
        cy.url().should('eq', 'https://uat.auto2000.co.id/testdrive/new-car/altis')
        cy.wait(500)

        /***************************************
         * Change Provinsi (Bekasi, Jawa Barat)
         **************************************/
        // Provinsi
        cy.get('.g-col-lg-2 > .header-location').click({force:true})
        cy.get('#ui-id-1-button').click({force:true})
        cy.get('#ui-id-1-menu').contains(daerahData.provinsi).click()
        cy.wait(200)
        // Kota
        cy.get('#ui-id-2-button').click({force:true})
        cy.get('#ui-id-2-menu').contains(daerahData.kota).click()
        cy.wait(200)
        // Simpan Lokasi
        cy.get('#prev-page').click({force:true})
        

        /*******************************************
         * Pilih Waktu & Tempat yg Anda Inginkan
         ******************************************/
        // Pilih Cabang Terdekat
        cy.get('#branchList-button').click()
        cy.get('#branchList-menu').contains(bookingData.cabang).click()
        cy.wait(200)

        // Pilih Tanggal
        cy.get(bookingData.tanggal).click()

        // Memilih Waktu 
        cy.get('#slotTime-button').click()
        cy.get('#slotTime-menu').contains(bookingData.jam) .click()
        cy.wait(200)

        // Term & Condition
        cy.get('.checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button 'Submit'
        cy.get('#btn-testDrive-bookNow-pdpNewCar').click()

        //Validasi Keberhasilan Booking Test Drive
        cy.contains('Pemesanan Test Drive')
        cy.contains('Booking telah diproses Staf kami akan segera menghubungi Anda')
    })
})