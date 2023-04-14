/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data testing user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }

    const newCarData = {
        "car_model" : "AVANZA",
        "car_year" : "2020",
        "car_transmision" : "A/T",
        "car_fuel" : "Bensin",
        "car_type" : "AVANZA 1.3 E A/T",
        "car_color" : "Black Mica",
        "car_police_number" : "D2588SBT",
        "car_chassis_number": "178DFFJAHEB1348950",
        "car_stnk_day_exp" : "11",
        "car_stnk_month_exp" : "10",
        "car_stnk_year_exp" : "2025",
    }

    const editCarData = {
        "car_year" : "2019",
        "car_transmision" : "M/T",
        "car_fuel" : "Bensin",
        "car_type" : "AVANZA 1.3 E M/T",
        "car_color" : "Black Mica",
    }

    const deleteCarData = {
        "car_type" : "AVANZA 1.3 E M/T",
        "element" : ".my-vehicle-remove-link"
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

    // it('Do Add Car', () =>{
        // // To Page Profile
        // cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        
        // // To My Cars
        // cy.get(':nth-child(7) > div.my-account-menu-name > .my-account-menu-name').click()
        
        // // Click button add cars
        // cy.get('.my-vehicle-empty-tile-add-car-text').click()

        // /*****************************
        //  *     Pop up Add Car
        // ******************************/
        // // Model Mobil
        // cy.get('#addvehicle-model-button').click()
        // cy.get('#addvehicle-model-menu').contains(newCarData.car_model).click()
        // // Tahun Produksi
        // cy.get('#addvehicle-productionYear-button').click()
        // cy.get('#addvehicle-productionYear-menu').contains(newCarData.car_year).click()
        // // Pilih Transmisi
        // cy.get('#addvehicle-transmission-button').click()
        // cy.get('#addvehicle-transmission-menu').contains(newCarData.car_transmision).click()
        // // Pilih Jenis Bahan Bakar
        // cy.get('#addvehicle-fuel-button').click()
        // cy.get('#addvehicle-fuel-menu').contains(newCarData.car_fuel).click()
        // // Pilih Jenis Mobil
        // cy.get('#addvehicle-cartype-button').click()
        // cy.get('#addvehicle-cartype-menu').contains(newCarData.car_type).click()
        // // Warna
        // cy.get('#addvehicle-colour-button').click()
        // cy.get('#addvehicle-colour-menu').contains(newCarData.car_color).click()
        // // Nomor Polisi
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-license > .form-field').type(newCarData.car_police_number)
        // // Nomor Rangka Kendaraan
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(2) > .form-car-vin > #vehicleIdentificationNumber').type(newCarData.car_chassis_number)
        // // Exp Tanggal STNK
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-day-input > .form-field').type(newCarData.car_stnk_day_exp)
        // // Exp Bulan STNK
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-month-input > .form-field').type(newCarData.car_stnk_month_exp)
        // // Exp Tahun STNK
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > :nth-child(2) > :nth-child(1) > .stnk-exp-date > .custom-year-input > .form-field').type(newCarData.car_stnk_year_exp)

        // // Button Tambah Kendaraan
        // cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > .btn-add-vehicle > .add-vehicle').click()

        // // Jika Berhasil
        // cy.get('.service-booking-tile-name').contains(newCarData.car_type)
    // })

    it('Do Edit Car', () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // To My Cars
        cy.get(':nth-child(7) > div.my-account-menu-name > .my-account-menu-name').click()
        
        // Click button edit cars
        cy.get('.my-vehicle-edit-link').click()

        // Tahun Produksi
        cy.get('#addvehicle-productionYear-button').click()
        cy.get('#addvehicle-productionYear-menu').contains(editCarData.car_year).click()
        // Pilih Transmisi
        cy.get('#addvehicle-transmission-button').click()
        cy.get('#addvehicle-transmission-menu').contains(editCarData.car_transmision).click()
        // Pilih Jenis Bahan Bakar
        cy.get('#addvehicle-fuel-button').click()
        cy.get('#addvehicle-fuel-menu').contains(editCarData.car_fuel).click()
        // Pilih Jenis Mobil
        cy.get('#addvehicle-cartype-button').click()
        cy.get('#addvehicle-cartype-menu').contains(editCarData.car_type).click()
        // Warna
        cy.get('#addvehicle-colour-button').click()
        cy.get('#addvehicle-colour-menu').contains(editCarData.car_color).click()
        
        // button Memperbarui
        cy.get('.modal-content > .add-vehicle-overlay-container > #form-add-vehicle-account > .btn-add-vehicle > .submit-edit-car-btn').click()
    })

    it('Do Delete Car', () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()
        // To My Cars
        cy.get(':nth-child(7) > div.my-account-menu-name > .my-account-menu-name').click()    
        
        // Click button edit cars
        cy.get(deleteCarData.element).click()
        cy.get('.modal-content > .remove-vehicle-modal > .btn-primary-white').click()
    })
})