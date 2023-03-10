/// <reference types="cypress" />

context('Testing Test Drive Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://uat.auto2000.co.id/')
        cy.get('.close > img').click({force:true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    // it('Testing Akses Menu Test Drive', () => {
    //     cy.get(':nth-child(9) > .categoryContainer').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/testdrive-toyota')
    //     cy.wait(500)
    // })

    it('Pemesanan Test Drive', () => {

        //Membuka Halaman Test Drive
        cy.get(':nth-child(9) > .categoryContainer').click()
        cy.wait(1000)

        //Klik Test Drive (Memilih Agya)
        cy.get('[data-product-code="ALTIS"] > .plp-box > .item-align-center > #btn-testDrive-pdpNewCar').click()
        cy.url().should('eq', 'https://uat.auto2000.co.id/testdrive/new-car/altis')
        cy.wait(500)

        // //Ganti Provinsi (Memilih Bekasi Jawa Barat)
        // cy.get('.g-col-lg-2 > .header-location').click({force:true})
        // cy.get('#ui-id-1-button').click({force:true})
        // cy.wait(200)
        // cy.get('#ui-id-237').click({force:true})
        // cy.get('#ui-id-2-button').click({force:true})
        // cy.wait(200)
        // cy.get('#ui-id-285').click({force:true})
        // cy.wait(200)
        // cy.get('#prev-page').click({force:true})
        
        //Ganti Provinsi (Memilih Jakarta Barat, DKI Jakarta)
        cy.get('.g-col-lg-2 > .header-location').click({force:true})
        // cy.get('#ui-id-1-button').click({force:true})
        // cy.wait(200)
        // cy.get('#ui-id-210').click({force:true})
        cy.get('#ui-id-2-button').click({force:true})
        cy.wait(200)
        cy.get('#ui-id-2-menu').contains('Jakarta Barat').click({force:true})
        cy.wait(200)
        cy.get('#prev-page').click({force:true})

        //Memilih Tempat
        cy.get('#branchList-button').click()
        cy.wait(200)
        cy.get('#branchList-menu').contains('Auto2000 Pluit').click({force:true})
        cy.wait(200)

        //Memilih Tanggal 
        cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click({force:true})

        //Memilih Waktu 
        cy.get('#slotTime-button').click({force:true})
        cy.wait(200)
        cy.get('#slotTime-menu').contains(' 09:00 - 12:00') .click({force:true})
        cy.wait(200)

        //Mengisi Data
        cy.get('#fullName').type('Farell Aldi Kusuma')
        cy.get('#phoneNumber').type('082165123593')
        cy.get('#email').type('farellaldi29@gmail.com')
        cy.get('.pre-order-remark > textarea').type('Abaikan saya, ini hanya untuk kebutuhan testing sistem Digiroom Auto2000')
        cy.wait(200)
        cy.get('.checkmark').click()
        cy.wait(200)
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(1000)
        cy.get('#btn-testDrive-bookNow-pdpNewCar').click({force:true})
        cy.wait(1000)

        //Validasi Keberhasilan Booking Test Drive
        cy.contains('Pemesanan Test Drive')
        cy.contains('Booking telah diproses Staf kami akan segera menghubungi Anda')

        //Masih butuh penyempurnaan agar hasil akhir tidak site improving
    })

})