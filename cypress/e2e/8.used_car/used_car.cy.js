/// <reference types="cypress" />

context('Used Car', () => {
    // data User
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
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
    
    // it('Do Search', () =>{
    //     // To Page Used Car
    //     cy.get(':nth-child(6) > .categoryContainer').click()

    //     // Search
    //     cy.get('#js-site-search-input').type('TOYOTA FORTUNER 2.5 G AT' + '{enter}')

    //     // Check Result
    //     cy.contains('TOYOTA FORTUNER 2.5 G AT')
    // })

    // it('Do Search By Filter', () =>{
    //     // To Page Used Car
    //     cy.get(':nth-child(6) > .categoryContainer').click()
    
    //     // Model Kendaraan
    //     cy.get(':nth-child(2) > .filter-head').click()
    //     cy.get(':nth-child(2) > .facet__values > :nth-child(4) > .items-container > form > .custom-checkbox > .checkmark').click()

    //     // Tahun Produksi
    //     cy.get(':nth-child(4) > .filter-head').click()
    //     cy.get(':nth-child(4) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox > .checkmark').click()
    // })

    it('Do Buy Used Car', ()=>{
        // To Page Used Car
        cy.get(':nth-child(6) > .categoryContainer').click()
    
        // Pilih Mobil (Rush)
        cy.get('[data-product-code="RUS028A20"]').invoke('show').contains('Lihat Produk').click({force: true});
        cy.url().should('eq', 'https://uat.auto2000.co.id/certified-used-car-toyota/p/rus028a20')
        cy.wait(500)

        // Button Beli
        cy.get('#addToCartFormButtonRUS028A20 > .btn-primary-white').click()
        cy.wait(400)    


        /***********************************
         *        Paket Servis
         **********************************/
        // Opsi Service
        // Tidak Membutuhkan Paket Service
        cy.get('#noNeedServiceUsedCar > .product-carousel-text-section').click()
        
        // Button Lanjut
        cy.get('#btnMoveRightTab').click()
        
        /***********************************
         *           Aksesoris
        **********************************/
        // Opsi Aksesoris
        cy.get('[data-slick-index="1"] > :nth-child(1) > .product-carousel-item > .acce-item-border > .custom-checkbox > .checkmark').click()
        
        // Button Lanjut
        cy.get('#btnMoveRightTab').click()
        // Button Lanjut ke Pembayaran
        cy.get('#btncontpayment').click()
       
        /***********************************
            *        Opsi Pembayaran
        **********************************/
        // Pembayaran Tunai
        cy.get('#btnNewCarPaymentUrl').click()
        cy.wait(400)
        
        /***********************************
         *      Informasi Pelanggan
        **********************************/
        // Upload KTP
        cy.get('input[type=file]').attachFile('../fixtures/img/contoh_KTP.jpg')
        cy.wait(1000)
        //Isi Alamat
        cy.get('#used-car-address').type('Apartemen Casablanca East Residences').type('{enter}')
        cy.wait(200)
        // Alamat Detail
        cy.get('#used-car-flat').type('CA-CD 17-01')
        cy.wait(200)
        //Isi Kode Pos
        cy.get('#used-car-postal').type('13440').type('{enter}')
        cy.wait(200)
        //Input NPWP
        cy.get('#used-car-npwp').type('111111111111111').type('{enter}')
        cy.wait(200)
        
        // Checkbox Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-enable-scroll > .terms-action-container > #tcclose').click()
        cy.wait(200)

        // Button Bayar Sekarang
        cy.get('#used-car-pay-now').click()
    })
})