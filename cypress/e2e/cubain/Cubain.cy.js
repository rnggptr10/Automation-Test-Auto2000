/// <reference types="cypress" />

context('Testing Fitur Cubain Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://uat.auto2000.co.id/')
        cy.wait(1000)
        cy.get('.close > img').click({force:true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Testing Simulasi Cicilan Mobil Baru', () => {

        //Geser Slider Menu 
        cy.get('#category-range-slider').as('range').invoke('val', 125).trigger('change')

        //Klik Menu Cubain
        cy.get(':nth-child(14) > .categoryContainer').click()
        cy.wait(500)

        //Ganti Provinsi (Memilih Jakarta Barat, DKI Jakarta)
        cy.get('.g-col-lg-2 > .header-location').click({force:true})
        cy.get('#ui-id-18-button').click({force:true})
        cy.wait(200)
        cy.get('#ui-id-18-menu').contains('Jakarta Barat').click({force:true})
        cy.wait(200)
        cy.get('#prev-page').click({force:true})

        //Pilih Tanggal Awal
        cy.get('.div-startDate').click()
        cy.get('.ui-datepicker-next').click()
        cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click({force:true})
        cy.wait(200)

        //Pilih Tanggal Akhir
        cy.get('.div-endDate').click()
        cy.get('#datepicker-cubainEnd > .ui-datepicker-inline > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(7) > .ui-state-default').click()
        cy.wait(200)

        //Pilih Cabang
        cy.get('[data-branchcode="T154"] > .add-car-carousel-item').click()
        cy.wait(200)

        //Pilih Mobil
        cy.get('#ui-id-19-button').click({force:true})
        cy.get('#ui-id-19-menu').contains('TOYOTA ALL NEW AVANZA').click({force:true})
        cy.wait(200)

        //Pilih Jam 
        cy.get('#timePickUp-button').click()
        cy.get('#timePickUp-menu').contains('09:00').click({force:true})
        cy.wait(200)

        //Klik Lanjut
        cy.get('.btn-cubain-now > .btn-secondary-white').click({force:true})
        cy.wait(200)

        //Klik Selanjutnya
        cy.get('.btn-cubain-next > .btn-primary-white').click({force:true})
        cy.wait(200)

        //Login
        cy.get('#login-email').type('farellaldi29@gmail.com')
        cy.get('#login-password').type('mrsilva123')
        cy.get('#btn-login').click()
        cy.wait(1000)

        //Upload KTP
        cy.get('input[type=file][name=ktp]').attachFile('../fixtures/img/KTP_Farell.png')
        cy.wait(1000)

        //Upload Selfie
        cy.get('input[type=file][name=selfie]').attachFile('../fixtures/img/Selfie_Farell.jpeg')
        cy.wait(1000)

        //Upload SIM
        cy.get('input[type=file][name=sim]').attachFile('../fixtures/img/SIM_Farell.jpeg')
        cy.wait(1000)

        //Klik Checkmark
        cy.get('.checkmark').click()
        cy.wait(200)

        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(200)

        //Klik Submit
        cy.get('.btn-cubain-submit > .btn-primary-white').click()
        cy.wait(200)


    })

})