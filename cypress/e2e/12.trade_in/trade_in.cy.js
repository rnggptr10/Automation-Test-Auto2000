/// <reference types="cypress" />

context('Trade In', () => {
    // data User
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    } 

    const userCarTradeInData = {
        "merek":"HONDA",
        "model":"BRIO",
        "silinder":"1.2",
        "tipe":"E",
        "transmisi":"AT",
        "tahun_pembuatan":"2016",
        "bahan_bakar":"BENSIN",
        "penggerak":"4x2",
        "provinsi":"JAKARTA",

        /*****************
         * pilihan menu
         ****************/
        // Tukar Tambah
        "pilihan_menu":":nth-child(1) > label"
        // Jual Mobil Saya
        // "pilihan_menu":".g-col-12 > :nth-child(2) > label"
    }

    const userCarSellData = {
        "merek":"HONDA",
        "model":"BRIO",
        "silinder":"1.2",
        "tipe":"E",
        "transmisi":"AT",
        "tahun_pembuatan":"2016",
        "bahan_bakar":"BENSIN",
        "penggerak":"4x2",
        "provinsi":"JAKARTA",

        /*****************
         * pilihan menu
         ****************/
        // Jual Mobil Saya
        "pilihan_menu":".g-col-12 > :nth-child(2) > label"
    }

    const newUserCarData = {
        "model":"AVANZA",
        "tipe":"NEW AVANZA 1.3 VELOZ M/T",
        "provinsi":"DKI Jakarta",
        "kota":"Jakarta Pusat",
        "cabang":"Auto2000 Salemba"
    }

    const waktuPenilaianData = {
        "kota" : "Jakarta Pusat",
        "alamat": "Jalan Raya Slipi",
        "alamat_detail" : "Blok Gv.28",
        "tanggal" : ":nth-child(4) > :nth-child(6) > .ui-state-default",
        "jam" : "08:30"
    }

    beforeEach('open Web',() => {
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

    it('Do Trade In Car', () =>{
        // To Page Trade In
        cy.get(':nth-child(10) > .categoryContainer').click()
        cy.wait(400)
        
        /******************************
         *      Detail Mobil Anda
         *****************************/
        // Merek
        cy.get('#brand-button').click()
        cy.get('#brand-menu').contains(userCarTradeInData.merek).click()
        // Model Mobil
        cy.get('#carmodel-button').click()
        cy.get('#carmodel-menu').contains(userCarTradeInData.model).click()
        // Silinder
        cy.get('#cylinder-button').click()
        cy.get('#cylinder-menu').contains(userCarTradeInData.silinder).click()
        // Tipe
        cy.get('#cartype-button').click()
        cy.get('#cartype-menu').contains(userCarTradeInData.tipe).click()
        // Transmisi
        cy.get('#transmission-button').click()
        cy.get('#transmission-menu').contains(userCarTradeInData.transmisi).click()
        // Tahun Pembuatan
        cy.get('#Productionyear-button').click()
        cy.get('#Productionyear-menu').contains(userCarTradeInData.tahun_pembuatan).click()
        // Bahan Bakar
        cy.get('#fuel-button').click()
        cy.get('#fuel-menu').contains(userCarTradeInData.bahan_bakar).click()
        // Penggerak
        cy.get('#drive-button').click()
        cy.get('#drive-menu').contains(userCarTradeInData.penggerak).click()
        // Provinsi Cek Harga
        cy.get('#province-button').click()
        cy.get('#province-menu').contains(userCarTradeInData.provinsi).click()


        // Button Lanjut
        cy.get(userCarTradeInData.pilihan_menu).click()
        cy.get('.step1-next-button').click()
        cy.wait(1000)

        /******************************
         *  Mobil Baru Pilihan Anda
         *****************************/
        // Model
        cy.get('#newCarModelTradeIn-button').click()
        cy.get('#newCarModelTradeIn-menu').contains(newUserCarData.model).click()
        // Tipe
        cy.get('#newCarTypeTradeIn-button').click()
        cy.get('#newCarTypeTradeIn-menu').contains(newUserCarData.tipe).click()
        // Provinsi
        cy.get('#proviance-car-buyer-button').click()
        cy.get('#proviance-car-buyer-menu').contains(newUserCarData.provinsi).click()
        // Kota
        cy.get('#city-car-buyer-button').click()
        cy.get('#city-car-buyer-menu').contains(newUserCarData.kota).click()
        // Cabang
        cy.get('#trade-in-branch-button').click()
        cy.get('#trade-in-branch-menu').contains(newUserCarData.cabang).click()

        // CheckBox
        cy.get('.checkmark').click()

        // Button Lanjut
        cy.get('#step3-next-button').click()
        // Button 'Ya, Lanjutkan'
        cy.get(':nth-child(2) > .modal-content > .trade-in-button-group > #btn-next-modal-confirmation').click()
        
        // Check Form Submit Succes
        cy.contains('Terimakasih telah menggunakan Layanan Trade-In')
        cy.contains('Estimasi Kisaran Harga')
    })

    it('Do Sell Car', () =>{
        // To Page Trade In
        cy.get(':nth-child(10) > .categoryContainer').click()
        cy.wait(400)
        
        /******************************
         *      Detail Mobil Anda
         *****************************/
        // Merek
        cy.get('#brand-button').click()
        cy.get('#brand-menu').contains(userCarSellData.merek).click()
        // Model Mobil
        cy.get('#carmodel-button').click()
        cy.get('#carmodel-menu').contains(userCarSellData.model).click()
        // Silinder
        cy.get('#cylinder-button').click()
        cy.get('#cylinder-menu').contains(userCarSellData.silinder).click()
        // Tipe
        cy.get('#cartype-button').click()
        cy.get('#cartype-menu').contains(userCarSellData.tipe).click()
        // Transmisi
        cy.get('#transmission-button').click()
        cy.get('#transmission-menu').contains(userCarSellData.transmisi).click()
        // Tahun Pembuatan
        cy.get('#Productionyear-button').click()
        cy.get('#Productionyear-menu').contains(userCarSellData.tahun_pembuatan).click()
        // Bahan Bakar
        cy.get('#fuel-button').click()
        cy.get('#fuel-menu').contains(userCarSellData.bahan_bakar).click()
        // Penggerak
        cy.get('#drive-button').click()
        cy.get('#drive-menu').contains(userCarSellData.penggerak).click()
        // Provinsi Cek Harga
        cy.get('#province-button').click()
        cy.get('#province-menu').contains(userCarSellData.provinsi).click()


        // Button Pilihan Menu
        cy.get(userCarSellData.pilihan_menu).click()
        // Button Lanjut
        cy.get('.step1-next-button').click()

        /******************************
         *    Slot Waktu Penilaian
         *****************************/
        // Kota  
        cy.get('#trade-in-city-button').click()
        cy.get('#trade-in-city-menu').contains(waktuPenilaianData.kota).click()
        // Alamat
        cy.get('#addressLine1').type(waktuPenilaianData.alamat)
        // Flat / Lantai / Blok
        cy.get('#addressLine2').type(waktuPenilaianData.alamat_detail)
        // Tanggal 
        cy.get(waktuPenilaianData.tanggal).click()
        // Jam
        cy.get('#slotTime-button').click()
        cy.get('#slotTime-menu').contains(waktuPenilaianData.jam).click()

        // Button Kirim
        cy.get('.step2-next-button').click()

        // Check Form Submit Succes
        cy.contains('Order Anda telah diterima. Petugas kami akan segera menghubungi Anda untuk melakukan konfirmasi pemesanan.')
    })
})