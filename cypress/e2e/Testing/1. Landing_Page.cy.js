/// <reference types="cypress" />

context('Testing Landing Page Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://auto2000.co.id/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Periksa Navigation Bar', () => {
        cy.get('#menu-bar').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Homepage Banner', () => {
        cy.get('.homepage-banner-container').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Menu Kategori', () => {
        cy.get('#menu-categories').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Rekomendasi Mobil', () => {
        cy.get(':nth-child(5) > .trending-cars-container').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Aksesoris dan Kupon Mobil', () => {
        cy.get('.accsCouponService-container').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Highlight Video', () => {
        cy.get('#highlight-video').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Promo Menarik', () => {
        cy.get('.promo-homepage').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Cabang di Sekitarmu', () => {
        cy.get('.nearBrances-container').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Menu Servis', () => {
        cy.get('#car-services').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Online Order Steps', () => {
        cy.get('#online-order-steps').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Berita dan Tips', () => {
        cy.get('#we-care').scrollIntoView()
        cy.wait(500)
    })

    it('Periksa Footer', () => {
        cy.get('#footer').scrollIntoView()
        cy.wait(500)
        cy.get('#menu-bar').scrollIntoView()
        cy.wait(500)
    })

})