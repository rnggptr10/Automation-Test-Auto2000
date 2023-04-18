/// <reference types="cypress" />

context('Testing Fitur Cubain Digiroom Auto2000', () => {
    // data akun user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }

    // Case Waktu Tidak Tersedia
    const layananCubainData1 = {
        "provinsi" : "DKI Jakarta",
        "tanggal_awal" : ":nth-child(5) > :nth-child(6) > .ui-state-default",
        "tanggal_akhir" : ".ui-datepicker-days-cell-over > .ui-state-default",
    }

    const layananCubainData2 = {
        "provinsi" : "DKI Jakarta",
        "tanggal_awal" : "#datepicker-cubain > .ui-datepicker-inline > .ui-datepicker-calendar > tbody > :nth-child(5) > :nth-child(3) > .ui-state-default",
        "tanggal_akhir" : ".ui-datepicker-days-cell-over > .ui-state-default",
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
    
    it('Do Booking Cubain When Time is Not Ready', () => {
        // To Page Cubain
        cy.get('#menu-bar > ul.nav-list > :nth-child(4) > a').click()

        /******************************
         *      Layanan Cubain
         *****************************/
        // Provinsi 
        //  ...

        // Pilih Tanggal Awal
        cy.get('.div-startDate').click()
        cy.get(layananCubainData1.tanggal_awal).click({force:true})
        cy.wait(400)

        // Pilih Tanggal Akhir
        cy.get('.div-endDate').click()
        cy.get(layananCubainData1.tanggal_akhir).click({force:true})
        cy.wait(400)

        // Waktu Tidak Tersedia
        cy.get('.notavailable').then(($notavailable) => {
            if($notavailable.length > 0){
                // jalankan kode disini jika elemen ditemukan
                cy.get('.notavailable').contains("Mohon maaf, layanan cubain pada tanggal yang di pilih tidak tersedia.")
            }else{

            }
        })
    })

    it('Do Booking Cubain When Time is Ready', () => {
        // To Page Cubain
        cy.get('#menu-bar > ul.nav-list > :nth-child(4) > a').click()

        /******************************
         *      Layanan Cubain
         *****************************/
        // Provinsi 
        //  ...

        // Pilih Tanggal Awal
        cy.get('.div-startDate').click()
        cy.get('.ui-datepicker-next').click()
        cy.get(layananCubainData2.tanggal_awal).click({force:true})
        cy.wait(400)

        // Pilih Tanggal Akhir
        cy.get('.div-endDate').click()
        cy.get(layananCubainData2.tanggal_akhir).click({force:true})
        cy.wait(400)

        // Pilih Cabang Terdekat
        cy.get('[data-branchcode="T164"] > .add-car-carousel-item').click()

        // Pilih Mobil
        cy.get('#ui-id-19-button').click({force:true})
        cy.get('#ui-id-19-menu').contains('TOYOTA ALL NEW AVANZA').click({force:true})
        cy.wait(400)

        // Pilih Jam 
        cy.get('#timePickUp-button').click()
        cy.get('#timePickUp-menu').contains('09:00').click({force:true})
        cy.wait(400)

        // Button Cek Harga
        cy.get('.btn-cubain-now > .btn-secondary-white').click()
        cy.wait(400)

        // Button Lanjut
        cy.get('.btn-cubain-next > .btn-primary-white').click()
        cy.wait(400)
        
        /******************************
         *      Layanan Cubain
         *****************************/
        // Foto KTP
        cy.get('input[type=file][name=ktp]').attachFile('../fixtures/img/KTP_Farell.png')
        cy.wait(1000)

        // Swafoto dengan KTP
        cy.get('input[type=file][name=selfie]').attachFile('../fixtures/img/Selfie_Farell.jpeg')
        cy.wait(1000)
        
        // Foto SIM A
        cy.get('input[type=file][name=sim]').attachFile('../fixtures/img/SIM_Farell.jpeg')
        cy.wait(1000)

        // Term & Condition
        cy.get('.checkmark').click()
        cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click()
        cy.wait(400)

        // Click Button Submit
        cy.get('.btn-cubain-submit > .btn-primary-white').click()
    })

})