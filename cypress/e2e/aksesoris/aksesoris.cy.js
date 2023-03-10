/// <reference types="cypress" />

context('Testing Menu Aksesoris Digiroom Auto2000', () => {
    beforeEach('',() => {
        cy.viewport(1280,1080)
        cy.visit('https://uat.auto2000.co.id/')
        cy.wait(1000)
        cy.get('.close > img').click({force:true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    

    // it('Testing Akses Aksesoris Via Navbar', () => {
    //     cy.get(':nth-child(3) > .submenu').trigger('mouseover').get(':nth-child(3) > .submenu-component').contains('AKSESORIS').click({force:true})
    //     cy.wait(1000)
    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
    //     cy.wait(500)
    // })
    
    // it('Testing Akses Aksesoris Via Kategori Pilihan', () => {
    //     cy.get(':nth-child(4) > .categoryContainer').click()
    //     cy.wait(800)
    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
    //     cy.wait(500)
    // })

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

    it('Testing Pembelian Aksesoris', () => {

        //Membuka Menu Aksesoris
        cy.wait(800)
        cy.get(':nth-child(4) > .categoryContainer').click()
        cy.url().should('eq', 'https://uat.auto2000.co.id/c/aksesoris')
        cy.wait(500)

        //Klik Item Aksesoris (Car Cover Exclusive S)
        cy.get(':nth-child(28) > .accessories-tile').trigger('mouseover').contains('LIHAT DETAIL').click({force:true})
        cy.wait(500)
        cy.contains('Highlights')
        cy.contains('Harga')
        cy.contains('Info Produk')

        //Klik Beli Sekarang
        cy.get('.btn-primary-white > .add-to-cart-pdp').click({force:true})
        cy.wait(500)

        //Login
        cy.get('#login-email').type('farellaldi29@gmail.com')
        cy.get('#login-password').type('mrsilva123')
        cy.get('#btn-login').click()
        cy.wait(500)

        //Lanjutkan ke Pembayaran 
        cy.wait(500)
        cy.get('#checkoutAccessories > .btn-primary-white').click({force:true})

        //Isi Data Diri (Alamat)
        cy.get('#new-address').click()
        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(2) > .g-col-12 > .form-field-section > #addressName').type('Farell Aldi Kusuma')
        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(3) > .g-col-12 > .form-field-section > #addressLabel').type('Rumah')

        cy.get('#addressProvince-button').click({force:true})
        cy.wait(200)
        cy.get('#addressProvince-menu').contains('DKI Jakarta') .click({force:true})
        cy.wait(200)

        cy.get('#addressCity-button').click({force:true})
        cy.wait(200)
        cy.get('#addressCity-menu').contains('Jakarta Timur') .click({force:true})
        cy.wait(200)

        cy.get('#addressDistrict-button').click({force:true})
        cy.wait(200)
        cy.get('#addressDistrict-menu').contains('Duren Sawit') .click({force:true})
        cy.wait(200)

        cy.get('#subDistrict-button').click({force:true})
        cy.wait(200)
        cy.get('#subDistrict-menu').contains('Pondok Bambu') .click({force:true})
        cy.wait(200)

        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(1) > .form-field-section > #addressLine1').type('Apartemen Casablanca East Residences CA-CD 17-01, Jalan Pahlawan Revolusi No. 2, Pondok Bambu, Duren Sawit, Jakarta Timur, Jakarta')
        cy.wait(200)
        
        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(2) > .form-field-section > #postalCode').type('13430')
        cy.wait(200)

        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(1) > .form-field-section > #addressPhone').type('82165123593')
        cy.wait(200)

        cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(4) > div > #addressCust').click()

    })

    // it('Pemesanan Test Drive', () => {

    //     //Membuka Halaman Test Drive
    //     cy.get(':nth-child(9) > .categoryContainer').click()
    //     cy.wait(1000)
    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/testdrive-toyota')
    //     cy.wait(500)

    //     //Klik Test Drive (Memilih Agya)
    //     cy.get('[data-product-code="ALTIS"] > .plp-box > .item-align-center > #btn-testDrive-pdpNewCar').click()
    //     cy.url().should('eq', 'https://uat.auto2000.co.id/testdrive/new-car/altis')
    //     cy.wait(500)

    //     // //Ganti Provinsi (Memilih Bekasi Jawa Barat)
    //     // cy.get('.g-col-lg-2 > .header-location').click({force:true})
    //     // cy.get('#ui-id-1-button').click({force:true})
    //     // cy.wait(200)
    //     // cy.get('#ui-id-237').click({force:true})
    //     // cy.get('#ui-id-2-button').click({force:true})
    //     // cy.wait(200)
    //     // cy.get('#ui-id-285').click({force:true})
    //     // cy.wait(200)
    //     // cy.get('#prev-page').click({force:true})
        
    //     //Ganti Provinsi (Memilih Jakarta Barat, DKI Jakarta)
    //     cy.get('.g-col-lg-2 > .header-location').click({force:true})
    //     // cy.get('#ui-id-1-button').click({force:true})
    //     // cy.wait(200)
    //     // cy.get('#ui-id-210').click({force:true})
    //     cy.get('#ui-id-2-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#ui-id-2-menu').contains('Jakarta Barat').click({force:true})
    //     cy.wait(200)
    //     cy.get('#prev-page').click({force:true})

    //     //Memilih Tempat
    //     cy.get('#branchList-button').click()
    //     cy.wait(200)
    //     cy.get('#branchList-menu').contains('Auto2000 Pluit').click({force:true})
    //     cy.wait(200)

    //     //Memilih Tanggal 
    //     cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click({force:true})

    //     //Memilih Waktu 
    //     cy.get('#slotTime-button').click({force:true})
    //     cy.wait(200)
    //     cy.get('#slotTime-menu').contains(' 09:00 - 12:00') .click({force:true})
    //     cy.wait(200)

    //     //Mengisi Data
    //     cy.get('#fullName').type('Farell Aldi Kusuma')
    //     cy.get('#phoneNumber').type('082165123593')
    //     cy.get('#email').type('farellaldi29@gmail.com')
    //     cy.get('.pre-order-remark > textarea').type('Abaikan saya, ini hanya untuk kebutuhan testing sistem Digiroom Auto2000')
    //     cy.wait(200)
    //     cy.get('.checkmark').click()
    //     cy.wait(200)
    //     cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
    //     cy.wait(1000)
    //     cy.get('#btn-testDrive-bookNow-pdpNewCar').click({force:true})
    //     cy.wait(1000)

    //     //Validasi Keberhasilan Booking Test Drive
    //     cy.contains('Pemesanan Test Drive')
    //     cy.contains('Booking telah diproses Staf kami akan segera menghubungi Anda')

    //     //Masih butuh penyempurnaan agar hasil akhir tidak site improving
    // })

})