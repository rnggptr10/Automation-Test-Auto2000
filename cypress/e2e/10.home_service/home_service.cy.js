 /// <reference types="cypress" />

context('Home Service', () => {
    // data User
    const userData = {
        "email": "ranggaputra103@gmail.com",
        "password": "sayangkamu8"
    }

    // data case 1 (only service berkala)
    const case1 = {
        "kendaraan" : ".g-col > .btn-primary-white",
        "jenis_service" : ".custom-group-checkbox > :nth-child(1) > .custom-checkbox > .checkmark", // service berkala
        "jarak_tempuh" : "Servis Berkala 1.000 KM",
        "lokasi_umum" : "Cimahi Utara, Cimahi City, West Java, Indonesia",
        "lokasi_detail" : "Komplek Nusa Hijau Blok GV28",
        "jam_service" : "09:00"
    }

    // data case 2 (only perbaikan umum)
    const case2 = {
        "kendaraan" : ".g-col > .btn-primary-white",
        "jenis_service" : ":nth-child(2) > :nth-child(1) > .checkmark", // perbaikan umum
        "pilihan_service" : ":nth-child(2) > .check-text-section > .custom-checkbox > .checkmark", // pilihan service (engine oil)
        "jarak_tempuh" : "Servis Berkala 1.000 KM",
        "lokasi_umum" : "Cimahi Utara, Cimahi City, West Java, Indonesia",
        "lokasi_detail" : "Komplek Nusa Hijau Blok GV28",
        "jam_service" : "09:30"
    }

    // data case 3 (based on waktu yg diinginkan)
    const case3 = {

    }
    
    // data case 4 (based on mekanik yang diinginkan)
    const case4 = {

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

    it('Do Booking Home Service Only with Service Berkala & Based On Waktu yang diinginkan', () =>{
        // To Page Home Service
        cy.get(':nth-child(8) > .categoryContainer').click()
        cy.wait(400)

        /********************************
        Personal Informasi & Detail Mobil
        ********************************/
        // Click Button 'Pilih Kendaraan' at Page Home Service
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(400)

        // Chose Car to Home Service
        cy.get(case1.kendaraan).click()
        cy.wait(400)

        /********************************
        *     Informasi Data Diri
        ********************************/
        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()

        /********************************
        *     Pilih Layanan Servis
        ********************************/
        // Click Button 'Berikutnya'
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()
        cy.get(case1.jenis_service).click()
        cy.wait(400)

        // Click Dropdown 'Jarak Tempuh Kendaraan'
        cy.get('#selectedPeriodicService-button').click()
        cy.get('#selectedPeriodicService-menu').contains(case1.jarak_tempuh).click()
        cy.wait(400)

        // Click Button 'Berikutnya'
        cy.get('#ui-id-8 > .ca-submit > .btn-primary-white').click()
        cy.wait(400)

        /********************************
        *     Lokasi Servis Anda
        ********************************/
        // Lokasi Umum
        cy.get('#inputAddressAuto').type(case1.lokasi_umum)
        // Lokasi Detail
        cy.contains(case1.lokasi_umum).click()
        cy.wait(4000)
        cy.get('#serviceAddress1').type(case1.lokasi_detail)
        cy.wait(1000)    

        // Click Button Berikutnya
        cy.get('#toyota-home-location').click()
        cy.wait(4000)
        
        /********************************
        *   Pilih Waktu/Mekanik Anda
        ********************************/
        // Pilih waktu atau mekanik
        cy.get('.preferred-time-section > :nth-child(1) > .g-col-12 > :nth-child(1) > label').click({force:true})

        // Pilih Hari/Tanggal
        cy.get('#Tue').click()

        // Pilih Waktu
        cy.get('#select-time-slot-button').click()
        cy.get('#select-time-slot-menu').contains('09:00').click()
        cy.wait(400)
        
        // Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(400)

        // Button Book Sekarang
        // cy.get('#timeschedule').click()
        cy.wait(400)
    })

    it('Do Booking Home Service Only with Perbaikan Umum & Based On Waktu yang diinginkan', () => {
        // To Page Home Service
        cy.get(':nth-child(8) > .categoryContainer').click()
        cy.wait(400)

        /********************************
        Personal Informasi & Detail Mobil
        ********************************/
        // Click Button 'Pilih Kendaraan' at Page Home Service
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(400)

        // Chose Car to Home Service
        cy.get(case1.kendaraan).click()
        cy.wait(400)

        /********************************
        *     Informasi Data Diri
        ********************************/
        // Click Button 'Berikutnya'
        cy.get('#ui-id-4 > .ca-submit > .btn-primary-white').click()

        /********************************
        *     Pilih Layanan Servis
        ********************************/
        // Click Button 'Berikutnya'
        cy.get('#ui-id-6 > .ca-submit > .btn-primary-white').click()
        cy.get(case2.jenis_service).click()
        cy.get(case2.pilihan_service).click()
        cy.wait(400)

        // Click Button 'Berikutnya'
        cy.get('#ui-id-8 > .ca-submit > .btn-primary-white').click()
        cy.wait(400)

        /********************************
        *     Lokasi Servis Anda
        ********************************/
        // Lokasi Umum
        cy.get('#inputAddressAuto').type(case2.lokasi_umum)
        // Lokasi Detail
        cy.contains(case2.lokasi_umum).click()
        cy.wait(4000)
        cy.get('#serviceAddress1').type(case2.lokasi_detail)
        cy.wait(400)    

        // Click Button Berikutnya
        cy.get('#toyota-home-location').click()
        cy.wait(4000)
        
        /********************************
        *   Pilih Waktu/Mekanik Anda
        ********************************/
        // Pilih waktu atau mekanik
        cy.get('.preferred-time-section > :nth-child(1) > .g-col-12 > :nth-child(1) > label').click()

        // Pilih Hari/Tanggal
        cy.get('#Wed').click()

        // Pilih Waktu
        cy.get('#select-time-slot-button').click()
        cy.get('#select-time-slot-menu').contains(case2.jam_service).click()
        cy.wait(400)
        
        // Term & Condition
        cy.get('.terms-container > .custom-checkbox > .checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(400)

        // Button Book Sekarang
        // cy.get('#timeschedule').click()
        cy.wait(400)
    })
})