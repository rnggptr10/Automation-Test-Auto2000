/// <reference types="cypress" />

context('Testing Simulasi Cicilan Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://auto2000.co.id/')
        cy.wait(1000)
        cy.get('.close > img').click({force:true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Testing Simulasi Cicilan Mobil Baru', () => {
        
        //Klik Menu Mobil Baru
        cy.get(':nth-child(1) > .categoryContainer').click({force: true})
        cy.wait(1000)
        cy.get(':nth-child(1) > .categoryContainer').click({force: true})

        //Klik Item Avanza
        cy.get('[data-product-code="VELOZ"]').invoke('show').contains('Lihat Produk').click({force: true});
        cy.wait(800)
        cy.url().should('eq', 'https://auto2000.co.id/mobil-baru-toyota/p/veloz')

        //Klik Simulasi Cicilan
        cy.get('[style="padding-right=30px"] > .btn-secondary-white').click({force: true})
        cy.wait(200)

        // //Geser Range Uang Muka
        cy.get(".ui-slider-handle").click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}")
        cy.wait(200)

        //Klik Periode
        cy.get('.g-col-12.termmonths > .g-row > :nth-child(4)').click()
        cy.wait(200)

        //Klik Memperbarui
        cy.get('#btn-login').click()
        cy.wait(200)

        //Validasi
        cy.get('#credit-simulation-total-dp').should('have.value', 'Rp. 142.431.200')
        cy.get('.txt-credit-simulation-starting').contains('Rp. 4.547.103')

    })

})