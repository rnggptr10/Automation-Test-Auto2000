/// <reference types="cypress" />

context('Testing Mobil Bekas (Used Car) Digiroom Auto2000', () => {
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
    
    // it('Testing Akses Menu Mobil Bekas Via Navbar', () => {
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(2) > a').click()
    //     cy.wait(500)
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(2) > a').click()
    //     cy.wait(500)

    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
    //     cy.wait(500)
    // })
    
    // it('Testing Akses Menu Mobil Bekas Via Kategori Pilihan', () => {
    //     cy.get(':nth-child(6) > .categoryContainer').click()
    //     cy.wait(500)

    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
    //     cy.wait(500)
    // })


    // it('Testing Pencarian Spesifik Mobil Bekas', () => {
    //     cy.get(':nth-child(6) > .categoryContainer').click()
    //     cy.wait(500)

    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
    //     cy.wait(500)

    //     cy.get('#js-site-search-input').type('Avanza').type('{enter}')
    //     cy.wait(500)

    //     cy.contains('Avanza')
    // })

    // it('Testing Pencarian Filter Mobil Baru', () => {
    //     cy.get(':nth-child(6) > .categoryContainer').click()
    //     cy.wait(500)

    //     cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
    //     cy.wait(500)

    //     //Filter Model Kendaraan
    //     cy.get(':nth-child(2) > .filter-head').click()
    //     cy.wait(200)

    //     cy.get(':nth-child(2) > .facet__values > :nth-child(2) > .items-container > form > .custom-checkbox > .checkmark').click({force:true})
    //     cy.wait(200)

    //     //Filter Tahun Produksi
    //     cy.get(':nth-child(4) > .filter-head').click()
    //     cy.wait(200)

    //     cy.get(':nth-child(4) > .facet__values > :nth-child(2) > .items-container > form > .custom-checkbox > .checkmark').click({force:true})
    //     cy.wait(200)

    //     //Filter Kisaran Harga
    //     cy.get(':nth-child(5) > .filter-head').click()
    //     cy.wait(200)

    //     cy.get('.input-price-range-to').clear().type('200000000').type('{enter}')
    //     cy.wait(200)

    //     //Validasi
    //     cy.contains('AVANZA')

    // })

    it('Testing Lihat Produk Mobil Bekas (Rush)', () => {
        cy.get(':nth-child(6) > .categoryContainer').click()
        cy.wait(500)

        cy.url().should('eq', 'https://uat.auto2000.co.id/c/certified-used-car-toyota')
        cy.wait(500)
        
        //Klik Mobil Bekas Rush 2012
        cy.get('[data-product-code="RUS028A20"]').invoke('show').contains('Lihat Produk').click({force: true});
        cy.url().should('eq', 'https://uat.auto2000.co.id/certified-used-car-toyota/p/rus028a20')
        cy.wait(500)

        //Klik Tombol Beli
        cy.get('#addToCartFormButtonRUS028A20 > .btn-primary-white').click()
        cy.wait(1000)

        //Login
        cy.get('#login-email').type('farellaldi29@gmail.com')
        cy.get('#login-password').type('mrsilva123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        //Klik Lanjut Pada Pilih Paket Servis
        cy.get('[data-slick-index="1"] > :nth-child(1) > #addServicePackageProduct > .item-border').click()
        cy.wait(500)

        cy.get('#btnMoveRightTab').click();
        cy.wait(1000)

        //Klik Lanjut Pada Pilih Paket Servis
        cy.get('.slick-current > :nth-child(1) > .product-carousel-item > .acce-item-border > .custom-checkbox > .checkmark').click()
        cy.wait(500)

        cy.get('#btnMoveRightTab').click();
        cy.wait(1000)

        //Klik Lanjut Pembayaran
        cy.get('#btncontpayment').click();
        cy.wait(1000)

        //Klik Pembayaran Tunai Virtual Account
        cy.get('#btnNewCarPaymentUrl').click()
        cy.wait(1000)

        //Upload KTP
        cy.get('input[type=file]').attachFile('../fixtures/img/contoh_KTP.jpg')
        cy.wait(1000)

        //Isi Alamat
        cy.get('#used-car-address').type('Apartemen Casablanca East Residences').type('{enter}')
        cy.wait(200)
        cy.get('#used-car-flat').type('CA-CD 17-01')
        cy.wait(200)

        //Isi Kode Pos
        cy.get('#used-car-postal').type('13440').type('{enter}')
        cy.wait(200)

        //Input NPWP
        cy.get('#used-car-npwp').type('12345678901234').type('{enter}')
        cy.wait(200)

        //Checklist Kotak
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.wait(500)

        //Klik Close
        cy.get('.modal-content > .terms-box-container > .terms-enable-scroll > .terms-action-container > #tcclose').click()
        cy.wait(500)

        //Klik Bayar Sekarang
        cy.get('#used-car-pay-now').click()
        cy.wait(1000)
    })


})