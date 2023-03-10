/// <reference types="cypress" />

context('Add Vehicle', () => {
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

    it('Add First Vehicle', () => {
        // Login
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // Button Fitur Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        // Button Tambah kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // If Else
        if(cy.get('.add-vehicle-list-top')){
            cy.get('.add-vehicle-list-top').click()
        }

        // Input Field Kendaraan
        // Input Model Vehicle
        cy.get('#addvehicle-model-button').click()
        cy.wait(500)   
        cy.get('#addvehicle-model-menu').contains('AGYA') .click({force:true})     
        // Input Production Year Vehicle
        cy.get('#addvehicle-productionYear-button').click()
        cy.wait(500)
        cy.get('#addvehicle-productionYear-menu').contains('2016').click({force:true})
        // Input Transmission Vehicle
        cy.get('#addvehicle-transmission-button').click()
        cy.wait(500)
        cy.get('#addvehicle-transmission-menu').contains('A/T').click({force:true})
        // Input Fuel Vehicle
        cy.get('#addvehicle-fuel-button').click()
        cy.wait(500)
        cy.get('#addvehicle-fuel-menu').contains('Bensin').click({force:true})
        // Input Car Type
        cy.get('#addvehicle-cartype-button').click()
        cy.wait(500)
        cy.get('#addvehicle-cartype-menu').contains('AGYA 1.0 E A/T').click({force:true})
        // Input Colour Vehicle
        cy.get('#addvehicle-colour-button').click()
        cy.wait(500)
        cy.get('#addvehicle-colour-menu').contains('Blue').click({force:true})

        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-day-input > .form-field').type('12')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-month-input > .form-field').type('03')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-year-input > .form-field').type('2023')


        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-license > .form-field').type('D 8888 SBT')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-vin > #vehicleIdentificationNumber').type('178DFFJAHEB1348950')
        
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > .btn-add-vehicle > .add-vehicle').click()
    })

    it('Add List Vehicle', () => {
        // Login
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        cy.wait(4000)
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('hahahihi123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // Button Fitur Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        // Button Tambah kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // If Else
        if(cy.get('.add-vehicle-list-top')){
            cy.get('.add-vehicle-list-top').click()
        }

        // Input Field Kendaraan
        // Input Model Vehicle
        cy.get('#addvehicle-model-button').click()
        cy.wait(500)   
        cy.get('#addvehicle-model-menu').contains('DYNA') .click({force:true})     
        // Input Production Year Vehicle
        cy.get('#addvehicle-productionYear-button').click()
        cy.wait(500)
        cy.get('#addvehicle-productionYear-menu').contains('2021').click({force:true})
        // Input Transmission Vehicle
        cy.get('#addvehicle-transmission-button').click()
        cy.wait(500)
        cy.get('#addvehicle-transmission-menu').contains('M/T').click({force:true})
        // Input Fuel Vehicle
        cy.get('#addvehicle-fuel-button').click()
        cy.wait(500)
        cy.get('#addvehicle-fuel-menu').contains('Diesel').click({force:true})
        // Input Car Type
        cy.get('#addvehicle-cartype-button').click()
        cy.wait(500)
        cy.get('#addvehicle-cartype-menu').contains('DYNA 110 ET 4X2 M/T').click({force:true})
        // Input Colour Vehicle
        cy.get('#addvehicle-colour-button').click()
        cy.wait(500)
        cy.get('#addvehicle-colour-menu').contains('Blue').click({force:true})

        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-day-input > .form-field').type('22')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-month-input > .form-field').type('03')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-year-input > .form-field').type('2023')


        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-license > .form-field').type('D2566SBT')
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-vin > #vehicleIdentificationNumber').type('178DFFJAHEB1348950')
        
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > .btn-add-vehicle > .add-vehicle').click()
    })

})