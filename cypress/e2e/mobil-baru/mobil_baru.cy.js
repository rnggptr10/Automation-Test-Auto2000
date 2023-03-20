/// <reference types="cypress" />

context('Testing Mobil Baru Digiroom Auto2000', () => {
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
    
    // it('Testing Akses Menu Mobil Baru Via Navbar', () => {
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/mobil-baru-toyota')
    //     cy.wait(500)
    // })
    
    // it('Testing Akses Menu Mobil Baru Via Kategori Pilihan', () => {
    //     cy.get(':nth-child(1) > .categoryContainer > :nth-child(1) > .lzy_img').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/mobil-baru-toyota')
    //     cy.wait(500)
    // })


    // it('Testing Pencarian Spesifik Mobil Baru', () => {
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/mobil-baru-toyota')
    //     cy.get('#js-site-search-input').type('Agya')
    //     cy.get('.search-icon-holder > .search-icon').click()
    //     cy.wait(500)
    // })

    // it('Testing Pencarian Filter Mobil Baru', () => {
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/mobil-baru-toyota')

    //     //FIlter Model Kendaraan
    //     cy.get(':nth-child(2) > .filter-head').click()
    //     cy.get(':nth-child(2) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox').click()

    //     //Filter Kisaran Harga
    //     cy.get(':nth-child(3) > .filter-head').click()
    //     cy.get('.input-price-range-to').clear()
    //     cy.get('.input-price-range-to').type('180000000').type('{enter}')

    //     //Filter Warna
    //     cy.get(':nth-child(5) > .filter-head').click()
    //     cy.get(':nth-child(5) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox > .checkmark').click()

    //     //Filter Jenis Bahan Bakar
    //     cy.get(':nth-child(7) > .filter-head').click()
    //     cy.get(':nth-child(7) > .facet__values > .filter-item-col > .items-container > form > .custom-checkbox > .checkmark').click()

    //     //Filter Transmisi
    //     cy.get(':nth-child(9) > .filter-head').click()
    //     cy.get(':nth-child(2) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox').click() 

    //     //Filter Jumlah Tempat Duduk
    //     cy.get(':nth-child(11) > .filter-head').click()
    //     cy.get(':nth-child(11) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox > .checkmark').click() 

    //     cy.get('.plp-list-container').contains('NEW AGYA')
        

    //     cy.wait(500)
    // })

    // it('Testing Lihat Produk (Avanza)', () => {
    //     cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://auto2000.co.id/c/mobil-baru-toyota')
    //     cy.wait(500)
    //     cy.get('[data-product-code="AVANZA"]').invoke('show').contains('Lihat Produk').click({force: true});
    //     cy.url().should('eq', 'https://auto2000.co.id/mobil-baru-toyota/p/avanza')
    //     cy.wait(500)
    // })

    it('Testing Pembelian Mobil Baru (Avanza)', () => {

        //Buka Menu Mobil Baru
        cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click({force: true})
        cy.wait(1000)
        cy.get('#menu-bar > ul.nav-list > :nth-child(1) > a').click({force: true})

        cy.url().should('eq', 'https://uat.auto2000.co.id/c/mobil-baru-toyota')
        cy.wait(500)

        //Klik Item Avanza
        cy.get('[data-product-code="AVANZA"]').invoke('show').contains('Lihat Produk').click({force: true});
        cy.url().should('eq', 'https://uat.auto2000.co.id/mobil-baru-toyota/p/avanza')

        //Button Buy or Preorder Car (???)
        cy.get('.btn-book-buy-new-pdp').should('have.css', 'background-color', 'rgb(255, 255, 255)').click({force:true}) 
        cy.wait(4000)

        //Login
        cy.get('#login-email').type('farellaldi29@gmail.com')
        cy.get('#login-password').type('mrsilva123')
        cy.get('#btn-login').click()
        cy.wait(4000)

        //Klik Beli 2
        cy.contains('Keranjang')
        cy.get('#btncontpaymentmobile').click()  

        //Upload KTP
        cy.get('input[type=file]').attachFile('../fixtures/img/contoh_KTP.jpg')
        cy.wait(1000)

        //Input Kode Pos
        cy.get('#car-buyer-postal').type('13440')
        cy.wait(200)

        //Input NPWP
        cy.get('#car-buyer-npwp').type('12345678901234')
        cy.wait(200)

        cy.get('#car-buyer-validation > .upload-section').click()
        cy.wait(2000)

        //Pertanyaan STNK
        cy.get('#select-stnk-value-button').click()
        cy.get('#select-stnk-value-menu').contains('KTP STNK').click({force:true})
        cy.wait(200)

        //Pilih Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains('Jakarta Timur').click({force:true})
        cy.wait(200)

        //Pilih Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains('Auto2000 Kalimalang').click({force:true})
        cy.wait(200)

        //Pilih Opsi Pengiriman
        cy.get('#delivery-options-button').click()
        cy.get('#delivery-options-menu').contains('Antar ke rumah').click({force:true})
        cy.wait(200)

        //Isi Alamat
        cy.get('#branch-address').type('Apartemen Casablanca East Residences').type('{enter}')

        cy.get('#address2').type('CA-CD 17-01')

        //Lanjutkan
        cy.get('.ktp-buttons > .btn-secondary-white').click()
        cy.wait(500)

        //Beli
        cy.get('#btnpaymentoptmobile').click()
        cy.get(200)

        //Metode Pembayaran 
        cy.get('.full-payment-header')
        cy.get(200)

        cy.get('#select-payment-method-full-button').click({force: true})
        cy.wait(200)

        cy.get('#select-payment-method-full-menu').contains('QRIS').click({force:true})
        cy.wait(200)

        //Klik Beli
        cy.get('#btnpaymentmobile').click()

        //Validasi 
        cy.contains('QRIS Payment')

    })

})