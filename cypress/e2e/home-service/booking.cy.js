/// <reference types="cypress" />

context('Booking Vehicle', () => {
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

    it('Do Booking Body Paint', () =>{
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Home Service
        cy.get(':nth-child(8) > .categoryContainer').click()

        // Click Button 'Pilih Kendaraan' at Page Home Service
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Chose Carr to Home Service
        cy.get(':nth-child(3) > .wrapper-add-vehicle-list-to > .g-col > .btn-primary-white').click()

        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()
        cy.get('.custom-group-checkbox > :nth-child(1) > .custom-checkbox > .checkmark').click()
    
        // Click Dropdown 'Jarak Tempuh Kendaraan'
        cy.get('#selectedPeriodicService-button').click()
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click()

        // Click Button 'Berikutnya'
        cy.get('#ui-id-8 > .ca-submit > .btn-primary-white').click()

        // Input Field 'Lokasi Servis Anda'
        cy.get('#inputAddressAuto').type('Cimahi Utara, Cimahi City, West Java, Indonesia')
        cy.get('#serviceAddress1').type('Komplek Nusa Hijau Blok GV28')

        // Click Button Berikutnya
        cy.get('#toyota-home-location').click()
        
        // Input Field 'Pilih Waktu/ Mekanik Anda'
        cy.get('#Mon').click()
        cy.get('#select-time-slot-button').click()
        cy.get('#select-time-slot-menu').contains('09:00').click()
        
    })
})