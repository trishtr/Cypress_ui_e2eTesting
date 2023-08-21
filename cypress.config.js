const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/e2e/**/*.js",
    chromeWebSecurity: false,
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 40000,
    screenshotOnRunFailure: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      ecommerce: "https://demowebshop.tricentis.com/",
      healthcare: "https://katalon-demo-cura.herokuapp.com/",
    },
  },
});
