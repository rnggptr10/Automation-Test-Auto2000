/// <reference types="cypress" />

context('Kupon Service', () => {
    // data User
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    } 

    const ringkasanPesananData = {
        "tipe":"AVANZA 1.3 E M/T",
        "tahun_produksi":"2018",
        "warna":"Bronze",
        "kilometer":"10000",
        "nomor_rangka":"178DFFJAHEB1348950",
        "nomor_polisi":"D2688SBT",
        "tanggal_exp_stnk":"11",
        "bulan_exp_stnk":"10",
        "tahun_exp_stnk":"2028"
    }
    
    const detailPesananData = {
        "provinsi":"DKI Jakarta",
        "kota":"Jakarta Pusat",
        "cabang":"Auto2000 Garuda",
        "tanggal":"#datepicker-coupon > .ui-datepicker-inline > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(6) > .ui-state-default",
        "jam":"9:00"
    }

    const metodePembayaranData = {
        "metode":"Bayar dengan QRIS"
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
    
    // it('Do Search', () => {
    //     // To Page Kupon Service
    //     cy.get(':nth-child(3) > .categoryContainer').click()

    //     // Search
    //     cy.get('.product-list-search-bar > .search-form > #js-site-search-input').type('COUPONTESTUAT17' + '{enter}')

    //     // Check Result
    //     cy.get('.accessories-tile').contains('COUPONTESTUAT17')
    //     cy.wait(400)
    // })  

    // it('Do Search By Filter', () => {
    //     // To Page Kupon Service
    //     cy.get(':nth-child(3) > .categoryContainer').click()
    
    //     // Model Mobil
    //     cy.get('#ui-id-1-button').click()
    //     cy.get('#ui-id-1-menu').contains('AGYA').click()

    //     // Tipe Mobil
    //     cy.get('#ui-id-2-button').click()
    //     cy.get('#ui-id-2-menu').contains('AGYA 1.0 E A/T').click()
    // })  
    
    // it('Do See Detail Kupon Service & Back To Landing Page Kupon Service', () => {
    //     // To Page Kupon Service
    //     cy.get(':nth-child(3) > .categoryContainer').click()
    
    //     // See Detail Kupon Service
    //     cy.get(':nth-child(3) > .accessories-tile > .accs-tile-hover > .accessories-details').click()
    //     cy.get('.arrow-back > a').click()

    //     // Banyak List Aksesoris
    //     cy.get('.product-list-result-count').contains('29 hasil')
    // })  

    it('Do Add Kupon Service & Checkout', () => {
        // To Page Kupon Service
        cy.get(':nth-child(3) > .categoryContainer').click()
    
        // Add Kupon Service 1
        cy.get(':nth-child(3) > .accessories-tile > .accs-tile-hover > .addToCart-tile').click()
        cy.wait(1000)
        cy.get('.modal-content > .addToCart-popUp > .div-button-checkout > .addToCart-plp').click()

        // Add Kupon Service 2
        cy.get(':nth-child(8) > .accessories-tile > .accs-tile-hover > .addToCart-tile').click()
        cy.wait(1000)
        cy.get('.modal-content > .addToCart-popUp > .div-button-checkout > .addToCart-plp').click()
        cy.wait(1000)

        // Klik Checkout
        cy.get('.section-myCart').trigger('mouseover').get('button[class="btn-primary-white checkout-button-accessories"]').click({force:true})
        cy.wait(1000)

        // Pilih Kendaraan
        cy.get('.add-car-carousel-item').click()


        /*********************************
         *     Kontak Informasi 
         ********************************/
        cy.get('.pre-order-your-info').then(($box) => {
            if ($box) {
              // elemen ditemukan, lakukan sesuatu di sini
              cy.log('Submit box found')
              $box.click()
            } else {
                // Button Tambah Alamat
                cy.get('#new-address').click()
                // Nama
                cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(2) > .g-col-12 > .form-field-section > #addressName').type(kontakInformasiData.nama)
                // Label Alamat
                cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(3) > .g-col-12 > .form-field-section > #addressLabel').type(kontakInformasiData.label_alamat)
                // Provinsi
                cy.get('#addressProvince-button').click()
              cy.get('#addressProvince-menu').contains(kontakInformasiData.provinsi).click()
              // Kota
              cy.get('#addressCity-button').click()
              cy.get('#addressCity-menu').contains(kontakInformasiData.kota).click()
              // Kecamatan
              cy.get('#addressDistrict-button').click()
              cy.get('#addressDistrict-menu').contains(kontakInformasiData.kecamatan).click()
              // Kelurahan
              cy.get('#subDistrict-button').click()
              cy.get('#subDistrict-menu').contains(kontakInformasiData.kelurahan).click()
              // Alamat
              cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(1) > .form-field-section > #addressLine1').type(kontakInformasiData.alamat)
              // Kode Pos
              cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(6) > :nth-child(2) > .form-field-section > #postalCode').type(kontakInformasiData.kode_pos)
              // No HP
              cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(1) > .form-field-section > #addressPhone').type(kontakInformasiData.nomor_hp)
              
              // Button Save Address
              cy.get('.modal-content > #createEdit-modal > #lang-form > :nth-child(7) > :nth-child(4) > div > #addressCust').click()

              // elemen tidak ditemukan, lakukan sesuatu di sini
              cy.log('Submit button not found')
            }
        })

        // Button Berikutnya
        cy.get('#information-contact').click()

        /*********************************
         *     Ringkasan Pesanan
         ********************************/
        // Tipe
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains(ringkasanPesananData.tipe).click()
        // Tahun Produksi
        cy.get('#ui-id-3-button').click()
        cy.get('#ui-id-3-menu').contains(ringkasanPesananData.tahun_produksi).click()
        // Warna
        cy.get('#ui-id-4-button').click()
        cy.get('#ui-id-4-menu').contains(ringkasanPesananData.warna).click()
        // Kilometer
        cy.get(':nth-child(4) > :nth-child(1) > .form-field-section > .form-field').type(ringkasanPesananData.kilometer)
        // Nomor Rangka
        cy.get('#vehicleIdentificationNumber').type(ringkasanPesananData.nomor_rangka)
        // No Polisi
        cy.get(':nth-child(5) > .form-pre-order > .form-field-section > .form-field').type(ringkasanPesananData.nomor_polisi)
        // Tanggal Expire STNK
        cy.get('.custom-day-input > .form-field').type(ringkasanPesananData.tanggal_exp_stnk)
        cy.get('.custom-month-input > .form-field').type(ringkasanPesananData.bulan_exp_stnk)
        cy.get('.custom-year-input > .form-field').type(ringkasanPesananData.tahun_exp_stnk)

        // Button Berikutnya
        cy.get('#acc-order-summary').click()

        /*********************************
         *     Detail Pesanan
         ********************************/
        // Provinsi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains(detailPesananData.provinsi).click()
        // Kota
        cy.get('#cityCode-button').click()
        cy.get('#cityCode-menu').contains(detailPesananData.kota).click()
        // Cabang
        cy.get('#branchCode-button').click()
        cy.get('#branchCode-menu').contains(detailPesananData.cabang).click()
        // Tanggal
        cy.get(detailPesananData.tanggal).click()
        // Jam
        cy.get('#slotTimeCoupon-button').click()
        cy.get('#slotTimeCoupon-menu').contains(detailPesananData.jam).click()
        
        
        // Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-action-container > #tcclose').click()
        // Button Bayar Sekarang
        cy.get('#checkout-contact').click()
        cy.wait(400)

        /*********************************
         *     Metode Pembayaran 
         ********************************/
        cy.url().should('not.eq', 'https://uat.auto2000.co.id/kuponservistoyota/checkout')
        cy.contains(metodePembayaranData.metode).click()

        // Button Konfirmasi & Bayar
        cy.get('.payment-confirm-pay').click()
        cy.wait(4000)
    })  
})