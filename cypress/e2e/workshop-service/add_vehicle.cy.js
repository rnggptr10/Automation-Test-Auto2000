/// <reference types="cypress" />

context('Add Vehicle', () => {
    // data testing untuk akun user
    const userData = {
        "email" : "nurinafasya@gmail.com",
        "password" : "hahahihi123"
    }

    // data testing untuk mobil
    const carData = [
        {
            "car_model": "AGYA",
            "production_year": "2016",
            "transmision": "A/T",
            "fuel_type": "Bensin",
            "car_type": "AGYA 1.0 E A/T",
            "car_color": "Blue",
            "stnk_number":"D8181SBT",
            "frame_number":"178DFFJAHEB1348950",

            // STNK 
            "date_stnk_expired":"12",
            "month_stnk_expired":"12",
            "year_stnk_expired":"2028",
        },
        {
            "car_model": "DYNA",
            "production_year": "2021",
            "transmision": "M/T",
            "fuel_type": "Diesel",
            "car_type": "DYNA 110 ET 4X2 M/T",
            "car_color": "Blue",
            "stnk_number":"D6666SIX",
            "frame_number":"178DFFJ18YB1348950",

            // STNK 
            "date_stnk_expired":"12",
            "month_stnk_expired":"2",
            "year_stnk_expired":"2027",
        }, 
    ]

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

    for(let i = 0; i < 2; i++){
        it('Add Vehicle', () => {
            // Login
            cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
            cy.wait(4000)
            cy.get('#login-email').type(userData.email)
            cy.get('#login-password').type(userData.password)
            cy.get('#btn-login').click()
            cy.wait(4000)
    
            // Button Fitur Workshop Service
            cy.get(':nth-child(2) > .categoryContainer').click()
            cy.wait(4000)
    
            // Button Tambah kendaraan
            cy.get('.wrapper-button-add > .btn-primary-white').click()
            cy.wait(4000)
    
            // If Else (?)
            if(cy.get('.add-vehicle-list-top')){
                cy.get('.add-vehicle-list-top').click()
            }
    
            // Input Field Kendaraan
            // Input Model Vehicle
            cy.get('#addvehicle-model-button').click()
            cy.wait(500)   
            cy.get('#addvehicle-model-menu').contains(carData[i].car_model) .click({force:true})     
            // Input Production Year Vehicle
            cy.get('#addvehicle-productionYear-button').click()
            cy.wait(500)
            cy.get('#addvehicle-productionYear-menu').contains(carData[i].production_year).click({force:true})
            // Input Transmission Vehicle
            cy.get('#addvehicle-transmission-button').click()
            cy.wait(500)
            cy.get('#addvehicle-transmission-menu').contains(carData[i].transmision).click({force:true})
            // Input Fuel Vehicle
            cy.get('#addvehicle-fuel-button').click()
            cy.wait(500)
            cy.get('#addvehicle-fuel-menu').contains(carData[i].fuel_type).click({force:true})
            // Input Car Type
            cy.get('#addvehicle-cartype-button').click()
            cy.wait(500)
            cy.get('#addvehicle-cartype-menu').contains(carData[i].car_type).click({force:true})
            // Input Colour Vehicle
            cy.get('#addvehicle-colour-button').click()
            cy.wait(500)
            cy.get('#addvehicle-colour-menu').contains(carData[i].car_color).click({force:true})
    
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-day-input > .form-field').type(carData[0].date_stnk_expired)
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-month-input > .form-field').type(carData[0].month_stnk_expired)
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-year-input > .form-field').type(carData[0].year_stnk_expired)
    
    
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-license > .form-field').type(carData[0].stnk_number)
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-vin > #vehicleIdentificationNumber').type(carData[0].frame_number)
            
            cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > .btn-add-vehicle > .add-vehicle').click()
        })
    }
})