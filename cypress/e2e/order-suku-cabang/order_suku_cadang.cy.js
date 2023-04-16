/// <reference types="cypress" />

context('Booking Vehicle', () => {
    const userData = {
        "email": "ranggaputra103@gmail.com",
        "password": "sayangkamu8"
    }

    const detailCarData = {
        "aksesoris" : "Wipper Depan & Belakang"
    }

    const waktuPesananData = {
        "provinsi" : "DKI Jakarta",
        "kota" : "Jakarta Barat",
        "cabang" : "Auto2000 Daan Mogot",
        "tanggal_booking" : ":nth-child(4) > :nth-child(7) > .ui-state-default", 
        "jam_booking" : "8:00"
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

    it('Do Booking Suku Cadang', () =>{
        // To Page Suku Cadang 
        cy.get(':nth-child(7) > .categoryContainer').click()

        /*************************
         *         FORM
        **************************/
    
        /*************************
         *   Detail Mobil Anda
        **************************/
        // Choose Cars
        cy.get('.add-car-carousel-item').click()
        // Suku Cadang atau Aksesoris yang ingin dipesan
        cy.get('#partOrAccessoriesDescription').type(detailCarData.aksesoris)
        
        /*************************
         *         Waktu 
        **************************/
        // Provinsi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains(waktuPesananData.provinsi).click()
        cy.wait(400)
        // Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains(waktuPesananData.kota).click()
        cy.wait(400)
        // Cabang
        cy.get('#order-parts-branch-select-button').click()
        cy.get('#order-parts-branch-select-menu').contains(waktuPesananData.cabang).click()
        cy.wait(400)
        // Tanggal
        cy.get(waktuPesananData.tanggal_booking).click()        
        cy.wait(400)
        // Jam
        cy.get('#slotTime-button').click()
        cy.get('#slotTime-menu').contains(waktuPesananData.jam_booking).click()
        cy.wait(400)

        // Term & Condition
        cy.get('.checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-enable-scroll > .terms-action-container > #tcclose').click()

        // Button 'Kirim'
        cy.get('.ca-submit > .btn-primary-white').click()
    })
})