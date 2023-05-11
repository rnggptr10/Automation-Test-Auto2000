/// <reference types="cypress" />

context('Workshop Service', () => {
    // data testing untuk akun user
    const userData = {
        "email": "ranggaputra103@gmail.com",
        "password": "sayangkamu8"
    }

    beforeEach('Open Web', () => {
        // For Set Size Desktop
        cy.viewport(1280, 720)

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

    it('Do Booking Vehicle Based On Waktu yang diinginkan', () => {
        // To Page Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(400)

        /*************************************
         * Personal Informasi & Detail Mobil
         ************************************/
        // Button Pilih kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(400)

        // Chose Vehicle
        cy.get('.g-col > .btn-primary-white').click()
        cy.wait(4000)

        // Situation for Pop Up (Belum Fiks)
        cy.get('.modal').then(($element) =>{
            if($element.length){
                cy.contains('NO').click({force:true})
            }else{
                cy.log('pop up tidak muncul')
            }
        })
        
        // Click button 'Berikutnya'
        cy.get('.wss-services > .accordian-step-button').click({force:true})


        /*************************************
         *  Informasi Data Diri Pelanggan
         ************************************/
        // Click button 'Berikutnya'
        cy.get('#ui-id-35 > .accordian-step-button').click({force:true})

        /*************************************
         *      Pilih Layanan Service
         ************************************/
        // Click Check Box 'Service Berkala'
        cy.get('#ui-id-36 > :nth-child(2) > :nth-child(1) > .custom-checkbox > .checkmark').click({force:true})

        // Choose Item from Dropdown 'Pilih jarak tempuh Anda?'
        cy.get('#selectedPeriodicService-button').click({force:true})
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click({force:true})

        // Click button 'Berikutnya'
        cy.get('#ws-step23-button').click({force:true})

        /*************************************
         *       Pilih Waktu Cabang
         ************************************/
        // Click CheckBox Pilih Waktu/Cabang - Berdasarkan Waktu Yang Diinginkan Oleh User
        cy.get('#ui-id-37 > :nth-child(1) > .g-col-12 > :nth-child(1) > label').click({ force: true })
        // Click Dropdown 'Province'
        cy.get('#provinceCode-button').click({force:true})
        cy.get('#provinceCode-menu').contains('Bali').click({force:true})
        // Click Dropdown 'City'
        cy.get('#city-button').click({force:true})
        cy.get('#city-menu').contains('Denpasar').click({force:true})
        // Click Date From Calender
        cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click()
        // Click & Choose Time 
        cy.get('#preferredTime-button').click({force:true})
        cy.get('#preferredTime-menu').contains('10:00').click({force:true})

        if (cy.get('#branch-error').should('not.be.visible')) {
            cy.log('gaada')
            cy.wait(4000)
            cy.get(':nth-child(1) > .pick-available-branches-item').click({force:true})
            cy.get('.terms-container > .custom-checkbox > .checkmark').click({force:true})
            cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click({force:true})
        }
        cy.get('#wsStep2').click({force:true})
        cy.wait(1000)

        // Situation for Pop Up (Belum Fiks)
        cy.get('.modal').then(($element) =>{
            if($element.length){
                cy.contains('NO').click({force:true})
            }else{
                cy.log('pop up tidak muncul')
            }
        })

        cy.wait(4000)
        
        // Jika Booking Berhasil
        cy.get('confirmation-number')
    })

    it('Do Booking Workshop Service Based On Cabang yang diinginkan', () => {
        // To Page Workshop Service
        cy.get(':nth-child(2) > .categoryContainer').click()
        cy.wait(4000)

        /*************************************
         * Personal Informasi & Detail Mobil
         ************************************/
        // Button Pilih kendaraan
        cy.get('.wrapper-button-add > .btn-primary-white').click()
        cy.wait(4000)

        // Chose Vehicle
        cy.get('.g-col > .btn-primary-white').click()
        cy.wait(4000)

        // Situation for Pop Up (Belum Fiks)
        cy.get('.modal').then(($element) =>{
            if($element.length){
                cy.contains('NO').click({force:true})
            }else{
                cy.log('pop up tidak muncul')
            }
        })

        // Click button 'Berikutnya'
        cy.get('.wss-services > .accordian-step-button').click({force:true})

        /*************************************
         *  Informasi Data Diri Pelanggan
         ************************************/
        // Click button 'Berikutnya'
        cy.get('#ui-id-35 > .accordian-step-button').click({force:true})

        /*************************************
         *      Pilih Layanan Service
         ************************************/
        // Click Check Box 'Service Berkala'
        cy.get('#ui-id-36 > :nth-child(2) > :nth-child(1) > .custom-checkbox > .checkmark').click({force:true})

        // Choose Item from Dropdown 'Pilih jarak tempuh Anda?'
        cy.get('#selectedPeriodicService-button').click({force:true})
        cy.get('#selectedPeriodicService-menu').contains('Servis Berkala 1.000 KM').click({force:true})

        // Click button 'Berikutnya'
        cy.get('#ws-step23-button').click({force:true})

        /*************************************
         *       Pilih Waktu/Cabang
         ************************************/
        // Click CheckBox Pilih Waktu/Cabang - Berdasarkan Cabang yang diinginkan 
        cy.get(':nth-child(2) > label').click({force:true})
        // Click Dropdown 'Province'
        cy.get('#provinceCode-button').click({force:true})
        cy.get('#provinceCode-menu').contains('DKI Jakarta').click({force:true})
        // Click Dropdown 'City'
        cy.get('#city-button').click({force:true})
        cy.get('#city-menu').contains('Jakarta Barat').click({force:true})
        // Click Dropdown 'Cabang'
        cy.get('#ui-id-1-button').click({force:true})
        cy.get('#ui-id-1-menu').contains('Auto2000 Kapuk').click({force:true})
        // Click Date From Calender
        cy.get(':nth-child(3) > :nth-child(4) > .ui-state-default').click()
        cy.wait(400)
        // Click & Choose Time 
        cy.get('#preferredTime-button').click({force:true})
        cy.wait(1000)
        cy.get('#preferredTime-menu').contains('10:00').click({force:true})
        
        if (cy.get('#branch-error').should('not.be.visible')) {
            cy.wait(4000)
            cy.get('.terms-container > .custom-checkbox > .checkmark').click({force:true})
            cy.get('.modal-content > .terms-box-container > .terms-action-container > #tcclose').click({force:true})
        }

        // Button Book Sekarang
        cy.get('#wsStep2').click({force:true})
        cy.wait(1000)

        // Situation for Pop Up (Belum Fiks)
        cy.get('.modal').then(($element) =>{
            if($element.length){
                cy.contains('NO').click({force:true})
            }else{
                cy.log('pop up tidak muncul')
            }
        })

        cy.wait(4000)
        
        // Jika Booking Berhasil
        cy.get('confirmation-number')
    })

})