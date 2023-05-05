/// <reference types="cypress" />

context('Fitur Login', () => {
    // data testing berdasarkan testcase yang berada di spreedsheet
    const userData = [
        // Null Values
        {
            "name_case":"Do Login With Null Values",
            "email" : "",
            "password" : ""
        },
        // Wrong Values (Email)
        {
            "name_case":"Do Login With Wrong Values (Email)",
            "email": "ranggaputra1103@gmail.com",
            "password":"sayangkamu8"
        },
        // Wrong Values (Password)
        {
            "name_case":"Do Login With Wrong Values (Password)",
            "email": "ranggaputra103@gmail.com",
            "password":"hahahihi123"
        },
        // Wrong Values (Email & Password)
        {
            "name_case":"Do Login With Wrong Values (Email & Password)",
            "email":"ran3ggaputra103@gmail.com",
            "password":"hahahihi123"
        },
        // Correct Values
        {
            "name_case":"Do Login With Correct Values",
            "email":"ranggaputra103@gmail.com",
            "password":"sayangkamu8"
        }
    ]

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
    })
    
    userData.forEach((data) =>{
        it(data.name_case, () =>{
            if(data.email != "" && data.password != ""){
                cy.get('#login-email').type(data.email)
                cy.wait(400)
                cy.get('#login-password').type(data.password)
                cy.wait(400)
                cy.get('#btn-login').click()
                cy.wait(4000)
            }else{
                cy.get('#btn-login').should('be.visible')
            }
        })
    })
})   