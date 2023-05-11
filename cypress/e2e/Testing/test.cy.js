/// <reference types="cypress" />

context('Testing Landing Page Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://kampusmerdeka.kemdikbud.go.id/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('test', ()=>{
        // cy.get('.container-0-0-801').should('exist').then(($element) =>{
        //     if($element.length){
        //         cy.log('ketemu')
        //     }else{
        //         cy.log('tidak ketemu')
        //     }
        // })

        cy.log(cy.get('body').should('have.class', '.container-0-0-801'));
    })
})