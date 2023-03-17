/// <reference types="cypress" />

context('Booking Vehicle', () => {
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
    })

    it('Do To Page Profile & Edit Informasi Personal', () =>{ 
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('kamuakusalamsatuuncpad')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        if(cy.get('.modal-close') != null){
            // Click Button 'Close' to close windows alert
            cy.get('.modal-close').click()
            // To Section 'Profile Saya' at Profile Page
            cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        }

        // Click Edit Informasi Personal
        cy.get(':nth-child(6) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()

        // Edit Informasi Personal
        // Nama Panggilan
        cy.get('.active > .my-profile-block-inner > :nth-child(3) > .my-profile-value > .form-field-section > .form-field').type('Rangput')
        cy.wait(4000)
        // Jenis Kelamin
        // cy.get('#ui-id-3-button').click({force:true})
        // cy.get('#ui-id-3-menu').contains('Laki-laki').click({force:true})
        // cy.wait(4000)
        // Alamat Tempat Tinggal
        cy.get(':nth-child(6) > .my-profile-value > .form-field-section > .form-field').type('Komplek Nusa Hijau Blok Gv.28')

        // Click Button 'Simpan'
        cy.get('.submit-my-profile-form').click()

    })

    it('Do To Page Profile & Edit Detail Akun', ()=>{
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('kamuakusalamsatuuncpad')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        if(cy.get('.modal-close') != null){
            // Click Button 'Close' to close windows alert
            cy.get('.modal-close').click()
            // To Section 'Profile Saya' at Profile Page
            cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        }

        // Click Edit Informasi Personal
        cy.get(':nth-child(7) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()

        // Edit Detail Akun
        // Password
        cy.get('#cr-password').type('kamuakusalamsatuuncpad')
        cy.get('#cr-confirm-password').type('kamuakusalamsatuuncpad')
        cy.get('.phone-number').clear()
        cy.get('.phone-number').type('87720490877')

        // Click Button 'Simpan'
        cy.get('.submit-my-profile-form').click()
    })

    it('Do To Page Profile & Informasi Lainnya', ()=>{
        // Login
        cy.get('#login-email').type('rangga20004@mail.unpad.ac.id')
        cy.get('#login-password').type('kamuakusalamsatuuncpad')
        cy.get('#btn-login').click()
        cy.wait(4000)

        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        if(cy.get('.modal-close') != null){
            // Click Button 'Close' to close windows alert
            cy.get('.modal-close').click()
            // To Section 'Profile Saya' at Profile Page
            cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        }

        // Click Edit Informasi Lainnya
        cy.get(':nth-child(8) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()
        
        
        // Edit Informasi Lainnya
        // Pekerjaan
        cy.get('#ui-id-6-button').click({force:true})
        cy.get('#ui-id-6-menu').contains('Mahasiswa').click({force:true})
        // Hobi 1
        cy.get('#ui-id-7-button').click({force:true})
        cy.get('#ui-id-7-menu').contains('Olahraga').click({force:true})
        
        // Click Button 'Simpan'
        cy.get('.submit-my-profile-form').click()
    })
})