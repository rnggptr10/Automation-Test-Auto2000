/// <reference types="cypress" />

context('Testing Hubungi Kami Digiroom Auto2000', () => {
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
    
    it('Subscribe Digiroom Auto2000', () => {
        cy.get('#footer').scrollIntoView()
        cy.wait(500)

        //Klik Hubungi Kami 
        cy.get('.g-col-12 > :nth-child(4) > a').click()
        cy.wait(200)

        //Isi Data
        cy.get('#ui-id-3-button').click({force:true})
        cy.get('#ui-id-3-menu').contains('Pertanyaan Terkait Servis').click({force:true})
        cy.wait(200)

        cy.get('#fullName').type('Farell Aldi Kusuma')
        cy.wait(200)

        cy.get('#email').type('farellaldi29@gmail.com')
        cy.wait(200)

        cy.get('#phoneNumber').type('82165123593')
        cy.wait(200)

        cy.get('#addressLine1').type('Apartemen Casablanca East Residences CA-CD 17-01, Jalan Pahlawan Revolusi No. 2, Pondok Bambu, Duren Sawit, Jakarta Timur, Jakarta')
        cy.wait(200)

        cy.get('#addressLine2').type('13430')
        cy.wait(200)

        cy.get('#provinceCode-button').click({force:true})
        cy.get('#provinceCode-menu').contains('DKI Jakarta').click({force:true})
        cy.wait(200)

        cy.get('#ui-id-4-button').click({force:true})
        cy.get('#ui-id-4-menu').contains('Jakarta Timur').click({force:true})
        cy.wait(200)

        cy.get('input[type=file]').attachFile('../fixtures/img/Altis_2014.jpg')
        cy.wait(500)

        cy.get('.form-field-section.branch-form-inner > .form-field').type('Apakah bisa servis mobil Altis 2014 ?')
        cy.wait(200)

        cy.get('#submit-contactUs').click()
        cy.wait(200)

        //Validasi
        cy.get('.modal-content').contains('Order Anda telah diterima. Petugas kami akan segera menghubungi Anda untuk melakukan konfirmasi pemesanan.')


    })

})