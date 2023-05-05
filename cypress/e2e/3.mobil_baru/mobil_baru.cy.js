/// <reference types="cypress" />

context('Mobil Baru', () => {
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }

    const dataPemesanan = {
        "kode_pos" : "13440",
        "npwp" : "12345678901234",
        "stnk" : "KTP STNK"
    }

    const cabangAndMetodePengirimanData = {
        "provinsi":"DKI Jakarta",
        "kota":"Jakarta Timur",
        "cabang":"Auto2000 Kalimalang",
        "opsi_pengiriman":"Antar ke rumah",
        "alamat":"Apartemen Casablanca East Residences",
        "alamat_detail":"CA-CD 17-01"
    }

    const opsiPembayaranData = {
        "opsi":"QRIS"
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
    
    it('Do Search', () =>{
        // To Page Mobil Baru
        cy.get(':nth-child(1) > .categoryContainer').click()

        // Search
        cy.get('#js-site-search-input').type('AVANZA' + '{enter}')
        
        // Check Result
        cy.get('.plp-listing-items').contains('AVANZA')
        cy.wait(400)
    })
    
    it('Do Search By Filter', () => {
        // To Page Mobil Baru
        cy.get(':nth-child(1) > .categoryContainer').click()
        
        // Model Kendaraan
        cy.get(':nth-child(2) > .filter-head').click()
        cy.get(':nth-child(2) > .facet__values > :nth-child(5) > .items-container > form > .custom-checkbox > .checkmark').click()

        // Warna
        cy.get(':nth-child(5) > .filter-head').click()
        cy.get(':nth-child(5) > .facet__values > :nth-child(1) > .items-container > form > .custom-checkbox > .checkmark').click()

    })

    it('Do Buy New Car', () => {
        // To Page Mobil Baru
        cy.get(':nth-child(1) > .categoryContainer').click()
        
        // Pilih Mobil (Avanza)
        cy.get('[data-product-code="AVANZA"]').invoke('show').contains('Lihat Produk').click({force: true});
        cy.url().should('eq', 'https://uat.auto2000.co.id/mobil-baru-toyota/p/avanza')

        // Button BELI
        cy.contains('BELI').click()
        cy.contains('BELI').click()

        
        /*************************************
         *           Data Pemesan
         ************************************/
        //Upload KTP
        cy.get('input[type=file]').attachFile('../fixtures/img/contoh_KTP.jpg')
        cy.wait(1000)

        //Input Kode Pos
        cy.get('#car-buyer-postal').type(dataPemesanan.kode_pos)
        cy.wait(200)

        //Input NPWP
        cy.get('#car-buyer-npwp').type(dataPemesanan.npwp)
        cy.wait(200)

        cy.get('#car-buyer-validation > .upload-section').click()
        cy.wait(2000)

        //Pertanyaan STNK
        cy.get('#select-stnk-value-button').click()
        cy.get('#select-stnk-value-menu').contains(dataPemesanan.stnk).click({force:true})
        cy.wait(200)


        /*************************************
         * Lokasi Cabang & Metode Pengiriman
         ************************************/
        // Pilih Provinsi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains(cabangAndMetodePengirimanData.provinsi).click()
        // Pilih Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains(cabangAndMetodePengirimanData.kota).click({force:true})
        cy.wait(200)
        // Pilih Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains(cabangAndMetodePengirimanData.cabang).click({force:true})
        cy.wait(200)
        // Pilih Opsi Pengiriman (Antar Ke Rumah)
        cy.get('#delivery-options-button').click()
        cy.get('#delivery-options-menu').contains(cabangAndMetodePengirimanData.opsi_pengiriman).click({force:true})
        cy.wait(200)
        // Alamat
        cy.get('#branch-address').type(cabangAndMetodePengirimanData.alamat).type('{enter}')
        // Alamat Detail
        cy.get('#address2').type(cabangAndMetodePengirimanData.alamat_detail)

        //Lanjutkan
        cy.get('.ktp-buttons > .btn-secondary-white').click()
        cy.wait(500)

        // Button BELI
        cy.contains('BELI').click()
        cy.get(200)

        /*************************************
         *        Metode Pembayaran 
         *    (Booking Dengan Tanda Jadi)
         ************************************/
        // Opsi Pembayaran
        cy.get('#select-payment-method-reserve-button').click()
        cy.get('#select-payment-method-reserve-menu').contains(opsiPembayaranData.opsi).click()


        // Button Beli
        cy.contains('BELI').click()

        // Check If Form Submit is Success 
        cy.contains('QRIS Payment')

    })
})