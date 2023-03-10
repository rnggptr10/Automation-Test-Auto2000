const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gx8bw4',
  reporter : "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
