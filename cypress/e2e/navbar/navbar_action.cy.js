/// <reference types="cypress" />

context('Navbar Action', () => {
    beforeEach('Open Web',() => {
        // For Set Size Desktop
        cy.viewport(1280,720)

        // For Visit Web 
        cy.visit('https://uat.auto2000.co.id/')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('To Page Mobil Baru', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/c/mobil-baru-toyota')
    })

    it('To Page Mobil Bekas Bersertifikat', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
    })

    it('To Page Purna Jual', () => {
        cy.get(':nth-child(3) > .submenu').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/services-toyota')
    })

    it('To Page Promo', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(5) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/promosi')
    })

    it('To Page Cubain', () =>{
        cy.get('#menu-bar > ul.nav-list > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/cubain')
    })

    it('Dealer Toyota', () =>{
        cy.get('#menu-bar > ul.nav-list > :nth-child(6) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/dealer-toyota')
    })

    it('Login', () =>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://uat.auto2000.co.id/login')
    })
})   