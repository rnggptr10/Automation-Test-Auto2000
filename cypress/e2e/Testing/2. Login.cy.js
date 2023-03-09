/// <reference types="cypress" />

context('Fitur Login', () => {
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

    it('Do Login With Null Values', () =>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)
        
        // When Button is Disable
        cy.get('#btn-login').should('be.disabled')
        
        // // When Button is Not Disable

        cy.wait(4000)
    })

    it('Do Login With Correct Values', () =>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)

        // Input Account is Correct
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)
    })

    it('Do Login With Wrong Values (Password)', ()=>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)

        // Input Account is Incorrect (Password)
        cy.get('#login-email').type('ranggaputra103@gmail.com')
        cy.get('#login-password').type('hahahihihehe')
        cy.get('#btn-login').click()
        cy.wait(4000)
    })

    it('Do Login With Wrong Values (Email)', ()=>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)

        cy.get('#login-email').type('ranggaputra103@ymail.com')
        cy.get('#login-password').type('sayangkamu8')
        cy.get('#btn-login').click()
        cy.wait(4000)
    })

    it('Input Account is Incorrect (Not Email)', ()=>{
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)

        cy.get('#login-email').type('ranggaputra103')
        cy.get('#login-password').type('sayangkamu8')
        cy.get('#btn-login').click()
        cy.wait(4000)
    })


    //     // Log Out
    //     cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
    //     cy.wait(1000)
    //     cy.get('.modal-close').click()
    //     cy.wait(1000)
    //     cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
    //     cy.wait(1000)
    //     cy.get('.my-profile-logout-btn').click()
    // })  
})   