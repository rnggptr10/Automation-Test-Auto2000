/// <reference types="cypress" />

context('Aksesoris', () => {
    // data User
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    } 

    const searchAksesoris = {
        "key" : "Console Box"
    }

    beforeEach('',() => {
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
    
    it('Do Search Aksesoris', () => {
        // To Page Aksesoris
        cy.get(':nth-child(4) > .categoryContainer').click()

        // Search 
        cy.get('.product-list-search-bar > .search-form > #js-site-search-input').type(searchAksesoris.key + '{enter}')

        // Check Result
        cy.get(':nth-child(3) > .accessories-tile').contains(searchAksesoris.key)
        cy.wait(400)
    })

    it('Do Search With Filter on Aksesoris', () =>{
        // To Page Aksesoris
        cy.get(':nth-child(4) > .categoryContainer').click()

        // Model Kendaraan
        cy.get(':nth-child(2) > .filter-head').click()
        cy.get(':nth-child(2) > .facet__values > :nth-child(1) > .items-container > .g-row > .custom-checkbox > .checkmark').click()

        // Tipe Aksesoris
        cy.get(':nth-child(7) > .filter-head').click()
        cy.get(':nth-child(7) > .facet__values > :nth-child(2) > .items-container > .g-row > .custom-checkbox > .checkmark').click()
    })

    it('Do See Detail Aksesoris & Back To Landing Page Aksesoris', () =>{
        // To Page Aksesoris
        cy.get(':nth-child(4) > .categoryContainer').click()

        // See Detail Aksesoris
        cy.get(':nth-child(3) > .accessories-tile > .accs-tile-hover > .accessories-details').click()
        cy.get('.arrow-back > a > span').click()
        
        // Banyak List Aksesoris
        cy.get('.product-list-result-count').contains('30 hasil')
    })


    it('Do Add Aksesoris & Checkout', () =>{
        // To Page Aksesoris
        cy.get(':nth-child(4) > .categoryContainer').click()

        // Add Aksesoris 1
        cy.get(':nth-child(3) > .accessories-tile > .accs-tile-hover > .addToCart-tile').click()
        cy.get('.modal-content > .addToCart-popUp > .div-button-checkout > .addToCart-plp').click()

        // Add Aksesoris 2
        cy.get(':nth-child(8) > .accessories-tile > .accs-tile-hover > .addToCart-tile').click()
        cy.get('.modal-content > .addToCart-popUp > .div-button-checkout > .addToCart-plp').click()
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    // it('Testing Pencarian Spesifik Aksesoris', () => {

    //Membuka Menu Aksesoris
    // cy.get(':nth-child(4) > .categoryContainer').click()
    // cy.wait(800)
    // cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
    // cy.wait(500)

    //     //Ketik dan Search Item (Cargo Net)
    //     cy.get('.product-list-search-bar > .search-form > #js-site-search-input').type('Cargo Net')
    //     cy.get('.product-list-search-bar > .search-form > .search-icon-holder > .search-icon').click()
    //     cy.wait(500)
    //     cy.get('.accessories-listing-container').contains('Cargo Net')
    // })

    // it('Testing Pencarian Filter Aksesoris', () => {
        
        // //Membuka Menu Aksesoris
        // cy.get(':nth-child(4) > .categoryContainer').click()
        // cy.wait(800)
        // cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
        // cy.wait(500)

    //     //FIlter Model Kendaraan
    //     cy.get(':nth-child(2) > .filter-head').click()
    //     cy.get(':nth-child(2) > .facet__values > :nth-child(1) > .items-container > .g-row > .custom-checkbox > .checkmark').click()

    //     //Filter Kategori
    //     cy.get(':nth-child(4) > .filter-head').click()
    //     cy.get(':nth-child(4) > .facet__values > .filter-item-col > .items-container > .g-row > .custom-checkbox > .checkmark').click()

    //     //Filter Kisaran Harga
    //     cy.get(':nth-child(5) > .filter-head').click()
    //     cy.get('.input-price-range-to').clear()
    //     cy.get('.input-price-range-to').type('1000000').type('{enter}')

    //     //Filter Tipe Aksesoris
    //     cy.get(':nth-child(7) > .filter-head').click()
    //     cy.get(':nth-child(7) > .facet__values > :nth-child(1) > .items-container > .g-row > .custom-checkbox > .checkmark').click()

    //     //Filter Tipe Aksesoris
    //     cy.get(':nth-child(9) > .filter-head').click()
    //     cy.get(':nth-child(9) > .facet__values > :nth-child(1) > .items-container > .g-row > .custom-checkbox > .checkmark').click()

    //     cy.wait(500)
    // })

    // it('Testing Pembelian Aksesoris', () => {

    //     //Membuka Menu Aksesoris
    //     cy.wait(800)
    //     cy.get(':nth-child(4) > .categoryContainer').click()
    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
    //     cy.wait(500)

    //     //Klik Item Aksesoris (Car Cover Exclusive S)
    //     cy.get(':nth-child(28) > .accessories-tile').trigger('mouseover').contains('LIHAT DETAIL').click({force:true})
    //     cy.wait(500)
    //     cy.contains('Highlights')
    //     cy.contains('Harga')
    //     cy.contains('Info Produk')

    //     //Klik Beli Sekarang
    //     cy.get('.btn-primary-white > .add-to-cart-pdp').click({force:true})
    //     cy.wait(500)

    //     //Login
    //     cy.get('#login-email').type('farellaldi29@gmail.com')
    //     cy.get('#login-password').type('mrsilva123')
    //     cy.get('#btn-login').click()
    //     cy.wait(500)

    //     //Lanjutkan ke Pembayaran 
    //     cy.wait(500)
    //     cy.get('#checkoutAccessories > .btn-primary-white').click({force:true})

    //     // //Isi Data Diri (Alamat)

    //     cy.get('#change-address').click()
    //     cy.wait(200)

    //     cy.get('.modal-content > #addresses-modal > .popup-address-btn-accs-center > #add-address').click()
    //     cy.wait(200)

    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(2) > .g-col-12 > .form-field-section > #addressName').type('Farell Aldi Kusuma')
    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(3) > .g-col-12 > .form-field-section > #addressLabel').type('Rumah')

    //     cy.get('#addressProvince-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#addressProvince-menu').contains('DKI Jakarta') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#addressCity-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#addressCity-menu').contains('Jakarta Timur') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#addressDistrict-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#addressDistrict-menu').contains('Duren Sawit') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#subDistrict-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#subDistrict-menu').contains('Pondok Bambu') .click({force:true})
    //     cy.wait(200)

    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(1) > .form-field-section > #addressLine1').type('Apartemen Casablanca East Residences CA-CD 17-01, Jalan Pahlawan Revolusi No. 2, Pondok Bambu, Duren Sawit, Jakarta Timur, Jakarta')
    //     cy.wait(200)
        
    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(2) > .form-field-section > #postalCode').type('13430')
    //     cy.wait(200)

    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(1) > .form-field-section > #addressPhone').type('82165123593')
    //     cy.wait(200)

    //     cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(4) > div > #addressCust').click()

    //     //Isi Ringkasan Pesanan 
    //     cy.get('#information-contact').click()

    //     cy.get('#orderPreference-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#orderPreference-menu').contains('Ambil di Cabang') .click({force:true})
    //     cy.wait(200)

    //     //Isi Detail Pesanan (Ambil di Cabang)
    //     cy.get('#acc-order-summary').click()

    //     cy.get('#provinceCode-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#provinceCode-menu').contains('DKI Jakarta') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#cityCode-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#cityCode-menu').contains('Jakarta Timur') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#branchCode-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#branchCode-menu').contains('Auto2000 Kalimalang') .click({force:true})
    //     cy.wait(200)

    //     cy.get('#datepicker-accessories > .ui-datepicker-inline > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(4) > .ui-state-default').click()
    //     cy.wait(200)

    //     cy.get('#slotTime-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#slotTime-menu').contains('10:00') .click({force:true})
    //     cy.wait(200)

    //     cy.get('.terms-container > .custom-checkbox > .checkmark').click()
    //     cy.wait(200)

    //     cy.get('.modal-content > .terms-action-container > #tcclose').click()
    //     cy.wait(200)

    //     cy.get('#checkout-contact').click()
    //     cy.wait(200)

    //     //Pilih Metode Pembayaran 
    //     cy.get('[for="rbQRIS"]').click({force: true})
    //     cy.wait(200)

    //     cy.get('.payment-confirm-pay').click()
    //     cy.wait(200)

    //     //Validasi 
    //     cy.contains('QRIS Payment')

    // })

})