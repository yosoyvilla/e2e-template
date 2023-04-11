const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: false,
  projectId: "2dyime",
  viewportWidth: 1366,
  viewportHeight: 768,
  numTestsKeptInMemory: 0,
  e2e: {
    setupNodeEvents(on: any, config: any) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    excludeSpecPattern: "*.js",
    specPattern: "cypress/e2e/**/*.{feature,features}",
    experimentalSessionAndOrigin: true,
  },
  retries: {
    runMode: 2,
    openMode: 2,
  },
});
