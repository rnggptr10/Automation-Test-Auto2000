/// <reference types="cypress" />

context('Open Web Auto2000 Digiroom', () => {
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
    })

    it('To Page Mobil Bekas Bersertifikat', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(2) > a').click()
        cy.wait(2000)
    })

    it('To Page Purna Jual', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(3) > a').click()
        cy.wait(2000)
    })

    it('To Page Promo', () => {
        cy.get('#menu-bar > ul.nav-list > :nth-child(4) > a').click()
        cy.wait(2000)
    })

    it('To Page Tentang Auto2000', () =>{
        cy.get('#menu-bar > ul.nav-list > :nth-child(5) > a').click()
        cy.wait(2000)
    })

    it('To Page Cubain', () =>{
        cy.get('#menu-bar > ul.nav-list > :nth-child(6) > a').click()
        cy.wait(2000)
    })

    it('To Change Language', () =>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(3)').click()
        cy.wait(2000)
    })

    // it('Login & Log Out', () =>{
    //     cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
    //     cy.wait(4000)

    //     // Input Account is Correct
    //     cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
    //     cy.get('#login-password').type('hahahihi123')
    //     cy.get('#btn-login').click()
    //     cy.wait(4000)

    //     // Input Account is Incorrect (Password)
    //     // cy.get('#login-email').type('ranggaputra103@gmail.com')
    //     // cy.get('#login-password').type('hahahihihehe')
    //     // cy.get('#btn-login').click()
    //     // cy.wait(4000)

    //     // Input Account is Incorrect (Email)
    //     // cy.get('#login-email').type('ranggaputra103@ymail.com')
    //     // cy.get('#login-password').type('sayangkamu8')
    //     // cy.get('#btn-login').click()
    //     // cy.wait(4000)

    //     // Log Out
    //     cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
    //     cy.wait(1000)
    //     cy.get('.modal-close').click()
    //     cy.wait(1000)
    //     cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
    //     cy.wait(1000)
    //     cy.get('.my-profile-logout-btn').click()
    // })  


    // it("To Page Register", () =>{
    //     cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
    //     cy.wait(4000)
    //     cy.get('.create-acc').click()
    //     cy.wait(4000)

    //     // Input Field Form
    //     cy.get('#create-accnt-your-name').type('Rangga Putra')
    //     cy.get('#phoneNumber').type('87720490872')
    //     cy.get('#email').type('rangga20004@mail.unpad.ac.id')
    //     cy.get('#cr-password').type('hahahihi123')
    //     cy.get('#cr-confirm-password').type('hahahihi123')
    //     cy.get('.terms-container > .custom-checkbox > .checkmark').click()
    //     cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
    //     cy.get('.ca-submit > .btn-primary-white').click()
    //     // cy.get()
    // })


})   