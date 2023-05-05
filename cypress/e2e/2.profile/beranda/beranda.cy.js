/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data testing user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
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

    it('See Active Order', () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // To Beranda
        cy.get('.highlighted > div.my-account-menu-name > .my-account-menu-name').click()
        
        // URL harus sama dengan url dibawah
        cy.url().should('eq', 'https://uat.auto2000.co.id/myAccount/overview')
    })

    it('See New Order', () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // To Beranda
        cy.get('.highlighted > div.my-account-menu-name > .my-account-menu-name').click()
    
        // URL harus sama dengan url dibawah
        // cy.url().should('eq', 'https://uat.auto2000.co.id/myAccount/overview')
    })

    it('See My Cars', () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // To Beranda
        cy.get('.highlighted > div.my-account-menu-name > .my-account-menu-name').click()
    })
})