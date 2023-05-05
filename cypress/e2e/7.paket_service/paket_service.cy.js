/// <reference types="cypress" />
context('Paket Service', () => {
    // data testing user Data
    const userData = {
        "email":"ranggaputra103@gmail.com",
        "password":"sayangkamu8"
    }
    
    const searchPaketService = {
        "key": "AVANZA"
    }

    const searchFilterPaketService = {
        "car_model" : "ALTIS",
        "car_type" : "ALTIS 1800 E M/T"
    }

    const kontakInformasiData = {
        "provinsi" : "DKI Jakarta",
        "kota" : "Jakarta Barat",
        "kecamanatan" : "Cengkareng",
        "kelurahan" : "Duri Kosambi",
        "alamat" : "Duri durian, Jl. Gunung Balong III, RT.9/RW.4, Lebak Bulus, South Jakarta City, Jakarta, Indonesia",
        "kode_pos" : "40192",
        "no_hp": "81120490877",
        "kilometer":"10000"
    }

    const detailPesananData = {
        "provinsi" : "DKI Jakarta",
        "kota" : "Jakarta Barat",
        "cabang" : "Auto2000 Daan Mogot",
        "tanggal_service" : ":nth-child(5) > :nth-child(4) > .ui-state-default", 
        "jam_service" : "8:00"
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

    it('Do Search Paket Service', () =>{ 
        // To Page Paket Service
        cy.get(':nth-child(5) > .categoryContainer').click()
        cy.wait(4000)

        // Search
        cy.get('#js-site-search-input').type(searchPaketService.key + '{enter}')

        // Check Result 
        cy.get(':nth-child(1) > .servicePackage-tile > .servPackage-name').contains(searchPaketService.key)
        cy.wait(4000)
    })

    it('Do Search With Filter on Paket Service', () =>{ 
        // To Page Paket Service
        cy.get(':nth-child(5) > .categoryContainer').click()
        cy.wait(4000)

        // Model Mobil
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains(searchFilterPaketService.car_model).click()

        // Tipe Mobil
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains(searchFilterPaketService.car_type).click() 

        // Click
        cy.get('.button-find-sp > .btn-primary-white').click()

        // Check Result
        cy.get(':nth-child(2) > .servicePackage-tile > .servPackage-name').contains(searchFilterPaketService.car_model)
        cy.wait(4000)
    })

    it('Do See Detail Product Paket Service', () =>{ 
        // To Page Paket Service
        cy.get(':nth-child(5) > .categoryContainer').click()
        cy.wait(4000)

        // Button Lihat Detail
        const text = cy.get(':nth-child(2) > .servicePackage-tile > .servPackage-name').invoke('text')
        cy.log(text)
        cy.get(':nth-child(2) > .servicePackage-tile > .button-hover-plp > .view-Detail').click()

        // Check Title Detail
        // cy.get('.servicePackage-title').contains(text)
    }) 

    
    it('Do Buy Product Paket Service', () =>{ 
        // Casenya bisa ada 2, mobilnya sesuai dengan paket service dan tidak sesuai

        // To Page Paket Service
        cy.get(':nth-child(5) > .categoryContainer').click()
        cy.wait(4000)

        // Search
        cy.get('#js-site-search-input').type(searchPaketService.key + '{enter}')
        // Button Beli
        cy.get(':nth-child(1) > .servicePackage-tile > .button-hover-plp > .buy-plp').click()
        // Choose Car
        cy.get('.test-slides > .add-car-carousel-item').click()

        /*************************
         *      ISI FORM
        **************************/
        /*******************************
         *       Kontak Informasi
         * ****************************/
        // Provinsi
        cy.get('#provinceCode-button').click()
        cy.get('#provinceCode-menu').contains(kontakInformasiData.provinsi).click()
        // Kota
        cy.get('#ui-id-1-button').click()
        cy.get('#ui-id-1-menu').contains(kontakInformasiData.kota).click()
        // Kecamatan
        cy.get('#ui-id-2-button').click()
        cy.get('#ui-id-2-menu').contains(kontakInformasiData.kecamanatan).click()
        // Kelurahan
        cy.get('#ui-id-3-button').click()
        cy.get('#ui-id-3-menu').contains(kontakInformasiData.kelurahan).click()
        // Alamat
        cy.get('#car-buyer-address').type(kontakInformasiData.alamat)
        // Kode Pos
        cy.get(':nth-child(4) > :nth-child(2) > .form-field-section > .form-field').type(kontakInformasiData.kode_pos)
        // No HP
        cy.get('.phone-number').type(kontakInformasiData.no_hp)
        // Click Button Next
        cy.get('#ui-id-11 > .ca-submit > .btn-primary-white').click()

        /*******************************
         *     Informasi Kendaraan
         * ****************************/
        // Kilometer
        cy.get(':nth-child(6) > .form-field-section > .form-field').type(kontakInformasiData.kilometer)
        // Click Button Next
        cy.get('.g-row > .ca-submit > .btn-primary-white').click()

        /*******************************
         *       Detail Pesanan
         * ****************************/
        // Provinsi
        cy.get('#province-spsp-button').click()
        cy.get('#province-spsp-menu').contains(detailPesananData.provinsi).click()
        // Kota
        cy.get('#city-spsp-button').click()
        cy.get('#city-spsp-menu').contains(detailPesananData.kota).click()
        // Cabang
        cy.get('#branch-spsp-button').click()
        cy.get('#branch-spsp-menu').contains(detailPesananData.cabang).click()
        // Tanggal 
        cy.get(detailPesananData.tanggal_service).click()
        // Jam 
        // cy.get('#slotTime').click()

        // Term & Condition 
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()

        // Button Bayar Sekarang
        cy.get('#ui-id-15 > .ca-submit > .btn-primary-white').click({force:true})
        cy.wait(4000)

        /*******************************
         *       Konfirmasi Detail
         * ****************************/
        // Metode Pembayaran
        cy.get('[for="rbQRIS"]').click()
        cy.wait(400)
        // Button  Konfirmasi & Bayar
        cy.get('.payment-confirm-pay').click()
        cy.wait(400)

        // Jika Sukses
        cy.url().should('not.eq','https://uat.auto2000.co.id/paketservistoyota/checkout/fullpayment')
    })
})