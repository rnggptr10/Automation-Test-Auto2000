const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'pgr48d',
  reporter : "cypress-mochawesome-reporter",
  reporterOptions:{
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    // urutan running file
    specPattern: [
      // login
      'cypress/e2e/1.authentication/login.cy.js',

      // profile
      'cypress/e2e/2.profile/profile-saya/profile_saya.cy.js',
      'cypress/e2e/2.profile/my-car/my_car.cy.js',
      // 'cypress/e2e/2.profile/beranda/beranda.cy.js',

      // Mobil Baru
      'cypress/e2e/3.mobil_baru/mobil_baru.cy.js',

      // Used Car
      'cypress/e2e/8.used_car/used_car.cy.js',

      // aksesoris (Terdapat Bug)
      'cypress/e2e/6.aksesoris/aksesoris.cy.js',

      // Trade In
      'cypress/e2e/12.trade_in/trade_in.cy.js',

      // Suku Cadang (Terdapat Bug)
      'cypress/e2e/9.order-suku-cadang/order_suku_cadang.cy.js',

      // kupon service (?)
      'cypress/e2e/5.kupon_service/kupon_service.cy.js',
      
      // Body Paint
      'cypress/e2e/15.body_paint/body_paint.cy.js',

      // Paket Service
      'cypress/e2e/7.paket_service/paket_service.cy.js',

      // Tracking Order
      'cypress/e2e/13.tracking_order/tracking_order.cy.js',


      // Bandingkan Mobil


      // Test Drive
      // 'cypress/e2e/11.test_drive/test_drive.cy.js',


      // Home Service
      // 'cypress/e2e/10.home_service/home_service.cy.js',

      // Workshop Service 
      // 'cypress/e2e/4.workshop_service/workshop_service.cy.js',



      // Testing
      // 'cypress/e2e/Testing/test.cy.js',
    ]
  },
});
