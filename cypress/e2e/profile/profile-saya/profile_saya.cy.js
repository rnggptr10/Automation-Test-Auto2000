/// <reference types="cypress" />

context('Booking Vehicle', () => {
    // data testing user
    const userData = {
        "email" : "ranggaputra103@gmail.com",
        "password" : "sayangkamu8"
    }
    const personalInformationData = {
        "name_case" : "Do Edit Personal Information",
        "nama_lengkap" : "Fasya Nurina",
        "nama_panggilan" : "Sya",
        "jenis_kelamin" : "Perempuan",
        "tanggal_lahir" : "10/03/2002",
        
        // Alamat Tempat Tinggal
        "provinsi" : "Jawa Barat",
        "kota" : "Bandung",
        "alamat_lengkap" : "Komplek Nusa Hijau Blok GV.28"            
    }
    
    // detailAccountData masih bisa dikerucutin lagi
    const detailAccountData = {
        "name_case" : "Do Edit Detail Account",
        "new_password" : "akukamu12345",
        "confirm_new_password" : "akukamu12345",
        "no_hp" : "81120490872",
    }
    

    const OtherInformationData = {
        "name_case" : "Do Edit other Information",
        "pekerjaan" : "Mahasiswa",
        "hobi_1" : "Komputer",
        "hobi_2" : "Elektronik",
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

    it(personalInformationData.name_case, () =>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // if(cy.get('.modal-close').should('exist') == true){
        //     // Click Button 'Close' to close windows alert
        //     cy.get('.modal-close').click()
        // }
        cy.wait(4000)
        
        // To Section 'Profile Saya' at Profile Page
        cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        cy.wait(4000)
        
        // Click Edit Informasi Personal
        cy.get(':nth-child(6) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()
        cy.wait(4000)

        // Edit Personal Information
        // Nama Lengkap
        cy.get('.active > .my-profile-block-inner > :nth-child(2) > .my-profile-value > .form-field-section > .form-field').clear()
        cy.get('.active > .my-profile-block-inner > :nth-child(2) > .my-profile-value > .form-field-section > .form-field').type(personalInformationData.nama_lengkap)
        cy.wait(4000)
        // Nama Panggilan
        cy.get('.active > .my-profile-block-inner > :nth-child(3) > .my-profile-value > .form-field-section > .form-field').clear()
        cy.get('.active > .my-profile-block-inner > :nth-child(3) > .my-profile-value > .form-field-section > .form-field').type(personalInformationData.nama_panggilan)
        cy.wait(4000)
        // Jenis Kelamin
        cy.get('#ui-id-3-button').click({force:true})
        cy.get('#ui-id-3-menu').contains(personalInformationData.jenis_kelamin).click({force:true})
        cy.wait(4000)
        // Tanggal Lahir
        // cy.get('#my-profile-dob').type(personalInformationData.tanggal_lahir)
        // Alamat Tempat Tinggal
        // Provinsi 
        cy.get('#ui-id-4-button').click()
        cy.get('#ui-id-4-menu').contains(personalInformationData.provinsi).click({force:true})
        // Kota
        cy.get('#ui-id-5-button').click()
        cy.get('#ui-id-5-menu').contains(personalInformationData.kota).click({force:true})
        // Alamat Lengkap
        cy.get(':nth-child(6) > .my-profile-value > .form-field-section > .form-field').clear()
        cy.get(':nth-child(6) > .my-profile-value > .form-field-section > .form-field').type(personalInformationData.alamat_lengkap)

        // Click Button 'Simpan'
        cy.get('.submit-my-profile-form').click()
    })

    // it(detailAccountData.name_case, ()=>{
        // // To Page Profile
        // cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // if(cy.get('.modal-close') != null){
        //     // Click Button 'Close' to close windows alert
        //     cy.get('.modal-close').click()
        //     // To Section 'Profile Saya' at Profile Page
        //     cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()
        // }

        // // Click Edit Informasi Personal
        // cy.get(':nth-child(7) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()

        // // Edit Detail Akun
        // // New Password
        // cy.get('#cr-password').type(detailAccountData.new_password)
        // // New Confirm Password 
        // cy.get('#cr-confirm-password').type(detailAccountData.confirm_new_password)
        // // No HP
        // cy.get('.phone-number').clear()
        // cy.get('.phone-number').type(detailAccountData.no_hp)

        // // Click Button 'Simpan'
        // cy.get('.submit-my-profile-form').click()
    // })

    it(OtherInformationData.name_case, ()=>{
        // To Page Profile
        cy.get('.header-nav-container > :nth-child(2) > :nth-child(2)').click()

        // if(cy.get('.modal-close') != null){
        //     // Click Button 'Close' to close windows alert
        //     cy.get('.modal-close').click()
        // }

        // To Section 'Profile Saya' at Profile Page
        cy.get(':nth-child(2) > div.my-account-menu-name > .my-account-menu-name').click()

        // Click Edit Informasi Lainnya
        cy.get(':nth-child(8) > .my-profile-block-inner > .my-profile-form-title > .my-profile-edit-link').click()
        
        
        // Edit Informasi Lainnya
        // Pekerjaan
        cy.get('#ui-id-6-button').click({force:true})
        cy.get('#ui-id-6-menu').contains(OtherInformationData.pekerjaan).click({force:true})
        // Hobi 1
        cy.get('#ui-id-7-button').click({force:true})
        cy.get('#ui-id-7-menu').contains(OtherInformationData.hobi_1).click({force:true})
        // Hobi 2
        cy.get('#ui-id-8-button').click({force:true})
        cy.get('#ui-id-8-menu').contains(OtherInformationData.hobi_2).click({force:true})
        
        // Click Button 'Simpan'
        cy.get('.submit-my-profile-form').click()
    })
})