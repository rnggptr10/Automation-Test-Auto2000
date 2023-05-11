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

    const kontakInformasiData = {
        "nama":"Rangga Putra",
        "label_alamat":"Alamat Rumah", // ['Alamat Rumah', 'Alamat Kantor', 'Apartement']
        "provinsi":"DKI Jakarta",
        "kota":"Jakarta Pusat",
        "kecamatan":"Tanah Abang",
        "kelurahan":"Bendungan Hilir",
        "alamat":"Pejompojompongan no.28",
        "kode_pos":"5013",
        "nomor_hp":"87720490872"
    }

    const ringkasanPesananData = {
        "order":"Ambil di Cabang"
    }

    const detailPesananData = {
        "provinsi":"DKI Jakarta",
        "kota":"Jakarta Pusat",
        "cabang":"Auto2000 Garuda",
        "tanggal":"#datepicker-accessories > .ui-datepicker-inline > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(5) > .ui-state-default",
        "jam":"8:00"
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
        
        // Klik Checkout
        cy.get('.section-myCart').trigger('mouseover').get('button[class="btn-primary-white checkout-button-accessories"]').click({force:true})
        cy.wait(1000)
    
        // Button Lanjut ke Pembayaran
        cy.get('#checkoutAccessories > .btn-primary-white').click()
    
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
        // Opsi Order
        cy.get('#orderPreference-button').click()
        cy.get('#orderPreference-menu').contains(ringkasanPesananData.order).click()
        
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
        cy.get('#slotTime-button').click()
        cy.get('#slotTime-menu').contains(detailPesananData.jam).click()

        // Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-action-container > #tcclose').click()
        // Button Bayar Sekarang
        cy.get('#checkout-contact').click()

        /*********************************
         *     Metode Pembayaran 
         ********************************/
        cy.contains(metodePembayaranData.metode).click()

        // Button Konfirmasi & Bayar
        cy.get('.payment-confirm-pay').click()

        // Check If Form Submit Success
        cy.contains('QRIS Payment')
    })  
})